// app/(dashboard)/settings.tsx
// or src/pages/settings.tsx (project structure-ees chin hamaaraad path-oo taаруулаарай)

"use client";

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

type Level = "Beginner" | "Intermediate" | "Advanced";
type StudyMode =
  | "Grammar"
  | "Vocabulary"
  | "Speaking"
  | "Listening"
  | "Reading"
  | "Writing";
type UILang = "Монгол" | "English";

type SettingsState = {
  uiLang: UILang;
  level: Level;
  dailyGoalMin: number;
  studyModes: StudyMode[];
  showTranslations: boolean;
  autoPlayAudio: boolean;
  voiceSpeed: 0.75 | 1 | 1.25;
  remindEnabled: boolean;
  remindTime: string; // "HH:MM"
  streakFreeze: boolean;
  email: string;
};

const DEFAULT: SettingsState = {
  uiLang: "Монгол",
  level: "Beginner",
  dailyGoalMin: 15,
  studyModes: ["Grammar", "Vocabulary"],
  showTranslations: true,
  autoPlayAudio: true,
  voiceSpeed: 1,
  remindEnabled: false,
  remindTime: "20:00",
  streakFreeze: false,
  email: "",
};

const STORAGE_KEY = "english_site_settings_v1";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function toggleInArray<T>(arr: T[], item: T) {
  return arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item];
}

