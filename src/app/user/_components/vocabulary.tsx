"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useMemo, useState } from "react";

type Category =
  | "Daily"
  | "Food"
  | "Travel"
  | "School"
  | "Work"
  | "Health"
  | "Technology"
  | "Culture"
  | "Nature"
  | "Finance";

type VocabItem = {
  id: string;
  en: string;
  mn: string;
  category: Category;
  exampleEn?: string;
  exampleMn?: string;
};

type VocabRow = {
  id: string;
  en: string;
  mn: string;
  category: Category;
  example_en: string | null;
  example_mn: string | null;
};

const CATEGORIES: Category[] = [
  "Daily",
  "Food",
  "Travel",
  "School",
  "Work",
  "Health",
  "Technology",
  "Culture",
  "Nature",
  "Finance",
];

const MODIFIERS = [
  { en: "basic", mn: "суурь" },
  { en: "common", mn: "түгээмэл" },
  { en: "useful", mn: "хэрэгцээтэй" },
  { en: "everyday", mn: "өдөр тутмын" },
  { en: "advanced", mn: "ахисан" },
];

const SEED_BASE: Record<Category, { en: string; mn: string }[]> = {
  Daily: [
    { en: "greeting", mn: "мэндчилгээ" },
    { en: "habit", mn: "дадал" },
    { en: "routine", mn: "хэвшил" },
    { en: "conversation", mn: "яриа" },
    { en: "question", mn: "асуулт" },
    { en: "answer", mn: "хариулт" },
    { en: "weekend", mn: "амралтын өдөр" },
    { en: "morning", mn: "өглөө" },
    { en: "evening", mn: "орой" },
    { en: "schedule", mn: "хуваарь" },
    { en: "message", mn: "мессеж" },
    { en: "neighbor", mn: "хөрш" },
    { en: "family", mn: "гэр бүл" },
    { en: "friendship", mn: "нөхөрлөл" },
    { en: "weather", mn: "цаг агаар" },
    { en: "direction", mn: "чиглэл" },
    { en: "shopping", mn: "худалдан авалт" },
    { en: "appointment", mn: "цаг товлолт" },
    { en: "activity", mn: "үйл ажиллагаа" },
    { en: "preference", mn: "сонголт" },
  ],
  Food: [
    { en: "breakfast", mn: "өглөөний цай" },
    { en: "lunch", mn: "өдрийн хоол" },
    { en: "dinner", mn: "оройн хоол" },
    { en: "ingredient", mn: "орц" },
    { en: "recipe", mn: "жор" },
    { en: "flavor", mn: "амт" },
    { en: "nutrition", mn: "шим тэжээл" },
    { en: "snack", mn: "хөнгөн зууш" },
    { en: "beverage", mn: "ундаа" },
    { en: "dessert", mn: "амттан" },
    { en: "kitchen", mn: "гал тогоо" },
    { en: "restaurant", mn: "ресторан" },
    { en: "menu", mn: "цэс" },
    { en: "portion", mn: "хэмжээ" },
    { en: "allergy", mn: "харшил" },
    { en: "spice", mn: "амтлагч" },
    { en: "protein", mn: "уураг" },
    { en: "vegetable", mn: "хүнсний ногоо" },
    { en: "fruit", mn: "жимс" },
    { en: "cooking", mn: "хоол хийх" },
  ],
  Travel: [
    { en: "airport", mn: "нисэх буудал" },
    { en: "ticket", mn: "тасалбар" },
    { en: "passport", mn: "паспорт" },
    { en: "luggage", mn: "ачаа" },
    { en: "journey", mn: "аялал" },
    { en: "destination", mn: "зорьсон газар" },
    { en: "itinerary", mn: "аяллын төлөвлөгөө" },
    { en: "reservation", mn: "захиалга" },
    { en: "hotel", mn: "зочид буудал" },
    { en: "transport", mn: "тээвэр" },
    { en: "platform", mn: "тавцан" },
    { en: "boarding", mn: "суулт" },
    { en: "sightseeing", mn: "үзвэр" },
    { en: "map", mn: "газрын зураг" },
    { en: "route", mn: "чиглэл" },
    { en: "guide", mn: "хөтөч" },
    { en: "customs", mn: "гааль" },
    { en: "visa", mn: "виз" },
    { en: "adventure", mn: "адал явдал" },
    { en: "backpack", mn: "үүргэвч" },
  ],
  School: [
    { en: "lesson", mn: "хичээл" },
    { en: "classroom", mn: "анги" },
    { en: "teacher", mn: "багш" },
    { en: "student", mn: "сурагч" },
    { en: "homework", mn: "гэрийн даалгавар" },
    { en: "assignment", mn: "даалгавар" },
    { en: "exam", mn: "шалгалт" },
    { en: "quiz", mn: "сорил" },
    { en: "grade", mn: "үнэлгээ" },
    { en: "subject", mn: "хичээл" },
    { en: "notebook", mn: "дэвтэр" },
    { en: "dictionary", mn: "толь бичиг" },
    { en: "grammar", mn: "дүрэм" },
    { en: "vocabulary", mn: "үгсийн сан" },
    { en: "research", mn: "судалгаа" },
    { en: "project", mn: "төсөл" },
    { en: "presentation", mn: "илтгэл" },
    { en: "library", mn: "номын сан" },
    { en: "semester", mn: "улирал" },
    { en: "scholarship", mn: "тэтгэлэг" },
  ],
  Work: [
    { en: "office", mn: "оффис" },
    { en: "meeting", mn: "хурал" },
    { en: "deadline", mn: "эцсийн хугацаа" },
    { en: "manager", mn: "менежер" },
    { en: "colleague", mn: "хамтрагч" },
    { en: "client", mn: "үйлчлүүлэгч" },
    { en: "contract", mn: "гэрээ" },
    { en: "salary", mn: "цалин" },
    { en: "promotion", mn: "тушаал дэвших" },
    { en: "interview", mn: "ярилцлага" },
    { en: "task", mn: "даалгавар" },
    { en: "report", mn: "тайлан" },
    { en: "strategy", mn: "стратеги" },
    { en: "productivity", mn: "бүтээмж" },
    { en: "leadership", mn: "манлайлал" },
    { en: "teamwork", mn: "багийн ажил" },
    { en: "negotiation", mn: "хэлэлцээр" },
    { en: "conference", mn: "чуулган" },
    { en: "feedback", mn: "санал" },
    { en: "training", mn: "сургалт" },
  ],
  Health: [
    { en: "doctor", mn: "эмч" },
    { en: "nurse", mn: "сувилагч" },
    { en: "medicine", mn: "эм" },
    { en: "treatment", mn: "эмчилгээ" },
    { en: "symptom", mn: "шинж тэмдэг" },
    { en: "diagnosis", mn: "онош" },
    { en: "exercise", mn: "дасгал" },
    { en: "diet", mn: "хоолны дэглэм" },
    { en: "vitamin", mn: "аминдэм" },
    { en: "recovery", mn: "сэргэлт" },
    { en: "clinic", mn: "эмнэлэг" },
    { en: "surgery", mn: "мэс засал" },
    { en: "injury", mn: "бэртэл" },
    { en: "pain", mn: "өвдөлт" },
    { en: "allergy", mn: "харшил" },
    { en: "stress", mn: "стресс" },
    { en: "sleep", mn: "нойр" },
    { en: "mental health", mn: "сэтгэцийн эрүүл мэнд" },
    { en: "checkup", mn: "үзлэг" },
    { en: "prevention", mn: "урьдчилан сэргийлэлт" },
  ],
  Technology: [
    { en: "computer", mn: "компьютер" },
    { en: "software", mn: "програм" },
    { en: "hardware", mn: "техник" },
    { en: "network", mn: "сүлжээ" },
    { en: "database", mn: "өгөгдлийн сан" },
    { en: "server", mn: "сервер" },
    { en: "application", mn: "аппликейшн" },
    { en: "security", mn: "аюулгүй байдал" },
    { en: "privacy", mn: "нууцлал" },
    { en: "algorithm", mn: "алгоритм" },
    { en: "automation", mn: "автоматжуулалт" },
    { en: "cloud", mn: "үүлэн систем" },
    { en: "update", mn: "шинэчлэлт" },
    { en: "backup", mn: "нөөцлөлт" },
    { en: "interface", mn: "интерфейс" },
    { en: "device", mn: "төхөөрөмж" },
    { en: "platform", mn: "платформ" },
    { en: "debug", mn: "алдаа засах" },
    { en: "code", mn: "код" },
    { en: "integration", mn: "интеграц" },
  ],
  Culture: [
    { en: "tradition", mn: "уламжлал" },
    { en: "festival", mn: "баяр" },
    { en: "heritage", mn: "өв" },
    { en: "art", mn: "урлаг" },
    { en: "music", mn: "хөгжим" },
    { en: "dance", mn: "бүжиг" },
    { en: "literature", mn: "уран зохиол" },
    { en: "language", mn: "хэл" },
    { en: "custom", mn: "заншил" },
    { en: "belief", mn: "итгэл үнэмшил" },
    { en: "value", mn: "үнэт зүйл" },
    { en: "identity", mn: "танихуй" },
    { en: "community", mn: "нийгэмлэг" },
    { en: "ceremony", mn: "ёслол" },
    { en: "performance", mn: "тоглолт" },
    { en: "museum", mn: "музей" },
    { en: "history", mn: "түүх" },
    { en: "dialogue", mn: "яриа хэлэлцээ" },
    { en: "diversity", mn: "олон янз байдал" },
    { en: "perspective", mn: "өнцөг" },
  ],
  Nature: [
    { en: "forest", mn: "ой" },
    { en: "river", mn: "гол" },
    { en: "mountain", mn: "уул" },
    { en: "desert", mn: "цөл" },
    { en: "ocean", mn: "далай" },
    { en: "climate", mn: "уур амьсгал" },
    { en: "weather", mn: "цаг агаар" },
    { en: "ecosystem", mn: "экосистем" },
    { en: "wildlife", mn: "зэрлэг амьтан" },
    { en: "habitat", mn: "амьдрах орчин" },
    { en: "pollution", mn: "бохирдол" },
    { en: "recycle", mn: "дахин боловсруулах" },
    { en: "energy", mn: "эрчим хүч" },
    { en: "conservation", mn: "хамгаалалт" },
    { en: "biodiversity", mn: "био олон янз байдал" },
    { en: "rainfall", mn: "хур тунадас" },
    { en: "temperature", mn: "температур" },
    { en: "season", mn: "улирал" },
    { en: "landscape", mn: "газарзүй" },
    { en: "sustainability", mn: "тогтвортой байдал" },
  ],
  Finance: [
    { en: "money", mn: "мөнгө" },
    { en: "budget", mn: "төсөв" },
    { en: "income", mn: "орлого" },
    { en: "expense", mn: "зарлага" },
    { en: "savings", mn: "хадгаламж" },
    { en: "investment", mn: "хөрөнгө оруулалт" },
    { en: "loan", mn: "зээл" },
    { en: "interest", mn: "хүү" },
    { en: "debt", mn: "өр" },
    { en: "profit", mn: "ашиг" },
    { en: "loss", mn: "алдагдал" },
    { en: "salary", mn: "цалин" },
    { en: "tax", mn: "татвар" },
    { en: "bank", mn: "банк" },
    { en: "currency", mn: "валют" },
    { en: "insurance", mn: "даатгал" },
    { en: "asset", mn: "хөрөнгө" },
    { en: "liability", mn: "өр төлбөр" },
    { en: "transaction", mn: "гүйлгээ" },
    { en: "statement", mn: "хуулга" },
  ],
};

