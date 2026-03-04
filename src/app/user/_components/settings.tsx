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
  fullName: string;
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
  fullName: "",
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

type SettingsRow = {
  user_id: string;
  full_name: string | null;
  email: string | null;
  ui_lang: UILang | null;
  level: Level | null;
  daily_goal_min: number | null;
  study_modes: StudyMode[] | null;
  show_translations: boolean | null;
  auto_play_audio: boolean | null;
  voice_speed: 0.75 | 1 | 1.25 | null;
  remind_enabled: boolean | null;
  remind_time: string | null;
  streak_freeze: boolean | null;
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
  const [userId, setUserId] = useState<string | null>(null);
  const [dbStatus, setDbStatus] = useState<string | null>(null);
  const [dbEnabled, setDbEnabled] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const isMn = state.uiLang === "Монгол";
  const t = {
    settings: isMn ? "Тохиргоо" : "Settings",
    reset: isMn ? "Сэргээх" : "Reset",
    logout: isMn ? "Гарах" : "Logout",
    loggingOut: isMn ? "Гарч байна..." : "Logging out...",
    profile: isMn ? "Профайл" : "Profile",
    profileDesc: isMn
      ? "Тохиргоо хадгалах, сануулга авах имэйл."
      : "Profile and account contact.",
    name: isMn ? "Нэр" : "Name",
    uiLanguage: isMn ? "Хэл" : "UI Language",
    learning: isMn ? "Суралцах" : "Learning",
    learningDesc: isMn
      ? "Түвшин, өдөр тутмын зорилго, хичээлийн төрөл."
      : "Level, daily goal, and study modes.",
    level: isMn ? "Түвшин" : "Level",
    dailyGoal: isMn ? "Өдөр тутмын зорилго (минут)" : "Daily goal (minutes)",
    studyModes: isMn ? "Суралцах төрлүүд" : "Study modes",
    studyModesDesc: isMn
      ? "Сонгосон төрлүүдээр чинь хичээл санал болгоно."
      : "Recommendations follow selected modes.",
    showTranslation: isMn
      ? "Монгол орчуулга харуулах"
      : "Show Mongolian translation",
    showTranslationDesc: isMn
      ? "Үг/өгүүлбэрийн орчуулга харуулах"
      : "Show translated words/sentences",
    autoPlay: isMn ? "Аудио автоматаар тоглуулах" : "Auto-play audio",
    autoPlayDesc: isMn
      ? "Суралцах үед дуудлага автоматаар тоглуулах"
      : "Play pronunciation automatically",
    reminders: isMn ? "Сануулга" : "Reminders",
    remindersDesc: isMn
      ? "Өдөр бүр сануулга авч, streak-ээ хадгал."
      : "Enable reminders and keep your streak.",
    dailyReminder: isMn ? "Өдрийн сануулга" : "Daily reminder",
    dailyReminderDesc: isMn
      ? "Өдөр бүр тодорхой цагт сануулга асаах"
      : "Enable reminder at a fixed time",
    reminderTime: isMn ? "Сануулах цаг" : "Reminder time",
    lastSaved: isMn ? "Сүүлд хадгалсан:" : "Last saved:",
    autoSaved: isMn
      ? "Өөрчлөлт автоматаар хадгалагдана."
      : "Changes are saved automatically.",
  };

  useEffect(() => {
    let cancelled = false;

    const loadAuthAndDbSettings = async () => {
      const { data: authData, error: authLoadError } =
        await supabase.auth.getUser();

      if (cancelled) return;

      if (authLoadError || !authData.user) {
        setAuthError(authLoadError?.message ?? "Please login first.");
        return;
      }

      const user = authData.user;
      setUserId(user.id);

      const first =
        (user.user_metadata?.first_name as string | undefined) ?? "";
      const last = (user.user_metadata?.last_name as string | undefined) ?? "";
      const full = `${first} ${last}`.trim();

      setState((prev) => ({
        ...prev,
        fullName:
          full ||
          (user.user_metadata?.full_name as string | undefined) ||
          prev.fullName,
        email: user.email ?? prev.email,
      }));

      const { data, error } = await supabase
        .from("user_settings")
        .select(
          "user_id,full_name,email,ui_lang,level,daily_goal_min,study_modes,show_translations,auto_play_audio,voice_speed,remind_enabled,remind_time,streak_freeze",
        )
        .eq("user_id", user.id)
        .maybeSingle();

      if (cancelled) return;

      if (error) {
        if (error.message.includes("public.user_settings")) {
          setDbEnabled(false);
          setDbStatus(
            "`user_settings` хүснэгт олдсонгүй. Local settings ашиглаж байна.",
          );
          return;
        }
        setDbStatus(
          "DB settings уншиж чадсангүй. Local settings ашиглаж байна.",
        );
        return;
      }

      if (!data) {
        setDbStatus("DB дээр settings байхгүй. Хадгалахад автоматаар үүснэ.");
        return;
      }

      const row = data as SettingsRow;
      setState((prev) => ({
        ...prev,
        fullName: row.full_name ?? prev.fullName,
        email: row.email ?? prev.email,
        uiLang: row.ui_lang ?? prev.uiLang,
        level: row.level ?? prev.level,
        dailyGoalMin: row.daily_goal_min ?? prev.dailyGoalMin,
        studyModes: row.study_modes ?? prev.studyModes,
        showTranslations: row.show_translations ?? prev.showTranslations,
        autoPlayAudio: row.auto_play_audio ?? prev.autoPlayAudio,
        voiceSpeed: row.voice_speed ?? prev.voiceSpeed,
        remindEnabled: row.remind_enabled ?? prev.remindEnabled,
        remindTime: row.remind_time ?? prev.remindTime,
        streakFreeze: row.streak_freeze ?? prev.streakFreeze,
      }));
      setDbStatus("DB settings ачааллаа.");
    };

    loadAuthAndDbSettings();

    return () => {
      cancelled = true;
    };
  }, [supabase]);

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

  useEffect(() => {
    if (!userId || !dbEnabled) return;

    const t = setTimeout(async () => {
      const payload = {
        user_id: userId,
        full_name: state.fullName,
        email: state.email,
        ui_lang: state.uiLang,
        level: state.level,
        daily_goal_min: state.dailyGoalMin,
        study_modes: state.studyModes,
        show_translations: state.showTranslations,
        auto_play_audio: state.autoPlayAudio,
        voice_speed: state.voiceSpeed,
        remind_enabled: state.remindEnabled,
        remind_time: state.remindTime,
        streak_freeze: state.streakFreeze,
      };

      const { error } = await supabase
        .from("user_settings")
        .upsert(payload, { onConflict: "user_id" });

      if (error) {
        if (error.message.includes("public.user_settings")) {
          setDbEnabled(false);
          setDbStatus(
            "`user_settings` хүснэгт олдсонгүй. SQL ажиллуулаад refresh хийнэ үү.",
          );
          return;
        }
        setDbStatus(`DB save алдаа: ${error.message}`);
      } else {
        setDbStatus("DB дээр хадгалагдлаа.");
      }
    }, 600);

    return () => clearTimeout(t);
  }, [dbEnabled, state, supabase, userId]);

  const dirtySummary = useMemo(() => {
    const minutes = state.dailyGoalMin;
    const modes = state.studyModes.join(", ");
    return isMn
      ? `${state.level} • ${minutes} мин/өдөр • ${modes}`
      : `${state.level} • ${minutes} min/day • ${modes}`;
  }, [isMn, state.dailyGoalMin, state.level, state.studyModes]);

  const reset = () => {
    setState((prev) => ({
      ...DEFAULT,
      fullName: prev.fullName,
      email: prev.email,
    }));
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
            <h1 className="text-xl font-semibold text-slate-900">{t.settings}</h1>
            <p className="text-sm text-slate-500">{dirtySummary}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={reset}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              {t.reset}
            </button>
            <button
              onClick={handleLogout}
              disabled={loggingOut}
              className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loggingOut ? t.loggingOut : t.logout}
            </button>
          </div>
        </div>
        {authError ? (
          <div className="mx-auto max-w-4xl px-4 pb-3 text-sm text-red-600">
            {authError}
          </div>
        ) : null}
        {dbStatus ? (
          <div className="mx-auto max-w-4xl px-4 pb-3 text-xs text-slate-500">
            {dbStatus}
          </div>
        ) : null}
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="grid gap-6">
          {/* Profile */}
          <Section
            title={t.profile}
            desc={t.profileDesc}
          >
            <div className="grid gap-3 md:grid-cols-2">
              <Field label={t.name}>
                <input
                  value={state.fullName}
                  readOnly
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none"
                />
              </Field>

              <Field label="Email">
                <input
                  value={state.email}
                  readOnly
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none"
                />
              </Field>

              <Field label={t.uiLanguage}>
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
            title={t.learning}
            desc={t.learningDesc}
          >
            <div className="grid gap-5">
              <div className="grid gap-3 md:grid-cols-2">
                <Field label={t.level}>
                  <Select
                    value={state.level}
                    onChange={(v) =>
                      setState((s) => ({ ...s, level: v as Level }))
                    }
                    options={["Beginner", "Intermediate", "Advanced"]}
                  />
                </Field>

                <Field label={t.dailyGoal}>
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

              <Field label={t.studyModes}>
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
                  {t.studyModesDesc}
                </p>
              </Field>

              <div className="grid gap-3 md:grid-cols-2">
                <Toggle
                  title={t.showTranslation}
                  desc={t.showTranslationDesc}
                  checked={state.showTranslations}
                  onChange={(v) =>
                    setState((s) => ({ ...s, showTranslations: v }))
                  }
                />
                <Toggle
                  title={t.autoPlay}
                  desc={t.autoPlayDesc}
                  checked={state.autoPlayAudio}
                  onChange={(v) =>
                    setState((s) => ({ ...s, autoPlayAudio: v }))
                  }
                />
              </div>
            </div>
          </Section>

          {/* Reminders */}
          <Section
            title={t.reminders}
            desc={t.remindersDesc}
          >
            <div className="grid gap-3 md:grid-cols-2">
              <Toggle
                title={t.dailyReminder}
                desc={t.dailyReminderDesc}
                checked={state.remindEnabled}
                onChange={(v) => setState((s) => ({ ...s, remindEnabled: v }))}
              />
              <Field label={t.reminderTime}>
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
          </Section>

          {/* Footer */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-slate-600">
                {savedAt ? (
                  <>
                    {t.lastSaved}{" "}
                    <span className="font-medium text-slate-800">
                      {new Date(savedAt).toLocaleString()}
                    </span>
                  </>
                ) : (
                  t.autoSaved
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
