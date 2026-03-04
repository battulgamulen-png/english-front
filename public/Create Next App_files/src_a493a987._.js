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
"[project]/src/app/user/_components/vocabulary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Vocabulary
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
const CATEGORIES = [
    "Daily",
    "Food",
    "Travel",
    "School",
    "Work",
    "Health",
    "Technology",
    "Culture",
    "Nature",
    "Finance"
];
const MODIFIERS = [
    {
        en: "basic",
        mn: "суурь"
    },
    {
        en: "common",
        mn: "түгээмэл"
    },
    {
        en: "useful",
        mn: "хэрэгцээтэй"
    },
    {
        en: "everyday",
        mn: "өдөр тутмын"
    },
    {
        en: "advanced",
        mn: "ахисан"
    }
];
const SEED_BASE = {
    Daily: [
        {
            en: "greeting",
            mn: "мэндчилгээ"
        },
        {
            en: "habit",
            mn: "дадал"
        },
        {
            en: "routine",
            mn: "хэвшил"
        },
        {
            en: "conversation",
            mn: "яриа"
        },
        {
            en: "question",
            mn: "асуулт"
        },
        {
            en: "answer",
            mn: "хариулт"
        },
        {
            en: "weekend",
            mn: "амралтын өдөр"
        },
        {
            en: "morning",
            mn: "өглөө"
        },
        {
            en: "evening",
            mn: "орой"
        },
        {
            en: "schedule",
            mn: "хуваарь"
        },
        {
            en: "message",
            mn: "мессеж"
        },
        {
            en: "neighbor",
            mn: "хөрш"
        },
        {
            en: "family",
            mn: "гэр бүл"
        },
        {
            en: "friendship",
            mn: "нөхөрлөл"
        },
        {
            en: "weather",
            mn: "цаг агаар"
        },
        {
            en: "direction",
            mn: "чиглэл"
        },
        {
            en: "shopping",
            mn: "худалдан авалт"
        },
        {
            en: "appointment",
            mn: "цаг товлолт"
        },
        {
            en: "activity",
            mn: "үйл ажиллагаа"
        },
        {
            en: "preference",
            mn: "сонголт"
        }
    ],
    Food: [
        {
            en: "breakfast",
            mn: "өглөөний цай"
        },
        {
            en: "lunch",
            mn: "өдрийн хоол"
        },
        {
            en: "dinner",
            mn: "оройн хоол"
        },
        {
            en: "ingredient",
            mn: "орц"
        },
        {
            en: "recipe",
            mn: "жор"
        },
        {
            en: "flavor",
            mn: "амт"
        },
        {
            en: "nutrition",
            mn: "шим тэжээл"
        },
        {
            en: "snack",
            mn: "хөнгөн зууш"
        },
        {
            en: "beverage",
            mn: "ундаа"
        },
        {
            en: "dessert",
            mn: "амттан"
        },
        {
            en: "kitchen",
            mn: "гал тогоо"
        },
        {
            en: "restaurant",
            mn: "ресторан"
        },
        {
            en: "menu",
            mn: "цэс"
        },
        {
            en: "portion",
            mn: "хэмжээ"
        },
        {
            en: "allergy",
            mn: "харшил"
        },
        {
            en: "spice",
            mn: "амтлагч"
        },
        {
            en: "protein",
            mn: "уураг"
        },
        {
            en: "vegetable",
            mn: "хүнсний ногоо"
        },
        {
            en: "fruit",
            mn: "жимс"
        },
        {
            en: "cooking",
            mn: "хоол хийх"
        }
    ],
    Travel: [
        {
            en: "airport",
            mn: "нисэх буудал"
        },
        {
            en: "ticket",
            mn: "тасалбар"
        },
        {
            en: "passport",
            mn: "паспорт"
        },
        {
            en: "luggage",
            mn: "ачаа"
        },
        {
            en: "journey",
            mn: "аялал"
        },
        {
            en: "destination",
            mn: "зорьсон газар"
        },
        {
            en: "itinerary",
            mn: "аяллын төлөвлөгөө"
        },
        {
            en: "reservation",
            mn: "захиалга"
        },
        {
            en: "hotel",
            mn: "зочид буудал"
        },
        {
            en: "transport",
            mn: "тээвэр"
        },
        {
            en: "platform",
            mn: "тавцан"
        },
        {
            en: "boarding",
            mn: "суулт"
        },
        {
            en: "sightseeing",
            mn: "үзвэр"
        },
        {
            en: "map",
            mn: "газрын зураг"
        },
        {
            en: "route",
            mn: "чиглэл"
        },
        {
            en: "guide",
            mn: "хөтөч"
        },
        {
            en: "customs",
            mn: "гааль"
        },
        {
            en: "visa",
            mn: "виз"
        },
        {
            en: "adventure",
            mn: "адал явдал"
        },
        {
            en: "backpack",
            mn: "үүргэвч"
        }
    ],
    School: [
        {
            en: "lesson",
            mn: "хичээл"
        },
        {
            en: "classroom",
            mn: "анги"
        },
        {
            en: "teacher",
            mn: "багш"
        },
        {
            en: "student",
            mn: "сурагч"
        },
        {
            en: "homework",
            mn: "гэрийн даалгавар"
        },
        {
            en: "assignment",
            mn: "даалгавар"
        },
        {
            en: "exam",
            mn: "шалгалт"
        },
        {
            en: "quiz",
            mn: "сорил"
        },
        {
            en: "grade",
            mn: "үнэлгээ"
        },
        {
            en: "subject",
            mn: "хичээл"
        },
        {
            en: "notebook",
            mn: "дэвтэр"
        },
        {
            en: "dictionary",
            mn: "толь бичиг"
        },
        {
            en: "grammar",
            mn: "дүрэм"
        },
        {
            en: "vocabulary",
            mn: "үгсийн сан"
        },
        {
            en: "research",
            mn: "судалгаа"
        },
        {
            en: "project",
            mn: "төсөл"
        },
        {
            en: "presentation",
            mn: "илтгэл"
        },
        {
            en: "library",
            mn: "номын сан"
        },
        {
            en: "semester",
            mn: "улирал"
        },
        {
            en: "scholarship",
            mn: "тэтгэлэг"
        }
    ],
    Work: [
        {
            en: "office",
            mn: "оффис"
        },
        {
            en: "meeting",
            mn: "хурал"
        },
        {
            en: "deadline",
            mn: "эцсийн хугацаа"
        },
        {
            en: "manager",
            mn: "менежер"
        },
        {
            en: "colleague",
            mn: "хамтрагч"
        },
        {
            en: "client",
            mn: "үйлчлүүлэгч"
        },
        {
            en: "contract",
            mn: "гэрээ"
        },
        {
            en: "salary",
            mn: "цалин"
        },
        {
            en: "promotion",
            mn: "тушаал дэвших"
        },
        {
            en: "interview",
            mn: "ярилцлага"
        },
        {
            en: "task",
            mn: "даалгавар"
        },
        {
            en: "report",
            mn: "тайлан"
        },
        {
            en: "strategy",
            mn: "стратеги"
        },
        {
            en: "productivity",
            mn: "бүтээмж"
        },
        {
            en: "leadership",
            mn: "манлайлал"
        },
        {
            en: "teamwork",
            mn: "багийн ажил"
        },
        {
            en: "negotiation",
            mn: "хэлэлцээр"
        },
        {
            en: "conference",
            mn: "чуулган"
        },
        {
            en: "feedback",
            mn: "санал"
        },
        {
            en: "training",
            mn: "сургалт"
        }
    ],
    Health: [
        {
            en: "doctor",
            mn: "эмч"
        },
        {
            en: "nurse",
            mn: "сувилагч"
        },
        {
            en: "medicine",
            mn: "эм"
        },
        {
            en: "treatment",
            mn: "эмчилгээ"
        },
        {
            en: "symptom",
            mn: "шинж тэмдэг"
        },
        {
            en: "diagnosis",
            mn: "онош"
        },
        {
            en: "exercise",
            mn: "дасгал"
        },
        {
            en: "diet",
            mn: "хоолны дэглэм"
        },
        {
            en: "vitamin",
            mn: "аминдэм"
        },
        {
            en: "recovery",
            mn: "сэргэлт"
        },
        {
            en: "clinic",
            mn: "эмнэлэг"
        },
        {
            en: "surgery",
            mn: "мэс засал"
        },
        {
            en: "injury",
            mn: "бэртэл"
        },
        {
            en: "pain",
            mn: "өвдөлт"
        },
        {
            en: "allergy",
            mn: "харшил"
        },
        {
            en: "stress",
            mn: "стресс"
        },
        {
            en: "sleep",
            mn: "нойр"
        },
        {
            en: "mental health",
            mn: "сэтгэцийн эрүүл мэнд"
        },
        {
            en: "checkup",
            mn: "үзлэг"
        },
        {
            en: "prevention",
            mn: "урьдчилан сэргийлэлт"
        }
    ],
    Technology: [
        {
            en: "computer",
            mn: "компьютер"
        },
        {
            en: "software",
            mn: "програм"
        },
        {
            en: "hardware",
            mn: "техник"
        },
        {
            en: "network",
            mn: "сүлжээ"
        },
        {
            en: "database",
            mn: "өгөгдлийн сан"
        },
        {
            en: "server",
            mn: "сервер"
        },
        {
            en: "application",
            mn: "аппликейшн"
        },
        {
            en: "security",
            mn: "аюулгүй байдал"
        },
        {
            en: "privacy",
            mn: "нууцлал"
        },
        {
            en: "algorithm",
            mn: "алгоритм"
        },
        {
            en: "automation",
            mn: "автоматжуулалт"
        },
        {
            en: "cloud",
            mn: "үүлэн систем"
        },
        {
            en: "update",
            mn: "шинэчлэлт"
        },
        {
            en: "backup",
            mn: "нөөцлөлт"
        },
        {
            en: "interface",
            mn: "интерфейс"
        },
        {
            en: "device",
            mn: "төхөөрөмж"
        },
        {
            en: "platform",
            mn: "платформ"
        },
        {
            en: "debug",
            mn: "алдаа засах"
        },
        {
            en: "code",
            mn: "код"
        },
        {
            en: "integration",
            mn: "интеграц"
        }
    ],
    Culture: [
        {
            en: "tradition",
            mn: "уламжлал"
        },
        {
            en: "festival",
            mn: "баяр"
        },
        {
            en: "heritage",
            mn: "өв"
        },
        {
            en: "art",
            mn: "урлаг"
        },
        {
            en: "music",
            mn: "хөгжим"
        },
        {
            en: "dance",
            mn: "бүжиг"
        },
        {
            en: "literature",
            mn: "уран зохиол"
        },
        {
            en: "language",
            mn: "хэл"
        },
        {
            en: "custom",
            mn: "заншил"
        },
        {
            en: "belief",
            mn: "итгэл үнэмшил"
        },
        {
            en: "value",
            mn: "үнэт зүйл"
        },
        {
            en: "identity",
            mn: "танихуй"
        },
        {
            en: "community",
            mn: "нийгэмлэг"
        },
        {
            en: "ceremony",
            mn: "ёслол"
        },
        {
            en: "performance",
            mn: "тоглолт"
        },
        {
            en: "museum",
            mn: "музей"
        },
        {
            en: "history",
            mn: "түүх"
        },
        {
            en: "dialogue",
            mn: "яриа хэлэлцээ"
        },
        {
            en: "diversity",
            mn: "олон янз байдал"
        },
        {
            en: "perspective",
            mn: "өнцөг"
        }
    ],
    Nature: [
        {
            en: "forest",
            mn: "ой"
        },
        {
            en: "river",
            mn: "гол"
        },
        {
            en: "mountain",
            mn: "уул"
        },
        {
            en: "desert",
            mn: "цөл"
        },
        {
            en: "ocean",
            mn: "далай"
        },
        {
            en: "climate",
            mn: "уур амьсгал"
        },
        {
            en: "weather",
            mn: "цаг агаар"
        },
        {
            en: "ecosystem",
            mn: "экосистем"
        },
        {
            en: "wildlife",
            mn: "зэрлэг амьтан"
        },
        {
            en: "habitat",
            mn: "амьдрах орчин"
        },
        {
            en: "pollution",
            mn: "бохирдол"
        },
        {
            en: "recycle",
            mn: "дахин боловсруулах"
        },
        {
            en: "energy",
            mn: "эрчим хүч"
        },
        {
            en: "conservation",
            mn: "хамгаалалт"
        },
        {
            en: "biodiversity",
            mn: "био олон янз байдал"
        },
        {
            en: "rainfall",
            mn: "хур тунадас"
        },
        {
            en: "temperature",
            mn: "температур"
        },
        {
            en: "season",
            mn: "улирал"
        },
        {
            en: "landscape",
            mn: "газарзүй"
        },
        {
            en: "sustainability",
            mn: "тогтвортой байдал"
        }
    ],
    Finance: [
        {
            en: "money",
            mn: "мөнгө"
        },
        {
            en: "budget",
            mn: "төсөв"
        },
        {
            en: "income",
            mn: "орлого"
        },
        {
            en: "expense",
            mn: "зарлага"
        },
        {
            en: "savings",
            mn: "хадгаламж"
        },
        {
            en: "investment",
            mn: "хөрөнгө оруулалт"
        },
        {
            en: "loan",
            mn: "зээл"
        },
        {
            en: "interest",
            mn: "хүү"
        },
        {
            en: "debt",
            mn: "өр"
        },
        {
            en: "profit",
            mn: "ашиг"
        },
        {
            en: "loss",
            mn: "алдагдал"
        },
        {
            en: "salary",
            mn: "цалин"
        },
        {
            en: "tax",
            mn: "татвар"
        },
        {
            en: "bank",
            mn: "банк"
        },
        {
            en: "currency",
            mn: "валют"
        },
        {
            en: "insurance",
            mn: "даатгал"
        },
        {
            en: "asset",
            mn: "хөрөнгө"
        },
        {
            en: "liability",
            mn: "өр төлбөр"
        },
        {
            en: "transaction",
            mn: "гүйлгээ"
        },
        {
            en: "statement",
            mn: "хуулга"
        }
    ]
};
function buildSeedWords() {
    const result = [];
    CATEGORIES.forEach((category)=>{
        const base = SEED_BASE[category]; // 20
        MODIFIERS.forEach((mod, modIndex)=>{
            base.forEach((item, idx)=>{
                const ordinal = modIndex * base.length + idx + 1;
                const padded = String(ordinal).padStart(3, "0");
                result.push({
                    id: `${category.toLowerCase()}-${padded}`,
                    en: `${mod.en} ${item.en}`,
                    mn: `${mod.mn} ${item.mn}`,
                    category,
                    exampleEn: `This is a ${mod.en} ${item.en} word from ${category}.`,
                    exampleMn: `Энэ бол ${category} ангиллын ${mod.mn} ${item.mn} үг.`
                });
            });
        });
    });
    return result;
}
function rowToItem(row) {
    return {
        id: row.id,
        en: row.en,
        mn: row.mn,
        category: row.category,
        exampleEn: row.example_en ?? undefined,
        exampleMn: row.example_mn ?? undefined
    };
}
function Vocabulary() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "61a9d44fc32e97ad883996a5d6451cf4331e9ee1f7b2e06689d0e914c43ef17d") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "61a9d44fc32e97ad883996a5d6451cf4331e9ee1f7b2e06689d0e914c43ef17d";
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
        t1 = buildSeedWords();
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const seeded = t1;
    const [words, setWords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(seeded);
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showExamples, setShowExamples] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "Vocabulary[useEffect()]": ()=>{
                let cancelled = false;
                const load = {
                    "Vocabulary[useEffect() > load]": async ()=>{
                        setLoading(true);
                        const { data, error } = await supabase.from("vocabulary_words").select("id,en,mn,category,example_en,example_mn").order("id", {
                            ascending: true
                        });
                        if (cancelled) {
                            return;
                        }
                        if (error) {
                            setStatus("DB-\u0441 \u0443\u043D\u0448\u0438\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439. Local seed \u0445\u0430\u0440\u0430\u0433\u0434\u0430\u0436 \u0431\u0430\u0439\u043D\u0430.");
                            setLoading(false);
                            return;
                        }
                        const rows = data ?? [];
                        if (rows.length > 0) {
                            setWords(rows.map(rowToItem));
                            setStatus(`DB-ээс ${rows.length} үг уншлаа.`);
                        } else {
                            setStatus("DB \u0445\u043E\u043E\u0441\u043E\u043D \u0431\u0430\u0439\u043D\u0430. Seed \u0442\u043E\u0432\u0447 \u0434\u0430\u0440\u0436 category \u0431\u04AF\u0440\u0442 100 \u04AF\u0433 \u0445\u0430\u0434\u0433\u0430\u043B\u043D\u0430 \u0443\u0443.");
                        }
                        setLoading(false);
                    }
                }["Vocabulary[useEffect() > load]"];
                load();
                return ()=>{
                    cancelled = true;
                };
            }
        })["Vocabulary[useEffect()]"];
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
            "Vocabulary[seedToDb]": async ()=>{
                setLoading(true);
                setStatus(null);
                const payload = seeded.map(_VocabularySeedToDbSeededMap);
                const { error: error_0 } = await supabase.from("vocabulary_words").upsert(payload, {
                    onConflict: "id"
                });
                if (error_0) {
                    setLoading(false);
                    setStatus(`Seed алдаа: ${error_0.message}`);
                    return;
                }
                setWords(seeded);
                setLoading(false);
                setStatus("Seed \u0430\u043C\u0436\u0438\u043B\u0442\u0442\u0430\u0439. Category \u0431\u04AF\u0440\u0442 100 \u04AF\u0433 DB-\u0434 \u0445\u0430\u0434\u0433\u0430\u043B\u0430\u0433\u0434\u043B\u0430\u0430.");
            }
        })["Vocabulary[seedToDb]"];
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const seedToDb = t4;
    let t5;
    if ($[6] !== category || $[7] !== query || $[8] !== words) {
        const q = query.trim().toLowerCase();
        t5 = words.filter({
            "Vocabulary[words.filter()]": (item)=>{
                const byCategory = category === "All" ? true : item.category === category;
                const byQuery = !q || item.en.toLowerCase().includes(q) || item.mn.toLowerCase().includes(q) || item.category.toLowerCase().includes(q);
                return byCategory && byQuery;
            }
        }["Vocabulary[words.filter()]"]);
        $[6] = category;
        $[7] = query;
        $[8] = words;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const filtered = t5;
    let map;
    if ($[10] !== words) {
        map = new Map();
        CATEGORIES.forEach({
            "Vocabulary[CATEGORIES.forEach()]": (c)=>map.set(c, 0)
        }["Vocabulary[CATEGORIES.forEach()]"]);
        words.forEach({
            "Vocabulary[words.forEach()]": (w_0)=>{
                map.set(w_0.category, (map.get(w_0.category) ?? 0) + 1);
            }
        }["Vocabulary[words.forEach()]"]);
        $[10] = words;
        $[11] = map;
    } else {
        map = $[11];
    }
    const categoryCount = map;
    let t6;
    if ($[12] !== category || $[13] !== categoryCount || $[14] !== words.length) {
        t6 = category === "All" ? words.length : categoryCount.get(category) ?? 0;
        $[12] = category;
        $[13] = categoryCount;
        $[14] = words.length;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    const selectedCount = t6;
    let t7;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-semibold text-slate-900",
                    children: "Vocabulary"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                    lineNumber: 839,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-slate-500",
                    children: "Category бүрт 100 үг (нийт 1000) — Supabase sync."
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                    lineNumber: 839,
                    columnNumber: 84
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 839,
            columnNumber: 10
        }, this);
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    const t8 = loading ? "Working..." : "Seed 100/category to DB";
    let t9;
    if ($[17] !== loading || $[18] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: seedToDb,
            disabled: loading,
            className: "rounded-xl border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700 transition hover:bg-sky-100 disabled:cursor-not-allowed disabled:opacity-70",
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 847,
            columnNumber: 10
        }, this);
        $[17] = loading;
        $[18] = t8;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    const t10 = category === "All" ? `Total ${words.length}` : `${selectedCount}/100`;
    let t11;
    if ($[20] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 857,
            columnNumber: 11
        }, this);
        $[20] = t10;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== t11 || $[23] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 md:flex-row md:items-end md:justify-between",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        t9,
                        t11
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                    lineNumber: 865,
                    columnNumber: 96
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 865,
            columnNumber: 11
        }, this);
        $[22] = t11;
        $[23] = t9;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] !== status) {
        t13 = status ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-slate-500",
            children: status
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 874,
            columnNumber: 20
        }, this) : null;
        $[25] = status;
        $[26] = t13;
    } else {
        t13 = $[26];
    }
    let t14;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ({
            "Vocabulary[<button>.onClick]": ()=>setCategory("All")
        })["Vocabulary[<button>.onClick]"];
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    const t15 = `rounded-full border px-3 py-1.5 text-sm transition ${category === "All" ? "border-sky-200 bg-sky-50 text-sky-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`;
    let t16;
    if ($[28] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t14,
            className: t15,
            children: "All"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 892,
            columnNumber: 11
        }, this);
        $[28] = t15;
        $[29] = t16;
    } else {
        t16 = $[29];
    }
    let t17;
    if ($[30] !== category || $[31] !== categoryCount) {
        t17 = CATEGORIES.map({
            "Vocabulary[CATEGORIES.map()]": (c_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: {
                        "Vocabulary[CATEGORIES.map() > <button>.onClick]": ()=>setCategory(c_0)
                    }["Vocabulary[CATEGORIES.map() > <button>.onClick]"],
                    className: `rounded-full border px-3 py-1.5 text-sm transition ${category === c_0 ? "border-sky-200 bg-sky-50 text-sky-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`,
                    children: [
                        c_0,
                        " (",
                        categoryCount.get(c_0) ?? 0,
                        ")"
                    ]
                }, c_0, true, {
                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                    lineNumber: 901,
                    columnNumber: 46
                }, this)
        }["Vocabulary[CATEGORIES.map()]"]);
        $[30] = category;
        $[31] = categoryCount;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    let t18;
    if ($[33] !== t16 || $[34] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 flex flex-wrap gap-2",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 913,
            columnNumber: 11
        }, this);
        $[33] = t16;
        $[34] = t17;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = ({
            "Vocabulary[<input>.onChange]": (e)=>setQuery(e.target.value)
        })["Vocabulary[<input>.onChange]"];
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== query) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: query,
                onChange: t19,
                placeholder: "Search: word / \u043E\u0440\u0447\u0443\u0443\u043B\u0433\u0430 / category",
                className: "w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-sky-300 focus:ring-2"
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                lineNumber: 931,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 931,
            columnNumber: 11
        }, this);
        $[37] = query;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "Vocabulary[<button>.onClick]": ()=>setShowExamples(_VocabularyButtonOnClickSetShowExamples)
        })["Vocabulary[<button>.onClick]"];
        $[39] = t21;
    } else {
        t21 = $[39];
    }
    const t22 = `w-full rounded-2xl border px-4 py-3 text-sm transition ${showExamples ? "border-sky-200 bg-sky-50 text-sky-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"}`;
    const t23 = showExamples ? "On" : "Off";
    let t24;
    if ($[40] !== t22 || $[41] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: t21,
                className: t22,
                children: [
                    "Examples: ",
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                lineNumber: 950,
                columnNumber: 42
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 950,
            columnNumber: 11
        }, this);
        $[40] = t22;
        $[41] = t23;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] !== t20 || $[44] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 grid gap-3 md:grid-cols-10",
            children: [
                t20,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 959,
            columnNumber: 11
        }, this);
        $[43] = t20;
        $[44] = t24;
        $[45] = t25;
    } else {
        t25 = $[45];
    }
    let t26;
    if ($[46] !== t12 || $[47] !== t13 || $[48] !== t18 || $[49] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 py-5",
                children: [
                    t12,
                    t13,
                    t18,
                    t25
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                lineNumber: 968,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 968,
            columnNumber: 11
        }, this);
        $[46] = t12;
        $[47] = t13;
        $[48] = t18;
        $[49] = t25;
        $[50] = t26;
    } else {
        t26 = $[50];
    }
    let t27;
    if ($[51] !== filtered.length) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 text-sm text-slate-600",
            children: [
                "Showing ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-semibold text-slate-900",
                    children: filtered.length
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                    lineNumber: 979,
                    columnNumber: 64
                }, this),
                " items"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 979,
            columnNumber: 11
        }, this);
        $[51] = filtered.length;
        $[52] = t27;
    } else {
        t27 = $[52];
    }
    let t28;
    if ($[53] !== filtered || $[54] !== showExamples) {
        t28 = filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700",
            children: "No results."
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 987,
            columnNumber: 35
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3",
            children: filtered.map({
                "Vocabulary[filtered.map()]": (w_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-2 md:flex-row md:items-start md:justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-semibold text-slate-900",
                                                    children: w_1.en
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                                                    lineNumber: 988,
                                                    columnNumber: 264
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs text-slate-600",
                                                    children: w_1.category
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                                                    lineNumber: 988,
                                                    columnNumber: 334
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                                            lineNumber: 988,
                                            columnNumber: 223
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-slate-700",
                                            children: w_1.mn
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                                            lineNumber: 988,
                                            columnNumber: 463
                                        }, this),
                                        showExamples && (w_1.exampleEn || w_1.exampleMn) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4",
                                            children: [
                                                w_1.exampleEn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-slate-800",
                                                    children: [
                                                        "EN: ",
                                                        w_1.exampleEn
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                                                    lineNumber: 988,
                                                    columnNumber: 665
                                                }, this) : null,
                                                w_1.exampleMn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-sm text-slate-700",
                                                    children: [
                                                        "MN: ",
                                                        w_1.exampleMn
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                                                    lineNumber: 988,
                                                    columnNumber: 755
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                                            lineNumber: 988,
                                            columnNumber: 574
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                                    lineNumber: 988,
                                    columnNumber: 218
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: {
                                        "Vocabulary[filtered.map() > <button>.onClick]": ()=>navigator.clipboard?.writeText(`${w_1.en} — ${w_1.mn}`)
                                    }["Vocabulary[filtered.map() > <button>.onClick]"],
                                    className: "rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50",
                                    children: "Copy"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                                    lineNumber: 988,
                                    columnNumber: 853
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                            lineNumber: 988,
                            columnNumber: 135
                        }, this)
                    }, w_1.id, false, {
                        fileName: "[project]/src/app/user/_components/vocabulary.tsx",
                        lineNumber: 988,
                        columnNumber: 46
                    }, this)
            }["Vocabulary[filtered.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 987,
            columnNumber: 139
        }, this);
        $[53] = filtered;
        $[54] = showExamples;
        $[55] = t28;
    } else {
        t28 = $[55];
    }
    let t29;
    if ($[56] !== t27 || $[57] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-8",
            children: [
                t27,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 1000,
            columnNumber: 11
        }, this);
        $[56] = t27;
        $[57] = t28;
        $[58] = t29;
    } else {
        t29 = $[58];
    }
    let t30;
    if ($[59] !== t26 || $[60] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                t26,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/vocabulary.tsx",
            lineNumber: 1009,
            columnNumber: 11
        }, this);
        $[59] = t26;
        $[60] = t29;
        $[61] = t30;
    } else {
        t30 = $[61];
    }
    return t30;
}
_s(Vocabulary, "DW+6yTa6Imf4+IR2YIiwlNS1hr4=");
_c = Vocabulary;
function _VocabularyButtonOnClickSetShowExamples(s) {
    return !s;
}
function _VocabularySeedToDbSeededMap(w) {
    return {
        id: w.id,
        en: w.en,
        mn: w.mn,
        category: w.category,
        example_en: w.exampleEn ?? null,
        example_mn: w.exampleMn ?? null
    };
}
var _c;
__turbopack_context__.k.register(_c, "Vocabulary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_a493a987._.js.map