"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

type IconProps = {
  className?: string;
};

function HomeIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 10.5 12 3l9 7.5V21h-6v-6H9v6H3v-10.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function BookIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M6 4h9a3 3 0 0 1 3 3v13H9a3 3 0 0 0-3 3V4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M6 20h12" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function TestIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 4h10l1 4H6l1-4Z" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M9.5 12h5M9.5 15h5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function LinkIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M10 14 8 16a3 3 0 0 1-4-4l2-2a3 3 0 0 1 4 0"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m14 10 2-2a3 3 0 1 1 4 4l-2 2a3 3 0 0 1-4 0"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="m9 15 6-6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function GrammarIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function DashboardIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ChevronIcon({ collapsed }: { collapsed: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 transition-transform ${collapsed ? "rotate-180" : ""}`}
    >
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function CloseIcon({ className = "h-5 w-5" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

type SidebarProps = {
  collapsed?: boolean;
  mobile?: boolean;
  onCloseMobile?: () => void;
  onToggleCollapse?: () => void;
};

export default function Siderbar({
  collapsed = false,
  mobile = false,
  onCloseMobile,
  onToggleCollapse,
}: SidebarProps) {
  const pathname = usePathname();

  const items = useMemo(
    () => [
      { label: "Home", href: "/user", icon: HomeIcon },
      { label: "Vocabulary", href: "/user/vocabulary", icon: BookIcon },
      { label: "Tests", href: "/user/tests", icon: TestIcon },
      { label: "Links", href: "/user/links", icon: LinkIcon },
      { label: "Grammar", href: "/user/grammar", icon: GrammarIcon },
      { label: "Settings", href: "/user/settings", icon: DashboardIcon },
    ],
    [],
  );

  return (
    <aside
      className={`flex h-full flex-col border-r border-slate-200 bg-white text-black ${
        mobile
          ? "w-[280px] max-w-[85vw] shadow-2xl"
          : `sticky top-0 h-screen transition-all duration-300 ${collapsed ? "w-[88px]" : "w-[260px]"}`
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b border-slate-200 px-4">
        <span
          className={`text-sm font-semibold tracking-wide ${
            collapsed && !mobile ? "hidden" : "block"
          }`}
        >
          ENGLISH
        </span>

        {mobile ? (
          <button
            type="button"
            onClick={onCloseMobile}
            className="rounded-lg border border-slate-300 p-2 text-black transition hover:bg-slate-100"
            aria-label="Close sidebar"
          >
            <CloseIcon />
          </button>
        ) : (
          <button
            type="button"
            onClick={onToggleCollapse}
            className="rounded-lg border border-slate-300 p-2 text-black transition hover:bg-slate-100"
            aria-label="Toggle sidebar"
          >
            <ChevronIcon collapsed={collapsed} />
          </button>
        )}
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => {
                if (mobile) onCloseMobile?.();
              }}
              className={`group flex items-center gap-3 rounded-xl py-2.5 text-sm transition ${
                collapsed && !mobile ? "justify-center px-2.5" : "px-3"
              } ${
                isActive
                  ? "bg-cyan-100 text-black"
                  : "text-black hover:bg-slate-100 hover:text-black"
              }`}
              aria-label={item.label}
              title={item.label}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className={`${collapsed && !mobile ? "hidden" : "inline"}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
