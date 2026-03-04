import type { ReactNode } from "react";
import Header from "./_components/Header";
import Siderbar from "./_components/Sidebar";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-100">
      <div className="shrink-0">
        <Siderbar />
      </div>

      <main className="min-w-0 flex-1 overflow-y-auto">
        <div className="sticky top-0 z-20 border-b border-slate-200 bg-slate-100/95 px-6 py-4 backdrop-blur">
          <Header />
        </div>

        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
