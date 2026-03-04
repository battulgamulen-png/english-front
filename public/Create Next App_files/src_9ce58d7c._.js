(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/utils/supabase/client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://yoswmpqudcnbqvpfenvj.supabase.co");
const supabaseKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlvc3dtcHF1ZGNuYnF2cGZlbnZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI1ODMzOTMsImV4cCI6MjA4ODE1OTM5M30.Yz2tfBfbgQ3l4lSsXxbwa9P9TM5mcczJqpSn_yRkai0") ?? ("TURBOPACK compile-time value", "sb_publishable_LFtZcWMHc9wzTiNKw2Oc_Q_boJtQ252");
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const createClient = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])(supabaseUrl, supabaseKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/user/_components/tests.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Test
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const QUESTIONS_SEED = [
    {
        id: "q1",
        type: "single",
        prompt: "Choose the correct sentence:",
        choices: [
            {
                id: "a",
                text: "He go to school every day.",
                score: 0
            },
            {
                id: "b",
                text: "He goes to school every day.",
                score: 2
            },
            {
                id: "c",
                text: "He going to school every day.",
                score: 0
            },
            {
                id: "d",
                text: "He gone to school every day.",
                score: 0
            }
        ],
        explanation: "Third-person singular in present simple: he/she/it + verb+s."
    },
    {
        id: "q2",
        type: "single",
        prompt: 'Pick the best option: "I ____ here since 2020."',
        choices: [
            {
                id: "a",
                text: "live",
                score: 0
            },
            {
                id: "b",
                text: "have lived",
                score: 2
            },
            {
                id: "c",
                text: "am living",
                score: 1
            },
            {
                id: "d",
                text: "lived",
                score: 0
            }
        ]
    },
    {
        id: "q3",
        type: "single",
        prompt: "Choose the correct question form:",
        choices: [
            {
                id: "a",
                text: "Where you are from?",
                score: 0
            },
            {
                id: "b",
                text: "Where are you from?",
                score: 2
            },
            {
                id: "c",
                text: "Where do you from?",
                score: 0
            },
            {
                id: "d",
                text: "Where from you are?",
                score: 0
            }
        ]
    },
    {
        id: "q4",
        type: "single",
        prompt: "Which sentence is correct?",
        choices: [
            {
                id: "a",
                text: "If I will see him, I tell you.",
                score: 0
            },
            {
                id: "b",
                text: "If I see him, I'll tell you.",
                score: 2
            },
            {
                id: "c",
                text: "If I saw him, I will tell you.",
                score: 1
            },
            {
                id: "d",
                text: "If I see him, I told you.",
                score: 0
            }
        ]
    },
    {
        id: "q5",
        type: "single",
        prompt: 'Choose the correct passive form: "They built the bridge in 2010."',
        choices: [
            {
                id: "a",
                text: "The bridge was built in 2010.",
                score: 2
            },
            {
                id: "b",
                text: "The bridge is built in 2010.",
                score: 0
            },
            {
                id: "c",
                text: "The bridge built in 2010.",
                score: 0
            },
            {
                id: "d",
                text: "The bridge has build in 2010.",
                score: 0
            }
        ]
    },
    {
        id: "q6",
        type: "single",
        prompt: 'Pick the best word: "I’m interested ____ learning English."',
        choices: [
            {
                id: "a",
                text: "in",
                score: 2
            },
            {
                id: "b",
                text: "on",
                score: 0
            },
            {
                id: "c",
                text: "at",
                score: 0
            },
            {
                id: "d",
                text: "for",
                score: 0
            }
        ]
    },
    {
        id: "q7",
        type: "single",
        prompt: "Choose the correct sentence:",
        choices: [
            {
                id: "a",
                text: "I have been to Japan last year.",
                score: 0
            },
            {
                id: "b",
                text: "I went to Japan last year.",
                score: 2
            },
            {
                id: "c",
                text: "I have gone to Japan last year.",
                score: 0
            },
            {
                id: "d",
                text: "I going to Japan last year.",
                score: 0
            }
        ]
    },
    {
        id: "q8",
        type: "single",
        prompt: 'Pick the correct clause: "This is the book ____ I told you about."',
        choices: [
            {
                id: "a",
                text: "who",
                score: 0
            },
            {
                id: "b",
                text: "where",
                score: 0
            },
            {
                id: "c",
                text: "(that)",
                score: 2
            },
            {
                id: "d",
                text: "what",
                score: 0
            }
        ]
    },
    {
        id: "q9",
        type: "single",
        prompt: "Choose the correct comparative:",
        choices: [
            {
                id: "a",
                text: "This book is more easier.",
                score: 0
            },
            {
                id: "b",
                text: "This book is easier.",
                score: 2
            },
            {
                id: "c",
                text: "This book is easyer.",
                score: 0
            },
            {
                id: "d",
                text: "This book easier.",
                score: 0
            }
        ]
    },
    {
        id: "q10",
        type: "single",
        prompt: 'Select the best modal: "You ____ wear a helmet."',
        choices: [
            {
                id: "a",
                text: "must",
                score: 2
            },
            {
                id: "b",
                text: "can",
                score: 0
            },
            {
                id: "c",
                text: "might",
                score: 0
            },
            {
                id: "d",
                text: "would",
                score: 0
            }
        ]
    },
    {
        id: "q11",
        type: "single",
        prompt: 'Choose the correct preposition: "She is good ____ math."',
        choices: [
            {
                id: "a",
                text: "in",
                score: 0
            },
            {
                id: "b",
                text: "at",
                score: 2
            },
            {
                id: "c",
                text: "on",
                score: 0
            },
            {
                id: "d",
                text: "for",
                score: 0
            }
        ]
    },
    {
        id: "q12",
        type: "single",
        prompt: "Pick the correct article:",
        choices: [
            {
                id: "a",
                text: "I bought a umbrella.",
                score: 0
            },
            {
                id: "b",
                text: "I bought an umbrella.",
                score: 2
            },
            {
                id: "c",
                text: "I bought the umbrella (first mention).",
                score: 1
            },
            {
                id: "d",
                text: "I bought umbrella.",
                score: 0
            }
        ]
    },
    {
        id: "q13",
        type: "single",
        prompt: "Choose the correct reported speech:",
        choices: [
            {
                id: "a",
                text: "He said he is tired.",
                score: 1
            },
            {
                id: "b",
                text: "He said that he was tired.",
                score: 2
            },
            {
                id: "c",
                text: "He said tired.",
                score: 0
            },
            {
                id: "d",
                text: "He say that he was tired.",
                score: 0
            }
        ]
    },
    {
        id: "q14",
        type: "single",
        prompt: "Which is correct?",
        choices: [
            {
                id: "a",
                text: "Neither of them are ready.",
                score: 1
            },
            {
                id: "b",
                text: "Neither of them is ready.",
                score: 2
            },
            {
                id: "c",
                text: "Neither them is ready.",
                score: 0
            },
            {
                id: "d",
                text: "Neither of they are ready.",
                score: 0
            }
        ]
    },
    {
        id: "q15",
        type: "single",
        prompt: 'Choose the correct verb form: "If I ____ time, I would travel."',
        choices: [
            {
                id: "a",
                text: "have",
                score: 0
            },
            {
                id: "b",
                text: "had",
                score: 2
            },
            {
                id: "c",
                text: "will have",
                score: 0
            },
            {
                id: "d",
                text: "had had",
                score: 1
            }
        ]
    },
    {
        id: "q16",
        type: "single",
        prompt: "Pick the correct sentence:",
        choices: [
            {
                id: "a",
                text: "She suggested to go early.",
                score: 0
            },
            {
                id: "b",
                text: "She suggested going early.",
                score: 2
            },
            {
                id: "c",
                text: "She suggested go early.",
                score: 0
            },
            {
                id: "d",
                text: "She suggested that go early.",
                score: 0
            }
        ]
    },
    {
        id: "q17",
        type: "single",
        prompt: 'Complete: "By next year, I ____ here for 10 years."',
        choices: [
            {
                id: "a",
                text: "work",
                score: 0
            },
            {
                id: "b",
                text: "will have worked",
                score: 2
            },
            {
                id: "c",
                text: "worked",
                score: 0
            },
            {
                id: "d",
                text: "have worked",
                score: 1
            }
        ]
    },
    {
        id: "q18",
        type: "single",
        prompt: 'Choose the correct pronoun: "Everyone should bring ____ ID."',
        choices: [
            {
                id: "a",
                text: "their",
                score: 2
            },
            {
                id: "b",
                text: "his",
                score: 1
            },
            {
                id: "c",
                text: "them",
                score: 0
            },
            {
                id: "d",
                text: "it",
                score: 0
            }
        ]
    },
    {
        id: "q19",
        type: "single",
        prompt: "Choose the correct sentence:",
        choices: [
            {
                id: "a",
                text: "I look forward to meet you.",
                score: 0
            },
            {
                id: "b",
                text: "I look forward to meeting you.",
                score: 2
            },
            {
                id: "c",
                text: "I look forward meet you.",
                score: 0
            },
            {
                id: "d",
                text: "I look forward for meeting you.",
                score: 0
            }
        ]
    },
    {
        id: "q20",
        type: "single",
        prompt: 'Pick the correct word order: "____ always on time."',
        choices: [
            {
                id: "a",
                text: "She is",
                score: 2
            },
            {
                id: "b",
                text: "Is she",
                score: 0
            },
            {
                id: "c",
                text: "She always is",
                score: 1
            },
            {
                id: "d",
                text: "Always she is",
                score: 0
            }
        ]
    },
    {
        id: "q21",
        type: "single",
        prompt: "Choose the best connector:",
        choices: [
            {
                id: "a",
                text: "Although it was raining, we went out.",
                score: 2
            },
            {
                id: "b",
                text: "Despite it was raining, we went out.",
                score: 0
            },
            {
                id: "c",
                text: "Although of rain, we went out.",
                score: 0
            },
            {
                id: "d",
                text: "Because despite raining, we went out.",
                score: 0
            }
        ]
    },
    {
        id: "q22",
        type: "single",
        prompt: 'Choose the correct quantifier: "There is ____ milk left."',
        choices: [
            {
                id: "a",
                text: "few",
                score: 0
            },
            {
                id: "b",
                text: "a little",
                score: 2
            },
            {
                id: "c",
                text: "many",
                score: 0
            },
            {
                id: "d",
                text: "a few",
                score: 0
            }
        ]
    },
    {
        id: "q23",
        type: "single",
        prompt: 'Choose the correct tag question: "You are coming, ____?"',
        choices: [
            {
                id: "a",
                text: "are you",
                score: 0
            },
            {
                id: "b",
                text: "aren’t you",
                score: 2
            },
            {
                id: "c",
                text: "do you",
                score: 0
            },
            {
                id: "d",
                text: "won’t you",
                score: 0
            }
        ]
    },
    {
        id: "q24",
        type: "single",
        prompt: "Pick the correct sentence:",
        choices: [
            {
                id: "a",
                text: "I wish I can speak French.",
                score: 0
            },
            {
                id: "b",
                text: "I wish I could speak French.",
                score: 2
            },
            {
                id: "c",
                text: "I wish I spoken French.",
                score: 0
            },
            {
                id: "d",
                text: "I wish I will speak French.",
                score: 0
            }
        ]
    },
    {
        id: "q25",
        type: "single",
        prompt: 'Choose the right relative pronoun: "The man ____ called you is here."',
        choices: [
            {
                id: "a",
                text: "which",
                score: 0
            },
            {
                id: "b",
                text: "who",
                score: 2
            },
            {
                id: "c",
                text: "whose",
                score: 1
            },
            {
                id: "d",
                text: "where",
                score: 0
            }
        ]
    },
    {
        id: "q26",
        type: "single",
        prompt: 'Complete: "No sooner ____ than it started raining."',
        choices: [
            {
                id: "a",
                text: "we arrived",
                score: 0
            },
            {
                id: "b",
                text: "had we arrived",
                score: 2
            },
            {
                id: "c",
                text: "did we arrive",
                score: 0
            },
            {
                id: "d",
                text: "we had arrived",
                score: 1
            }
        ]
    },
    {
        id: "q27",
        type: "single",
        prompt: "Choose the best paraphrase:",
        choices: [
            {
                id: "a",
                text: "He accused me to lie.",
                score: 0
            },
            {
                id: "b",
                text: "He accused me of lying.",
                score: 2
            },
            {
                id: "c",
                text: "He accused me for lying.",
                score: 0
            },
            {
                id: "d",
                text: "He accused that I lied.",
                score: 1
            }
        ]
    },
    {
        id: "q28",
        type: "single",
        prompt: 'Choose the natural sentence: "By the time we got there, the movie ____."',
        choices: [
            {
                id: "a",
                text: "already started",
                score: 0
            },
            {
                id: "b",
                text: "had already started",
                score: 2
            },
            {
                id: "c",
                text: "has already started",
                score: 0
            },
            {
                id: "d",
                text: "was already start",
                score: 0
            }
        ]
    }
];
function calcLevel(score, maxScore) {
    const pct = score / maxScore * 100;
    if (pct < 45) {
        return {
            level: "Beginner",
            note: "Үндсэн дүрэм, үгсийн сангаа суурь түвшинд бэхжүүлээрэй."
        };
    }
    if (pct < 75) {
        return {
            level: "Intermediate",
            note: "Дунд түвшин! Tense, clause, conditional-оо илүү нарийвчил."
        };
    }
    return {
        level: "Advanced",
        note: "Ахисан! Алдаа засалт, академик бичих/ярих дээр төвлөр."
    };
}
function rowToQuestion(row) {
    return {
        id: row.id,
        type: "single",
        prompt: row.prompt,
        choices: row.choices,
        explanation: row.explanation ?? undefined
    };
}
function Test() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(66);
    if ($[0] !== "d8632a5a59577722c2cb68bcce9c8a5a5a7134681951ad7da9f6a0d6b658ecb1") {
        for(let $i = 0; $i < 66; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8632a5a59577722c2cb68bcce9c8a5a5a7134681951ad7da9f6a0d6b658ecb1";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const supabase = t0;
    const [questions, setQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(QUESTIONS_SEED);
    const [dbLoading, setDbLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dbMessage, setDbMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Test[useEffect()]": ()=>{
                let cancelled = false;
                const loadFromDb = {
                    "Test[useEffect() > loadFromDb]": async ()=>{
                        setDbLoading(true);
                        const { data, error } = await supabase.from("test_questions").select("id,type,prompt,choices,explanation").order("id", {
                            ascending: true
                        });
                        if (cancelled) {
                            return;
                        }
                        if (error) {
                            setDbLoading(false);
                            setDbMessage("DB-\u0441 \u0430\u0441\u0443\u0443\u043B\u0442 \u0443\u043D\u0448\u0438\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439. Local \u0430\u0441\u0443\u0443\u043B\u0442\u0443\u0443\u0434\u044B\u0433 \u0430\u0448\u0438\u0433\u043B\u0430\u0436 \u0431\u0430\u0439\u043D\u0430.");
                            return;
                        }
                        const rows = data ?? [];
                        if (rows.length > 0) {
                            setQuestions(rows.map(rowToQuestion));
                            setDbMessage(`DB-ээс ${rows.length} асуулт уншлаа.`);
                        } else {
                            setDbMessage("DB \u0445\u04AF\u0441\u043D\u044D\u0433\u0442 \u0445\u043E\u043E\u0441\u043E\u043D \u0431\u0430\u0439\u043D\u0430. Seed \u0434\u0430\u0440\u0436 28 \u0430\u0441\u0443\u0443\u043B\u0442 \u043E\u0440\u0443\u0443\u043B\u043D\u0430 \u0443\u0443.");
                        }
                        setDbLoading(false);
                    }
                }["Test[useEffect() > loadFromDb]"];
                loadFromDb();
                return ()=>{
                    cancelled = true;
                };
            }
        })["Test[useEffect()]"];
        t3 = [
            supabase
        ];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "Test[seedQuestionsToDb]": async ()=>{
                setDbLoading(true);
                setDbMessage(null);
                const payload = QUESTIONS_SEED.map(_TestSeedQuestionsToDbQUESTIONS_SEEDMap);
                const { error: error_0 } = await supabase.from("test_questions").upsert(payload, {
                    onConflict: "id"
                });
                if (error_0) {
                    setDbLoading(false);
                    setDbMessage(`Seed алдаа: ${error_0.message}`);
                    return;
                }
                const { data: data_0 } = await supabase.from("test_questions").select("id,type,prompt,choices,explanation").order("id", {
                    ascending: true
                });
                const rows_0 = data_0 ?? [];
                setQuestions(rows_0.length ? rows_0.map(rowToQuestion) : QUESTIONS_SEED);
                setAnswers({});
                setSubmitted(false);
                setDbLoading(false);
                setDbMessage(`Seed амжилттай. Нийт ${rows_0.length || QUESTIONS_SEED.length} асуулт.`);
            }
        })["Test[seedQuestionsToDb]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const seedQuestionsToDb = t4;
    const maxScore = questions.length * 2;
    let t5;
    if ($[6] !== answers || $[7] !== questions) {
        let t6;
        if ($[9] !== answers) {
            t6 = ({
                "Test[questions.reduce()]": (sum, q_0)=>{
                    const picked = answers[q_0.id];
                    const choice = q_0.choices.find({
                        "Test[questions.reduce() > q_0.choices.find()]": (c)=>c.id === picked
                    }["Test[questions.reduce() > q_0.choices.find()]"]);
                    return sum + (choice?.score ?? 0);
                }
            })["Test[questions.reduce()]"];
            $[9] = answers;
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        t5 = questions.reduce(t6, 0);
        $[6] = answers;
        $[7] = questions;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const score = t5;
    let t6;
    if ($[11] !== answers || $[12] !== questions) {
        let t7;
        if ($[14] !== answers) {
            t7 = ({
                "Test[questions.filter()]": (q_1)=>!answers[q_1.id]
            })["Test[questions.filter()]"];
            $[14] = answers;
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        t6 = questions.filter(t7);
        $[11] = answers;
        $[12] = questions;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const unansweredCount = t6.length;
    const t7 = maxScore || 1;
    let t8;
    if ($[16] !== score || $[17] !== t7) {
        t8 = calcLevel(score, t7);
        $[16] = score;
        $[17] = t7;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    const result = t8;
    let t9;
    if ($[19] !== submitted) {
        t9 = ({
            "Test[onSelect]": (qid, cid)=>{
                if (submitted) {
                    return;
                }
                setAnswers({
                    "Test[onSelect > setAnswers()]": (a)=>({
                            ...a,
                            [qid]: cid
                        })
                }["Test[onSelect > setAnswers()]"]);
            }
        })["Test[onSelect]"];
        $[19] = submitted;
        $[20] = t9;
    } else {
        t9 = $[20];
    }
    const onSelect = t9;
    let t10;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "Test[onSubmit]": ()=>setSubmitted(true)
        })["Test[onSubmit]"];
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    const onSubmit = t10;
    let t11;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = ({
            "Test[onReset]": ()=>{
                setAnswers({});
                setSubmitted(false);
            }
        })["Test[onReset]"];
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    const onReset = t11;
    let t12;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-2xl font-semibold text-slate-900",
            children: "English Level Test"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 864,
            columnNumber: 11
        }, this);
        $[23] = t12;
    } else {
        t12 = $[23];
    }
    let t13;
    if ($[24] !== questions.length) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-slate-500",
            children: [
                questions.length,
                " асуулт • 2 оноо/асуулт • Хариулаад Submit дар."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 871,
            columnNumber: 11
        }, this);
        $[24] = questions.length;
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== dbMessage) {
        t14 = dbMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-slate-500",
            children: dbMessage
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 879,
            columnNumber: 23
        }, this) : null;
        $[26] = dbMessage;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t13 || $[29] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 887,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t14;
        $[30] = t15;
    } else {
        t15 = $[30];
    }
    let t16;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500",
            children: "Progress"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 896,
            columnNumber: 11
        }, this);
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    const t17 = questions.length - unansweredCount;
    let t18;
    if ($[32] !== questions.length || $[33] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3",
            children: [
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-1 text-sm font-semibold text-slate-900",
                    children: [
                        t17,
                        "/",
                        questions.length
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/_components/tests.tsx",
                    lineNumber: 904,
                    columnNumber: 91
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 904,
            columnNumber: 11
        }, this);
        $[32] = questions.length;
        $[33] = t17;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== t15 || $[36] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border-b border-slate-200 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-4xl items-start justify-between gap-4 px-4 py-6",
                children: [
                    t15,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/_components/tests.tsx",
                lineNumber: 913,
                columnNumber: 63
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 913,
            columnNumber: 11
        }, this);
        $[35] = t15;
        $[36] = t18;
        $[37] = t19;
    } else {
        t19 = $[37];
    }
    const t20 = dbLoading ? "Working..." : "Seed 28 questions to DB";
    let t21;
    if ($[38] !== dbLoading || $[39] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 flex flex-wrap items-center gap-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: seedQuestionsToDb,
                disabled: dbLoading,
                className: "rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-70",
                children: t20
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/tests.tsx",
                lineNumber: 923,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 923,
            columnNumber: 11
        }, this);
        $[38] = dbLoading;
        $[39] = t20;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== answers || $[42] !== onSelect || $[43] !== questions || $[44] !== submitted) {
        let t23;
        if ($[46] !== answers || $[47] !== onSelect || $[48] !== submitted) {
            t23 = ({
                "Test[questions.map()]": (q_2, idx)=>{
                    const picked_0 = answers[q_2.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs font-medium text-slate-500",
                                                children: [
                                                    "Question ",
                                                    idx + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/user/_components/tests.tsx",
                                                lineNumber: 937,
                                                columnNumber: 168
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-1 text-base font-semibold text-slate-900",
                                                children: q_2.prompt
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/user/_components/tests.tsx",
                                                lineNumber: 937,
                                                columnNumber: 244
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/_components/tests.tsx",
                                        lineNumber: 937,
                                        columnNumber: 163
                                    }, this),
                                    submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700",
                                        children: [
                                            "+",
                                            picked_0 ? q_2.choices.find({
                                                "Test[questions.map() > q_2.choices.find()]": (c_0)=>c_0.id === picked_0
                                            }["Test[questions.map() > q_2.choices.find()]"])?.score ?? 0 : 0,
                                            " pts"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/user/_components/tests.tsx",
                                        lineNumber: 937,
                                        columnNumber: 342
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/_components/tests.tsx",
                                lineNumber: 937,
                                columnNumber: 107
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid gap-2",
                                children: q_2.choices.map({
                                    "Test[questions.map() > q_2.choices.map()]": (c_1)=>{
                                        const isSelected = picked_0 === c_1.id;
                                        const best = submitted ? c_1.score === 2 : false;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: {
                                                "Test[questions.map() > q_2.choices.map() > <button>.onClick]": ()=>onSelect(q_2.id, c_1.id)
                                            }["Test[questions.map() > q_2.choices.map() > <button>.onClick]"],
                                            className: [
                                                "flex w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-left text-sm transition",
                                                submitted ? best ? "border-emerald-200 bg-emerald-50" : isSelected ? "border-slate-300 bg-slate-50" : "border-slate-200 bg-white" : isSelected ? "border-sky-200 bg-sky-50" : "border-slate-200 bg-white hover:bg-slate-50"
                                            ].join(" "),
                                            "aria-pressed": isSelected,
                                            disabled: submitted,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-slate-900",
                                                    children: c_1.text
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/_components/tests.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 485
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: [
                                                        "rounded-full px-2 py-1 text-xs",
                                                        submitted ? best ? "bg-white text-emerald-700 border border-emerald-200" : "bg-white text-slate-600 border border-slate-200" : isSelected ? "bg-white text-sky-700 border border-sky-200" : "bg-white text-slate-600 border border-slate-200"
                                                    ].join(" "),
                                                    children: submitted ? `${c_1.score}pt` : isSelected ? "Selected" : "Choose"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/_components/tests.tsx",
                                                    lineNumber: 945,
                                                    columnNumber: 535
                                                }, this)
                                            ]
                                        }, c_1.id, true, {
                                            fileName: "[project]/src/app/user/_components/tests.tsx",
                                            lineNumber: 943,
                                            columnNumber: 26
                                        }, this);
                                    }
                                }["Test[questions.map() > q_2.choices.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/_components/tests.tsx",
                                lineNumber: 939,
                                columnNumber: 106
                            }, this),
                            submitted && q_2.explanation ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs font-semibold text-slate-500",
                                        children: "Why"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/_components/tests.tsx",
                                        lineNumber: 947,
                                        columnNumber: 198
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1",
                                        children: q_2.explanation
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/user/_components/tests.tsx",
                                        lineNumber: 947,
                                        columnNumber: 261
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/user/_components/tests.tsx",
                                lineNumber: 947,
                                columnNumber: 101
                            }, this) : null
                        ]
                    }, q_2.id, true, {
                        fileName: "[project]/src/app/user/_components/tests.tsx",
                        lineNumber: 937,
                        columnNumber: 18
                    }, this);
                }
            })["Test[questions.map()]"];
            $[46] = answers;
            $[47] = onSelect;
            $[48] = submitted;
            $[49] = t23;
        } else {
            t23 = $[49];
        }
        t22 = questions.map(t23);
        $[41] = answers;
        $[42] = onSelect;
        $[43] = questions;
        $[44] = submitted;
        $[45] = t22;
    } else {
        t22 = $[45];
    }
    let t23;
    if ($[50] !== maxScore || $[51] !== questions.length || $[52] !== result || $[53] !== score || $[54] !== submitted || $[55] !== unansweredCount) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
            children: !submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm text-slate-600",
                        children: unansweredCount === 0 ? "\u0411\u044D\u043B\u044D\u043D \u0431\u043E\u043B Submit \u0434\u0430\u0440." : `Дутуу: ${unansweredCount} асуулт байна.`
                    }, void 0, false, {
                        fileName: "[project]/src/app/user/_components/tests.tsx",
                        lineNumber: 968,
                        columnNumber: 185
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onReset,
                                className: "rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50",
                                children: "Reset"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/_components/tests.tsx",
                                lineNumber: 968,
                                columnNumber: 407
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onSubmit,
                                disabled: unansweredCount > 0 || questions.length === 0,
                                className: "rounded-xl border border-sky-200 bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60",
                                children: "Submit"
                            }, void 0, false, {
                                fileName: "[project]/src/app/user/_components/tests.tsx",
                                lineNumber: 968,
                                columnNumber: 568
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/user/_components/tests.tsx",
                        lineNumber: 968,
                        columnNumber: 379
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/_components/tests.tsx",
                lineNumber: 968,
                columnNumber: 101
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResultCard, {
                score: score,
                maxScore: maxScore,
                level: result.level,
                note: result.note,
                onReset: onReset
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/tests.tsx",
                lineNumber: 968,
                columnNumber: 860
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 968,
            columnNumber: 11
        }, this);
        $[50] = maxScore;
        $[51] = questions.length;
        $[52] = result;
        $[53] = score;
        $[54] = submitted;
        $[55] = unansweredCount;
        $[56] = t23;
    } else {
        t23 = $[56];
    }
    let t24;
    if ($[57] !== t22 || $[58] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6",
            children: [
                t22,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 981,
            columnNumber: 11
        }, this);
        $[57] = t22;
        $[58] = t23;
        $[59] = t24;
    } else {
        t24 = $[59];
    }
    let t25;
    if ($[60] !== t21 || $[61] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl px-4 py-8",
            children: [
                t21,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 990,
            columnNumber: 11
        }, this);
        $[60] = t21;
        $[61] = t24;
        $[62] = t25;
    } else {
        t25 = $[62];
    }
    let t26;
    if ($[63] !== t19 || $[64] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                t19,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 999,
            columnNumber: 11
        }, this);
        $[63] = t19;
        $[64] = t25;
        $[65] = t26;
    } else {
        t26 = $[65];
    }
    return t26;
}
_s(Test, "NSN0p7DEFvJVKhoWYyQp+hp1TK8=");
_c = Test;
function _TestSeedQuestionsToDbQUESTIONS_SEEDMap(q) {
    return {
        id: q.id,
        type: q.type,
        prompt: q.prompt,
        choices: q.choices,
        explanation: q.explanation ?? null
    };
}
function ResultCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(27);
    if ($[0] !== "d8632a5a59577722c2cb68bcce9c8a5a5a7134681951ad7da9f6a0d6b658ecb1") {
        for(let $i = 0; $i < 27; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8632a5a59577722c2cb68bcce9c8a5a5a7134681951ad7da9f6a0d6b658ecb1";
    }
    const { score, maxScore, level, note, onReset } = t0;
    let t1;
    if ($[1] !== maxScore || $[2] !== score) {
        t1 = maxScore > 0 ? Math.round(score / maxScore * 100) : 0;
        $[1] = maxScore;
        $[2] = score;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const pct = t1;
    const badge = level === "Beginner" ? "border-amber-200 bg-amber-50 text-amber-700" : level === "Intermediate" ? "border-sky-200 bg-sky-50 text-sky-700" : "border-emerald-200 bg-emerald-50 text-emerald-700";
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs font-semibold text-slate-500",
            children: "Your result"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 1045,
            columnNumber: 10
        }, this);
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== maxScore || $[6] !== pct || $[7] !== score) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-2xl font-semibold text-slate-900",
            children: [
                score,
                "/",
                maxScore,
                " (",
                pct,
                "%)"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 1052,
            columnNumber: 10
        }, this);
        $[5] = maxScore;
        $[6] = pct;
        $[7] = score;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== badge) {
        t4 = [
            "rounded-full border px-3 py-1 text-sm font-semibold",
            badge
        ];
        $[9] = badge;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const t5 = t4.join(" ");
    let t6;
    if ($[11] !== level || $[12] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t5,
            children: level
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 1071,
            columnNumber: 10
        }, this);
        $[11] = level;
        $[12] = t5;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t3 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1 flex items-center gap-2",
            children: [
                t3,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 1080,
            columnNumber: 10
        }, this);
        $[14] = t3;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== note) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-sm text-slate-600",
            children: note
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 1089,
            columnNumber: 10
        }, this);
        $[17] = note;
        $[18] = t8;
    } else {
        t8 = $[18];
    }
    let t9;
    if ($[19] !== t7 || $[20] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t7,
                t8
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 1097,
            columnNumber: 10
        }, this);
        $[19] = t7;
        $[20] = t8;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== onReset) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onReset,
            className: "rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 hover:bg-slate-50",
            children: "Retake test"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 1106,
            columnNumber: 11
        }, this);
        $[22] = onReset;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t10 || $[25] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/tests.tsx",
            lineNumber: 1114,
            columnNumber: 11
        }, this);
        $[24] = t10;
        $[25] = t9;
        $[26] = t11;
    } else {
        t11 = $[26];
    }
    return t11;
}
_c1 = ResultCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "Test");
__turbopack_context__.k.register(_c1, "ResultCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9ce58d7c._.js.map