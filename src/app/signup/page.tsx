"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const EMAIL_RATE_LIMIT_WINDOW_MS = 60_000;
const ENFORCE_EMAIL_COOLDOWN = process.env.NODE_ENV === "production";

const isRateLimitError = (message: string) => {
  const normalized = message.toLowerCase();
  return normalized.includes("rate limit") || normalized.includes("too many");
};

const getCooldownKey = (email: string) =>
  `signup-email-cooldown:${email.toLowerCase().trim()}`;

export default function Signup() {
  const supabase = createClient();
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bornYear, setBornYear] = useState("");
  const [bornMonth, setBornMonth] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);
    const normalizedEmail = email.toLowerCase().trim();
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
        `Please wait ${waitSeconds}s before requesting another verification email.`,
      );
      return;
    }

    const emailRedirectTo = `${window.location.origin}/user`;

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: normalizedEmail,
      password,
      options: {
        emailRedirectTo,
        data: {
          first_name: firstName,
          last_name: lastName,
          born_year: bornYear,
          born_month: bornMonth,
          phone,
        },
      },
    });

    if (signUpError) {
      setLoading(false);
      if (isRateLimitError(signUpError.message)) {
        if (ENFORCE_EMAIL_COOLDOWN) {
          localStorage.setItem(cooldownKey, String(Date.now()));
        }
        setError(
          "Email rate limit exceeded. Please wait about 1 minute, then try again.",
        );
        return;
      }
      setError(signUpError.message);
      return;
    }

    if (ENFORCE_EMAIL_COOLDOWN) {
      localStorage.setItem(cooldownKey, String(Date.now()));
    }
    if (data.session) {
      setLoading(false);
      router.push("/user");
      return;
    }

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: normalizedEmail,
      password,
    });

    setLoading(false);

    if (!signInError) {
      router.push("/user");
      return;
    }

    setMessage("Account created. Please verify your email, then log in.");
    router.push("/login");
  };

  return (
    <div className="flex text-black min-h-screen items-center justify-center bg-[url('/english.PNG')] bg-cover bg-center bg-no-repeat px-4">
      <div className="w-full max-w-[400px] rounded-3xl border border-white/30 bg-white/20 p-8 shadow-2xl backdrop-blur-md">
        <h1 className="mb-6 text-3xl font-semibold text-white">Sign up</h1>
        <form className="space-y-4" onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm text-white"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                className="w-full rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm text-white"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                className="w-full rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white"
              />
            </div>
          </div>

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
              placeholder="At least 8 characters"
              minLength={8}
              required
              className="w-full rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                htmlFor="bornYear"
                className="mb-2 block text-sm text-white"
              >
                Born Year
              </label>
              <input
                id="bornYear"
                type="number"
                value={bornYear}
                onChange={(e) => setBornYear(e.target.value)}
                placeholder="2000"
                className="w-full rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white"
              />
            </div>
            <div>
              <label
                htmlFor="bornMonth"
                className="mb-2 block text-sm text-white"
              >
                Born Month
              </label>
              <input
                id="bornMonth"
                type="number"
                value={bornMonth}
                onChange={(e) => setBornMonth(e.target.value)}
                placeholder="12"
                className="w-full rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm text-white">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+976 99112233"
              className="w-full rounded-xl border border-white/40 bg-white/70 px-4 py-3 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-white"
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
            {loading ? "Creating..." : "Create Account"}
          </button>
          <p className="text-center text-sm text-white">
            Already account?{" "}
            <a href="/login" className="font-semibold underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
