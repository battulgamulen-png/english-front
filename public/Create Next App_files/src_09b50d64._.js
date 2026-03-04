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
"[project]/src/app/user/_components/grammar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Grammar
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
const INITIAL_LESSONS = [
    // =========================
    // ACTIVE VOICE — 16
    // =========================
    {
        id: "a-present-simple",
        titleEn: "Present Simple",
        titleMn: "Одоо цаг (ердийн)",
        level: "A1",
        tags: [
            "Tense",
            "Basics"
        ],
        ruleEn: "Habits, routines, facts, and general truths.",
        ruleMn: "Дадал зуршил, хэвшил, баримт, ерөнхий үнэн дээр хэрэглэнэ.",
        formEn: "S + V(s/es) | do/does not + V | Do/Does + S + V?",
        formMn: "S + V(s/es) | do/does not + V | Do/Does + S + V?",
        examples: [
            {
                en: "I study every day.",
                mn: "Би өдөр бүр хичээллэдэг."
            },
            {
                en: "She works in a bank.",
                mn: "Тэр банкинд ажилладаг."
            },
            {
                en: "Do you like tea?",
                mn: "Чи цайнд дуртай юу?"
            }
        ]
    },
    {
        id: "a-present-continuous",
        titleEn: "Present Continuous",
        titleMn: "Одоо үргэлжилж буй цаг",
        level: "A2",
        tags: [
            "Tense"
        ],
        ruleEn: "Actions happening now; temporary situations; trends.",
        ruleMn: "Яг одоо болж буй үйлдэл; түр зуурын нөхцөл; чиг хандлага.",
        formEn: "S + am/is/are + V-ing",
        formMn: "S + am/is/are + V-ing",
        examples: [
            {
                en: "I am studying now.",
                mn: "Би одоо хичээллэж байна."
            },
            {
                en: "She is working this week.",
                mn: "Тэр энэ долоо хоногт ажиллаж байна."
            },
            {
                en: "Are you listening?",
                mn: "Чи сонсож байна уу?"
            }
        ]
    },
    {
        id: "a-present-perfect",
        titleEn: "Present Perfect",
        titleMn: "Одоо төгс цаг",
        level: "B1",
        tags: [
            "Tense"
        ],
        ruleEn: "Life experience, unfinished time, result now.",
        ruleMn: "Туршлага, дуусаагүй цаг хугацаа, одоо нөлөөлсөн үр дүн.",
        formEn: "S + have/has + V3",
        formMn: "S + have/has + V3",
        examples: [
            {
                en: "I have visited Japan.",
                mn: "Би Японд очиж үзсэн."
            },
            {
                en: "She has just finished her homework.",
                mn: "Тэр дөнгөж даалгавраа дуусгалаа."
            },
            {
                en: "Have you ever tried sushi?",
                mn: "Чи суши идэж үзсэн үү?"
            }
        ]
    },
    {
        id: "a-present-perfect-continuous",
        titleEn: "Present Perfect Continuous",
        titleMn: "Одоо төгс үргэлжлэх цаг",
        level: "B2",
        tags: [
            "Tense"
        ],
        ruleEn: "An action started in the past and continues to now (focus on duration).",
        ruleMn: "Өнгөрсөнд эхэлж одоо хүртэл үргэлжилж буй үйлдэл (үргэлжилсэн хугацаа онцолно).",
        formEn: "S + have/has been + V-ing",
        formMn: "S + have/has been + V-ing",
        examples: [
            {
                en: "I have been learning English for two years.",
                mn: "Би 2 жил англи хэл сурч байна."
            },
            {
                en: "She has been working here since 2022.",
                mn: "Тэр 2022 оноос хойш энд ажиллаж байна."
            },
            {
                en: "Have you been waiting long?",
                mn: "Чи удаан хүлээж байна уу?"
            }
        ]
    },
    {
        id: "a-past-simple",
        titleEn: "Past Simple",
        titleMn: "Өнгөрсөн цаг (ердийн)",
        level: "A2",
        tags: [
            "Tense"
        ],
        ruleEn: "Completed actions in the past (finished time).",
        ruleMn: "Өнгөрсөнд бүрэн дууссан үйлдэл (дууссан цаг хугацаа).",
        formEn: "S + V2/ed | did not + V | Did + S + V?",
        formMn: "S + V2/ed | did not + V | Did + S + V?",
        examples: [
            {
                en: "I met him yesterday.",
                mn: "Би өчигдөр түүнтэй уулзсан."
            },
            {
                en: "She didn’t go to class.",
                mn: "Тэр хичээлдээ яваагүй."
            },
            {
                en: "Did you call me?",
                mn: "Чи над руу залгасан уу?"
            }
        ]
    },
    {
        id: "a-past-continuous",
        titleEn: "Past Continuous",
        titleMn: "Өнгөрсөн үргэлжилж буй цаг",
        level: "B1",
        tags: [
            "Tense"
        ],
        ruleEn: "Action in progress at a specific time in the past; background action.",
        ruleMn: "Өнгөрсөнд тодорхой цагт үргэлжилж байсан үйлдэл; дэвсгэр үйлдэл.",
        formEn: "S + was/were + V-ing",
        formMn: "S + was/were + V-ing",
        examples: [
            {
                en: "I was studying at 8 PM.",
                mn: "Би орой 8-д хичээллэж байсан."
            },
            {
                en: "She was cooking when I arrived.",
                mn: "Намайг ирэхэд тэр хоол хийж байсан."
            },
            {
                en: "Were they sleeping?",
                mn: "Тэд унтаж байсан уу?"
            }
        ]
    },
    {
        id: "a-past-perfect",
        titleEn: "Past Perfect",
        titleMn: "Өнгөрсөн төгс цаг",
        level: "B2",
        tags: [
            "Tense"
        ],
        ruleEn: "One action happened before another action in the past.",
        ruleMn: "Өнгөрсөнд нэг үйлдэл нөгөөгөөсөө өмнө болсон.",
        formEn: "S + had + V3",
        formMn: "S + had + V3",
        examples: [
            {
                en: "I had finished work before he called.",
                mn: "Тэр залгахаас өмнө би ажлаа дуусгасан байсан."
            },
            {
                en: "She had left when we arrived.",
                mn: "Биднийг ирэхэд тэр явсан байсан."
            },
            {
                en: "Had you seen it before?",
                mn: "Чи өмнө нь үүнийг үзэж байсан уу?"
            }
        ]
    },
    {
        id: "a-past-perfect-continuous",
        titleEn: "Past Perfect Continuous",
        titleMn: "Өнгөрсөн төгс үргэлжлэх цаг",
        level: "C1",
        tags: [
            "Tense"
        ],
        ruleEn: "Duration before a past point; cause/background for a past result.",
        ruleMn: "Өнгөрсөн цагийн цэгээс өмнөх үргэлжилсэн хугацаа; өнгөрсөн үр дүнгийн шалтгаан.",
        formEn: "S + had been + V-ing",
        formMn: "S + had been + V-ing",
        examples: [
            {
                en: "I had been studying for hours before the exam.",
                mn: "Шалгалтаас өмнө би хэдэн цаг хичээллэсэн байсан."
            },
            {
                en: "She was tired because she had been working.",
                mn: "Тэр ажиллаж байсан болохоор ядарсан байсан."
            },
            {
                en: "Had they been waiting long?",
                mn: "Тэд удаан хүлээж байсан уу?"
            }
        ]
    },
    {
        id: "a-future-will",
        titleEn: "Future (will)",
        titleMn: "Ирээдүй цаг (will)",
        level: "A2",
        tags: [
            "Tense",
            "Basics"
        ],
        ruleEn: "Predictions, promises, spontaneous decisions.",
        ruleMn: "Таамаглал, амлалт, гэнэтийн шийдвэр.",
        formEn: "S + will + V",
        formMn: "S + will + V",
        examples: [
            {
                en: "I will help you.",
                mn: "Би чамд тусална."
            },
            {
                en: "It will rain tomorrow.",
                mn: "Маргааш бороо орох байх."
            },
            {
                en: "Will you call me later?",
                mn: "Дараа нь над руу залгах уу?"
            }
        ]
    },
    {
        id: "a-future-going-to",
        titleEn: "Future (be going to)",
        titleMn: "Ирээдүй (be going to)",
        level: "A2",
        tags: [
            "Tense"
        ],
        ruleEn: "Plans/intentions; prediction based on evidence now.",
        ruleMn: "Төлөвлөгөө/зорилго; одоогийн баримтад тулгуурласан таамаг.",
        formEn: "S + am/is/are going to + V",
        formMn: "S + am/is/are going to + V",
        examples: [
            {
                en: "I am going to study tonight.",
                mn: "Би өнөө орой хичээллэх гэж байна."
            },
            {
                en: "She is going to buy a new phone.",
                mn: "Тэр шинэ утас авах гэж байна."
            },
            {
                en: "Look at the clouds! It’s going to rain.",
                mn: "Үүл хараач! Бороо орох нь."
            }
        ]
    },
    {
        id: "a-future-present-continuous",
        titleEn: "Present Continuous for Future",
        titleMn: "Одоо үргэлжлэх (ирээдүйн тов)",
        level: "B1",
        tags: [
            "Tense"
        ],
        ruleEn: "Fixed arrangements in the near future.",
        ruleMn: "Ойрын ирээдүйн товлогдсон, тохирсон зүйл.",
        formEn: "S + am/is/are + V-ing (future meaning)",
        formMn: "S + am/is/are + V-ing (ирээдүй утгатай)",
        examples: [
            {
                en: "I am meeting my teacher tomorrow.",
                mn: "Би маргааш багштайгаа уулзана."
            },
            {
                en: "She is flying to Seoul next week.",
                mn: "Тэр ирэх долоо хоногт Сөүл рүү ниснэ."
            },
            {
                en: "Are you coming tonight?",
                mn: "Чи өнөө орой ирэх үү?"
            }
        ]
    },
    {
        id: "a-future-present-simple",
        titleEn: "Present Simple for Future (timetables)",
        titleMn: "Одоо цаг (хуваарь/хуваарьт ирээдүй)",
        level: "B1",
        tags: [
            "Tense"
        ],
        ruleEn: "Schedules and timetables (train, class, flight).",
        ruleMn: "Хуваарь, цагийн хуваарь (галт тэрэг, хичээл, нислэг).",
        formEn: "S + V(s/es) (future schedule)",
        formMn: "S + V(s/es) (хуваарьт ирээдүй)",
        examples: [
            {
                en: "The train leaves at 7 AM.",
                mn: "Галт тэрэг өглөө 7-д явна."
            },
            {
                en: "Class starts at 9.",
                mn: "Хичээл 9-д эхэлнэ."
            },
            {
                en: "What time does the movie begin?",
                mn: "Кино хэдэн цагт эхлэх вэ?"
            }
        ]
    },
    {
        id: "a-future-continuous",
        titleEn: "Future Continuous",
        titleMn: "Ирээдүй үргэлжлэх цаг",
        level: "B2",
        tags: [
            "Tense"
        ],
        ruleEn: "Action in progress at a specific time in the future.",
        ruleMn: "Ирээдүйд тодорхой цагт үргэлжилж байх үйлдэл.",
        formEn: "S + will be + V-ing",
        formMn: "S + will be + V-ing",
        examples: [
            {
                en: "I will be studying at 8 PM.",
                mn: "Би орой 8-д хичээллэж байх болно."
            },
            {
                en: "She will be working tomorrow morning.",
                mn: "Тэр маргааш өглөө ажиллаж байх болно."
            },
            {
                en: "Will you be using your laptop?",
                mn: "Чи лаптопоо ашиглаж байх уу?"
            }
        ]
    },
    {
        id: "a-future-perfect",
        titleEn: "Future Perfect",
        titleMn: "Ирээдүй төгс цаг",
        level: "C1",
        tags: [
            "Tense"
        ],
        ruleEn: "Completed before a specific future time.",
        ruleMn: "Ирээдүйн тодорхой цагаас өмнө дууссан байх үйлдэл.",
        formEn: "S + will have + V3",
        formMn: "S + will have + V3",
        examples: [
            {
                en: "I will have finished by 6 PM.",
                mn: "Би 6 гэхэд дуусгасан байх болно."
            },
            {
                en: "She will have left before you arrive.",
                mn: "Чамайг ирэхээс өмнө тэр явсан байх болно."
            },
            {
                en: "Will you have completed it by Friday?",
                mn: "Баасан гэхэд дуусгасан байх уу?"
            }
        ]
    },
    {
        id: "a-future-perfect-continuous",
        titleEn: "Future Perfect Continuous",
        titleMn: "Ирээдүй төгс үргэлжлэх цаг",
        level: "C1",
        tags: [
            "Tense"
        ],
        ruleEn: "Duration up to a future point (focus on how long).",
        ruleMn: "Ирээдүйн цэг хүртэлх үргэлжилсэн хугацаа (хэдий хэр удаан гэдгийг онцолно).",
        formEn: "S + will have been + V-ing",
        formMn: "S + will have been + V-ing",
        examples: [
            {
                en: "By June, I will have been working here for two years.",
                mn: "Зургаадугаар сар гэхэд би энд 2 жил ажилласан байх болно."
            },
            {
                en: "She will have been studying for hours by then.",
                mn: "Тэр үед тэр хэдэн цаг хичээллэсэн байх болно."
            },
            {
                en: "Will you have been living there long?",
                mn: "Чи тэнд удаан амьдарсан байх уу?"
            }
        ]
    },
    {
        id: "a-future-in-the-past",
        titleEn: "Future in the Past (would)",
        titleMn: "Өнгөрснөөс харсан ирээдүй (would)",
        level: "B2",
        tags: [
            "Tense"
        ],
        ruleEn: "A future action viewed from a point in the past.",
        ruleMn: "Өнгөрсөн цагийн цэгээс цааш болох байсан үйлдэл.",
        formEn: "S + would + V",
        formMn: "S + would + V",
        examples: [
            {
                en: "I knew I would pass the exam.",
                mn: "Би шалгалтаа тэнцэнэ гэдгээ мэдэж байсан."
            },
            {
                en: "She said she would call later.",
                mn: "Тэр дараа залгана гэж хэлсэн."
            },
            {
                en: "We thought it would be easy.",
                mn: "Бид амархан байна гэж бодсон."
            }
        ]
    },
    {
        id: "a-used-to",
        titleEn: "Used to (past habits/states)",
        titleMn: "Used to (өмнө нь тэгдэг/тийм байсан)",
        level: "B1",
        tags: [
            "Tense",
            "Basics"
        ],
        ruleEn: "Past habits or states that are not true now.",
        ruleMn: "Одоо байхгүй болсон өмнөх дадал зуршил эсвэл байдал.",
        formEn: "S + used to + V | didn’t use to + V | Did + S + use to + V?",
        formMn: "S + used to + V | didn’t use to + V | Did + S + use to + V?",
        examples: [
            {
                en: "I used to play football.",
                mn: "Би өмнө нь хөлбөмбөг тоглодог байсан."
            },
            {
                en: "She didn’t use to like coffee.",
                mn: "Тэр өмнө нь кофенд дургүй байсан."
            },
            {
                en: "Did you use to live here?",
                mn: "Чи өмнө нь энд амьдардаг байсан уу?"
            }
        ]
    },
    // =========================
    // PASSIVE VOICE — 10
    // =========================
    {
        id: "p-present-simple",
        titleEn: "Passive: Present Simple",
        titleMn: "Идэвхгүй хэв: Одоо цаг",
        level: "B1",
        tags: [
            "Passive"
        ],
        ruleEn: "Focus on the action/result, not the doer.",
        ruleMn: "Хийсэн хүнээс илүү үйлдэл/үр дүнг онцлоно.",
        formEn: "am/is/are + V3",
        formMn: "am/is/are + V3",
        examples: [
            {
                en: "English is spoken here.",
                mn: "Энд англиар ярьдаг."
            },
            {
                en: "The room is cleaned every day.",
                mn: "Өрөөг өдөр бүр цэвэрлэдэг."
            },
            {
                en: "Are tickets sold online?",
                mn: "Тасалбарыг онлайнаар зардаг уу?"
            }
        ]
    },
    {
        id: "p-present-continuous",
        titleEn: "Passive: Present Continuous",
        titleMn: "Идэвхгүй хэв: Одоо үргэлжлэх",
        level: "B2",
        tags: [
            "Passive"
        ],
        ruleEn: "Something is being done now.",
        ruleMn: "Яг одоо хийгдэж буй үйлдэл.",
        formEn: "am/is/are being + V3",
        formMn: "am/is/are being + V3",
        examples: [
            {
                en: "The report is being prepared.",
                mn: "Тайлан бэлдэгдэж байна."
            },
            {
                en: "A new bridge is being built.",
                mn: "Шинэ гүүр баригдаж байна."
            },
            {
                en: "Is the food being cooked?",
                mn: "Хоол хийгдэж байна уу?"
            }
        ]
    },
    {
        id: "p-present-perfect",
        titleEn: "Passive: Present Perfect",
        titleMn: "Идэвхгүй хэв: Одоо төгс",
        level: "B2",
        tags: [
            "Passive"
        ],
        ruleEn: "Action completed; result is relevant now.",
        ruleMn: "Үйлдэл хийгдсэн; үр дүн нь одоо чухал.",
        formEn: "have/has been + V3",
        formMn: "have/has been + V3",
        examples: [
            {
                en: "The documents have been sent.",
                mn: "Баримтууд илгээгдсэн."
            },
            {
                en: "The car has been repaired.",
                mn: "Машин засагдсан."
            },
            {
                en: "Has the email been received?",
                mn: "Имэйл ирсэн үү?"
            }
        ]
    },
    {
        id: "p-past-simple",
        titleEn: "Passive: Past Simple",
        titleMn: "Идэвхгүй хэв: Өнгөрсөн цаг",
        level: "B1",
        tags: [
            "Passive"
        ],
        ruleEn: "Past completed action; focus on object/result.",
        ruleMn: "Өнгөрсөнд дууссан үйлдэл; объект/үр дүнг онцолно.",
        formEn: "was/were + V3",
        formMn: "was/were + V3",
        examples: [
            {
                en: "The window was broken.",
                mn: "Цонх хагарсан."
            },
            {
                en: "The meeting was canceled.",
                mn: "Хурал цуцлагдсан."
            },
            {
                en: "Were the bills paid?",
                mn: "Төлбөрүүд төлөгдсөн үү?"
            }
        ]
    },
    {
        id: "p-past-continuous",
        titleEn: "Passive: Past Continuous",
        titleMn: "Идэвхгүй хэв: Өнгөрсөн үргэлжлэх",
        level: "C1",
        tags: [
            "Passive"
        ],
        ruleEn: "Action was in progress in the past (passive).",
        ruleMn: "Өнгөрсөнд үргэлжилж байсан үйлдэл (идэвхгүй).",
        formEn: "was/were being + V3",
        formMn: "was/were being + V3",
        examples: [
            {
                en: "The road was being repaired.",
                mn: "Зам засагдаж байсан."
            },
            {
                en: "Dinner was being served.",
                mn: "Оройн хоол зөөгдөж байсан."
            },
            {
                en: "Was the plan being discussed?",
                mn: "Төлөвлөгөөг хэлэлцэж байсан уу?"
            }
        ]
    },
    {
        id: "p-past-perfect",
        titleEn: "Passive: Past Perfect",
        titleMn: "Идэвхгүй хэв: Өнгөрсөн төгс",
        level: "C1",
        tags: [
            "Passive"
        ],
        ruleEn: "Completed before another past action (passive).",
        ruleMn: "Өнгөрсөнд өөр үйлдлээс өмнө дууссан (идэвхгүй).",
        formEn: "had been + V3",
        formMn: "had been + V3",
        examples: [
            {
                en: "The files had been deleted.",
                mn: "Файлууд устгагдсан байсан."
            },
            {
                en: "The tickets had been sold out.",
                mn: "Тасалбар дууссан байсан."
            },
            {
                en: "Had the room been cleaned?",
                mn: "Өрөөг цэвэрлэсэн байсан уу?"
            }
        ]
    },
    {
        id: "p-future-will",
        titleEn: "Passive: Future (will)",
        titleMn: "Идэвхгүй хэв: Ирээдүй (will)",
        level: "B2",
        tags: [
            "Passive"
        ],
        ruleEn: "Future passive for predictions/plans.",
        ruleMn: "Ирээдүйд хийгдэх зүйл (идэвхгүй).",
        formEn: "will be + V3",
        formMn: "will be + V3",
        examples: [
            {
                en: "The results will be announced tomorrow.",
                mn: "Үр дүнг маргааш зарлана."
            },
            {
                en: "The package will be delivered soon.",
                mn: "Илгээмж удахгүй хүргэгдэнэ."
            },
            {
                en: "Will the project be finished on time?",
                mn: "Төсөл хугацаандаа дуусах уу?"
            }
        ]
    },
    {
        id: "p-future-going-to",
        titleEn: "Passive: be going to",
        titleMn: "Идэвхгүй хэв: be going to",
        level: "B2",
        tags: [
            "Passive"
        ],
        ruleEn: "Planned future passive.",
        ruleMn: "Төлөвлөгдсөн ирээдүй (идэвхгүй).",
        formEn: "am/is/are going to be + V3",
        formMn: "am/is/are going to be + V3",
        examples: [
            {
                en: "A new policy is going to be introduced.",
                mn: "Шинэ бодлого нэвтрүүлэх гэж байна."
            },
            {
                en: "The building is going to be painted.",
                mn: "Байшинг будна."
            },
            {
                en: "Are the rules going to be changed?",
                mn: "Дүрмүүд өөрчлөгдөх үү?"
            }
        ]
    },
    {
        id: "p-modal-passive",
        titleEn: "Passive with Modals",
        titleMn: "Туслах үйл үгтэй идэвхгүй хэв",
        level: "B2",
        tags: [
            "Passive",
            "Modal"
        ],
        ruleEn: "Modal + be + V3 (can/must/should...).",
        ruleMn: "Modal + be + V3 (can/must/should...).",
        formEn: "can/must/should + be + V3",
        formMn: "can/must/should + be + V3",
        examples: [
            {
                en: "This problem can be solved.",
                mn: "Энэ асуудлыг шийдэж болно."
            },
            {
                en: "The form must be signed.",
                mn: "Маягтад гарын үсэг заавал зурна."
            },
            {
                en: "The task should be completed today.",
                mn: "Даалгаврыг өнөөдөр дуусгах хэрэгтэй."
            }
        ]
    },
    {
        id: "p-perfect-modal",
        titleEn: "Perfect Modal Passive",
        titleMn: "Perfect modal идэвхгүй хэв",
        level: "C1",
        tags: [
            "Passive",
            "Modal"
        ],
        ruleEn: "Modal + have been + V3 (past possibility/obligation in passive).",
        ruleMn: "Modal + have been + V3 (өнгөрсөн боломж/үүрэг — идэвхгүй).",
        formEn: "might/should/must + have been + V3",
        formMn: "might/should/must + have been + V3",
        examples: [
            {
                en: "The email might have been sent.",
                mn: "Имэйл явсан байж магадгүй."
            },
            {
                en: "The report should have been checked.",
                mn: "Тайланг шалгасан байх ёстой байсан."
            },
            {
                en: "The keys must have been lost.",
                mn: "Түлхүүр алдагдсан байх нь."
            }
        ]
    },
    // =========================
    // CLAUSES — 3
    // =========================
    {
        id: "c-relative-clauses",
        titleEn: "Relative Clauses",
        titleMn: "Хамаатуулах өгүүлбэр (who/which/that)",
        level: "B1",
        tags: [
            "Clauses"
        ],
        ruleEn: "Add extra information about a noun (person/thing).",
        ruleMn: "Нэр үг/хүнийг тодруулж нэмэлт мэдээлэл өгнө.",
        formEn: "noun + who/which/that + clause",
        formMn: "noun + who/which/that + clause",
        examples: [
            {
                en: "The man who lives next door is a doctor.",
                mn: "Хажуу айлд амьдардаг хүн эмч."
            },
            {
                en: "This is the book that I told you about.",
                mn: "Энэ бол миний чамд ярьсан ном."
            },
            {
                en: "I like movies which make me think.",
                mn: "Намайг бодолд оруулдаг кинонд би дуртай."
            }
        ]
    },
    {
        id: "c-noun-clauses",
        titleEn: "Noun Clauses (that/wh-)",
        titleMn: "Нэр өгүүлбэр (what/that/why...)",
        level: "B2",
        tags: [
            "Clauses"
        ],
        ruleEn: "A clause that acts like a noun (subject/object).",
        ruleMn: "Нэр үгийн үүрэг гүйцэтгэх өгүүлбэр (эзэн/тусагдахуун).",
        formEn: "I know that... / What you said is...",
        formMn: "I know that... / What you said is...",
        examples: [
            {
                en: "I know that you are busy.",
                mn: "Чамайг завгүй гэдгийг би мэднэ."
            },
            {
                en: "What you said was helpful.",
                mn: "Чиний хэлсэн зүйл хэрэгтэй байсан."
            },
            {
                en: "I don’t understand why he left.",
                mn: "Тэр яагаад явсныг би ойлгохгүй байна."
            }
        ]
    },
    {
        id: "c-adverb-clauses",
        titleEn: "Adverb Clauses (time/reason/contrast)",
        titleMn: "Дайвар өгүүлбэр (цаг/шалтгаан/эсрэгцэл)",
        level: "B2",
        tags: [
            "Clauses"
        ],
        ruleEn: "Gives time, reason, condition, contrast, etc.",
        ruleMn: "Цаг, шалтгаан, нөхцөл, эсрэгцэл зэрэг утга нэмнэ.",
        formEn: "when/because/although + clause",
        formMn: "when/because/although + clause",
        examples: [
            {
                en: "I will call you when I arrive.",
                mn: "Би очоод чам руу залгана."
            },
            {
                en: "I stayed home because it was raining.",
                mn: "Бороо орж байсан болохоор гэртээ үлдсэн."
            },
            {
                en: "Although he was tired, he kept working.",
                mn: "Ядарсан ч гэсэн тэр үргэлжлүүлэн ажилласан."
            }
        ]
    },
    // =========================
    // CONDITIONALS — 5
    // =========================
    {
        id: "cond-zero",
        titleEn: "Zero Conditional",
        titleMn: "0-р нөхцөлт өгүүлбэр",
        level: "B1",
        tags: [
            "Conditionals"
        ],
        ruleEn: "General truths: If + present, present.",
        ruleMn: "Ерөнхий үнэн: If + present, present.",
        formEn: "If + present simple, present simple.",
        formMn: "If + present simple, present simple.",
        examples: [
            {
                en: "If you heat ice, it melts.",
                mn: "Хэрэв мөс халаавал хайлдаг."
            },
            {
                en: "If I don’t sleep, I feel bad.",
                mn: "Хэрэв би унтахгүй бол муу санагддаг."
            },
            {
                en: "If you mix red and blue, you get purple.",
                mn: "Улаан, цэнхэрийг холивол нил ягаан болно."
            }
        ]
    },
    {
        id: "cond-first",
        titleEn: "First Conditional",
        titleMn: "1-р нөхцөлт өгүүлбэр (боломжит ирээдүй)",
        level: "B1",
        tags: [
            "Conditionals"
        ],
        ruleEn: "Real possible future: If + present, will + V.",
        ruleMn: "Ирээдүйд бодитоор боломжтой: If + present, will + V.",
        formEn: "If + present simple, will + V.",
        formMn: "If + present simple, will + V.",
        examples: [
            {
                en: "If it rains, I will stay home.",
                mn: "Хэрэв бороо орвол би гэртээ байна."
            },
            {
                en: "If you study, you will pass.",
                mn: "Хэрэв хичээллэвэл тэнцэнэ."
            },
            {
                en: "We will be late if we don’t leave now.",
                mn: "Одоо явахгүй бол хоцорно."
            }
        ]
    },
    {
        id: "cond-second",
        titleEn: "Second Conditional",
        titleMn: "2-р нөхцөлт өгүүлбэр (бодит биш/таамаг)",
        level: "B2",
        tags: [
            "Conditionals"
        ],
        ruleEn: "Unreal present/future: If + past, would + V.",
        ruleMn: "Одоо/ирээдүйн бодит биш: If + past, would + V.",
        formEn: "If + past simple, would + V.",
        formMn: "If + past simple, would + V.",
        examples: [
            {
                en: "If I had more time, I would travel.",
                mn: "Хэрэв цаг ихтэй бол би аялна."
            },
            {
                en: "If she knew, she would help.",
                mn: "Хэрэв тэр мэдсэн бол тусална."
            },
            {
                en: "What would you do if you won?",
                mn: "Хэрэв чи хожвол юу хийх вэ?"
            }
        ]
    },
    {
        id: "cond-third",
        titleEn: "Third Conditional",
        titleMn: "3-р нөхцөлт өгүүлбэр (өнгөрсөнд харамсах)",
        level: "C1",
        tags: [
            "Conditionals"
        ],
        ruleEn: "Unreal past: If + had V3, would have V3.",
        ruleMn: "Өнгөрсөн бодит биш: If + had V3, would have V3.",
        formEn: "If + past perfect, would have + V3.",
        formMn: "If + past perfect, would have + V3.",
        examples: [
            {
                en: "If I had studied, I would have passed.",
                mn: "Хэрэв хичээллэсэн бол тэнцэх байсан."
            },
            {
                en: "If she had left earlier, she would have caught the bus.",
                mn: "Хэрэв эрт гарсан бол автобус амжих байсан."
            },
            {
                en: "They wouldn’t have lost if they had trained.",
                mn: "Хэрэв бэлтгэл хийсэн бол тэд хожигдохгүй байсан."
            }
        ]
    },
    {
        id: "cond-mixed",
        titleEn: "Mixed Conditionals",
        titleMn: "Холимог нөхцөлт өгүүлбэр",
        level: "C1",
        tags: [
            "Conditionals"
        ],
        ruleEn: "Mix time: past condition → present result OR present condition → past result.",
        ruleMn: "Цаг холих: өнгөрсөн нөхцөл → одоогийн үр дүн эсвэл одоогийн нөхцөл → өнгөрсөн үр дүн.",
        formEn: "If + had V3, would + V | If + past, would have V3",
        formMn: "If + had V3, would + V | If + past, would have V3",
        examples: [
            {
                en: "If I had slept well, I would feel better now.",
                mn: "Хэрэв сайн унтсан бол одоо гайгүй байх байсан."
            },
            {
                en: "If she were more careful, she wouldn’t have made that mistake.",
                mn: "Хэрэв тэр илүү болгоомжтой байсан бол тэр алдааг хийхгүй байсан."
            },
            {
                en: "If we had saved money, we could buy it now.",
                mn: "Хэрэв мөнгө хадгалсан бол одоо авч чадах байсан."
            }
        ]
    }
];
const LEVELS = [
    "A1",
    "A2",
    "B1",
    "B2",
    "C1"
];
const TAGS = [
    "Basics",
    "Tense",
    "Modal",
    "Conditionals",
    "Passive",
    "Clauses",
    "Vocabulary"
];
function uid() {
    return Math.random().toString(36).slice(2, 10);
}
function mapRowToLesson(row) {
    return {
        id: row.id,
        titleEn: row.title_en,
        titleMn: row.title_mn,
        level: row.level,
        tags: Array.isArray(row.tags) ? row.tags : [
            "Basics"
        ],
        ruleEn: row.rule_en,
        ruleMn: row.rule_mn,
        formEn: row.form_en ?? undefined,
        formMn: row.form_mn ?? undefined,
        examples: row.examples && row.examples.length ? row.examples : [
            {
                en: "Example...",
                mn: "Жишээ..."
            }
        ]
    };
}
function Grammar() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(147);
    if ($[0] !== "bc47c62d6e1bc855cb85339dff5a97ce9694e125302c59a3da4934c47e0f8cef") {
        for(let $i = 0; $i < 147; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bc47c62d6e1bc855cb85339dff5a97ce9694e125302c59a3da4934c47e0f8cef";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const supabase = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = new Set(INITIAL_LESSONS.map(_GrammarINITIAL_LESSONSMap));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const seededIds = t1;
    const [lessons, setLessons] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_LESSONS);
    const [syncStatus, setSyncStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [q, setQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const [tag, setTag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ALL");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("level");
    const [selectedId, setSelectedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_LESSONS[0]?.id ?? "");
    const [newTitleEn, setNewTitleEn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newTitleMn, setNewTitleMn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newLevel, setNewLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("A1");
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            "Basics"
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const [newTags, setNewTags] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [newRuleEn, setNewRuleEn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newRuleMn, setNewRuleMn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newFormEn, setNewFormEn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newFormMn, setNewFormMn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newExEn, setNewExEn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [newExMn, setNewExMn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = ({
            "Grammar[useEffect()]": ()=>{
                let cancelled = false;
                const loadLessons = {
                    "Grammar[useEffect() > loadLessons]": async ()=>{
                        const { data, error } = await supabase.from("grammar_lessons").select("id,title_en,title_mn,level,tags,rule_en,rule_mn,form_en,form_mn,examples").order("created_at", {
                            ascending: false
                        });
                        if (cancelled) {
                            return;
                        }
                        if (error) {
                            setSyncStatus("");
                            return;
                        }
                        const dbLessons = data.map(mapRowToLesson);
                        const merged = [
                            ...dbLessons,
                            ...INITIAL_LESSONS.filter({
                                "Grammar[useEffect() > loadLessons > INITIAL_LESSONS.filter()]": (l)=>!dbLessons.some({
                                        "Grammar[useEffect() > loadLessons > INITIAL_LESSONS.filter() > dbLessons.some()]": (d)=>d.id === l.id
                                    }["Grammar[useEffect() > loadLessons > INITIAL_LESSONS.filter() > dbLessons.some()]"])
                            }["Grammar[useEffect() > loadLessons > INITIAL_LESSONS.filter()]"])
                        ];
                        setLessons(merged);
                        setSelectedId(merged[0]?.id ?? "");
                    }
                }["Grammar[useEffect() > loadLessons]"];
                loadLessons();
                return ()=>{
                    cancelled = true;
                };
            }
        })["Grammar[useEffect()]"];
        t4 = [
            supabase
        ];
        $[4] = t3;
        $[5] = t4;
    } else {
        t3 = $[4];
        t4 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[6] !== lessons || $[7] !== level || $[8] !== q || $[9] !== sortBy || $[10] !== tag) {
        const query = q.trim().toLowerCase();
        let t6;
        if ($[12] !== level) {
            t6 = ({
                "Grammar[lessons.filter()]": (l_0)=>level === "ALL" ? true : l_0.level === level
            })["Grammar[lessons.filter()]"];
            $[12] = level;
            $[13] = t6;
        } else {
            t6 = $[13];
        }
        let t7;
        if ($[14] !== tag) {
            t7 = ({
                "Grammar[(anonymous)()]": (l_1)=>tag === "ALL" ? true : l_1.tags.includes(tag)
            })["Grammar[(anonymous)()]"];
            $[14] = tag;
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        const list = lessons.filter(t6).filter(t7).filter({
            "Grammar[(anonymous)()]": (l_2)=>{
                if (!query) {
                    return true;
                }
                const hay = [
                    l_2.titleEn,
                    l_2.titleMn,
                    l_2.level,
                    l_2.tags.join(" "),
                    l_2.ruleEn,
                    l_2.ruleMn,
                    l_2.formEn ?? "",
                    l_2.formMn ?? "",
                    ...l_2.examples.flatMap(_GrammarAnonymousL_2ExamplesFlatMap)
                ].join(" ").toLowerCase();
                return hay.includes(query);
            }
        }["Grammar[(anonymous)()]"]);
        let t8;
        if ($[16] !== sortBy) {
            t8 = ({
                "Grammar[(anonymous)()]": (a, b)=>{
                    if (sortBy === "title") {
                        return a.titleEn.localeCompare(b.titleEn);
                    }
                    const aIdx = LEVELS.indexOf(a.level);
                    const bIdx = LEVELS.indexOf(b.level);
                    if (aIdx !== bIdx) {
                        return aIdx - bIdx;
                    }
                    return a.titleEn.localeCompare(b.titleEn);
                }
            })["Grammar[(anonymous)()]"];
            $[16] = sortBy;
            $[17] = t8;
        } else {
            t8 = $[17];
        }
        t5 = [
            ...list
        ].sort(t8);
        $[6] = lessons;
        $[7] = level;
        $[8] = q;
        $[9] = sortBy;
        $[10] = tag;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const sorted = t5;
    const filtered = sorted;
    let t6;
    if ($[18] !== filtered[0] || $[19] !== lessons || $[20] !== selectedId) {
        t6 = lessons.find({
            "Grammar[lessons.find()]": (l_3)=>l_3.id === selectedId
        }["Grammar[lessons.find()]"]) ?? filtered[0] ?? null;
        $[18] = filtered[0];
        $[19] = lessons;
        $[20] = selectedId;
        $[21] = t6;
    } else {
        t6 = $[21];
    }
    const selected = t6;
    let t7;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "Grammar[toggleTag]": (t)=>{
                setNewTags({
                    "Grammar[toggleTag > setNewTags()]": (prev)=>prev.includes(t) ? prev.filter({
                            "Grammar[toggleTag > setNewTags() > prev.filter()]": (x)=>x !== t
                        }["Grammar[toggleTag > setNewTags() > prev.filter()]"]) : [
                            ...prev,
                            t
                        ]
                }["Grammar[toggleTag > setNewTags()]"]);
            }
        })["Grammar[toggleTag]"];
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    const toggleTag = t7;
    let t8;
    if ($[23] !== newExEn || $[24] !== newExMn || $[25] !== newFormEn || $[26] !== newFormMn || $[27] !== newLevel || $[28] !== newRuleEn || $[29] !== newRuleMn || $[30] !== newTags || $[31] !== newTitleEn || $[32] !== newTitleMn) {
        t8 = ({
            "Grammar[addLesson]": async ()=>{
                const titleEn = newTitleEn.trim();
                const titleMn = newTitleMn.trim();
                const ruleEn = newRuleEn.trim();
                const ruleMn = newRuleMn.trim();
                if (!titleEn || !titleMn || !ruleEn || !ruleMn) {
                    return;
                }
                const examples = [];
                if (newExEn.trim() && newExMn.trim()) {
                    examples.push({
                        en: newExEn.trim(),
                        mn: newExMn.trim()
                    });
                }
                const localId = `custom-${uid()}`;
                const lesson_0 = {
                    id: localId,
                    titleEn,
                    titleMn,
                    level: newLevel,
                    tags: newTags.length ? newTags : [
                        "Basics"
                    ],
                    ruleEn,
                    ruleMn,
                    formEn: newFormEn.trim() || undefined,
                    formMn: newFormMn.trim() || undefined,
                    examples: examples.length ? examples : [
                        {
                            en: "Example...",
                            mn: "\u0416\u0438\u0448\u044D\u044D..."
                        }
                    ]
                };
                const payload = {
                    title_en: lesson_0.titleEn,
                    title_mn: lesson_0.titleMn,
                    level: lesson_0.level,
                    tags: lesson_0.tags,
                    rule_en: lesson_0.ruleEn,
                    rule_mn: lesson_0.ruleMn,
                    form_en: lesson_0.formEn ?? null,
                    form_mn: lesson_0.formMn ?? null,
                    examples: lesson_0.examples
                };
                const { data: data_0, error: error_0 } = await supabase.from("grammar_lessons").insert(payload).select("id,title_en,title_mn,level,tags,rule_en,rule_mn,form_en,form_mn,examples").single();
                const savedLesson = !error_0 && data_0 ? mapRowToLesson(data_0) : lesson_0;
                setLessons({
                    "Grammar[addLesson > setLessons()]": (prev_0)=>[
                            savedLesson,
                            ...prev_0
                        ]
                }["Grammar[addLesson > setLessons()]"]);
                setSelectedId(savedLesson.id);
                setSyncStatus(error_0 ? "Supabase \u0440\u0443\u0443 \u0445\u0430\u0434\u0433\u0430\u043B\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439. Local \u0434\u044D\u044D\u0440 \u043D\u044D\u043C\u044D\u0433\u0434\u043B\u044D\u044D." : "Supabase \u0440\u0443\u0443 \u0430\u043C\u0436\u0438\u043B\u0442\u0442\u0430\u0439 \u0445\u0430\u0434\u0433\u0430\u043B\u043B\u0430\u0430.");
                setNewTitleEn("");
                setNewTitleMn("");
                setNewRuleEn("");
                setNewRuleMn("");
                setNewFormEn("");
                setNewFormMn("");
                setNewExEn("");
                setNewExMn("");
                setNewTags([
                    "Basics"
                ]);
                setNewLevel("A1");
            }
        })["Grammar[addLesson]"];
        $[23] = newExEn;
        $[24] = newExMn;
        $[25] = newFormEn;
        $[26] = newFormMn;
        $[27] = newLevel;
        $[28] = newRuleEn;
        $[29] = newRuleMn;
        $[30] = newTags;
        $[31] = newTitleEn;
        $[32] = newTitleMn;
        $[33] = t8;
    } else {
        t8 = $[33];
    }
    const addLesson = t8;
    let t9;
    if ($[34] !== lessons || $[35] !== selectedId) {
        t9 = ({
            "Grammar[deleteLesson]": async (id)=>{
                const { error: error_1 } = await supabase.from("grammar_lessons").delete().eq("id", id);
                if (error_1) {
                    setSyncStatus("Supabase-\u0441 \u0443\u0441\u0442\u0433\u0430\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439. Local \u0434\u044D\u044D\u0440 \u0443\u0441\u0442\u0433\u0430\u043B\u0430\u0430.");
                } else {
                    setSyncStatus("Supabase-\u0441 \u0443\u0441\u0442\u0433\u0430\u043B\u0430\u0430.");
                }
                setLessons({
                    "Grammar[deleteLesson > setLessons()]": (prev_1)=>prev_1.filter({
                            "Grammar[deleteLesson > setLessons() > prev_1.filter()]": (l_4)=>l_4.id !== id
                        }["Grammar[deleteLesson > setLessons() > prev_1.filter()]"])
                }["Grammar[deleteLesson > setLessons()]"]);
                if (selectedId === id) {
                    setSelectedId({
                        "Grammar[deleteLesson > setSelectedId()]": ()=>{
                            const next = lessons.find({
                                "Grammar[deleteLesson > setSelectedId() > lessons.find()]": (l_5)=>l_5.id !== id
                            }["Grammar[deleteLesson > setSelectedId() > lessons.find()]"])?.id;
                            return next ?? "";
                        }
                    }["Grammar[deleteLesson > setSelectedId()]"]);
                }
            }
        })["Grammar[deleteLesson]"];
        $[34] = lessons;
        $[35] = selectedId;
        $[36] = t9;
    } else {
        t9 = $[36];
    }
    const deleteLesson = t9;
    let t10;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "Grammar[isCustom]": (id_0)=>id_0 ? !seededIds.has(id_0) : false
        })["Grammar[isCustom]"];
        $[37] = t10;
    } else {
        t10 = $[37];
    }
    const isCustom = t10;
    let t11;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold tracking-tight",
                    children: "English Grammar (EN + MN)"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1091,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-600",
                    children: "Дүрмүүдийг ангилж, хайж, өөрийн хичээл нэмээрэй."
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1091,
                    columnNumber: 100
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1091,
            columnNumber: 11
        }, this);
        $[38] = t11;
    } else {
        t11 = $[38];
    }
    let t12;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = ({
            "Grammar[<input>.onChange]": (e_0)=>setQ(e_0.target.value)
        })["Grammar[<input>.onChange]"];
        $[39] = t12;
    } else {
        t12 = $[39];
    }
    let t13;
    if ($[40] !== q) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: q,
                onChange: t12,
                placeholder: "Search: tense, if, can, ... / \u0445\u0430\u0439\u0445",
                className: "w-full sm:w-[320px] rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/grammar.tsx",
                lineNumber: 1107,
                columnNumber: 37
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1107,
            columnNumber: 11
        }, this);
        $[40] = q;
        $[41] = t13;
    } else {
        t13 = $[41];
    }
    let t14;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "Grammar[<select>.onChange]": (e_1)=>setSortBy(e_1.target.value)
        })["Grammar[<select>.onChange]"];
        $[42] = t14;
    } else {
        t14 = $[42];
    }
    let t15;
    let t16;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "level",
            children: "Sort: Level"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1125,
            columnNumber: 11
        }, this);
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "title",
            children: "Sort: Title"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1126,
            columnNumber: 11
        }, this);
        $[43] = t15;
        $[44] = t16;
    } else {
        t15 = $[43];
        t16 = $[44];
    }
    let t17;
    if ($[45] !== sortBy) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: sortBy,
            onChange: t14,
            className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300",
            children: [
                t15,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1135,
            columnNumber: 11
        }, this);
        $[45] = sortBy;
        $[46] = t17;
    } else {
        t17 = $[46];
    }
    let t18;
    if ($[47] !== t13 || $[48] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-2 sm:flex-row sm:items-center",
                    children: [
                        t13,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1143,
                    columnNumber: 97
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1143,
            columnNumber: 11
        }, this);
        $[47] = t13;
        $[48] = t17;
        $[49] = t18;
    } else {
        t18 = $[49];
    }
    let t19;
    if ($[50] !== syncStatus) {
        t19 = syncStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600",
            children: syncStatus
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1152,
            columnNumber: 24
        }, this) : null;
        $[50] = syncStatus;
        $[51] = t19;
    } else {
        t19 = $[51];
    }
    let t20;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-600",
            children: "Level"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1160,
            columnNumber: 11
        }, this);
        $[52] = t20;
    } else {
        t20 = $[52];
    }
    let t21;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "Grammar[<select>.onChange]": (e_2)=>setLevel(e_2.target.value)
        })["Grammar[<select>.onChange]"];
        $[53] = t21;
    } else {
        t21 = $[53];
    }
    let t22;
    let t23;
    if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ALL",
            children: "All"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1177,
            columnNumber: 11
        }, this);
        t23 = LEVELS.map(_GrammarLEVELSMap);
        $[54] = t22;
        $[55] = t23;
    } else {
        t22 = $[54];
        t23 = $[55];
    }
    let t24;
    if ($[56] !== level) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t20,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: level,
                    onChange: t21,
                    className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300",
                    children: [
                        t22,
                        t23
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1187,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1187,
            columnNumber: 11
        }, this);
        $[56] = level;
        $[57] = t24;
    } else {
        t24 = $[57];
    }
    let t25;
    if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-xs text-slate-600",
            children: "Tag"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1195,
            columnNumber: 11
        }, this);
        $[58] = t25;
    } else {
        t25 = $[58];
    }
    let t26;
    if ($[59] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = ({
            "Grammar[<select>.onChange]": (e_3)=>setTag(e_3.target.value)
        })["Grammar[<select>.onChange]"];
        $[59] = t26;
    } else {
        t26 = $[59];
    }
    let t27;
    let t28;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: "ALL",
            children: "All"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1212,
            columnNumber: 11
        }, this);
        t28 = TAGS.map(_GrammarTAGSMap);
        $[60] = t27;
        $[61] = t28;
    } else {
        t27 = $[60];
        t28 = $[61];
    }
    let t29;
    if ($[62] !== tag) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: tag,
                    onChange: t26,
                    className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300",
                    children: [
                        t27,
                        t28
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1222,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1222,
            columnNumber: 11
        }, this);
        $[62] = tag;
        $[63] = t29;
    } else {
        t29 = $[63];
    }
    let t30;
    if ($[64] !== filtered.length) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-auto text-xs text-slate-500",
            children: [
                "Showing",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-slate-800",
                    children: filtered.length
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1230,
                    columnNumber: 71
                }, this),
                " ",
                "lessons"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1230,
            columnNumber: 11
        }, this);
        $[64] = filtered.length;
        $[65] = t30;
    } else {
        t30 = $[65];
    }
    let t31;
    if ($[66] !== t19 || $[67] !== t24 || $[68] !== t29 || $[69] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex flex-wrap items-center gap-2",
            children: [
                t19,
                t24,
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1238,
            columnNumber: 11
        }, this);
        $[66] = t19;
        $[67] = t24;
        $[68] = t29;
        $[69] = t30;
        $[70] = t31;
    } else {
        t31 = $[70];
    }
    let t32;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-2 flex items-center justify-between px-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-sm font-semibold text-slate-800",
                    children: "Lessons"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1249,
                    columnNumber: 72
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-slate-500",
                    children: "Click to open"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1249,
                    columnNumber: 137
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1249,
            columnNumber: 11
        }, this);
        $[71] = t32;
    } else {
        t32 = $[71];
    }
    let t33;
    if ($[72] !== filtered || $[73] !== selected?.id) {
        let t34;
        if ($[75] !== selected?.id) {
            t34 = ({
                "Grammar[filtered.map()]": (l_6)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "Grammar[filtered.map() > <button>.onClick]": ()=>setSelectedId(l_6.id)
                        }["Grammar[filtered.map() > <button>.onClick]"],
                        className: [
                            "w-full rounded-2xl border px-3 py-3 text-left transition",
                            selected?.id === l_6.id ? "border-slate-300 bg-slate-50" : "border-slate-200 bg-white hover:bg-slate-50"
                        ].join(" "),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-semibold",
                                            children: l_6.titleEn
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1261,
                                            columnNumber: 308
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-slate-600",
                                            children: l_6.titleMn
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1261,
                                            columnNumber: 366
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-700",
                                                    children: l_6.level
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                                    lineNumber: 1261,
                                                    columnNumber: 470
                                                }, this),
                                                l_6.tags.slice(0, 3).map(_GrammarFilteredMapAnonymous),
                                                l_6.tags.length > 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-500",
                                                    children: [
                                                        "+",
                                                        l_6.tags.length - 3
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                                    lineNumber: 1261,
                                                    columnNumber: 670
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1261,
                                            columnNumber: 425
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                    lineNumber: 1261,
                                    columnNumber: 303
                                }, this),
                                isCustom(l_6.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-500",
                                    children: "custom"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                    lineNumber: 1261,
                                    columnNumber: 842
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                            lineNumber: 1261,
                            columnNumber: 247
                        }, this)
                    }, l_6.id, false, {
                        fileName: "[project]/src/app/user/_components/grammar.tsx",
                        lineNumber: 1259,
                        columnNumber: 43
                    }, this)
            })["Grammar[filtered.map()]"];
            $[75] = selected?.id;
            $[76] = t34;
        } else {
            t34 = $[76];
        }
        t33 = filtered.map(t34);
        $[72] = filtered;
        $[73] = selected?.id;
        $[74] = t33;
    } else {
        t33 = $[74];
    }
    let t34;
    if ($[77] !== filtered.length) {
        t34 = filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-3 py-10 text-center text-sm text-slate-500",
            children: "No lessons found."
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1277,
            columnNumber: 35
        }, this) : null;
        $[77] = filtered.length;
        $[78] = t34;
    } else {
        t34 = $[78];
    }
    let t35;
    if ($[79] !== t33 || $[80] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl border border-slate-200 bg-white p-3",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[520px] overflow-auto pr-1",
                    children: [
                        t33,
                        t34
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1285,
                    columnNumber: 82
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1285,
            columnNumber: 11
        }, this);
        $[79] = t33;
        $[80] = t34;
        $[81] = t35;
    } else {
        t35 = $[81];
    }
    let t36;
    let t37;
    if ($[82] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-sm font-semibold",
            children: "Add your lesson"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1295,
            columnNumber: 11
        }, this);
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-slate-600",
            children: "Англи + монгол гарчиг, дүрэм, жишээ оруулаад нэмнэ."
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1296,
            columnNumber: 11
        }, this);
        $[82] = t36;
        $[83] = t37;
    } else {
        t36 = $[82];
        t37 = $[83];
    }
    let t38;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = ({
            "Grammar[<input>.onChange]": (e_4)=>setNewTitleEn(e_4.target.value)
        })["Grammar[<input>.onChange]"];
        $[84] = t38;
    } else {
        t38 = $[84];
    }
    let t39;
    if ($[85] !== newTitleEn) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: newTitleEn,
            onChange: t38,
            placeholder: "Title (EN) e.g. Present Perfect",
            className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1314,
            columnNumber: 11
        }, this);
        $[85] = newTitleEn;
        $[86] = t39;
    } else {
        t39 = $[86];
    }
    let t40;
    if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = ({
            "Grammar[<input>.onChange]": (e_5)=>setNewTitleMn(e_5.target.value)
        })["Grammar[<input>.onChange]"];
        $[87] = t40;
    } else {
        t40 = $[87];
    }
    let t41;
    if ($[88] !== newTitleMn) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: newTitleMn,
            onChange: t40,
            placeholder: "\u0413\u0430\u0440\u0447\u0438\u0433 (MN) \u0436: \u041E\u0434\u043E\u043E \u0442\u04E9\u0433\u0441 \u0446\u0430\u0433",
            className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1331,
            columnNumber: 11
        }, this);
        $[88] = newTitleMn;
        $[89] = t41;
    } else {
        t41 = $[89];
    }
    let t42;
    if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = ({
            "Grammar[<select>.onChange]": (e_6)=>setNewLevel(e_6.target.value)
        })["Grammar[<select>.onChange]"];
        $[90] = t42;
    } else {
        t42 = $[90];
    }
    let t43;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = LEVELS.map(_GrammarLEVELSMap2);
        $[91] = t43;
    } else {
        t43 = $[91];
    }
    let t44;
    if ($[92] !== newLevel) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: newLevel,
            onChange: t42,
            className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300",
            children: t43
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1355,
            columnNumber: 11
        }, this);
        $[92] = newLevel;
        $[93] = t44;
    } else {
        t44 = $[93];
    }
    let t45;
    if ($[94] !== newTags) {
        t45 = TAGS.map({
            "Grammar[TAGS.map()]": (t_2)=>{
                const active = newTags.includes(t_2);
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "Grammar[TAGS.map() > <button>.onClick]": ()=>toggleTag(t_2)
                    }["Grammar[TAGS.map() > <button>.onClick]"],
                    className: [
                        "rounded-full border px-2 py-1 text-[11px] transition",
                        active ? "border-slate-400 bg-slate-100 text-slate-900" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    ].join(" "),
                    children: t_2
                }, t_2, false, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1366,
                    columnNumber: 16
                }, this);
            }
        }["Grammar[TAGS.map()]"]);
        $[94] = newTags;
        $[95] = t45;
    } else {
        t45 = $[95];
    }
    let t46;
    if ($[96] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2 rounded-2xl border border-slate-200 p-2",
            children: t45
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1378,
            columnNumber: 11
        }, this);
        $[96] = t45;
        $[97] = t46;
    } else {
        t46 = $[97];
    }
    let t47;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = ({
            "Grammar[<textarea>.onChange]": (e_7)=>setNewRuleEn(e_7.target.value)
        })["Grammar[<textarea>.onChange]"];
        $[98] = t47;
    } else {
        t47 = $[98];
    }
    let t48;
    if ($[99] !== newRuleEn) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            value: newRuleEn,
            onChange: t47,
            placeholder: "Rule (EN) ...",
            className: "min-h-[84px] rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 sm:col-span-2"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1395,
            columnNumber: 11
        }, this);
        $[99] = newRuleEn;
        $[100] = t48;
    } else {
        t48 = $[100];
    }
    let t49;
    if ($[101] === Symbol.for("react.memo_cache_sentinel")) {
        t49 = ({
            "Grammar[<textarea>.onChange]": (e_8)=>setNewRuleMn(e_8.target.value)
        })["Grammar[<textarea>.onChange]"];
        $[101] = t49;
    } else {
        t49 = $[101];
    }
    let t50;
    if ($[102] !== newRuleMn) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            value: newRuleMn,
            onChange: t49,
            placeholder: "\u0414\u04AF\u0440\u044D\u043C (MN) ...",
            className: "min-h-[84px] rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 sm:col-span-2"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1412,
            columnNumber: 11
        }, this);
        $[102] = newRuleMn;
        $[103] = t50;
    } else {
        t50 = $[103];
    }
    let t51;
    if ($[104] === Symbol.for("react.memo_cache_sentinel")) {
        t51 = ({
            "Grammar[<input>.onChange]": (e_9)=>setNewFormEn(e_9.target.value)
        })["Grammar[<input>.onChange]"];
        $[104] = t51;
    } else {
        t51 = $[104];
    }
    let t52;
    if ($[105] !== newFormEn) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: newFormEn,
            onChange: t51,
            placeholder: "Form (EN) optional",
            className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1429,
            columnNumber: 11
        }, this);
        $[105] = newFormEn;
        $[106] = t52;
    } else {
        t52 = $[106];
    }
    let t53;
    if ($[107] === Symbol.for("react.memo_cache_sentinel")) {
        t53 = ({
            "Grammar[<input>.onChange]": (e_10)=>setNewFormMn(e_10.target.value)
        })["Grammar[<input>.onChange]"];
        $[107] = t53;
    } else {
        t53 = $[107];
    }
    let t54;
    if ($[108] !== newFormMn) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: newFormMn,
            onChange: t53,
            placeholder: "\u0425\u044D\u043B\u0431\u044D\u0440 (MN) optional",
            className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1446,
            columnNumber: 11
        }, this);
        $[108] = newFormMn;
        $[109] = t54;
    } else {
        t54 = $[109];
    }
    let t55;
    if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
        t55 = ({
            "Grammar[<input>.onChange]": (e_11)=>setNewExEn(e_11.target.value)
        })["Grammar[<input>.onChange]"];
        $[110] = t55;
    } else {
        t55 = $[110];
    }
    let t56;
    if ($[111] !== newExEn) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: newExEn,
            onChange: t55,
            placeholder: "Example (EN) optional",
            className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1463,
            columnNumber: 11
        }, this);
        $[111] = newExEn;
        $[112] = t56;
    } else {
        t56 = $[112];
    }
    let t57;
    if ($[113] === Symbol.for("react.memo_cache_sentinel")) {
        t57 = ({
            "Grammar[<input>.onChange]": (e_12)=>setNewExMn(e_12.target.value)
        })["Grammar[<input>.onChange]"];
        $[113] = t57;
    } else {
        t57 = $[113];
    }
    let t58;
    if ($[114] !== newExMn) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            value: newExMn,
            onChange: t57,
            placeholder: "\u0416\u0438\u0448\u044D\u044D (MN) optional",
            className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1480,
            columnNumber: 11
        }, this);
        $[114] = newExMn;
        $[115] = t58;
    } else {
        t58 = $[115];
    }
    let t59;
    if ($[116] !== t39 || $[117] !== t41 || $[118] !== t44 || $[119] !== t46 || $[120] !== t48 || $[121] !== t50 || $[122] !== t52 || $[123] !== t54 || $[124] !== t56 || $[125] !== t58) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 grid gap-2 sm:grid-cols-2",
            children: [
                t39,
                t41,
                t44,
                t46,
                t48,
                t50,
                t52,
                t54,
                t56,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1488,
            columnNumber: 11
        }, this);
        $[116] = t39;
        $[117] = t41;
        $[118] = t44;
        $[119] = t46;
        $[120] = t48;
        $[121] = t50;
        $[122] = t52;
        $[123] = t54;
        $[124] = t56;
        $[125] = t58;
        $[126] = t59;
    } else {
        t59 = $[126];
    }
    let t60;
    if ($[127] !== addLesson) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: addLesson,
            className: "mt-3 w-full rounded-2xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-95 active:opacity-90",
            children: "Add lesson"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1505,
            columnNumber: 11
        }, this);
        $[127] = addLesson;
        $[128] = t60;
    } else {
        t60 = $[128];
    }
    let t61;
    if ($[129] === Symbol.for("react.memo_cache_sentinel")) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 text-xs text-slate-500",
            children: "* Title EN/MN + Rule EN/MN 4 талбар хоосон байвал нэмэхгүй."
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1513,
            columnNumber: 11
        }, this);
        $[129] = t61;
    } else {
        t61 = $[129];
    }
    let t62;
    if ($[130] !== t59 || $[131] !== t60) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 rounded-3xl border border-slate-200 bg-white p-4",
            children: [
                t36,
                t37,
                t59,
                t60,
                t61
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1520,
            columnNumber: 11
        }, this);
        $[130] = t59;
        $[131] = t60;
        $[132] = t62;
    } else {
        t62 = $[132];
    }
    let t63;
    if ($[133] !== t35 || $[134] !== t62) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-5",
            children: [
                t35,
                t62
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1529,
            columnNumber: 11
        }, this);
        $[133] = t35;
        $[134] = t62;
        $[135] = t63;
    } else {
        t63 = $[135];
    }
    let t64;
    if ($[136] !== deleteLesson || $[137] !== selected) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-7",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl border border-slate-200 bg-white p-5",
                children: selected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold",
                                            children: selected.titleEn
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1538,
                                            columnNumber: 210
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-slate-600",
                                            children: selected.titleMn
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1538,
                                            columnNumber: 271
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs",
                                                    children: [
                                                        "Level: ",
                                                        selected.level
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                                    lineNumber: 1538,
                                                    columnNumber: 374
                                                }, this),
                                                selected.tags.map(_GrammarSelectedTagsMap)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1538,
                                            columnNumber: 331
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                    lineNumber: 1538,
                                    columnNumber: 205
                                }, this),
                                isCustom(selected.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "Grammar[<button>.onClick]": ()=>deleteLesson(selected.id)
                                    }["Grammar[<button>.onClick]"],
                                    className: "rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50",
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                    lineNumber: 1538,
                                    columnNumber: 569
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                            lineNumber: 1538,
                            columnNumber: 122
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-slate-200 bg-white p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-semibold text-slate-500",
                                            children: "RULE (EN)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 266
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm leading-relaxed",
                                            children: selected.ruleEn
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 335
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                    lineNumber: 1540,
                                    columnNumber: 200
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-slate-200 bg-white p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-semibold text-slate-500",
                                            children: "ДҮРЭМ (MN)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 476
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm leading-relaxed",
                                            children: selected.ruleMn
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 546
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                    lineNumber: 1540,
                                    columnNumber: 410
                                }, this),
                                (selected.formEn || selected.formMn) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-semibold text-slate-500",
                                            children: "FORM / ХЭЛБЭР"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 731
                                        }, this),
                                        selected.formEn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "EN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                                    lineNumber: 1540,
                                                    columnNumber: 845
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm",
                                                    children: selected.formEn
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                                    lineNumber: 1540,
                                                    columnNumber: 893
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 823
                                        }, this) : null,
                                        selected.formMn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500",
                                                    children: "MN"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                                    lineNumber: 1540,
                                                    columnNumber: 996
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm",
                                                    children: selected.formMn
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                                    lineNumber: 1540,
                                                    columnNumber: 1044
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 974
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                    lineNumber: 1540,
                                    columnNumber: 662
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-2xl border border-slate-200 bg-white p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs font-semibold text-slate-500",
                                            children: "EXAMPLES"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 1179
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 space-y-3",
                                            children: selected.examples.map(_GrammarSelectedExamplesMap)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                                            lineNumber: 1540,
                                            columnNumber: 1247
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                                    lineNumber: 1540,
                                    columnNumber: 1113
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/_components/grammar.tsx",
                            lineNumber: 1540,
                            columnNumber: 167
                        }, this)
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "py-20 text-center text-sm text-slate-500",
                    children: "Select a lesson."
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/grammar.tsx",
                    lineNumber: 1540,
                    columnNumber: 1355
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/grammar.tsx",
                lineNumber: 1538,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1538,
            columnNumber: 11
        }, this);
        $[136] = deleteLesson;
        $[137] = selected;
        $[138] = t64;
    } else {
        t64 = $[138];
    }
    let t65;
    if ($[139] !== t63 || $[140] !== t64) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 grid gap-4 md:grid-cols-12",
            children: [
                t63,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1549,
            columnNumber: 11
        }, this);
        $[139] = t63;
        $[140] = t64;
        $[141] = t65;
    } else {
        t65 = $[141];
    }
    let t66;
    if ($[142] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 text-xs text-slate-500",
            children: "Tip: Хэрвээ localStorage дээр хадгалмаар байвал хэлээрэй — refresh хийхэд custom lesson-ууд арилдаггүй болгож өгнө."
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1558,
            columnNumber: 11
        }, this);
        $[142] = t66;
    } else {
        t66 = $[142];
    }
    let t67;
    if ($[143] !== t18 || $[144] !== t31 || $[145] !== t65) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white text-slate-900",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 py-6",
                children: [
                    t18,
                    t31,
                    t65,
                    t66
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/_components/grammar.tsx",
                lineNumber: 1565,
                columnNumber: 65
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/grammar.tsx",
            lineNumber: 1565,
            columnNumber: 11
        }, this);
        $[143] = t18;
        $[144] = t31;
        $[145] = t65;
        $[146] = t67;
    } else {
        t67 = $[146];
    }
    return t67;
}
_s(Grammar, "T/XMeBquox9/ya7+aBqOtabTPW0=");
_c = Grammar;
function _GrammarSelectedExamplesMap(ex, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-slate-200 p-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm font-semibold",
                children: ex.en
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/grammar.tsx",
                lineNumber: 1576,
                columnNumber: 77
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-sm text-slate-600",
                children: ex.mn
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/grammar.tsx",
                lineNumber: 1576,
                columnNumber: 129
            }, this)
        ]
    }, idx, true, {
        fileName: "[project]/src/app/user/_components/grammar.tsx",
        lineNumber: 1576,
        columnNumber: 10
    }, this);
}
function _GrammarSelectedTagsMap(t_3) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-700",
        children: t_3
    }, t_3, false, {
        fileName: "[project]/src/app/user/_components/grammar.tsx",
        lineNumber: 1579,
        columnNumber: 10
    }, this);
}
function _GrammarLEVELSMap2(lv_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: lv_0,
        children: lv_0
    }, lv_0, false, {
        fileName: "[project]/src/app/user/_components/grammar.tsx",
        lineNumber: 1582,
        columnNumber: 10
    }, this);
}
function _GrammarFilteredMapAnonymous(t_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-700",
        children: t_1
    }, t_1, false, {
        fileName: "[project]/src/app/user/_components/grammar.tsx",
        lineNumber: 1585,
        columnNumber: 10
    }, this);
}
function _GrammarTAGSMap(t_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: t_0,
        children: t_0
    }, t_0, false, {
        fileName: "[project]/src/app/user/_components/grammar.tsx",
        lineNumber: 1588,
        columnNumber: 10
    }, this);
}
function _GrammarLEVELSMap(lv) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: lv,
        children: lv
    }, lv, false, {
        fileName: "[project]/src/app/user/_components/grammar.tsx",
        lineNumber: 1591,
        columnNumber: 10
    }, this);
}
function _GrammarAnonymousL_2ExamplesFlatMap(e) {
    return [
        e.en,
        e.mn
    ];
}
function _GrammarINITIAL_LESSONSMap(lesson) {
    return lesson.id;
}
var _c;
__turbopack_context__.k.register(_c, "Grammar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_09b50d64._.js.map