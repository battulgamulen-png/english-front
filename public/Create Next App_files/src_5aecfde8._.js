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
"[project]/src/app/user/_components/settings.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/supabase/client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
// app/(dashboard)/settings.tsx
// or src/pages/settings.tsx (project structure-ees chin hamaaraad path-oo taаруулаарай)
"use client";
;
;
;
;
const DEFAULT = {
    fullName: "",
    uiLang: "Монгол",
    level: "Beginner",
    dailyGoalMin: 15,
    studyModes: [
        "Grammar",
        "Vocabulary"
    ],
    showTranslations: true,
    autoPlayAudio: true,
    voiceSpeed: 1,
    remindEnabled: false,
    remindTime: "20:00",
    streakFreeze: false,
    email: ""
};
const STORAGE_KEY = "english_site_settings_v1";
function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
}
function toggleInArray(arr, item) {
    return arr.includes(item) ? arr.filter((x)=>x !== item) : [
        ...arr,
        item
    ];
}
function SettingsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(119);
    if ($[0] !== "f0e17a1e28743e24d4b4fbcb911b1548e500dffbe09932a72c4d46ff160e0016") {
        for(let $i = 0; $i < 119; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f0e17a1e28743e24d4b4fbcb911b1548e500dffbe09932a72c4d46ff160e0016";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$supabase$2f$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createClient"])();
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const supabase = t0;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_SettingsPageUseState);
    const [savedAt, setSavedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [userId, setUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [dbStatus, setDbStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loggingOut, setLoggingOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [authError, setAuthError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "SettingsPage[useEffect()]": ()=>{
                let cancelled = false;
                const loadAuthAndDbSettings = {
                    "SettingsPage[useEffect() > loadAuthAndDbSettings]": async ()=>{
                        const { data: authData, error: authLoadError } = await supabase.auth.getUser();
                        if (cancelled) {
                            return;
                        }
                        if (authLoadError || !authData.user) {
                            setAuthError(authLoadError?.message ?? "Please login first.");
                            return;
                        }
                        const user = authData.user;
                        setUserId(user.id);
                        const first = user.user_metadata?.first_name ?? "";
                        const last = user.user_metadata?.last_name ?? "";
                        const full = `${first} ${last}`.trim();
                        setState({
                            "SettingsPage[useEffect() > loadAuthAndDbSettings > setState()]": (prev)=>({
                                    ...prev,
                                    fullName: full || user.user_metadata?.full_name || prev.fullName,
                                    email: user.email ?? prev.email
                                })
                        }["SettingsPage[useEffect() > loadAuthAndDbSettings > setState()]"]);
                        const { data, error } = await supabase.from("user_settings").select("user_id,full_name,email,ui_lang,level,daily_goal_min,study_modes,show_translations,auto_play_audio,voice_speed,remind_enabled,remind_time,streak_freeze").eq("user_id", user.id).maybeSingle();
                        if (cancelled) {
                            return;
                        }
                        if (error) {
                            setDbStatus("DB settings \u0443\u043D\u0448\u0438\u0436 \u0447\u0430\u0434\u0441\u0430\u043D\u0433\u04AF\u0439. Local settings \u0430\u0448\u0438\u0433\u043B\u0430\u0436 \u0431\u0430\u0439\u043D\u0430.");
                            return;
                        }
                        if (!data) {
                            setDbStatus("DB \u0434\u044D\u044D\u0440 settings \u0431\u0430\u0439\u0445\u0433\u04AF\u0439. \u0425\u0430\u0434\u0433\u0430\u043B\u0430\u0445\u0430\u0434 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0430\u0430\u0440 \u04AF\u04AF\u0441\u043D\u044D.");
                            return;
                        }
                        const row = data;
                        setState({
                            "SettingsPage[useEffect() > loadAuthAndDbSettings > setState()]": (prev_0)=>({
                                    ...prev_0,
                                    fullName: row.full_name ?? prev_0.fullName,
                                    email: row.email ?? prev_0.email,
                                    uiLang: row.ui_lang ?? prev_0.uiLang,
                                    level: row.level ?? prev_0.level,
                                    dailyGoalMin: row.daily_goal_min ?? prev_0.dailyGoalMin,
                                    studyModes: row.study_modes ?? prev_0.studyModes,
                                    showTranslations: row.show_translations ?? prev_0.showTranslations,
                                    autoPlayAudio: row.auto_play_audio ?? prev_0.autoPlayAudio,
                                    voiceSpeed: row.voice_speed ?? prev_0.voiceSpeed,
                                    remindEnabled: row.remind_enabled ?? prev_0.remindEnabled,
                                    remindTime: row.remind_time ?? prev_0.remindTime,
                                    streakFreeze: row.streak_freeze ?? prev_0.streakFreeze
                                })
                        }["SettingsPage[useEffect() > loadAuthAndDbSettings > setState()]"]);
                        setDbStatus("DB settings \u0430\u0447\u0430\u0430\u043B\u043B\u0430\u0430.");
                    }
                }["SettingsPage[useEffect() > loadAuthAndDbSettings]"];
                loadAuthAndDbSettings();
                return ()=>{
                    cancelled = true;
                };
            }
        })["SettingsPage[useEffect()]"];
        t2 = [
            supabase
        ];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== state) {
        t3 = ({
            "SettingsPage[useEffect()]": ()=>{
                const t = setTimeout({
                    "SettingsPage[useEffect() > setTimeout()]": ()=>{
                        try {
                            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
                            setSavedAt(Date.now());
                        } catch  {}
                    }
                }["SettingsPage[useEffect() > setTimeout()]"], 250);
                return ()=>clearTimeout(t);
            }
        })["SettingsPage[useEffect()]"];
        t4 = [
            state
        ];
        $[4] = state;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    if ($[7] !== state.autoPlayAudio || $[8] !== state.dailyGoalMin || $[9] !== state.email || $[10] !== state.fullName || $[11] !== state.level || $[12] !== state.remindEnabled || $[13] !== state.remindTime || $[14] !== state.showTranslations || $[15] !== state.streakFreeze || $[16] !== state.studyModes || $[17] !== state.uiLang || $[18] !== state.voiceSpeed || $[19] !== userId) {
        t5 = ({
            "SettingsPage[useEffect()]": ()=>{
                if (!userId) {
                    return;
                }
                const t_0 = setTimeout({
                    "SettingsPage[useEffect() > setTimeout()]": async ()=>{
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
                            streak_freeze: state.streakFreeze
                        };
                        const { error: error_0 } = await supabase.from("user_settings").upsert(payload, {
                            onConflict: "user_id"
                        });
                        if (error_0) {
                            setDbStatus(`DB save алдаа: ${error_0.message}`);
                        } else {
                            setDbStatus("DB \u0434\u044D\u044D\u0440 \u0445\u0430\u0434\u0433\u0430\u043B\u0430\u0433\u0434\u043B\u0430\u0430.");
                        }
                    }
                }["SettingsPage[useEffect() > setTimeout()]"], 600);
                return ()=>clearTimeout(t_0);
            }
        })["SettingsPage[useEffect()]"];
        $[7] = state.autoPlayAudio;
        $[8] = state.dailyGoalMin;
        $[9] = state.email;
        $[10] = state.fullName;
        $[11] = state.level;
        $[12] = state.remindEnabled;
        $[13] = state.remindTime;
        $[14] = state.showTranslations;
        $[15] = state.streakFreeze;
        $[16] = state.studyModes;
        $[17] = state.uiLang;
        $[18] = state.voiceSpeed;
        $[19] = userId;
        $[20] = t5;
    } else {
        t5 = $[20];
    }
    let t6;
    if ($[21] !== state || $[22] !== userId) {
        t6 = [
            state,
            supabase,
            userId
        ];
        $[21] = state;
        $[22] = userId;
        $[23] = t6;
    } else {
        t6 = $[23];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    const minutes = state.dailyGoalMin;
    let t7;
    if ($[24] !== state.studyModes) {
        t7 = state.studyModes.join(", ");
        $[24] = state.studyModes;
        $[25] = t7;
    } else {
        t7 = $[25];
    }
    const modes = t7;
    const dirtySummary = `${state.level} • ${minutes} мин/өдөр • ${modes}`;
    let t8;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "SettingsPage[reset]": ()=>{
                setState(_SettingsPageResetSetState);
                try {
                    localStorage.removeItem(STORAGE_KEY);
                } catch  {}
            }
        })["SettingsPage[reset]"];
        $[26] = t8;
    } else {
        t8 = $[26];
    }
    const reset = t8;
    let t9;
    if ($[27] !== router) {
        t9 = ({
            "SettingsPage[handleLogout]": async ()=>{
                setLoggingOut(true);
                setAuthError(null);
                const { error: error_1 } = await supabase.auth.signOut();
                setLoggingOut(false);
                if (error_1) {
                    setAuthError(error_1.message);
                    return;
                }
                router.push("/login");
            }
        })["SettingsPage[handleLogout]"];
        $[27] = router;
        $[28] = t9;
    } else {
        t9 = $[28];
    }
    const handleLogout = t9;
    let t10;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-xl font-semibold text-slate-900",
            children: "Settings"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 309,
            columnNumber: 11
        }, this);
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== dirtySummary) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-slate-500",
                    children: dirtySummary
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/settings.tsx",
                    lineNumber: 316,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[30] = dirtySummary;
        $[31] = t11;
    } else {
        t11 = $[31];
    }
    let t12;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: reset,
            className: "rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50",
            children: "Reset"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 324,
            columnNumber: 11
        }, this);
        $[32] = t12;
    } else {
        t12 = $[32];
    }
    const t13 = loggingOut ? "Logging out..." : "Logout";
    let t14;
    if ($[33] !== handleLogout || $[34] !== loggingOut || $[35] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: handleLogout,
                    disabled: loggingOut,
                    className: "rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-70",
                    children: t13
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/settings.tsx",
                    lineNumber: 332,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 332,
            columnNumber: 11
        }, this);
        $[33] = handleLogout;
        $[34] = loggingOut;
        $[35] = t13;
        $[36] = t14;
    } else {
        t14 = $[36];
    }
    let t15;
    if ($[37] !== t11 || $[38] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-4xl items-center justify-between px-4 py-4",
            children: [
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 342,
            columnNumber: 11
        }, this);
        $[37] = t11;
        $[38] = t14;
        $[39] = t15;
    } else {
        t15 = $[39];
    }
    let t16;
    if ($[40] !== authError) {
        t16 = authError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl px-4 pb-3 text-sm text-red-600",
            children: authError
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 351,
            columnNumber: 23
        }, this) : null;
        $[40] = authError;
        $[41] = t16;
    } else {
        t16 = $[41];
    }
    let t17;
    if ($[42] !== dbStatus) {
        t17 = dbStatus ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl px-4 pb-3 text-xs text-slate-500",
            children: dbStatus
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 359,
            columnNumber: 22
        }, this) : null;
        $[42] = dbStatus;
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] !== t15 || $[45] !== t16 || $[46] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur",
            children: [
                t15,
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 367,
            columnNumber: 11
        }, this);
        $[44] = t15;
        $[45] = t16;
        $[46] = t17;
        $[47] = t18;
    } else {
        t18 = $[47];
    }
    let t19;
    if ($[48] !== state.fullName) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Name",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: state.fullName,
                readOnly: true,
                className: "w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none"
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/settings.tsx",
                lineNumber: 377,
                columnNumber: 31
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 377,
            columnNumber: 11
        }, this);
        $[48] = state.fullName;
        $[49] = t19;
    } else {
        t19 = $[49];
    }
    let t20;
    if ($[50] !== state.email) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Email",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                value: state.email,
                readOnly: true,
                className: "w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none"
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/settings.tsx",
                lineNumber: 385,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, this);
        $[50] = state.email;
        $[51] = t20;
    } else {
        t20 = $[51];
    }
    let t21;
    let t22;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = ({
            "SettingsPage[<Select>.onChange]": (v)=>setState({
                    "SettingsPage[<Select>.onChange > setState()]": (s)=>({
                            ...s,
                            uiLang: v
                        })
                }["SettingsPage[<Select>.onChange > setState()]"])
        })["SettingsPage[<Select>.onChange]"];
        t22 = [
            "\u041C\u043E\u043D\u0433\u043E\u043B",
            "English"
        ];
        $[52] = t21;
        $[53] = t22;
    } else {
        t21 = $[52];
        t22 = $[53];
    }
    let t23;
    if ($[54] !== state.uiLang) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "UI Language",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                value: state.uiLang,
                onChange: t21,
                options: t22
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/settings.tsx",
                lineNumber: 411,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[54] = state.uiLang;
        $[55] = t23;
    } else {
        t23 = $[55];
    }
    let t24;
    if ($[56] !== t19 || $[57] !== t20 || $[58] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
            title: "Profile",
            desc: "\u0422\u043E\u0445\u0438\u0440\u0433\u043E\u043E \u0445\u0430\u0434\u0433\u0430\u043B\u0430\u0445, \u0441\u0430\u043D\u0443\u0443\u043B\u0433\u0430 \u0430\u0432\u0430\u0445 \u0438\u043C\u044D\u0439\u043B.",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-2",
                children: [
                    t19,
                    t20,
                    t23
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/_components/settings.tsx",
                lineNumber: 419,
                columnNumber: 250
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, this);
        $[56] = t19;
        $[57] = t20;
        $[58] = t23;
        $[59] = t24;
    } else {
        t24 = $[59];
    }
    let t25;
    let t26;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = ({
            "SettingsPage[<Select>.onChange]": (v_0)=>setState({
                    "SettingsPage[<Select>.onChange > setState()]": (s_0)=>({
                            ...s_0,
                            level: v_0
                        })
                }["SettingsPage[<Select>.onChange > setState()]"])
        })["SettingsPage[<Select>.onChange]"];
        t26 = [
            "Beginner",
            "Intermediate",
            "Advanced"
        ];
        $[60] = t25;
        $[61] = t26;
    } else {
        t25 = $[60];
        t26 = $[61];
    }
    let t27;
    if ($[62] !== state.level) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Level",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                value: state.level,
                onChange: t25,
                options: t26
            }, void 0, false, {
                fileName: "[project]/src/app/user/_components/settings.tsx",
                lineNumber: 447,
                columnNumber: 32
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 447,
            columnNumber: 11
        }, this);
        $[62] = state.level;
        $[63] = t27;
    } else {
        t27 = $[63];
    }
    let t28;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = ({
            "SettingsPage[<input>.onChange]": (e)=>setState({
                    "SettingsPage[<input>.onChange > setState()]": (s_1)=>({
                            ...s_1,
                            dailyGoalMin: clamp(Number(e.target.value), 5, 120)
                        })
                }["SettingsPage[<input>.onChange > setState()]"])
        })["SettingsPage[<input>.onChange]"];
        $[64] = t28;
    } else {
        t28 = $[64];
    }
    let t29;
    if ($[65] !== state.dailyGoalMin) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "range",
                    min: 5,
                    max: 120,
                    step: 5,
                    value: state.dailyGoalMin,
                    onChange: t28,
                    className: "w-full"
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/settings.tsx",
                    lineNumber: 469,
                    columnNumber: 52
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-16 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-center text-sm text-slate-800",
                    children: [
                        state.dailyGoalMin,
                        "m"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/user/_components/settings.tsx",
                    lineNumber: 469,
                    columnNumber: 162
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 469,
            columnNumber: 11
        }, this);
        $[65] = state.dailyGoalMin;
        $[66] = t29;
    } else {
        t29 = $[66];
    }
    let t30;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-slate-500",
            children: "5–120 минут (5 минутаар нэмэгдэнэ)"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[67] = t30;
    } else {
        t30 = $[67];
    }
    let t31;
    if ($[68] !== t29) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Daily goal (minutes)",
            children: [
                t29,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 484,
            columnNumber: 11
        }, this);
        $[68] = t29;
        $[69] = t31;
    } else {
        t31 = $[69];
    }
    let t32;
    if ($[70] !== t27 || $[71] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 md:grid-cols-2",
            children: [
                t27,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 492,
            columnNumber: 11
        }, this);
        $[70] = t27;
        $[71] = t31;
        $[72] = t32;
    } else {
        t32 = $[72];
    }
    let t33;
    if ($[73] !== state.studyModes) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-wrap gap-2",
            children: [
                "Grammar",
                "Vocabulary",
                "Speaking",
                "Listening",
                "Reading",
                "Writing"
            ].map({
                "SettingsPage[(anonymous)()]": (m)=>{
                    const active = state.studyModes.includes(m);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: {
                            "SettingsPage[(anonymous)() > <button>.onClick]": ()=>setState({
                                    "SettingsPage[(anonymous)() > <button>.onClick > setState()]": (s_2)=>({
                                            ...s_2,
                                            studyModes: toggleInArray(s_2.studyModes, m)
                                        })
                                }["SettingsPage[(anonymous)() > <button>.onClick > setState()]"])
                        }["SettingsPage[(anonymous)() > <button>.onClick]"],
                        className: [
                            "rounded-full px-3 py-1.5 text-sm border transition",
                            active ? "border-sky-200 bg-sky-50 text-sky-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        ].join(" "),
                        type: "button",
                        children: m
                    }, m, false, {
                        fileName: "[project]/src/app/user/_components/settings.tsx",
                        lineNumber: 504,
                        columnNumber: 18
                    }, this);
                }
            }["SettingsPage[(anonymous)()]"])
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 501,
            columnNumber: 11
        }, this);
        $[73] = state.studyModes;
        $[74] = t33;
    } else {
        t33 = $[74];
    }
    let t34;
    if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-slate-500",
            children: "Сонгосон төрлүүдээр чинь хичээл санал болгоно."
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 521,
            columnNumber: 11
        }, this);
        $[75] = t34;
    } else {
        t34 = $[75];
    }
    let t35;
    if ($[76] !== t33) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Study modes",
            children: [
                t33,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 528,
            columnNumber: 11
        }, this);
        $[76] = t33;
        $[77] = t35;
    } else {
        t35 = $[77];
    }
    let t36;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = ({
            "SettingsPage[<Toggle>.onChange]": (v_1)=>setState({
                    "SettingsPage[<Toggle>.onChange > setState()]": (s_3)=>({
                            ...s_3,
                            showTranslations: v_1
                        })
                }["SettingsPage[<Toggle>.onChange > setState()]"])
        })["SettingsPage[<Toggle>.onChange]"];
        $[78] = t36;
    } else {
        t36 = $[78];
    }
    let t37;
    if ($[79] !== state.showTranslations) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
            title: "Show Mongolian translation",
            desc: "\u04AE\u0433/\u04E9\u0433\u04AF\u04AF\u043B\u0431\u044D\u0440\u0438\u0439\u043D \u043E\u0440\u0447\u0443\u0443\u043B\u0433\u0430 \u0445\u0430\u0440\u0443\u0443\u043B\u0430\u0445",
            checked: state.showTranslations,
            onChange: t36
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 550,
            columnNumber: 11
        }, this);
        $[79] = state.showTranslations;
        $[80] = t37;
    } else {
        t37 = $[80];
    }
    let t38;
    if ($[81] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = ({
            "SettingsPage[<Toggle>.onChange]": (v_2)=>setState({
                    "SettingsPage[<Toggle>.onChange > setState()]": (s_4)=>({
                            ...s_4,
                            autoPlayAudio: v_2
                        })
                }["SettingsPage[<Toggle>.onChange > setState()]"])
        })["SettingsPage[<Toggle>.onChange]"];
        $[81] = t38;
    } else {
        t38 = $[81];
    }
    let t39;
    if ($[82] !== state.autoPlayAudio) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
            title: "Auto-play audio",
            desc: "\u0421\u0443\u0440\u0430\u043B\u0446\u0430\u0445 \u04AF\u0435\u0434 \u0434\u0443\u0443\u0434\u043B\u0430\u0433\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0430\u0430\u0440 \u0442\u043E\u0433\u043B\u0443\u0443\u043B\u0430\u0445",
            checked: state.autoPlayAudio,
            onChange: t38
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 572,
            columnNumber: 11
        }, this);
        $[82] = state.autoPlayAudio;
        $[83] = t39;
    } else {
        t39 = $[83];
    }
    let t40;
    if ($[84] !== t37 || $[85] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-3 md:grid-cols-2",
            children: [
                t37,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 580,
            columnNumber: 11
        }, this);
        $[84] = t37;
        $[85] = t39;
        $[86] = t40;
    } else {
        t40 = $[86];
    }
    let t41;
    if ($[87] !== t32 || $[88] !== t35 || $[89] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
            title: "Learning",
            desc: "\u0422\u04AF\u0432\u0448\u0438\u043D, \u04E9\u0434\u04E9\u0440 \u0442\u0443\u0442\u043C\u044B\u043D \u0437\u043E\u0440\u0438\u043B\u0433\u043E, \u0445\u0438\u0447\u044D\u044D\u043B\u0438\u0439\u043D \u0442\u04E9\u0440\u04E9\u043B.",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5",
                children: [
                    t32,
                    t35,
                    t40
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/_components/settings.tsx",
                lineNumber: 589,
                columnNumber: 277
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 589,
            columnNumber: 11
        }, this);
        $[87] = t32;
        $[88] = t35;
        $[89] = t40;
        $[90] = t41;
    } else {
        t41 = $[90];
    }
    let t42;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = ({
            "SettingsPage[<Toggle>.onChange]": (v_3)=>setState({
                    "SettingsPage[<Toggle>.onChange > setState()]": (s_5)=>({
                            ...s_5,
                            remindEnabled: v_3
                        })
                }["SettingsPage[<Toggle>.onChange > setState()]"])
        })["SettingsPage[<Toggle>.onChange]"];
        $[91] = t42;
    } else {
        t42 = $[91];
    }
    let t43;
    if ($[92] !== state.remindEnabled) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
            title: "Daily reminder",
            desc: "\u04E8\u0434\u04E9\u0440 \u0431\u04AF\u0440 \u0442\u043E\u0434\u043E\u0440\u0445\u043E\u0439 \u0446\u0430\u0433\u0442 \u0441\u0430\u043D\u0443\u0443\u043B\u0433\u0430 \u0430\u0441\u0430\u0430\u0445",
            checked: state.remindEnabled,
            onChange: t42
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 613,
            columnNumber: 11
        }, this);
        $[92] = state.remindEnabled;
        $[93] = t43;
    } else {
        t43 = $[93];
    }
    let t44;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = ({
            "SettingsPage[<input>.onChange]": (e_0)=>setState({
                    "SettingsPage[<input>.onChange > setState()]": (s_6)=>({
                            ...s_6,
                            remindTime: e_0.target.value
                        })
                }["SettingsPage[<input>.onChange > setState()]"])
        })["SettingsPage[<input>.onChange]"];
        $[94] = t44;
    } else {
        t44 = $[94];
    }
    const t45 = !state.remindEnabled;
    let t46;
    if ($[95] !== state.remindTime || $[96] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "time",
            value: state.remindTime,
            onChange: t44,
            disabled: t45,
            className: "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-300 focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[95] = state.remindTime;
        $[96] = t45;
        $[97] = t46;
    } else {
        t46 = $[97];
    }
    let t47;
    if ($[98] === Symbol.for("react.memo_cache_sentinel")) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-slate-500",
            children: "*Энд зөвхөн UI тохиргоо. Push/Email reminder бол backend дээр холбоно."
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 645,
            columnNumber: 11
        }, this);
        $[98] = t47;
    } else {
        t47 = $[98];
    }
    let t48;
    if ($[99] !== t46) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
            label: "Reminder time",
            children: [
                t46,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 652,
            columnNumber: 11
        }, this);
        $[99] = t46;
        $[100] = t48;
    } else {
        t48 = $[100];
    }
    let t49;
    if ($[101] !== t43 || $[102] !== t48) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
            title: "Reminders",
            desc: "\u04E8\u0434\u04E9\u0440 \u0431\u04AF\u0440 \u0441\u0430\u043D\u0443\u0443\u043B\u0433\u0430 \u0430\u0432\u0447, streak-\u044D\u044D \u0445\u0430\u0434\u0433\u0430\u043B.",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 md:grid-cols-2",
                children: [
                    t43,
                    t48
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/_components/settings.tsx",
                lineNumber: 660,
                columnNumber: 218
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 660,
            columnNumber: 11
        }, this);
        $[101] = t43;
        $[102] = t48;
        $[103] = t49;
    } else {
        t49 = $[103];
    }
    let t50;
    if ($[104] !== savedAt) {
        t50 = savedAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                "Last saved:",
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-medium text-slate-800",
                    children: new Date(savedAt).toLocaleString()
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/settings.tsx",
                    lineNumber: 669,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true) : "Changes are saved automatically.";
        $[104] = savedAt;
        $[105] = t50;
    } else {
        t50 = $[105];
    }
    let t51;
    if ($[106] !== t50) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-slate-600",
            children: t50
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 677,
            columnNumber: 11
        }, this);
        $[106] = t50;
        $[107] = t51;
    } else {
        t51 = $[107];
    }
    let t52;
    if ($[108] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-xs text-slate-500",
            children: [
                "Storage: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono",
                    children: STORAGE_KEY
                }, void 0, false, {
                    fileName: "[project]/src/app/user/_components/settings.tsx",
                    lineNumber: 685,
                    columnNumber: 60
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 685,
            columnNumber: 11
        }, this);
        $[108] = t52;
    } else {
        t52 = $[108];
    }
    let t53;
    if ($[109] !== t51) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-2xl border border-slate-200 bg-slate-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 md:flex-row md:items-center md:justify-between",
                children: [
                    t51,
                    t52
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/_components/settings.tsx",
                lineNumber: 692,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 692,
            columnNumber: 11
        }, this);
        $[109] = t51;
        $[110] = t53;
    } else {
        t53 = $[110];
    }
    let t54;
    if ($[111] !== t24 || $[112] !== t41 || $[113] !== t49 || $[114] !== t53) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-4xl px-4 py-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6",
                children: [
                    t24,
                    t41,
                    t49,
                    t53
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/user/_components/settings.tsx",
                lineNumber: 700,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 700,
            columnNumber: 11
        }, this);
        $[111] = t24;
        $[112] = t41;
        $[113] = t49;
        $[114] = t53;
        $[115] = t54;
    } else {
        t54 = $[115];
    }
    let t55;
    if ($[116] !== t18 || $[117] !== t54) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-white",
            children: [
                t18,
                t54
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 711,
            columnNumber: 11
        }, this);
        $[116] = t18;
        $[117] = t54;
        $[118] = t55;
    } else {
        t55 = $[118];
    }
    return t55;
}
_s(SettingsPage, "Cxxm1aoT4bqGU/k9FHRfHfCfoKE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SettingsPage;
/* ---------- UI bits ---------- */ function _SettingsPageResetSetState(prev_1) {
    return {
        ...DEFAULT,
        fullName: prev_1.fullName,
        email: prev_1.email
    };
}
function _SettingsPageUseState() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) {
            return DEFAULT;
        }
        const parsed = JSON.parse(raw);
        return {
            ...DEFAULT,
            ...parsed
        };
    } catch  {
        return DEFAULT;
    }
}
function Section(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "f0e17a1e28743e24d4b4fbcb911b1548e500dffbe09932a72c4d46ff160e0016") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f0e17a1e28743e24d4b4fbcb911b1548e500dffbe09932a72c4d46ff160e0016";
    }
    const { title, desc, children } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-base font-semibold text-slate-900",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 762,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== desc) {
        t2 = desc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-sm text-slate-500",
            children: desc
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 770,
            columnNumber: 17
        }, this) : null;
        $[3] = desc;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 778,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== children || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-3xl border border-slate-200 bg-white p-5 shadow-sm",
            children: [
                t3,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 787,
            columnNumber: 10
        }, this);
        $[8] = children;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    return t4;
}
_c1 = Section;
function Field(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "f0e17a1e28743e24d4b4fbcb911b1548e500dffbe09932a72c4d46ff160e0016") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f0e17a1e28743e24d4b4fbcb911b1548e500dffbe09932a72c4d46ff160e0016";
    }
    const { label, children } = t0;
    let t1;
    if ($[1] !== label) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-1 text-sm font-medium text-slate-700",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 810,
            columnNumber: 10
        }, this);
        $[1] = label;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== children || $[4] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 818,
            columnNumber: 10
        }, this);
        $[3] = children;
        $[4] = t1;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    return t2;
}
_c2 = Field;
function Select(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "f0e17a1e28743e24d4b4fbcb911b1548e500dffbe09932a72c4d46ff160e0016") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f0e17a1e28743e24d4b4fbcb911b1548e500dffbe09932a72c4d46ff160e0016";
    }
    const { value, onChange, options } = t0;
    let t1;
    if ($[1] !== onChange) {
        t1 = ({
            "Select[<select>.onChange]": (e)=>onChange(e.target.value)
        })["Select[<select>.onChange]"];
        $[1] = onChange;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== options) {
        t2 = options.map(_SelectOptionsMap);
        $[3] = options;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2 || $[7] !== value) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            value: value,
            onChange: t1,
            className: "w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-sky-300 focus:ring-2",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 860,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = value;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    return t3;
}
_c3 = Select;
function _SelectOptionsMap(o) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: o,
        children: o
    }, o, false, {
        fileName: "[project]/src/app/user/_components/settings.tsx",
        lineNumber: 871,
        columnNumber: 10
    }, this);
}
function Toggle(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "f0e17a1e28743e24d4b4fbcb911b1548e500dffbe09932a72c4d46ff160e0016") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "f0e17a1e28743e24d4b4fbcb911b1548e500dffbe09932a72c4d46ff160e0016";
    }
    const { title, desc, checked, onChange } = t0;
    let t1;
    if ($[1] !== title) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-sm font-semibold text-slate-900",
            children: title
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 889,
            columnNumber: 10
        }, this);
        $[1] = title;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== desc) {
        t2 = desc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-1 text-sm text-slate-500",
            children: desc
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 897,
            columnNumber: 17
        }, this) : null;
        $[3] = desc;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 905,
            columnNumber: 10
        }, this);
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== checked || $[9] !== onChange) {
        t4 = ({
            "Toggle[<button>.onClick]": ()=>onChange(!checked)
        })["Toggle[<button>.onClick]"];
        $[8] = checked;
        $[9] = onChange;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const t5 = checked ? "border-sky-200 bg-sky-500" : "border-slate-200 bg-slate-100";
    let t6;
    if ($[11] !== t5) {
        t6 = [
            "relative h-8 w-14 rounded-full border transition",
            t5
        ];
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const t7 = t6.join(" ");
    const t8 = checked ? "left-7" : "left-1";
    let t9;
    if ($[13] !== t8) {
        t9 = [
            "absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm transition",
            t8
        ];
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    const t10 = t9.join(" ");
    let t11;
    if ($[15] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t10
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 945,
            columnNumber: 11
        }, this);
        $[15] = t10;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== checked || $[18] !== t11 || $[19] !== t4 || $[20] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: t4,
            className: t7,
            "aria-pressed": checked,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 953,
            columnNumber: 11
        }, this);
        $[17] = checked;
        $[18] = t11;
        $[19] = t4;
        $[20] = t7;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== t12 || $[23] !== t3) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4",
            children: [
                t3,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/user/_components/settings.tsx",
            lineNumber: 964,
            columnNumber: 11
        }, this);
        $[22] = t12;
        $[23] = t3;
        $[24] = t13;
    } else {
        t13 = $[24];
    }
    return t13;
}
_c4 = Toggle;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "SettingsPage");
__turbopack_context__.k.register(_c1, "Section");
__turbopack_context__.k.register(_c2, "Field");
__turbopack_context__.k.register(_c3, "Select");
__turbopack_context__.k.register(_c4, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_5aecfde8._.js.map