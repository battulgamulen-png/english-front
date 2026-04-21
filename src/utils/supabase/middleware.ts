import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;
const AUTH_TIMEOUT_MS = 2_000;

const getLoginRedirect = (request: NextRequest) => {
  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/login";
  loginUrl.search = "";
  return NextResponse.redirect(loginUrl);
};

const hasSupabaseAuthCookie = (request: NextRequest) =>
  request.cookies
    .getAll()
    .some(
      ({ name }) => name.startsWith("sb-") && name.includes("-auth-token"),
    );

export const updateSession = async (request: NextRequest) => {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  if (!supabaseUrl || !supabaseKey) {
    return response;
  }

  if (!hasSupabaseAuthCookie(request)) {
    return getLoginRedirect(request);
  }

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));

        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) =>
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  try {
    const authResult = await Promise.race([
      supabase.auth.getUser(),
      new Promise<null>((resolve) =>
        setTimeout(() => resolve(null), AUTH_TIMEOUT_MS),
      ),
    ]);

    if (authResult === null) {
      return response;
    }

    if (authResult.error || !authResult.data.user) {
      return getLoginRedirect(request);
    }
  } catch {
    return response;
  }

  return response;
};
