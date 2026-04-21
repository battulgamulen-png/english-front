"use client";

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Section =
  | "Grammar"
  | "Vocabulary"
  | "Tests"
  | "Links"
  | "Settings"
  | "Home";

type SearchItem = {
  id: string;
  title: string;
  section: Section;
  description: string;
  href: string;
};

type GrammarRow = {
  id: string;
  title_en: string;
  title_mn: string;
  rule_en: string;
};

type VocabRow = {
  id: string;
  en: string;
  mn: string;
  category: string;
};

type TestRow = {
  id: string;
  prompt: string;
};

const STATIC_ITEMS: SearchItem[] = [
  {
    id: "home",
    title: "User Home",
    section: "Home",
    description: "Main dashboard and quick links.",
    href: "/user",
  },
  {
    id: "links",
    title: "YouTube Lessons",
    section: "Links",
    description: "External English lesson links.",
    href: "/user/links",
  },
  {
    id: "settings",
    title: "Account Settings",
    section: "Settings",
    description: "Profile and learning preferences.",
    href: "/user/settings",
  },
];

function includesText(text: string, q: string) {
  return text.toLowerCase().includes(q.toLowerCase());
}

export default function Search({ query }: { query: string }) {
  const supabase = useMemo(() => createClient(), []);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<SearchItem[]>(STATIC_ITEMS);
  const [sourceStatus, setSourceStatus] = useState<string | null>(null);

  const q = query.trim();

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      if (!q) {
        setItems(STATIC_ITEMS);
        setSourceStatus(null);
        return;
      }

      setLoading(true);
      setSourceStatus(null);

      const [grammarRes, vocabRes, testsRes] = await Promise.all([
        supabase
          .from("grammar_lessons")
          .select("id,title_en,title_mn,rule_en")
          .limit(200),
        supabase.from("vocabulary_words").select("id,en,mn,category").limit(500),
        supabase.from("test_questions").select("id,prompt").limit(200),
      ]);

      if (cancelled) return;

      const gathered: SearchItem[] = [...STATIC_ITEMS];
      const errors: string[] = [];

      if (grammarRes.error) {
        errors.push("grammar");
      } else {
        const rows = (grammarRes.data as GrammarRow[]) ?? [];
        rows.forEach((row) => {
          gathered.push({
            id: `g-${row.id}`,
            title: row.title_en,
            section: "Grammar",
            description: `${row.title_mn} • ${row.rule_en}`,
            href: "/user/grammar",
          });
        });
      }

      if (vocabRes.error) {
        errors.push("vocabulary");
      } else {
        const rows = (vocabRes.data as VocabRow[]) ?? [];
        rows.forEach((row) => {
          gathered.push({
            id: `v-${row.id}`,
            title: row.en,
            section: "Vocabulary",
            description: `${row.mn} • ${row.category}`,
            href: "/user/vocabulary",
          });
        });
      }

      if (testsRes.error) {
        errors.push("tests");
      } else {
        const rows = (testsRes.data as TestRow[]) ?? [];
        rows.forEach((row, index) => {
          gathered.push({
            id: `t-${row.id}`,
            title: `Question ${index + 1}`,
            section: "Tests",
            description: row.prompt,
            href: "/user/tests",
          });
        });
      }

      setItems(gathered);
      setLoading(false);

      if (errors.length > 0) {
        setSourceStatus(`Some sources unavailable: ${errors.join(", ")}`);
      }
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [q, supabase]);

  const results = useMemo(() => {
    if (!q) return [] as SearchItem[];
    return items
      .filter((item) => includesText(`${item.title} ${item.description} ${item.section}`, q))
      .slice(0, 120);
  }, [items, q]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-900">Search Results</h2>
      <p className="mt-1 text-sm text-slate-600">
        Query: <span className="font-medium text-slate-900">{query || "-"}</span>
      </p>

      {sourceStatus ? (
        <p className="mt-2 text-xs text-amber-700">{sourceStatus}</p>
      ) : null}

      {loading ? <p className="mt-4 text-sm text-slate-500">Searching...</p> : null}

      {!q ? (
        <p className="mt-4 text-sm text-slate-500">
          Header дээрээс үг оруулаад бүх мэдээллээс хайна.
        </p>
      ) : null}

      {q && !loading && results.length === 0 ? (
        <p className="mt-4 text-sm text-slate-500">Илэрц олдсонгүй.</p>
      ) : null}

      <div className="mt-4 space-y-3">
        {results.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="block rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:bg-slate-100"
          >
            <p className="text-sm font-semibold text-slate-900">{item.title}</p>
            <p className="text-xs text-slate-500">{item.section}</p>
            <p className="mt-1 text-sm text-slate-600">{item.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
