"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type IconProps = {
  className?: string;
};

function SearchIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");

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

  return (
    <header className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <div className="flex flex-wrap items-center gap-4">
        <div className="min-w-[180px]">
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Dashboard
          </p>
          <h1 className="text-xl font-semibold text-slate-900">Welcome back</h1>
          <p className="text-xs text-slate-500">{today}</p>
        </div>

        <form className="min-w-[240px] flex-1" onSubmit={onSubmit}>
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

        <div className="ml-auto flex items-center gap-2">
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-2 py-1.5 transition hover:bg-slate-50"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500 text-sm font-semibold text-white">
              M
            </span>
            <span className="pr-1 text-left">
              <span className="block text-xs font-medium text-slate-900">
                Mulen
              </span>
              <span className="block text-[11px] text-slate-500">Student</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
