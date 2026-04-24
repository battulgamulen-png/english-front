"use client";

import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useMemo, useState } from "react";

type Level = "Beginner" | "Intermediate" | "Advanced";

type Q = {
  id: string;
  type: "single";
  prompt: string;
  choices: { id: string; text: string; score: number }[];
  explanation?: string;
};

type QuestionRow = {
  id: string;
  type: "single";
  prompt: string;
  choices: { id: string; text: string; score: number }[];
  explanation: string | null;
};

export const QUESTIONS_SEED: Q[] = [
  {
    id: "q1",
    type: "single",
    prompt: "Choose the correct sentence:",
    choices: [
      { id: "a", text: "He go to school every day.", score: 0 },
      { id: "b", text: "He goes to school every day.", score: 2 },
      { id: "c", text: "He going to school every day.", score: 0 },
      { id: "d", text: "He gone to school every day.", score: 0 },
    ],
    explanation: "Third-person singular in present simple: he/she/it + verb+s.",
  },
  {
    id: "q2",
    type: "single",
    prompt: 'Pick the best option: "I ____ here since 2020."',
    choices: [
      { id: "a", text: "live", score: 0 },
      { id: "b", text: "have lived", score: 2 },
      { id: "c", text: "am living", score: 1 },
      { id: "d", text: "lived", score: 0 },
    ],
  },
  {
    id: "q3",
    type: "single",
    prompt: "Choose the correct question form:",
    choices: [
      { id: "a", text: "Where you are from?", score: 0 },
      { id: "b", text: "Where are you from?", score: 2 },
      { id: "c", text: "Where do you from?", score: 0 },
      { id: "d", text: "Where from you are?", score: 0 },
    ],
  },
  {
    id: "q4",
    type: "single",
    prompt: "Which sentence is correct?",
    choices: [
      { id: "a", text: "If I will see him, I tell you.", score: 0 },
      { id: "b", text: "If I see him, I'll tell you.", score: 2 },
      { id: "c", text: "If I saw him, I will tell you.", score: 1 },
      { id: "d", text: "If I see him, I told you.", score: 0 },
    ],
  },
  {
    id: "q5",
    type: "single",
    prompt: 'Choose the correct passive form: "They built the bridge in 2010."',
    choices: [
      { id: "a", text: "The bridge was built in 2010.", score: 2 },
      { id: "b", text: "The bridge is built in 2010.", score: 0 },
      { id: "c", text: "The bridge built in 2010.", score: 0 },
      { id: "d", text: "The bridge has build in 2010.", score: 0 },
    ],
  },
  {
    id: "q6",
    type: "single",
    prompt: 'Pick the best word: "I’m interested ____ learning English."',
    choices: [
      { id: "a", text: "in", score: 2 },
      { id: "b", text: "on", score: 0 },
      { id: "c", text: "at", score: 0 },
      { id: "d", text: "for", score: 0 },
    ],
  },
  {
    id: "q7",
    type: "single",
    prompt: "Choose the correct sentence:",
    choices: [
      { id: "a", text: "I have been to Japan last year.", score: 0 },
      { id: "b", text: "I went to Japan last year.", score: 2 },
      { id: "c", text: "I have gone to Japan last year.", score: 0 },
      { id: "d", text: "I going to Japan last year.", score: 0 },
    ],
  },
  {
    id: "q8",
    type: "single",
    prompt: 'Pick the correct clause: "This is the book ____ I told you about."',
    choices: [
      { id: "a", text: "who", score: 0 },
      { id: "b", text: "where", score: 0 },
      { id: "c", text: "(that)", score: 2 },
      { id: "d", text: "what", score: 0 },
    ],
  },
  {
    id: "q9",
    type: "single",
    prompt: "Choose the correct comparative:",
    choices: [
      { id: "a", text: "This book is more easier.", score: 0 },
      { id: "b", text: "This book is easier.", score: 2 },
      { id: "c", text: "This book is easyer.", score: 0 },
      { id: "d", text: "This book easier.", score: 0 },
    ],
  },
  {
    id: "q10",
    type: "single",
    prompt: 'Select the best modal: "You ____ wear a helmet."',
    choices: [
      { id: "a", text: "must", score: 2 },
      { id: "b", text: "can", score: 0 },
      { id: "c", text: "might", score: 0 },
      { id: "d", text: "would", score: 0 },
    ],
  },
  {
    id: "q11",
    type: "single",
    prompt: 'Choose the correct preposition: "She is good ____ math."',
    choices: [
      { id: "a", text: "in", score: 0 },
      { id: "b", text: "at", score: 2 },
      { id: "c", text: "on", score: 0 },
      { id: "d", text: "for", score: 0 },
    ],
  },
  {
    id: "q12",
    type: "single",
    prompt: "Pick the correct article:",
    choices: [
      { id: "a", text: "I bought a umbrella.", score: 0 },
      { id: "b", text: "I bought an umbrella.", score: 2 },
      { id: "c", text: "I bought the umbrella (first mention).", score: 1 },
      { id: "d", text: "I bought umbrella.", score: 0 },
    ],
  },
  {
    id: "q13",
    type: "single",
    prompt: "Choose the correct reported speech:",
    choices: [
      { id: "a", text: "He said he is tired.", score: 1 },
      { id: "b", text: "He said that he was tired.", score: 2 },
      { id: "c", text: "He said tired.", score: 0 },
      { id: "d", text: "He say that he was tired.", score: 0 },
    ],
  },
  {
    id: "q14",
    type: "single",
    prompt: "Which is correct?",
    choices: [
      { id: "a", text: "Neither of them are ready.", score: 1 },
      { id: "b", text: "Neither of them is ready.", score: 2 },
      { id: "c", text: "Neither them is ready.", score: 0 },
      { id: "d", text: "Neither of they are ready.", score: 0 },
    ],
  },
  {
    id: "q15",
    type: "single",
    prompt: 'Choose the correct verb form: "If I ____ time, I would travel."',
    choices: [
      { id: "a", text: "have", score: 0 },
      { id: "b", text: "had", score: 2 },
      { id: "c", text: "will have", score: 0 },
      { id: "d", text: "had had", score: 1 },
    ],
  },
  {
    id: "q16",
    type: "single",
    prompt: "Pick the correct sentence:",
    choices: [
      { id: "a", text: "She suggested to go early.", score: 0 },
      { id: "b", text: "She suggested going early.", score: 2 },
      { id: "c", text: "She suggested go early.", score: 0 },
      { id: "d", text: "She suggested that go early.", score: 0 },
    ],
  },
  {
    id: "q17",
    type: "single",
    prompt: 'Complete: "By next year, I ____ here for 10 years."',
    choices: [
      { id: "a", text: "work", score: 0 },
      { id: "b", text: "will have worked", score: 2 },
      { id: "c", text: "worked", score: 0 },
      { id: "d", text: "have worked", score: 1 },
    ],
  },
  {
    id: "q18",
    type: "single",
    prompt: 'Choose the correct pronoun: "Everyone should bring ____ ID."',
    choices: [
      { id: "a", text: "their", score: 2 },
      { id: "b", text: "his", score: 1 },
      { id: "c", text: "them", score: 0 },
      { id: "d", text: "it", score: 0 },
    ],
  },
  {
    id: "q19",
    type: "single",
    prompt: "Choose the correct sentence:",
    choices: [
      { id: "a", text: "I look forward to meet you.", score: 0 },
      { id: "b", text: "I look forward to meeting you.", score: 2 },
      { id: "c", text: "I look forward meet you.", score: 0 },
      { id: "d", text: "I look forward for meeting you.", score: 0 },
    ],
  },
  {
    id: "q20",
    type: "single",
    prompt: 'Pick the correct word order: "____ always on time."',
    choices: [
      { id: "a", text: "She is", score: 2 },
      { id: "b", text: "Is she", score: 0 },
      { id: "c", text: "She always is", score: 1 },
      { id: "d", text: "Always she is", score: 0 },
    ],
  },
  {
    id: "q21",
    type: "single",
    prompt: "Choose the best connector:",
    choices: [
      { id: "a", text: "Although it was raining, we went out.", score: 2 },
      { id: "b", text: "Despite it was raining, we went out.", score: 0 },
      { id: "c", text: "Although of rain, we went out.", score: 0 },
      { id: "d", text: "Because despite raining, we went out.", score: 0 },
    ],
  },
  {
    id: "q22",
    type: "single",
    prompt: 'Choose the correct quantifier: "There is ____ milk left."',
    choices: [
      { id: "a", text: "few", score: 0 },
      { id: "b", text: "a little", score: 2 },
      { id: "c", text: "many", score: 0 },
      { id: "d", text: "a few", score: 0 },
    ],
  },
  {
    id: "q23",
    type: "single",
    prompt: 'Choose the correct tag question: "You are coming, ____?"',
    choices: [
      { id: "a", text: "are you", score: 0 },
      { id: "b", text: "aren’t you", score: 2 },
      { id: "c", text: "do you", score: 0 },
      { id: "d", text: "won’t you", score: 0 },
    ],
  },
  {
    id: "q24",
    type: "single",
    prompt: "Pick the correct sentence:",
    choices: [
      { id: "a", text: "I wish I can speak French.", score: 0 },
      { id: "b", text: "I wish I could speak French.", score: 2 },
      { id: "c", text: "I wish I spoken French.", score: 0 },
      { id: "d", text: "I wish I will speak French.", score: 0 },
    ],
  },
  {
    id: "q25",
    type: "single",
    prompt: 'Choose the right relative pronoun: "The man ____ called you is here."',
    choices: [
      { id: "a", text: "which", score: 0 },
      { id: "b", text: "who", score: 2 },
      { id: "c", text: "whose", score: 1 },
      { id: "d", text: "where", score: 0 },
    ],
  },
  {
    id: "q26",
    type: "single",
    prompt: 'Complete: "No sooner ____ than it started raining."',
    choices: [
      { id: "a", text: "we arrived", score: 0 },
      { id: "b", text: "had we arrived", score: 2 },
      { id: "c", text: "did we arrive", score: 0 },
      { id: "d", text: "we had arrived", score: 1 },
    ],
  },
  {
    id: "q27",
    type: "single",
    prompt: "Choose the best paraphrase:",
    choices: [
      { id: "a", text: "He accused me to lie.", score: 0 },
      { id: "b", text: "He accused me of lying.", score: 2 },
      { id: "c", text: "He accused me for lying.", score: 0 },
      { id: "d", text: "He accused that I lied.", score: 1 },
    ],
  },
  {
    id: "q28",
    type: "single",
    prompt: 'Choose the natural sentence: "By the time we got there, the movie ____."',
    choices: [
      { id: "a", text: "already started", score: 0 },
      { id: "b", text: "had already started", score: 2 },
      { id: "c", text: "has already started", score: 0 },
      { id: "d", text: "was already start", score: 0 },
    ],
  },
];

