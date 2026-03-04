"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Login() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (signInError) {
      setError(signInError.message);
      return;
    }

    router.push("/user");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[url('/english.PNG')] bg-cover bg-center bg-no-repeat px-4">
      <div className="w-full max-w-[400px] rounded-3xl border border-white/30 bg-white/20 p-8 shadow-2xl backdrop-blur-md">
        <h1 className="mb-6 text-3xl font-semibold text-white">Login</h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-white">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
              className="w-full rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white"
            />
          </div>

          {error ? <p className="text-sm text-red-200">{error}</p> : null}

          <p className="text-center text-sm text-white">
            <a href="/login/forgetpassword" className="font-semibold underline">
              Forgot password?
            </a>
          </p>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-white py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Signing in..." : "Welcome"}
          </button>
          <p className="text-center text-sm text-white">
            Create a new user?{" "}
            <a href="/signup" className="font-semibold underline">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
