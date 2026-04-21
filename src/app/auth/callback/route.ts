import { createClient } from "@/utils/supabase/server";
import { type EmailOtpType } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const DEFAULT_NEXT_PATH = "/user";

const getSafeNextPath = (next: string | null) => {
  if (!next || !next.startsWith("/") || next.startsWith("//")) {
    return DEFAULT_NEXT_PATH;
  }

  return next;
};

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const tokenHash = requestUrl.searchParams.get("token_hash");
  const type = requestUrl.searchParams.get("type");
  const nextPath = getSafeNextPath(requestUrl.searchParams.get("next"));
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(new URL(nextPath, request.url));
    }
  }

  if (tokenHash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: type as EmailOtpType,
    });

    if (!error) {
      return NextResponse.redirect(new URL(nextPath, request.url));
    }
  }

  const loginUrl = new URL("/login", request.url);
  loginUrl.searchParams.set("error", "auth-callback");
  return NextResponse.redirect(loginUrl);
}