function calcLevel(score: number, maxScore: number): { level: Level; note: string } {
  const pct = (score / maxScore) * 100;

  if (pct < 45) {
    return {
      level: "Beginner",
      note: "Үндсэн дүрэм, үгсийн сангаа суурь түвшинд бэхжүүлээрэй.",
    };
  }

  if (pct < 75) {
    return {
      level: "Intermediate",
      note: "Дунд түвшин! Tense, clause, conditional-оо илүү нарийвчил.",
    };
  }

  return {
    level: "Advanced",
    note: "Ахисан! Алдаа засалт, академик бичих/ярих дээр төвлөр.",
  };
}

function rowToQuestion(row: QuestionRow): Q {
  return {
    id: row.id,
    type: "single",
    prompt: row.prompt,
    choices: row.choices,
    explanation: row.explanation ?? undefined,
  };
}

export default function Test() {
  const supabase = useMemo(() => createClient(), []);

  const [questions, setQuestions] = useState<Q[]>(QUESTIONS_SEED);
  const [dbLoading, setDbLoading] = useState(false);
  const [dbMessage, setDbMessage] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const loadFromDb = async () => {
      setDbLoading(true);
      const { data, error } = await supabase
        .from("test_questions")
        .select("id,type,prompt,choices,explanation")
        .order("id", { ascending: true });

      if (cancelled) return;

      if (error) {
        setDbLoading(false);
        setDbMessage("DB-с асуулт уншиж чадсангүй. Local асуултуудыг ашиглаж байна.");
        return;
      }

      const rows = (data as QuestionRow[]) ?? [];
      if (rows.length > 0) {
        setQuestions(rows.map(rowToQuestion));
        setDbMessage(`DB-ээс ${rows.length} асуулт уншлаа.`);
      } else {
        setDbMessage("DB хүснэгт хоосон байна. Seed дарж 28 асуулт оруулна уу.");
      }

      setDbLoading(false);
    };

    loadFromDb();

    return () => {
      cancelled = true;
    };
  }, [supabase]);

  const seedQuestionsToDb = async () => {
    setDbLoading(true);
    setDbMessage(null);

    const payload = QUESTIONS_SEED.map((q) => ({
      id: q.id,
      type: q.type,
      prompt: q.prompt,
      choices: q.choices,
      explanation: q.explanation ?? null,
    }));

    const { error } = await supabase
      .from("test_questions")
      .upsert(payload, { onConflict: "id" });

    if (error) {
      setDbLoading(false);
      setDbMessage(`Seed алдаа: ${error.message}`);
      return;
    }

    const { data } = await supabase
      .from("test_questions")
      .select("id,type,prompt,choices,explanation")
      .order("id", { ascending: true });

    const rows = (data as QuestionRow[]) ?? [];
    setQuestions(rows.length ? rows.map(rowToQuestion) : QUESTIONS_SEED);
    setAnswers({});
    setSubmitted(false);
    setDbLoading(false);
    setDbMessage(`Seed амжилттай. Нийт ${rows.length || QUESTIONS_SEED.length} асуулт.`);
  };

  const maxScore = questions.length * 2;

  const score = useMemo(() => {
    return questions.reduce((sum, q) => {
      const picked = answers[q.id];
      const choice = q.choices.find((c) => c.id === picked);
      return sum + (choice?.score ?? 0);
    }, 0);
  }, [answers, questions]);

  const unansweredCount = useMemo(() => {
    return questions.filter((q) => !answers[q.id]).length;
  }, [answers, questions]);

  const result = useMemo(() => calcLevel(score, maxScore || 1), [score, maxScore]);

  const onSelect = (qid: string, cid: string) => {
    if (submitted) return;
    setAnswers((a) => ({ ...a, [qid]: cid }));
  };

  const onSubmit = () => setSubmitted(true);

  const onReset = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-slate-900">English Level Test</h1>
            <p className="mt-1 text-sm text-slate-500">
              {questions.length} асуулт • 2 оноо/асуулт • Хариулаад Submit дар.
            </p>
            {dbMessage ? <p className="mt-2 text-xs text-slate-500">{dbMessage}</p> : null}
          </div>

          <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 sm:w-auto">
            <div className="text-xs text-slate-500">Progress</div>
            <div className="mt-1 text-sm font-semibold text-slate-900">
              {questions.length - unansweredCount}/{questions.length}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={seedQuestionsToDb}
            disabled={dbLoading}
            className="rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {dbLoading ? "Working..." : "Seed 28 questions to DB"}
          </button>
        </div>

        <div className="grid gap-6">
          {questions.map((q, idx) => {
            const picked = answers[q.id];
            return (
              <div key={q.id} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-500">Question {idx + 1}</div>
                    <div className="mt-1 text-base font-semibold text-slate-900">{q.prompt}</div>
                  </div>

                  {submitted ? (
                    <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
                      +{picked ? (q.choices.find((c) => c.id === picked)?.score ?? 0) : 0} pts
                    </div>
                  ) : null}
                </div>

                <div className="mt-4 grid gap-2">
                  {q.choices.map((c) => {
                    const isSelected = picked === c.id;
                    const best = submitted ? c.score === 2 : false;

                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => onSelect(q.id, c.id)}
                        className={[
                          "flex w-full flex-col items-start gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition sm:flex-row sm:items-center sm:justify-between",
                          submitted
                            ? best
                              ? "border-emerald-200 bg-emerald-50"
                              : isSelected
                                ? "border-slate-300 bg-slate-50"
                                : "border-slate-200 bg-white"
                            : isSelected
                              ? "border-sky-200 bg-sky-50"
                              : "border-slate-200 bg-white hover:bg-slate-50",
                        ].join(" ")}
                        aria-pressed={isSelected}
                        disabled={submitted}
                      >
                        <span className="text-slate-900">{c.text}</span>

                        <span
                          className={[
                            "rounded-full px-2 py-1 text-xs",
                            submitted
                              ? best
                                ? "bg-white text-emerald-700 border border-emerald-200"
                                : "bg-white text-slate-600 border border-slate-200"
                              : isSelected
                                ? "bg-white text-sky-700 border border-sky-200"
                                : "bg-white text-slate-600 border border-slate-200",
                          ].join(" ")}
                        >
                          {submitted ? `${c.score}pt` : isSelected ? "Selected" : "Choose"}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {submitted && q.explanation ? (
                  <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    <div className="text-xs font-semibold text-slate-500">Why</div>
                    <div className="mt-1">{q.explanation}</div>
                  </div>
                ) : null}
              </div>
            );
          })}

          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            {!submitted ? (
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="text-sm text-slate-600">
                  {unansweredCount === 0
                    ? "Бэлэн бол Submit дар."
                    : `Дутуу: ${unansweredCount} асуулт байна.`}
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={onReset}
                    className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    Reset
                  </button>
                  <button
                    type="button"
                    onClick={onSubmit}
                    disabled={unansweredCount > 0 || questions.length === 0}
                    className="rounded-xl border border-sky-200 bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    Submit
                  </button>
                </div>
              </div>
            ) : (
              <ResultCard
                score={score}
                maxScore={maxScore}
                level={result.level}
                note={result.note}
                onReset={onReset}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultCard({
  score,
  maxScore,
  level,
  note,
  onReset,
}: {
  score: number;
  maxScore: number;
  level: Level;
  note: string;
  onReset: () => void;
}) {
  const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  const badge =
    level === "Beginner"
      ? "border-amber-200 bg-amber-50 text-amber-700"
      : level === "Intermediate"
        ? "border-sky-200 bg-sky-50 text-sky-700"
        : "border-emerald-200 bg-emerald-50 text-emerald-700";

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <div className="text-xs font-semibold text-slate-500">Your result</div>
        <div className="mt-1 flex items-center gap-2">
          <div className="text-2xl font-semibold text-slate-900">
            {score}/{maxScore} ({pct}%)
          </div>
          <span className={["rounded-full border px-3 py-1 text-sm font-semibold", badge].join(" ")}>
            {level}
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-600">{note}</p>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 sm:w-auto"
      >
        Retake test
      </button>
    </div>
  );
}
