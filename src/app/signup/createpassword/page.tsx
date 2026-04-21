"use client";

import { getReadableAuthErrorMessage } from "@/utils/supabase/auth";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CreatePassword() {
  const supabase = createClient();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    const { error: updateError } = await supabase.auth.updateUser({
      password,
    });

    setLoading(false);

    if (updateError) {
      setError(getReadableAuthErrorMessage(updateError));
      return;
    }

    setMessage("Password updated successfully. Redirecting to login...");
    setTimeout(() => router.push("/login?message=password-updated"), 1000);
  };

  return (
    <div className="flex min-h-screen text-black  items-center justify-center bg-[url('/english.PNG')] bg-cover bg-center bg-no-repeat px-4">
      <div className="w-full max-w-[420px] rounded-3xl border border-white/30 bg-white/20 p-8 shadow-2xl backdrop-blur-md">
        <h1 className="mb-2 text-3xl font-semibold text-white">
          Create Password
        </h1>
        <p className="mb-6 text-sm text-white/90">
          Open this page from the reset link email, then set your new password.
        </p>

        <form className="space-y-4" onSubmit={onSubmit}>
          <div>
            <label htmlFor="password" className="mb-2 block text-sm text-white">
              New Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              required
              minLength={8}
              className="w-full rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-sm outline-none placeholder:text-zinc-500 focus:border-white"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm text-white"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              required
              minLength={8}
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
            {loading ? "Saving..." : "Save Password"}
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
