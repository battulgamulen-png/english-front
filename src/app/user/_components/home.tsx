import Link from "next/link";

type Card = {
  title: string;
  desc: string;
  href: string;
  badge: string;
};

const CARDS: Card[] = [
  {
    title: "Vocabulary",
    desc: "Category тус бүр дээр үг сурч, хайж, copy хийгээрэй.",
    href: "/user/vocabulary",
    badge: "100/category",
  },
  {
    title: "Grammar",
    desc: "Дүрмүүдээ EN + MN тайлбартайгаар давтаж сур.",
    href: "/user/grammar",
    badge: "Rules",
  },
  {
    title: "Tests",
    desc: "Түвшнээ шалгах сорил өгөөд үр дүнгээ хар.",
    href: "/user/tests",
    badge: "28 Q",
  },
  {
    title: "Links",
    desc: "YouTube хичээлийн линкүүдээр үзэж суралц.",
    href: "/user/links",
    badge: "Videos",
  },
  {
    title: "Search",
    desc: "Header дээрээс хайгаад шууд хэрэгтэй хэсэг рүү ор.",
    href: "/user/search",
    badge: "Smart",
  },
  {
    title: "Settings",
    desc: "Профайл, хэл, зорилго болон local тохиргоо.",
    href: "/user/settings",
    badge: "Profile",
  },
];

export default function Home() {
  return (
    <section className="space-y-5">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          User Home
        </p>
        <h2 className="mt-1 text-2xl font-semibold text-slate-900">
          Welcome to your learning dashboard
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Sidebar ашиглаад section бүр рүү орно уу. Доорх shortcut card-уудаас ч
          шууд нэвтэрч болно.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:bg-slate-50"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600">
                {card.badge}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{card.desc}</p>
            <p className="mt-4 text-sm font-medium text-sky-700 group-hover:text-sky-800">
              Open {card.title} →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
