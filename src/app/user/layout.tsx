"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import Header from "./_components/Header";
import Siderbar from "./_components/Sidebar";

export default function UserLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = mobileOpen ? "hidden" : previousOverflow;

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-slate-100 lg:flex">
      <div
        className={`fixed inset-0 z-40 bg-slate-950/40 transition duration-300 lg:hidden ${
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      <div className="hidden shrink-0 lg:block">
        <Siderbar
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed((prev) => !prev)}
        />
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-50 transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Siderbar mobile onCloseMobile={() => setMobileOpen(false)} />
      </div>

      <main className="min-h-screen min-w-0 flex-1 overflow-y-auto">
        <div className="sticky top-0 z-30 border-b border-slate-200 bg-slate-100/95 px-4 py-3 backdrop-blur sm:px-6 sm:py-4">
          <Header onOpenSidebar={() => setMobileOpen(true)} />
        </div>

        <div className="p-4 sm:p-6">{children}</div>
      </main>
    </div>
  );
}
