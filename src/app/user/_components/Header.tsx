"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useMemo, useState } from "react";

type IconProps = {
  className?: string;
};

function MenuIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function SearchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function Header({
  onOpenSidebar,
}: {
  onOpenSidebar?: () => void;
}) {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [displayName, setDisplayName] = useState("Guest");
  const [displayRole, setDisplayRole] = useState("Guest mode");

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/user/search?q=${encodeURIComponent(q)}`);
  };

  useEffect(() => {
    let cancelled = false;

    const loadUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (cancelled) return;

      if (error || !data.user) {
        setDisplayName("Guest");
        setDisplayRole("Guest mode");
        return;
      }

      const first = (data.user.user_metadata?.first_name as string | undefined) ?? "";
      const last = (data.user.user_metadata?.last_name as string | undefined) ?? "";
      const full = `${first} ${last}`.trim();
      const byMeta = (data.user.user_metadata?.full_name as string | undefined) ?? "";
      const byEmail = data.user.email?.split("@")[0] ?? "";

      setDisplayName(full || byMeta || byEmail || "User");
      setDisplayRole("Student");
    };

    loadUser();

    return () => {
      cancelled = true;
    };
  }, [supabase]);

  const initial = displayName.trim().charAt(0).toUpperCase() || "U";

  return (
    <header className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm sm:px-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex min-w-0 items-start gap-3">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 lg:hidden"
            aria-label="Open sidebar"
          >
            <MenuIcon className="h-4 w-4" />
          </button>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
              Dashboard
            </p>
            <h1 className="text-xl font-semibold text-slate-900">Welcome back</h1>
            <p className="text-xs text-slate-500">{today}</p>
          </div>
        </div>

        <form className="w-full lg:flex-1" onSubmit={onSubmit}>
          <label className="relative block">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
              <SearchIcon className="h-4 w-4" />
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search words, links, grammar..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white"
            />
          </label>
        </form>

        <div className="flex w-full items-center lg:ml-auto lg:w-auto">
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1.5 transition hover:bg-slate-50 sm:w-auto"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-sm font-semibold text-white">
              {initial}
            </span>
            <span className="min-w-0 pr-1 text-left">
              <span className="block truncate text-xs font-medium text-slate-900">
                {displayName}
              </span>
              <span className="block truncate text-[11px] text-slate-500">
                {displayRole}
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
