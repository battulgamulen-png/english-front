type SearchItem = {
  title: string;
  section: "Grammar" | "Vocabulary" | "Tests" | "Links" | "Settings";
  description: string;
  href: string;
};

const SEARCH_INDEX: SearchItem[] = [
  {
    title: "Present Simple",
    section: "Grammar",
    description: "Habits, routines, and general truths.",
    href: "/user/grammar",
  },
  {
    title: "Passive Voice",
    section: "Grammar",
    description: "Be + V3 хэлбэрийн өгүүлбэрүүд.",
    href: "/user/grammar",
  },
  {
    title: "Vocabulary Builder",
    section: "Vocabulary",
    description: "Daily words and phrases.",
    href: "/user/vocabulary",
  },
  {
    title: "YouTube Lessons",
    section: "Links",
    description: "Гаднын англи хэлний бичлэгийн линкүүд.",
    href: "/user/links",
  },
  {
    title: "Practice Tests",
    section: "Tests",
    description: "Шалгалтын дасгал, сорил.",
    href: "/user/tests",
  },
  {
    title: "Account Settings",
    section: "Settings",
    description: "Profile, preferences, logout.",
    href: "/user/settings",
  },
];

export default function Search({ query }: { query: string }) {
  const q = query.trim().toLowerCase();

  const results = !q
    ? []
    : SEARCH_INDEX.filter((item) => {
        const haystack =
          `${item.title} ${item.section} ${item.description}`.toLowerCase();
        return haystack.includes(q);
      });

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Search Results</h2>
      <p className="mt-1 text-sm text-slate-600">
        Query: <span className="font-medium text-slate-900">{query || "-"}</span>
      </p>

      {!q ? (
        <p className="mt-4 text-sm text-slate-500">
          Header дээрээс үг оруулаад хайлт хийнэ үү.
        </p>
      ) : null}

      {q && results.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">Илэрц олдсонгүй.</p>
      ) : null}

      <div className="mt-4 space-y-3">
        {results.map((item) => (
          <a
            key={`${item.href}-${item.title}`}
            href={item.href}
            className="block rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:bg-slate-100"
          >
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            <p className="text-xs text-slate-500">{item.section}</p>
            <p className="mt-1 text-sm text-slate-600">{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
