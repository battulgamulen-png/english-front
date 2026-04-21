"use client";

import {
  getReadableAuthErrorMessage,
  normalizeEmail,
} from "@/utils/supabase/auth";
import { createClient } from "@/utils/supabase/client";
import { FormEvent, useState } from "react";

const EMAIL_RATE_LIMIT_WINDOW_MS = 60_000;
const ENFORCE_EMAIL_COOLDOWN = process.env.NODE_ENV === "production";

const isRateLimitError = (message: string) => {
  const normalized = message.toLowerCase();
  return normalized.includes("rate limit") || normalized.includes("too many");
};

const getCooldownKey = (email: string) =>
  `forgot-password-cooldown:${email.toLowerCase().trim()}`;

export default function ForgetPassword() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
    const normalizedEmail = normalizeEmail(email);
    const cooldownKey = getCooldownKey(normalizedEmail);
    const lastAttempt = ENFORCE_EMAIL_COOLDOWN
      ? Number(localStorage.getItem(cooldownKey) ?? 0)
      : 0;
    const elapsed = Date.now() - lastAttempt;

    if (ENFORCE_EMAIL_COOLDOWN && lastAttempt && elapsed < EMAIL_RATE_LIMIT_WINDOW_MS) {
      const waitSeconds = Math.ceil(
        (EMAIL_RATE_LIMIT_WINDOW_MS - elapsed) / 1000,
      );
      setLoading(false);
      setError(
        `Please wait ${waitSeconds}s before requesting another reset email.`,
      );
      return;
    }

    const redirectTo = `${window.location.origin}/auth/callback?next=/signup/createpassword`;
    const { error: resetError } = await supabase.auth.resetPasswordForEmail(
      normalizedEmail,
      { redirectTo },
    );

    setLoading(false);

    if (resetError) {
      if (isRateLimitError(resetError.message)) {
        if (ENFORCE_EMAIL_COOLDOWN) {
          localStorage.setItem(cooldownKey, String(Date.now()));
        }
        setError(
          "Email rate limit exceeded. Please wait about 1 minute, then try again.",
        );
        return;
      }

      setError(getReadableAuthErrorMessage(resetError));
      return;
    }

    if (ENFORCE_EMAIL_COOLDOWN) {
      localStorage.setItem(cooldownKey, String(Date.now()));
    }
    setMessage("Reset link sent. Please check your inbox.");
  };

  return (
    <div className="flex min-h-screen text-black items-center justify-center bg-[url('/english.PNG')] bg-cover bg-center bg-no-repeat px-4">
      <div className="w-full max-w-[420px] rounded-3xl border border-white/30 bg-white/20 p-8 shadow-2xl backdrop-blur-md">
        <h1 className="mb-2 text-3xl font-semibold text-white">
          Forgot Password
        </h1>
        <p className="mb-6 text-sm text-white/90">
          Enter your email and we will send you a password reset link.
        </p>

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
              className="w-full rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-sm outline-none placeholder:text-zinc-500 focus:border-white"
            />
          </div>

          {error ? <p className="text-sm text-red-200">{error}</p> : null}
          {message ? (
            <p className="text-sm text-emerald-200">{message}</p>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-white py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </button>

          <p className="text-center text-sm text-white">
            Back to{" "}
            <a href="/login" className="font-semibold underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