export function buildSeedWords(): VocabItem[] {
  const result: VocabItem[] = [];

  CATEGORIES.forEach((category) => {
    const base = SEED_BASE[category]; // 20

    MODIFIERS.forEach((mod, modIndex) => {
      base.forEach((item, idx) => {
        const ordinal = modIndex * base.length + idx + 1;
        const padded = String(ordinal).padStart(3, "0");

        result.push({
          id: `${category.toLowerCase()}-${padded}`,
          en: `${mod.en} ${item.en}`,
          mn: `${mod.mn} ${item.mn}`,
          category,
          exampleEn: `This is a ${mod.en} ${item.en} word from ${category}.`,
          exampleMn: `Энэ бол ${category} ангиллын ${mod.mn} ${item.mn} үг.`,
        });
      });
    });
  });

  return result;
}

function rowToItem(row: VocabRow): VocabItem {
  return {
    id: row.id,
    en: row.en,
    mn: row.mn,
    category: row.category,
    exampleEn: row.example_en ?? undefined,
    exampleMn: row.example_mn ?? undefined,
  };
}

export default function Vocabulary() {
  const supabase = useMemo(() => createClient(), []);
  const seeded = useMemo(() => buildSeedWords(), []);

  const [words, setWords] = useState<VocabItem[]>(seeded);
  const [category, setCategory] = useState<Category | "All">("All");
  const [query, setQuery] = useState("");
  const [showExamples, setShowExamples] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("vocabulary_words")
        .select("id,en,mn,category,example_en,example_mn")
        .order("id", { ascending: true });

      if (cancelled) return;

      if (error) {
        setStatus("DB-с уншиж чадсангүй. Local seed харагдаж байна.");
        setLoading(false);
        return;
      }

      const rows = (data as VocabRow[]) ?? [];
      if (rows.length > 0) {
        setWords(rows.map(rowToItem));
        setStatus(`DB-ээс ${rows.length} үг уншлаа.`);
      } else {
        setStatus("DB хоосон байна. Seed товч дарж category бүрт 100 үг хадгална уу.");
      }

      setLoading(false);
    };

    load();

    return () => {
      cancelled = true;
    };
  }, [supabase]);

  const seedToDb = async () => {
    setLoading(true);
    setStatus(null);

    const payload = seeded.map((w) => ({
      id: w.id,
      en: w.en,
      mn: w.mn,
      category: w.category,
      example_en: w.exampleEn ?? null,
      example_mn: w.exampleMn ?? null,
    }));

    const { error } = await supabase
      .from("vocabulary_words")
      .upsert(payload, { onConflict: "id" });

    if (error) {
      setLoading(false);
      setStatus(`Seed алдаа: ${error.message}`);
      return;
    }

    setWords(seeded);
    setLoading(false);
    setStatus("Seed амжилттай. Category бүрт 100 үг DB-д хадгалагдлаа.");
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return words.filter((item) => {
      const byCategory = category === "All" ? true : item.category === category;
      const byQuery =
        !q ||
        item.en.toLowerCase().includes(q) ||
        item.mn.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);

      return byCategory && byQuery;
    });
  }, [words, category, query]);

  const categoryCount = useMemo(() => {
    const map = new Map<Category, number>();
    CATEGORIES.forEach((c) => map.set(c, 0));

    words.forEach((w) => {
      map.set(w.category, (map.get(w.category) ?? 0) + 1);
    });

    return map;
  }, [words]);

  const selectedCount =
    category === "All"
      ? words.length
      : (categoryCount.get(category as Category) ?? 0);

  return (
    <div className="min-h-screen bg-white">
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900">Vocabulary</h1>
              <p className="mt-1 text-sm text-slate-500">
                Category бүрт 100 үг (нийт 1000) — Supabase sync.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={seedToDb}
                disabled={loading}
                className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Working..." : "Seed 100/category to DB"}
              </button>
              <div className="self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700">
                {category === "All" ? `Total ${words.length}` : `${selectedCount}/100`}
              </div>
            </div>
          </div>

          {status ? <p className="mt-2 text-xs text-slate-500">{status}</p> : null}

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setCategory("All")}
              className={`rounded-full border px-3 py-1.5 text-sm transition ${
                category === "All"
                  ? "border-sky-200 bg-sky-50 text-sky-700"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              All
            </button>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  category === c
                    ? "border-sky-200 bg-sky-50 text-sky-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                {c} ({categoryCount.get(c) ?? 0})
              </button>
            ))}
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-10">
            <div className="md:col-span-8">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search: word / орчуулга / category"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-sky-300 focus:ring-2"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="button"
                onClick={() => setShowExamples((s) => !s)}
                className={`w-full rounded-2xl border px-4 py-3 text-sm transition ${
                  showExamples
                    ? "border-sky-200 bg-sky-50 text-sky-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                }`}
              >
                Examples: {showExamples ? "On" : "Off"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-4 text-sm text-slate-600">
          Showing <span className="font-semibold text-slate-900">{filtered.length}</span> items
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
            No results.
          </div>
        ) : (
          <div className="grid gap-3">
            {filtered.map((w) => (
              <div
                key={w.id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-lg font-semibold text-slate-900">{w.en}</span>
                      <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600">
                        {w.category}
                      </span>
                    </div>
                    <div className="mt-1 text-sm text-slate-700">{w.mn}</div>

                    {showExamples && (w.exampleEn || w.exampleMn) ? (
                      <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        {w.exampleEn ? (
                          <div className="text-sm text-slate-800">EN: {w.exampleEn}</div>
                        ) : null}
                        {w.exampleMn ? (
                          <div className="mt-1 text-sm text-slate-700">MN: {w.exampleMn}</div>
                        ) : null}
                      </div>
                    ) : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => navigator.clipboard?.writeText(`${w.en} — ${w.mn}`)}
                    className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Copy
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
