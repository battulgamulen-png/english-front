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
"[project]/src/app/user/_components/search.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Search
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const STATIC_ITEMS = [
    {
        id: "home",
        title: "User Home",
        section: "Home",
        description: "Main dashboard and quick links.",
        href: "/user"
    },
    {
        id: "links",
        title: "YouTube Lessons",
        section: "Links",
        description: "External English lesson links.",
        href: "/user/links"
    },
    {
        id: "settings",
        title: "Account Settings",
        section: "Settings",
        description: "Profile, preferences, and logout.",
        href: "/user/settings"
    }
];
function includesText(text, q) {
    return text.toLowerCase().includes(q.toLowerCase());
}
function Search(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "4ffd1b3a7ef1839b95d70eb0295011971e5ad896e6d987f62f8cee82a18ff8a7") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4ffd1b3a7ef1839b95d70eb0295011971e5ad896e6d987f62f8cee82a18ff8a7";
    }
    const { query } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const supabase = t1;
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(STATIC_ITEMS);
    const [sourceStatus, setSourceStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[2] !== query) {
        t2 = query.trim();
        $[2] = query;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const q = t2;
    let t3;
    let t4;
    if ($[4] !== q) {
        t3 = ({
            "Search[useEffect()]": ()=>{
                let cancelled = false;
                const load = {
                    "Search[useEffect() > load]": async ()=>{
                        if (!q) {
                            setItems(STATIC_ITEMS);
                            setSourceStatus(null);
                            return;
                        }
                        setLoading(true);
                        setSourceStatus(null);
                        const [grammarRes, vocabRes, testsRes] = await Promise.all([
                            supabase.from("grammar_lessons").select("id,title_en,title_mn,rule_en").limit(200),
                            supabase.from("vocabulary_words").select("id,en,mn,category").limit(500),
                            supabase.from("test_questions").select("id,prompt").limit(200)
                        ]);
                        if (cancelled) {
                            return;
                        }
                        const gathered = [
                            ...STATIC_ITEMS
                        ];
                        const errors = [];
                        if (grammarRes.error) {
                            errors.push("grammar");
                        } else {
                            const rows = grammarRes.data ?? [];
                            rows.forEach({
                                "Search[useEffect() > load > rows.forEach()]": (row)=>{
                                    gathered.push({
                                        id: `g-${row.id}`,
                                        title: row.title_en,
                                        section: "Grammar",
                                        description: `${row.title_mn} • ${row.rule_en}`,
                                        href: "/user/grammar"
                                    });
                                }
                            }["Search[useEffect() > load > rows.forEach()]"]);
                        }
                        if (vocabRes.error) {
                            errors.push("vocabulary");
                        } else {
                            const rows_0 = vocabRes.data ?? [];
                            rows_0.forEach({
                                "Search[useEffect() > load > rows_0.forEach()]": (row_0)=>{
                                    gathered.push({
                                        id: `v-${row_0.id}`,
                                        title: row_0.en,
                                        section: "Vocabulary",
                                        description: `${row_0.mn} • ${row_0.category}`,
                                        href: "/user/vocabulary"
                                    });
                                }
                            }["Search[useEffect() > load > rows_0.forEach()]"]);
                        }
                        if (testsRes.error) {
                            errors.push("tests");
                        } else {
                            const rows_1 = testsRes.data ?? [];
                            rows_1.forEach({
                                "Search[useEffect() > load > rows_1.forEach()]": (row_1, index)=>{
                                    gathered.push({
                                        id: `t-${row_1.id}`,
                                        title: `Question ${index + 1}`,
                                        section: "Tests",
                                        description: row_1.prompt,
                                        href: "/user/tests"
                                    });
                                }
                            }["Search[useEffect() > load > rows_1.forEach()]"]);
                        }
                        setItems(gathered);
                        setLoading(false);
                        if (errors.length > 0) {
                            setSourceStatus(`Some sources unavailable: ${errors.join(", ")}`);
                        }
                    }
                }["Search[useEffect() > load]"];
                load();
                return ()=>{
                    cancelled = true;
                };
            }
        })["Search[useEffect()]"];
        t4 = [
            q,
            supabase
        ];
        $[4] = q;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    bb0: {
        if (!q) {
            let t6;
            if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
                t6 = [];
                $[7] = t6;
            } else {
                t6 = $[7];
            }
            t5 = t6;
            break bb0;
        }
        let t6;
        if ($[8] !== items || $[9] !== q) {
            let t7;
            if ($[11] !== q) {
                t7 = ({
                    "Search[items.filter()]": (item)=>includesText(`${item.title} ${item.description} ${item.section}`, q)
                })["Search[items.filter()]"];
                $[11] = q;
                $[12] = t7;
            } else {
                t7 = $[12];
            }
            t6 = items.filter(t7).slice(0, 120);
            $[8] = items;
            $[9] = q;
            $[10] = t6;
        } else {
            t6 = $[10];
        }
        t5 = t6;
    }
    const results = t5;
    let t6;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-slate-900",
            children: "Search Results"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/search.tsx",
            lineNumber: 212,
            columnNumber: 10
        }, this);
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    const t7 = query || "-";
    let t8;
    if ($[14] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-slate-600",
            children: [
                "Query: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-slate-900",
                    children: t7
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/search.tsx",
                    lineNumber: 220,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/search.tsx",
            lineNumber: 220,
            columnNumber: 10
        }, this);
        $[14] = t7;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    let t9;
    if ($[16] !== sourceStatus) {
        t9 = sourceStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-2 text-xs text-amber-700",
            children: sourceStatus
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/search.tsx",
            lineNumber: 228,
            columnNumber: 25
        }, this) : null;
        $[16] = sourceStatus;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    let t10;
    if ($[18] !== loading) {
        t10 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-sm text-slate-500",
            children: "Searching..."
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/search.tsx",
            lineNumber: 236,
            columnNumber: 21
        }, this) : null;
        $[18] = loading;
        $[19] = t10;
    } else {
        t10 = $[19];
    }
    let t11;
    if ($[20] !== q) {
        t11 = !q ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-sm text-slate-500",
            children: "Header дээрээс үг оруулаад бүх мэдээллээс хайна."
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/search.tsx",
            lineNumber: 244,
            columnNumber: 16
        }, this) : null;
        $[20] = q;
        $[21] = t11;
    } else {
        t11 = $[21];
    }
    let t12;
    if ($[22] !== loading || $[23] !== q || $[24] !== results.length) {
        t12 = q && !loading && results.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-4 text-sm text-slate-500",
            children: "Илэрц олдсонгүй."
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/search.tsx",
            lineNumber: 252,
            columnNumber: 51
        }, this) : null;
        $[22] = loading;
        $[23] = q;
        $[24] = results.length;
        $[25] = t12;
    } else {
        t12 = $[25];
    }
    let t13;
    if ($[26] !== results) {
        t13 = results.map(_SearchResultsMap);
        $[26] = results;
        $[27] = t13;
    } else {
        t13 = $[27];
    }
    let t14;
    if ($[28] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 space-y-3",
            children: t13
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/search.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[28] = t13;
        $[29] = t14;
    } else {
        t14 = $[29];
    }
    let t15;
    if ($[30] !== t10 || $[31] !== t11 || $[32] !== t12 || $[33] !== t14 || $[34] !== t8 || $[35] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-2xl border border-slate-200 bg-white p-6 shadow-sm",
            children: [
                t6,
                t8,
                t9,
                t10,
                t11,
                t12,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/search.tsx",
            lineNumber: 278,
            columnNumber: 11
        }, this);
        $[30] = t10;
        $[31] = t11;
        $[32] = t12;
        $[33] = t14;
        $[34] = t8;
        $[35] = t9;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    return t15;
}
_s(Search, "SoHDeFoIpilKw361LH/YKeMPaus=");
_c = Search;
function _SearchResultsMap(item_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: item_0.href,
        className: "block rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:bg-slate-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-semibold text-slate-900",
                children: item_0.title
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/search.tsx",
                lineNumber: 292,
                columnNumber: 150
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-slate-500",
                children: item_0.section
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/search.tsx",
                lineNumber: 292,
                columnNumber: 220
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-sm text-slate-600",
                children: item_0.description
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/search.tsx",
                lineNumber: 292,
                columnNumber: 278
            }, this)
        ]
    }, item_0.id, true, {
        fileName: "[project]/src/app/user/_components/search.tsx",
        lineNumber: 292,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Search");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_503c5e2f._.js.map