export default function SettingsPage() {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();
  const [state, setState] = useState<SettingsState>(() => {
    if (typeof window === "undefined") return DEFAULT;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return DEFAULT;
      const parsed = JSON.parse(raw) as Partial<SettingsState>;
      return { ...DEFAULT, ...parsed };
    } catch {
      return DEFAULT;
    }
  });
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // autosave (debounced-ish)
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        setSavedAt(Date.now());
      } catch {
        // ignore
      }
    }, 250);
    return () => clearTimeout(t);
  }, [state]);

  const dirtySummary = useMemo(() => {
    const minutes = state.dailyGoalMin;
    const modes = state.studyModes.join(", ");
    return `${state.level} • ${minutes} мин/өдөр • ${modes}`;
  }, [state.dailyGoalMin, state.level, state.studyModes]);

  const reset = () => {
    setState(DEFAULT);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
  };

  const handleLogout = async () => {
    setLoggingOut(true);
    setAuthError(null);

    const { error } = await supabase.auth.signOut();
    setLoggingOut(false);

    if (error) {
      setAuthError(error.message);
      return;
    }

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">Settings</h1>
            <p className="text-sm text-slate-500">{dirtySummary}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={reset}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              Reset
            </button>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        </div>
        {authError ? (
          <div className="mx-auto max-w-4xl px-4 pb-3 text-sm text-red-600">
            {authError}
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid gap-6">
          {/* Profile */}
          <Section
            title="Profile"
            desc="Тохиргоо хадгалах, сануулга авах имэйл."
          >
            <div className="grid gap-3 md:grid-cols-2">
              <Field label="Email">
                <input
                  value={state.email}
                  onChange={(e) =>
                    setState((s) => ({ ...s, email: e.target.value }))
                  }
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-300 focus:ring-2"
                />
              </Field>

              <Field label="UI Language">
                <Select
                  value={state.uiLang}
                  onChange={(v) =>
                    setState((s) => ({ ...s, uiLang: v as UILang }))
                  }
                  options={["Монгол", "English"]}
                />
              </Field>
            </div>
          </Section>

          {/* Learning */}
          <Section
            title="Learning"
            desc="Түвшин, өдөр тутмын зорилго, хичээлийн төрөл."
          >
            <div className="grid gap-5">
              <div className="grid gap-3 md:grid-cols-2">
                <Field label="Level">
                  <Select
                    value={state.level}
                    onChange={(v) =>
                      setState((s) => ({ ...s, level: v as Level }))
                    }
                    options={["Beginner", "Intermediate", "Advanced"]}
                  />
                </Field>

                <Field label="Daily goal (minutes)">
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={5}
                      max={120}
                      step={5}
                      value={state.dailyGoalMin}
                      onChange={(e) =>
                        setState((s) => ({
                          ...s,
                          dailyGoalMin: clamp(Number(e.target.value), 5, 120),
                        }))
                      }
                      className="w-full"
                    />
                    <div className="min-w-16 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center text-sm text-slate-800">
                      {state.dailyGoalMin}m
                    </div>
                  </div>
                  <p className="mt-1 text-xs text-slate-500">
                    5–120 минут (5 минутаар нэмэгдэнэ)
                  </p>
                </Field>
              </div>

              <Field label="Study modes">
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      "Grammar",
                      "Vocabulary",
                      "Speaking",
                      "Listening",
                      "Reading",
                      "Writing",
                    ] as StudyMode[]
                  ).map((m) => {
                    const active = state.studyModes.includes(m);
                    return (
                      <button
                        key={m}
                        onClick={() =>
                          setState((s) => ({
                            ...s,
                            studyModes: toggleInArray(s.studyModes, m),
                          }))
                        }
                        className={[
                          "rounded-full px-3 py-1.5 text-sm border transition",
                          active
                            ? "border-sky-200 bg-sky-50 text-sky-700"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                        ].join(" ")}
                        type="button"
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
                <p className="mt-1 text-xs text-slate-500">
                  Сонгосон төрлүүдээр чинь хичээл санал болгоно.
                </p>
              </Field>

              <div className="grid gap-3 md:grid-cols-2">
                <Toggle
                  title="Show Mongolian translation"
                  desc="Үг/өгүүлбэрийн орчуулга харуулах"
                  checked={state.showTranslations}
                  onChange={(v) =>
                    setState((s) => ({ ...s, showTranslations: v }))
                  }
                />
                <Toggle
                  title="Auto-play audio"
                  desc="Суралцах үед дуудлага автоматаар тоглуулах"
                  checked={state.autoPlayAudio}
                  onChange={(v) =>
                    setState((s) => ({ ...s, autoPlayAudio: v }))
                  }
                />
              </div>

              <Field label="Voice speed">
                <div className="flex gap-2">
                  {[0.75, 1, 1.25].map((v) => {
                    const active = state.voiceSpeed === v;
                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() =>
                          setState((s) => ({
                            ...s,
                            voiceSpeed: v as SettingsState["voiceSpeed"],
                          }))
                        }
                        className={[
                          "rounded-xl border px-3 py-2 text-sm transition",
                          active
                            ? "border-sky-200 bg-sky-50 text-sky-700"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                        ].join(" ")}
                      >
                        {v}x
                      </button>
                    );
                  })}
                </div>
              </Field>
            </div>
          </Section>

          {/* Reminders */}
          <Section
            title="Reminders"
            desc="Өдөр бүр сануулга авч, streak-ээ хадгал."
          >
            <div className="grid gap-3 md:grid-cols-2">
              <Toggle
                title="Daily reminder"
                desc="Өдөр бүр тодорхой цагт сануулга асаах"
                checked={state.remindEnabled}
                onChange={(v) => setState((s) => ({ ...s, remindEnabled: v }))}
              />
              <Field label="Reminder time">
                <input
                  type="time"
                  value={state.remindTime}
                  onChange={(e) =>
                    setState((s) => ({ ...s, remindTime: e.target.value }))
                  }
                  disabled={!state.remindEnabled}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-300 focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                />
                <p className="mt-1 text-xs text-slate-500">
                  *Энд зөвхөн UI тохиргоо. Push/Email reminder бол backend дээр
                  холбоно.
                </p>
              </Field>
            </div>

            <div className="mt-2">
              <Toggle
                title="Streak freeze"
                desc="Нэг өдөр алдах үед streak хамгаалах (сонголт)"
                checked={state.streakFreeze}
                onChange={(v) => setState((s) => ({ ...s, streakFreeze: v }))}
              />
            </div>
          </Section>

          {/* Footer */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-600">
                {savedAt ? (
                  <>
                    Last saved:{" "}
                    <span className="font-medium text-slate-800">
                      {new Date(savedAt).toLocaleString()}
                    </span>
                  </>
                ) : (
                  "Changes are saved automatically."
                )}
              </p>
              <div className="text-xs text-slate-500">
                Storage: <span className="font-mono">{STORAGE_KEY}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- UI bits ---------- */

function Section({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900">{title}</h2>
        {desc ? <p className="mt-1 text-sm text-slate-500">{desc}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-1 text-sm font-medium text-slate-700">{label}</div>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-300 focus:ring-2"
    >
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

function Toggle({
  title,
  desc,
  checked,
  onChange,
}: {
  title: string;
  desc?: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        {desc ? (
          <div className="mt-1 text-sm text-slate-500">{desc}</div>
        ) : null}
      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={[
          "relative h-8 w-14 rounded-full border transition",
          checked
            ? "border-sky-200 bg-sky-500"
            : "border-slate-200 bg-slate-100",
        ].join(" ")}
        aria-pressed={checked}
      >
        <span
          className={[
            "absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition",
            checked ? "left-7" : "left-1",
          ].join(" ")}
        />
      </button>
    </div>
  );
}
