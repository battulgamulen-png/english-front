"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useMemo, useState } from "react";

export const INITIAL_LESSONS: Lesson[] = [
  // =========================
  // ACTIVE VOICE — 16
  // =========================
  {
    id: "a-present-simple",
    titleEn: "Present Simple",
    titleMn: "Одоо цаг (ердийн)",
    level: "A1",
    tags: ["Tense", "Basics"],
    ruleEn: "Habits, routines, facts, and general truths.",
    ruleMn: "Дадал зуршил, хэвшил, баримт, ерөнхий үнэн дээр хэрэглэнэ.",
    formEn: "S + V(s/es) | do/does not + V | Do/Does + S + V?",
    formMn: "S + V(s/es) | do/does not + V | Do/Does + S + V?",
    examples: [
      { en: "I study every day.", mn: "Би өдөр бүр хичээллэдэг." },
      { en: "She works in a bank.", mn: "Тэр банкинд ажилладаг." },
      { en: "Do you like tea?", mn: "Чи цайнд дуртай юу?" },
    ],
  },
  {
    id: "a-present-continuous",
    titleEn: "Present Continuous",
    titleMn: "Одоо үргэлжилж буй цаг",
    level: "A2",
    tags: ["Tense"],
    ruleEn: "Actions happening now; temporary situations; trends.",
    ruleMn: "Яг одоо болж буй үйлдэл; түр зуурын нөхцөл; чиг хандлага.",
    formEn: "S + am/is/are + V-ing",
    formMn: "S + am/is/are + V-ing",
    examples: [
      { en: "I am studying now.", mn: "Би одоо хичээллэж байна." },
      {
        en: "She is working this week.",
        mn: "Тэр энэ долоо хоногт ажиллаж байна.",
      },
      { en: "Are you listening?", mn: "Чи сонсож байна уу?" },
    ],
  },
  {
    id: "a-present-perfect",
    titleEn: "Present Perfect",
    titleMn: "Одоо төгс цаг",
    level: "B1",
    tags: ["Tense"],
    ruleEn: "Life experience, unfinished time, result now.",
    ruleMn: "Туршлага, дуусаагүй цаг хугацаа, одоо нөлөөлсөн үр дүн.",
    formEn: "S + have/has + V3",
    formMn: "S + have/has + V3",
    examples: [
      { en: "I have visited Japan.", mn: "Би Японд очиж үзсэн." },
      {
        en: "She has just finished her homework.",
        mn: "Тэр дөнгөж даалгавраа дуусгалаа.",
      },
      { en: "Have you ever tried sushi?", mn: "Чи суши идэж үзсэн үү?" },
    ],
  },
  {
    id: "a-present-perfect-continuous",
    titleEn: "Present Perfect Continuous",
    titleMn: "Одоо төгс үргэлжлэх цаг",
    level: "B2",
    tags: ["Tense"],
    ruleEn:
      "An action started in the past and continues to now (focus on duration).",
    ruleMn:
      "Өнгөрсөнд эхэлж одоо хүртэл үргэлжилж буй үйлдэл (үргэлжилсэн хугацаа онцолно).",
    formEn: "S + have/has been + V-ing",
    formMn: "S + have/has been + V-ing",
    examples: [
      {
        en: "I have been learning English for two years.",
        mn: "Би 2 жил англи хэл сурч байна.",
      },
      {
        en: "She has been working here since 2022.",
        mn: "Тэр 2022 оноос хойш энд ажиллаж байна.",
      },
      { en: "Have you been waiting long?", mn: "Чи удаан хүлээж байна уу?" },
    ],
  },
  {
    id: "a-past-simple",
    titleEn: "Past Simple",
    titleMn: "Өнгөрсөн цаг (ердийн)",
    level: "A2",
    tags: ["Tense"],
    ruleEn: "Completed actions in the past (finished time).",
    ruleMn: "Өнгөрсөнд бүрэн дууссан үйлдэл (дууссан цаг хугацаа).",
    formEn: "S + V2/ed | did not + V | Did + S + V?",
    formMn: "S + V2/ed | did not + V | Did + S + V?",
    examples: [
      { en: "I met him yesterday.", mn: "Би өчигдөр түүнтэй уулзсан." },
      { en: "She didn’t go to class.", mn: "Тэр хичээлдээ яваагүй." },
      { en: "Did you call me?", mn: "Чи над руу залгасан уу?" },
    ],
  },
  {
    id: "a-past-continuous",
    titleEn: "Past Continuous",
    titleMn: "Өнгөрсөн үргэлжилж буй цаг",
    level: "B1",
    tags: ["Tense"],
    ruleEn:
      "Action in progress at a specific time in the past; background action.",
    ruleMn: "Өнгөрсөнд тодорхой цагт үргэлжилж байсан үйлдэл; дэвсгэр үйлдэл.",
    formEn: "S + was/were + V-ing",
    formMn: "S + was/were + V-ing",
    examples: [
      { en: "I was studying at 8 PM.", mn: "Би орой 8-д хичээллэж байсан." },
      {
        en: "She was cooking when I arrived.",
        mn: "Намайг ирэхэд тэр хоол хийж байсан.",
      },
      { en: "Were they sleeping?", mn: "Тэд унтаж байсан уу?" },
    ],
  },
  {
    id: "a-past-perfect",
    titleEn: "Past Perfect",
    titleMn: "Өнгөрсөн төгс цаг",
    level: "B2",
    tags: ["Tense"],
    ruleEn: "One action happened before another action in the past.",
    ruleMn: "Өнгөрсөнд нэг үйлдэл нөгөөгөөсөө өмнө болсон.",
    formEn: "S + had + V3",
    formMn: "S + had + V3",
    examples: [
      {
        en: "I had finished work before he called.",
        mn: "Тэр залгахаас өмнө би ажлаа дуусгасан байсан.",
      },
      {
        en: "She had left when we arrived.",
        mn: "Биднийг ирэхэд тэр явсан байсан.",
      },
      {
        en: "Had you seen it before?",
        mn: "Чи өмнө нь үүнийг үзэж байсан уу?",
      },
    ],
  },
  {
    id: "a-past-perfect-continuous",
    titleEn: "Past Perfect Continuous",
    titleMn: "Өнгөрсөн төгс үргэлжлэх цаг",
    level: "C1",
    tags: ["Tense"],
    ruleEn: "Duration before a past point; cause/background for a past result.",
    ruleMn:
      "Өнгөрсөн цагийн цэгээс өмнөх үргэлжилсэн хугацаа; өнгөрсөн үр дүнгийн шалтгаан.",
    formEn: "S + had been + V-ing",
    formMn: "S + had been + V-ing",
    examples: [
      {
        en: "I had been studying for hours before the exam.",
        mn: "Шалгалтаас өмнө би хэдэн цаг хичээллэсэн байсан.",
      },
      {
        en: "She was tired because she had been working.",
        mn: "Тэр ажиллаж байсан болохоор ядарсан байсан.",
      },
      { en: "Had they been waiting long?", mn: "Тэд удаан хүлээж байсан уу?" },
    ],
  },
  {
    id: "a-future-will",
    titleEn: "Future (will)",
    titleMn: "Ирээдүй цаг (will)",
    level: "A2",
    tags: ["Tense", "Basics"],
    ruleEn: "Predictions, promises, spontaneous decisions.",
    ruleMn: "Таамаглал, амлалт, гэнэтийн шийдвэр.",
    formEn: "S + will + V",
    formMn: "S + will + V",
    examples: [
      { en: "I will help you.", mn: "Би чамд тусална." },
      { en: "It will rain tomorrow.", mn: "Маргааш бороо орох байх." },
      { en: "Will you call me later?", mn: "Дараа нь над руу залгах уу?" },
    ],
  },
  {
    id: "a-future-going-to",
    titleEn: "Future (be going to)",
    titleMn: "Ирээдүй (be going to)",
    level: "A2",
    tags: ["Tense"],
    ruleEn: "Plans/intentions; prediction based on evidence now.",
    ruleMn: "Төлөвлөгөө/зорилго; одоогийн баримтад тулгуурласан таамаг.",
    formEn: "S + am/is/are going to + V",
    formMn: "S + am/is/are going to + V",
    examples: [
      {
        en: "I am going to study tonight.",
        mn: "Би өнөө орой хичээллэх гэж байна.",
      },
      {
        en: "She is going to buy a new phone.",
        mn: "Тэр шинэ утас авах гэж байна.",
      },
      {
        en: "Look at the clouds! It’s going to rain.",
        mn: "Үүл хараач! Бороо орох нь.",
      },
    ],
  },
  {
    id: "a-future-present-continuous",
    titleEn: "Present Continuous for Future",
    titleMn: "Одоо үргэлжлэх (ирээдүйн тов)",
    level: "B1",
    tags: ["Tense"],
    ruleEn: "Fixed arrangements in the near future.",
    ruleMn: "Ойрын ирээдүйн товлогдсон, тохирсон зүйл.",
    formEn: "S + am/is/are + V-ing (future meaning)",
    formMn: "S + am/is/are + V-ing (ирээдүй утгатай)",
    examples: [
      {
        en: "I am meeting my teacher tomorrow.",
        mn: "Би маргааш багштайгаа уулзана.",
      },
      {
        en: "She is flying to Seoul next week.",
        mn: "Тэр ирэх долоо хоногт Сөүл рүү ниснэ.",
      },
      { en: "Are you coming tonight?", mn: "Чи өнөө орой ирэх үү?" },
    ],
  },
  {
    id: "a-future-present-simple",
    titleEn: "Present Simple for Future (timetables)",
    titleMn: "Одоо цаг (хуваарь/хуваарьт ирээдүй)",
    level: "B1",
    tags: ["Tense"],
    ruleEn: "Schedules and timetables (train, class, flight).",
    ruleMn: "Хуваарь, цагийн хуваарь (галт тэрэг, хичээл, нислэг).",
    formEn: "S + V(s/es) (future schedule)",
    formMn: "S + V(s/es) (хуваарьт ирээдүй)",
    examples: [
      { en: "The train leaves at 7 AM.", mn: "Галт тэрэг өглөө 7-д явна." },
      { en: "Class starts at 9.", mn: "Хичээл 9-д эхэлнэ." },
      {
        en: "What time does the movie begin?",
        mn: "Кино хэдэн цагт эхлэх вэ?",
      },
    ],
  },
  {
    id: "a-future-continuous",
    titleEn: "Future Continuous",
    titleMn: "Ирээдүй үргэлжлэх цаг",
    level: "B2",
    tags: ["Tense"],
    ruleEn: "Action in progress at a specific time in the future.",
    ruleMn: "Ирээдүйд тодорхой цагт үргэлжилж байх үйлдэл.",
    formEn: "S + will be + V-ing",
    formMn: "S + will be + V-ing",
    examples: [
      {
        en: "I will be studying at 8 PM.",
        mn: "Би орой 8-д хичээллэж байх болно.",
      },
      {
        en: "She will be working tomorrow morning.",
        mn: "Тэр маргааш өглөө ажиллаж байх болно.",
      },
      {
        en: "Will you be using your laptop?",
        mn: "Чи лаптопоо ашиглаж байх уу?",
      },
    ],
  },
  {
    id: "a-future-perfect",
    titleEn: "Future Perfect",
    titleMn: "Ирээдүй төгс цаг",
    level: "C1",
    tags: ["Tense"],
    ruleEn: "Completed before a specific future time.",
    ruleMn: "Ирээдүйн тодорхой цагаас өмнө дууссан байх үйлдэл.",
    formEn: "S + will have + V3",
    formMn: "S + will have + V3",
    examples: [
      {
        en: "I will have finished by 6 PM.",
        mn: "Би 6 гэхэд дуусгасан байх болно.",
      },
      {
        en: "She will have left before you arrive.",
        mn: "Чамайг ирэхээс өмнө тэр явсан байх болно.",
      },
      {
        en: "Will you have completed it by Friday?",
        mn: "Баасан гэхэд дуусгасан байх уу?",
      },
    ],
  },
  {
    id: "a-future-perfect-continuous",
    titleEn: "Future Perfect Continuous",
    titleMn: "Ирээдүй төгс үргэлжлэх цаг",
    level: "C1",
    tags: ["Tense"],
    ruleEn: "Duration up to a future point (focus on how long).",
    ruleMn:
      "Ирээдүйн цэг хүртэлх үргэлжилсэн хугацаа (хэдий хэр удаан гэдгийг онцолно).",
    formEn: "S + will have been + V-ing",
    formMn: "S + will have been + V-ing",
    examples: [
      {
        en: "By June, I will have been working here for two years.",
        mn: "Зургаадугаар сар гэхэд би энд 2 жил ажилласан байх болно.",
      },
      {
        en: "She will have been studying for hours by then.",
        mn: "Тэр үед тэр хэдэн цаг хичээллэсэн байх болно.",
      },
      {
        en: "Will you have been living there long?",
        mn: "Чи тэнд удаан амьдарсан байх уу?",
      },
    ],
  },
  {
    id: "a-future-in-the-past",
    titleEn: "Future in the Past (would)",
    titleMn: "Өнгөрснөөс харсан ирээдүй (would)",
    level: "B2",
    tags: ["Tense"],
    ruleEn: "A future action viewed from a point in the past.",
    ruleMn: "Өнгөрсөн цагийн цэгээс цааш болох байсан үйлдэл.",
    formEn: "S + would + V",
    formMn: "S + would + V",
    examples: [
      {
        en: "I knew I would pass the exam.",
        mn: "Би шалгалтаа тэнцэнэ гэдгээ мэдэж байсан.",
      },
      {
        en: "She said she would call later.",
        mn: "Тэр дараа залгана гэж хэлсэн.",
      },
      {
        en: "We thought it would be easy.",
        mn: "Бид амархан байна гэж бодсон.",
      },
    ],
  },
  {
    id: "a-used-to",
    titleEn: "Used to (past habits/states)",
    titleMn: "Used to (өмнө нь тэгдэг/тийм байсан)",
    level: "B1",
    tags: ["Tense", "Basics"],
    ruleEn: "Past habits or states that are not true now.",
    ruleMn: "Одоо байхгүй болсон өмнөх дадал зуршил эсвэл байдал.",
    formEn: "S + used to + V | didn’t use to + V | Did + S + use to + V?",
    formMn: "S + used to + V | didn’t use to + V | Did + S + use to + V?",
    examples: [
      {
        en: "I used to play football.",
        mn: "Би өмнө нь хөлбөмбөг тоглодог байсан.",
      },
      {
        en: "She didn’t use to like coffee.",
        mn: "Тэр өмнө нь кофенд дургүй байсан.",
      },
      {
        en: "Did you use to live here?",
        mn: "Чи өмнө нь энд амьдардаг байсан уу?",
      },
    ],
  },

  // =========================
  // PASSIVE VOICE — 10
  // =========================
  {
    id: "p-present-simple",
    titleEn: "Passive: Present Simple",
    titleMn: "Идэвхгүй хэв: Одоо цаг",
    level: "B1",
    tags: ["Passive"],
    ruleEn: "Focus on the action/result, not the doer.",
    ruleMn: "Хийсэн хүнээс илүү үйлдэл/үр дүнг онцлоно.",
    formEn: "am/is/are + V3",
    formMn: "am/is/are + V3",
    examples: [
      { en: "English is spoken here.", mn: "Энд англиар ярьдаг." },
      {
        en: "The room is cleaned every day.",
        mn: "Өрөөг өдөр бүр цэвэрлэдэг.",
      },
      { en: "Are tickets sold online?", mn: "Тасалбарыг онлайнаар зардаг уу?" },
    ],
  },
  {
    id: "p-present-continuous",
    titleEn: "Passive: Present Continuous",
    titleMn: "Идэвхгүй хэв: Одоо үргэлжлэх",
    level: "B2",
    tags: ["Passive"],
    ruleEn: "Something is being done now.",
    ruleMn: "Яг одоо хийгдэж буй үйлдэл.",
    formEn: "am/is/are being + V3",
    formMn: "am/is/are being + V3",
    examples: [
      { en: "The report is being prepared.", mn: "Тайлан бэлдэгдэж байна." },
      { en: "A new bridge is being built.", mn: "Шинэ гүүр баригдаж байна." },
      { en: "Is the food being cooked?", mn: "Хоол хийгдэж байна уу?" },
    ],
  },
  {
    id: "p-present-perfect",
    titleEn: "Passive: Present Perfect",
    titleMn: "Идэвхгүй хэв: Одоо төгс",
    level: "B2",
    tags: ["Passive"],
    ruleEn: "Action completed; result is relevant now.",
    ruleMn: "Үйлдэл хийгдсэн; үр дүн нь одоо чухал.",
    formEn: "have/has been + V3",
    formMn: "have/has been + V3",
    examples: [
      { en: "The documents have been sent.", mn: "Баримтууд илгээгдсэн." },
      { en: "The car has been repaired.", mn: "Машин засагдсан." },
      { en: "Has the email been received?", mn: "Имэйл ирсэн үү?" },
    ],
  },
  {
    id: "p-past-simple",
    titleEn: "Passive: Past Simple",
    titleMn: "Идэвхгүй хэв: Өнгөрсөн цаг",
    level: "B1",
    tags: ["Passive"],
    ruleEn: "Past completed action; focus on object/result.",
    ruleMn: "Өнгөрсөнд дууссан үйлдэл; объект/үр дүнг онцолно.",
    formEn: "was/were + V3",
    formMn: "was/were + V3",
    examples: [
      { en: "The window was broken.", mn: "Цонх хагарсан." },
      { en: "The meeting was canceled.", mn: "Хурал цуцлагдсан." },
      { en: "Were the bills paid?", mn: "Төлбөрүүд төлөгдсөн үү?" },
    ],
  },
  {
    id: "p-past-continuous",
    titleEn: "Passive: Past Continuous",
    titleMn: "Идэвхгүй хэв: Өнгөрсөн үргэлжлэх",
    level: "C1",
    tags: ["Passive"],
    ruleEn: "Action was in progress in the past (passive).",
    ruleMn: "Өнгөрсөнд үргэлжилж байсан үйлдэл (идэвхгүй).",
    formEn: "was/were being + V3",
    formMn: "was/were being + V3",
    examples: [
      { en: "The road was being repaired.", mn: "Зам засагдаж байсан." },
      { en: "Dinner was being served.", mn: "Оройн хоол зөөгдөж байсан." },
      {
        en: "Was the plan being discussed?",
        mn: "Төлөвлөгөөг хэлэлцэж байсан уу?",
      },
    ],
  },
  {
    id: "p-past-perfect",
    titleEn: "Passive: Past Perfect",
    titleMn: "Идэвхгүй хэв: Өнгөрсөн төгс",
    level: "C1",
    tags: ["Passive"],
    ruleEn: "Completed before another past action (passive).",
    ruleMn: "Өнгөрсөнд өөр үйлдлээс өмнө дууссан (идэвхгүй).",
    formEn: "had been + V3",
    formMn: "had been + V3",
    examples: [
      { en: "The files had been deleted.", mn: "Файлууд устгагдсан байсан." },
      { en: "The tickets had been sold out.", mn: "Тасалбар дууссан байсан." },
      { en: "Had the room been cleaned?", mn: "Өрөөг цэвэрлэсэн байсан уу?" },
    ],
  },
  {
    id: "p-future-will",
    titleEn: "Passive: Future (will)",
    titleMn: "Идэвхгүй хэв: Ирээдүй (will)",
    level: "B2",
    tags: ["Passive"],
    ruleEn: "Future passive for predictions/plans.",
    ruleMn: "Ирээдүйд хийгдэх зүйл (идэвхгүй).",
    formEn: "will be + V3",
    formMn: "will be + V3",
    examples: [
      {
        en: "The results will be announced tomorrow.",
        mn: "Үр дүнг маргааш зарлана.",
      },
      {
        en: "The package will be delivered soon.",
        mn: "Илгээмж удахгүй хүргэгдэнэ.",
      },
      {
        en: "Will the project be finished on time?",
        mn: "Төсөл хугацаандаа дуусах уу?",
      },
    ],
  },
  {
    id: "p-future-going-to",
    titleEn: "Passive: be going to",
    titleMn: "Идэвхгүй хэв: be going to",
    level: "B2",
    tags: ["Passive"],
    ruleEn: "Planned future passive.",
    ruleMn: "Төлөвлөгдсөн ирээдүй (идэвхгүй).",
    formEn: "am/is/are going to be + V3",
    formMn: "am/is/are going to be + V3",
    examples: [
      {
        en: "A new policy is going to be introduced.",
        mn: "Шинэ бодлого нэвтрүүлэх гэж байна.",
      },
      { en: "The building is going to be painted.", mn: "Байшинг будна." },
      {
        en: "Are the rules going to be changed?",
        mn: "Дүрмүүд өөрчлөгдөх үү?",
      },
    ],
  },
  {
    id: "p-modal-passive",
    titleEn: "Passive with Modals",
    titleMn: "Туслах үйл үгтэй идэвхгүй хэв",
    level: "B2",
    tags: ["Passive", "Modal"],
    ruleEn: "Modal + be + V3 (can/must/should...).",
    ruleMn: "Modal + be + V3 (can/must/should...).",
    formEn: "can/must/should + be + V3",
    formMn: "can/must/should + be + V3",
    examples: [
      { en: "This problem can be solved.", mn: "Энэ асуудлыг шийдэж болно." },
      {
        en: "The form must be signed.",
        mn: "Маягтад гарын үсэг заавал зурна.",
      },
      {
        en: "The task should be completed today.",
        mn: "Даалгаврыг өнөөдөр дуусгах хэрэгтэй.",
      },
    ],
  },
  {
    id: "p-perfect-modal",
    titleEn: "Perfect Modal Passive",
    titleMn: "Perfect modal идэвхгүй хэв",
    level: "C1",
    tags: ["Passive", "Modal"],
    ruleEn: "Modal + have been + V3 (past possibility/obligation in passive).",
    ruleMn: "Modal + have been + V3 (өнгөрсөн боломж/үүрэг — идэвхгүй).",
    formEn: "might/should/must + have been + V3",
    formMn: "might/should/must + have been + V3",
    examples: [
      {
        en: "The email might have been sent.",
        mn: "Имэйл явсан байж магадгүй.",
      },
      {
        en: "The report should have been checked.",
        mn: "Тайланг шалгасан байх ёстой байсан.",
      },
      { en: "The keys must have been lost.", mn: "Түлхүүр алдагдсан байх нь." },
    ],
  },

  // =========================
  // CLAUSES — 3
  // =========================
  {
    id: "c-relative-clauses",
    titleEn: "Relative Clauses",
    titleMn: "Хамаатуулах өгүүлбэр (who/which/that)",
    level: "B1",
    tags: ["Clauses"],
    ruleEn: "Add extra information about a noun (person/thing).",
    ruleMn: "Нэр үг/хүнийг тодруулж нэмэлт мэдээлэл өгнө.",
    formEn: "noun + who/which/that + clause",
    formMn: "noun + who/which/that + clause",
    examples: [
      {
        en: "The man who lives next door is a doctor.",
        mn: "Хажуу айлд амьдардаг хүн эмч.",
      },
      {
        en: "This is the book that I told you about.",
        mn: "Энэ бол миний чамд ярьсан ном.",
      },
      {
        en: "I like movies which make me think.",
        mn: "Намайг бодолд оруулдаг кинонд би дуртай.",
      },
    ],
  },
  {
    id: "c-noun-clauses",
    titleEn: "Noun Clauses (that/wh-)",
    titleMn: "Нэр өгүүлбэр (what/that/why...)",
    level: "B2",
    tags: ["Clauses"],
    ruleEn: "A clause that acts like a noun (subject/object).",
    ruleMn: "Нэр үгийн үүрэг гүйцэтгэх өгүүлбэр (эзэн/тусагдахуун).",
    formEn: "I know that... / What you said is...",
    formMn: "I know that... / What you said is...",
    examples: [
      {
        en: "I know that you are busy.",
        mn: "Чамайг завгүй гэдгийг би мэднэ.",
      },
      {
        en: "What you said was helpful.",
        mn: "Чиний хэлсэн зүйл хэрэгтэй байсан.",
      },
      {
        en: "I don’t understand why he left.",
        mn: "Тэр яагаад явсныг би ойлгохгүй байна.",
      },
    ],
  },
  {
    id: "c-adverb-clauses",
    titleEn: "Adverb Clauses (time/reason/contrast)",
    titleMn: "Дайвар өгүүлбэр (цаг/шалтгаан/эсрэгцэл)",
    level: "B2",
    tags: ["Clauses"],
    ruleEn: "Gives time, reason, condition, contrast, etc.",
    ruleMn: "Цаг, шалтгаан, нөхцөл, эсрэгцэл зэрэг утга нэмнэ.",
    formEn: "when/because/although + clause",
    formMn: "when/because/although + clause",
    examples: [
      { en: "I will call you when I arrive.", mn: "Би очоод чам руу залгана." },
      {
        en: "I stayed home because it was raining.",
        mn: "Бороо орж байсан болохоор гэртээ үлдсэн.",
      },
      {
        en: "Although he was tired, he kept working.",
        mn: "Ядарсан ч гэсэн тэр үргэлжлүүлэн ажилласан.",
      },
    ],
  },

  // =========================
  // CONDITIONALS — 5
  // =========================
  {
    id: "cond-zero",
    titleEn: "Zero Conditional",
    titleMn: "0-р нөхцөлт өгүүлбэр",
    level: "B1",
    tags: ["Conditionals"],
    ruleEn: "General truths: If + present, present.",
    ruleMn: "Ерөнхий үнэн: If + present, present.",
    formEn: "If + present simple, present simple.",
    formMn: "If + present simple, present simple.",
    examples: [
      { en: "If you heat ice, it melts.", mn: "Хэрэв мөс халаавал хайлдаг." },
      {
        en: "If I don’t sleep, I feel bad.",
        mn: "Хэрэв би унтахгүй бол муу санагддаг.",
      },
      {
        en: "If you mix red and blue, you get purple.",
        mn: "Улаан, цэнхэрийг холивол нил ягаан болно.",
      },
    ],
  },
  {
    id: "cond-first",
    titleEn: "First Conditional",
    titleMn: "1-р нөхцөлт өгүүлбэр (боломжит ирээдүй)",
    level: "B1",
    tags: ["Conditionals"],
    ruleEn: "Real possible future: If + present, will + V.",
    ruleMn: "Ирээдүйд бодитоор боломжтой: If + present, will + V.",
    formEn: "If + present simple, will + V.",
    formMn: "If + present simple, will + V.",
    examples: [
      {
        en: "If it rains, I will stay home.",
        mn: "Хэрэв бороо орвол би гэртээ байна.",
      },
      { en: "If you study, you will pass.", mn: "Хэрэв хичээллэвэл тэнцэнэ." },
      {
        en: "We will be late if we don’t leave now.",
        mn: "Одоо явахгүй бол хоцорно.",
      },
    ],
  },
  {
    id: "cond-second",
    titleEn: "Second Conditional",
    titleMn: "2-р нөхцөлт өгүүлбэр (бодит биш/таамаг)",
    level: "B2",
    tags: ["Conditionals"],
    ruleEn: "Unreal present/future: If + past, would + V.",
    ruleMn: "Одоо/ирээдүйн бодит биш: If + past, would + V.",
    formEn: "If + past simple, would + V.",
    formMn: "If + past simple, would + V.",
    examples: [
      {
        en: "If I had more time, I would travel.",
        mn: "Хэрэв цаг ихтэй бол би аялна.",
      },
      {
        en: "If she knew, she would help.",
        mn: "Хэрэв тэр мэдсэн бол тусална.",
      },
      {
        en: "What would you do if you won?",
        mn: "Хэрэв чи хожвол юу хийх вэ?",
      },
    ],
  },
  {
    id: "cond-third",
    titleEn: "Third Conditional",
    titleMn: "3-р нөхцөлт өгүүлбэр (өнгөрсөнд харамсах)",
    level: "C1",
    tags: ["Conditionals"],
    ruleEn: "Unreal past: If + had V3, would have V3.",
    ruleMn: "Өнгөрсөн бодит биш: If + had V3, would have V3.",
    formEn: "If + past perfect, would have + V3.",
    formMn: "If + past perfect, would have + V3.",
    examples: [
      {
        en: "If I had studied, I would have passed.",
        mn: "Хэрэв хичээллэсэн бол тэнцэх байсан.",
      },
      {
        en: "If she had left earlier, she would have caught the bus.",
        mn: "Хэрэв эрт гарсан бол автобус амжих байсан.",
      },
      {
        en: "They wouldn’t have lost if they had trained.",
        mn: "Хэрэв бэлтгэл хийсэн бол тэд хожигдохгүй байсан.",
      },
    ],
  },
  {
    id: "cond-mixed",
    titleEn: "Mixed Conditionals",
    titleMn: "Холимог нөхцөлт өгүүлбэр",
    level: "C1",
    tags: ["Conditionals"],
    ruleEn:
      "Mix time: past condition → present result OR present condition → past result.",
    ruleMn:
      "Цаг холих: өнгөрсөн нөхцөл → одоогийн үр дүн эсвэл одоогийн нөхцөл → өнгөрсөн үр дүн.",
    formEn: "If + had V3, would + V | If + past, would have V3",
    formMn: "If + had V3, would + V | If + past, would have V3",
    examples: [
      {
        en: "If I had slept well, I would feel better now.",
        mn: "Хэрэв сайн унтсан бол одоо гайгүй байх байсан.",
      },
      {
        en: "If she were more careful, she wouldn’t have made that mistake.",
        mn: "Хэрэв тэр илүү болгоомжтой байсан бол тэр алдааг хийхгүй байсан.",
      },
      {
        en: "If we had saved money, we could buy it now.",
        mn: "Хэрэв мөнгө хадгалсан бол одоо авч чадах байсан.",
      },
    ],
  },
];
type Level = "A1" | "A2" | "B1" | "B2" | "C1";
type Tag =
  | "Tense"
  | "Basics"
  | "Modal"
  | "Conditionals"
  | "Passive"
  | "Clauses"
  | "Vocabulary";

type Example = { en: string; mn: string };

type Lesson = {
  id: string;
  titleEn: string;
  titleMn: string;
  level: Level;
  tags: Tag[];
  ruleEn: string;
  ruleMn: string;
  formEn?: string;
  formMn?: string;
  examples: Example[];
};

type LessonRow = {
  id: string;
  title_en: string;
  title_mn: string;
  level: Level;
  tags: Tag[];
  rule_en: string;
  rule_mn: string;
  form_en: string | null;
  form_mn: string | null;
  examples: Example[] | null;
};

const LEVELS: Level[] = ["A1", "A2", "B1", "B2", "C1"];
const TAGS: Tag[] = [
  "Basics",
  "Tense",
  "Modal",
  "Conditionals",
  "Passive",
  "Clauses",
  "Vocabulary",
];

function uid() {
  return Math.random().toString(36).slice(2, 10);
}

function mapRowToLesson(row: LessonRow): Lesson {
  return {
    id: row.id,
    titleEn: row.title_en,
    titleMn: row.title_mn,
    level: row.level,
    tags: Array.isArray(row.tags) ? row.tags : ["Basics"],
    ruleEn: row.rule_en,
    ruleMn: row.rule_mn,
    formEn: row.form_en ?? undefined,
    formMn: row.form_mn ?? undefined,
    examples:
      row.examples && row.examples.length
        ? row.examples
        : [{ en: "Example...", mn: "Жишээ..." }],
  };
}

export default function Grammar() {
  const supabase = useMemo(() => createClient(), []);
  const seededIds = useMemo(
    () => new Set(INITIAL_LESSONS.map((lesson) => lesson.id)),
    [],
  );
  const [lessons, setLessons] = useState<Lesson[]>(INITIAL_LESSONS);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);

  const [q, setQ] = useState("");
  const [level, setLevel] = useState<Level | "ALL">("ALL");
  const [tag, setTag] = useState<Tag | "ALL">("ALL");
  const [sortBy, setSortBy] = useState<"level" | "title">("level");

  const [selectedId, setSelectedId] = useState<string>(
    INITIAL_LESSONS[0]?.id ?? "",
  );

  // Add lesson form
  const [newTitleEn, setNewTitleEn] = useState("");
  const [newTitleMn, setNewTitleMn] = useState("");
  const [newLevel, setNewLevel] = useState<Level>("A1");
  const [newTags, setNewTags] = useState<Tag[]>(["Basics"]);
  const [newRuleEn, setNewRuleEn] = useState("");
  const [newRuleMn, setNewRuleMn] = useState("");
  const [newFormEn, setNewFormEn] = useState("");
  const [newFormMn, setNewFormMn] = useState("");
  const [newExEn, setNewExEn] = useState("");
  const [newExMn, setNewExMn] = useState("");

  useEffect(() => {
    let cancelled = false;

    const loadLessons = async () => {
      const { data, error } = await supabase
        .from("grammar_lessons")
        .select(
          "id,title_en,title_mn,level,tags,rule_en,rule_mn,form_en,form_mn,examples",
        )
        .order("created_at", { ascending: false });

      if (cancelled) return;

      if (error) {
        setSyncStatus(
          "",
        );
        return;
      }

      const dbLessons = (data as LessonRow[]).map(mapRowToLesson);
      const merged = [
        ...dbLessons,
        ...INITIAL_LESSONS.filter((l) => !dbLessons.some((d) => d.id === l.id)),
      ];
      setLessons(merged);
      setSelectedId(merged[0]?.id ?? "");
    };

    loadLessons();

    return () => {
      cancelled = true;
    };
  }, [supabase]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();

    const list = lessons
      .filter((l) => (level === "ALL" ? true : l.level === level))
      .filter((l) => (tag === "ALL" ? true : l.tags.includes(tag)))
      .filter((l) => {
        if (!query) return true;
        const hay = [
          l.titleEn,
          l.titleMn,
          l.level,
          l.tags.join(" "),
          l.ruleEn,
          l.ruleMn,
          l.formEn ?? "",
          l.formMn ?? "",
          ...l.examples.flatMap((e) => [e.en, e.mn]),
        ]
          .join(" ")
          .toLowerCase();
        return hay.includes(query);
      });

    const sorted = [...list].sort((a, b) => {
      if (sortBy === "title") return a.titleEn.localeCompare(b.titleEn);
      // sortBy level
      const aIdx = LEVELS.indexOf(a.level);
      const bIdx = LEVELS.indexOf(b.level);
      if (aIdx !== bIdx) return aIdx - bIdx;
      return a.titleEn.localeCompare(b.titleEn);
    });

    return sorted;
  }, [lessons, level, tag, q, sortBy]);

  const selected = useMemo(
    () => lessons.find((l) => l.id === selectedId) ?? filtered[0] ?? null,
    [lessons, selectedId, filtered],
  );

  // keep selected valid when filters change
  const toggleTag = (t: Tag) => {
    setNewTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t],
    );
  };

  const addLesson = async () => {
    const titleEn = newTitleEn.trim();
    const titleMn = newTitleMn.trim();
    const ruleEn = newRuleEn.trim();
    const ruleMn = newRuleMn.trim();

    if (!titleEn || !titleMn || !ruleEn || !ruleMn) return;

    const examples: Example[] = [];
    if (newExEn.trim() && newExMn.trim()) {
      examples.push({ en: newExEn.trim(), mn: newExMn.trim() });
    }

    const localId = `custom-${uid()}`;
    const lesson: Lesson = {
      id: localId,
      titleEn,
      titleMn,
      level: newLevel,
      tags: newTags.length ? newTags : ["Basics"],
      ruleEn,
      ruleMn,
      formEn: newFormEn.trim() || undefined,
      formMn: newFormMn.trim() || undefined,
      examples: examples.length
        ? examples
        : [{ en: "Example...", mn: "Жишээ..." }],
    };

    const payload = {
      title_en: lesson.titleEn,
      title_mn: lesson.titleMn,
      level: lesson.level,
      tags: lesson.tags,
      rule_en: lesson.ruleEn,
      rule_mn: lesson.ruleMn,
      form_en: lesson.formEn ?? null,
      form_mn: lesson.formMn ?? null,
      examples: lesson.examples,
    };

    const { data, error } = await supabase
      .from("grammar_lessons")
      .insert(payload)
      .select(
        "id,title_en,title_mn,level,tags,rule_en,rule_mn,form_en,form_mn,examples",
      )
      .single();

    const savedLesson =
      !error && data ? mapRowToLesson(data as LessonRow) : lesson;

    setLessons((prev) => [savedLesson, ...prev]);
    setSelectedId(savedLesson.id);
    setSyncStatus(
      error
        ? "Supabase руу хадгалж чадсангүй. Local дээр нэмэгдлээ."
        : "Supabase руу амжилттай хадгаллаа.",
    );

    // reset
    setNewTitleEn("");
    setNewTitleMn("");
    setNewRuleEn("");
    setNewRuleMn("");
    setNewFormEn("");
    setNewFormMn("");
    setNewExEn("");
    setNewExMn("");
    setNewTags(["Basics"]);
    setNewLevel("A1");
  };

  const deleteLesson = async (id: string) => {
    const { error } = await supabase
      .from("grammar_lessons")
      .delete()
      .eq("id", id);
    if (error) {
      setSyncStatus("Supabase-с устгаж чадсангүй. Local дээр устгалаа.");
    } else {
      setSyncStatus("Supabase-с устгалаа.");
    }

    setLessons((prev) => prev.filter((l) => l.id !== id));
    if (selectedId === id) {
      setSelectedId(() => {
        const next = lessons.find((l) => l.id !== id)?.id;
        return next ?? "";
      });
    }
  };

  const isCustom = (id?: string) => (id ? !seededIds.has(id) : false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* Header */}
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              English Grammar (EN + MN)
            </h1>
            <p className="text-sm text-slate-600">
              Дүрмүүдийг ангилж, хайж, өөрийн хичээл нэмээрэй.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="relative">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search: tense, if, can, ... / хайх"
                className="w-full sm:w-[320px] rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "level" | "title")}
              className="w-full rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 sm:w-auto"
            >
              <option value="level">Sort: Level</option>
              <option value="title">Sort: Title</option>
            </select>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {syncStatus ? (
            <div className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600">
              {syncStatus}
            </div>
          ) : null}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Level</span>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value as Level | "ALL")}
              className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
            >
              <option value="ALL">All</option>
              {LEVELS.map((lv) => (
                <option key={lv} value={lv}>
                  {lv}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-600">Tag</span>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value as Tag | "ALL")}
              className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
            >
              <option value="ALL">All</option>
              {TAGS.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full text-xs text-slate-500 sm:ml-auto sm:w-auto sm:text-right">
            Showing{" "}
            <span className="font-medium text-slate-800">
              {filtered.length}
            </span>{" "}
            lessons
          </div>
        </div>

        {/* Layout */}
        <div className="mt-6 grid gap-4 md:grid-cols-12">
          {/* Left list */}
          <div className="md:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-3">
              <div className="mb-2 flex items-center justify-between px-2">
                <h2 className="text-sm font-semibold text-slate-800">
                  Lessons
                </h2>
                <span className="text-xs text-slate-500">Click to open</span>
              </div>

              <div className="max-h-[520px] overflow-auto pr-1">
                {filtered.map((l) => (
                  <button
                    key={l.id}
                    onClick={() => setSelectedId(l.id)}
                    className={[
                      "w-full rounded-2xl border px-3 py-3 text-left transition",
                      selected?.id === l.id
                        ? "border-slate-300 bg-slate-50"
                        : "border-slate-200 bg-white hover:bg-slate-50",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold">{l.titleEn}</div>
                        <div className="text-xs text-slate-600">
                          {l.titleMn}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-700">
                            {l.level}
                          </span>
                          {l.tags.slice(0, 3).map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-700"
                            >
                              {t}
                            </span>
                          ))}
                          {l.tags.length > 3 ? (
                            <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-500">
                              +{l.tags.length - 3}
                            </span>
                          ) : null}
                        </div>
                      </div>

                      {isCustom(l.id) ? (
                        <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-500">
                          custom
                        </span>
                      ) : null}
                    </div>
                  </button>
                ))}

                {filtered.length === 0 ? (
                  <div className="px-3 py-10 text-center text-sm text-slate-500">
                    No lessons found.
                  </div>
                ) : null}
              </div>
            </div>

            {/* Add lesson */}
            <div className="mt-4 rounded-3xl border border-slate-200 bg-white p-4">
              <h3 className="text-sm font-semibold">Add your lesson</h3>
              <p className="mt-1 text-xs text-slate-600">
                Англи + монгол гарчиг, дүрэм, жишээ оруулаад нэмнэ.
              </p>

              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                <input
                  value={newTitleEn}
                  onChange={(e) => setNewTitleEn(e.target.value)}
                  placeholder="Title (EN) e.g. Present Perfect"
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                />
                <input
                  value={newTitleMn}
                  onChange={(e) => setNewTitleMn(e.target.value)}
                  placeholder="Гарчиг (MN) ж: Одоо төгс цаг"
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                />

                <select
                  value={newLevel}
                  onChange={(e) => setNewLevel(e.target.value as Level)}
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                >
                  {LEVELS.map((lv) => (
                    <option key={lv} value={lv}>
                      {lv}
                    </option>
                  ))}
                </select>

                <div className="flex flex-wrap gap-2 rounded-2xl border border-slate-200 p-2">
                  {TAGS.map((t) => {
                    const active = newTags.includes(t);
                    return (
                      <button
                        type="button"
                        key={t}
                        onClick={() => toggleTag(t)}
                        className={[
                          "rounded-full border px-2 py-1 text-[11px] transition",
                          active
                            ? "border-slate-400 bg-slate-100 text-slate-900"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
                        ].join(" ")}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>

                <textarea
                  value={newRuleEn}
                  onChange={(e) => setNewRuleEn(e.target.value)}
                  placeholder="Rule (EN) ..."
                  className="min-h-[84px] rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 sm:col-span-2"
                />
                <textarea
                  value={newRuleMn}
                  onChange={(e) => setNewRuleMn(e.target.value)}
                  placeholder="Дүрэм (MN) ..."
                  className="min-h-[84px] rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300 sm:col-span-2"
                />

                <input
                  value={newFormEn}
                  onChange={(e) => setNewFormEn(e.target.value)}
                  placeholder="Form (EN) optional"
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                />
                <input
                  value={newFormMn}
                  onChange={(e) => setNewFormMn(e.target.value)}
                  placeholder="Хэлбэр (MN) optional"
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                />

                <input
                  value={newExEn}
                  onChange={(e) => setNewExEn(e.target.value)}
                  placeholder="Example (EN) optional"
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                />
                <input
                  value={newExMn}
                  onChange={(e) => setNewExMn(e.target.value)}
                  placeholder="Жишээ (MN) optional"
                  className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-slate-300"
                />
              </div>

              <button
                type="button"
                onClick={addLesson}
                className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-95 active:opacity-90"
              >
                Add lesson
              </button>

              <div className="mt-2 text-xs text-slate-500">
                * Title EN/MN + Rule EN/MN 4 талбар хоосон байвал нэмэхгүй.
              </div>
            </div>
          </div>

          {/* Right details */}
          <div className="md:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              {selected ? (
                <>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold">
                        {selected.titleEn}
                      </h2>
                      <p className="text-sm text-slate-600">
                        {selected.titleMn}
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs">
                          Level: {selected.level}
                        </span>
                        {selected.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs text-slate-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {isCustom(selected.id) ? (
                      <button
                        type="button"
                        onClick={() => deleteLesson(selected.id)}
                        className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm hover:bg-slate-50"
                      >
                        Delete
                      </button>
                    ) : null}
                  </div>

                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-semibold text-slate-500">
                        RULE (EN)
                      </div>
                      <div className="mt-1 text-sm leading-relaxed">
                        {selected.ruleEn}
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-semibold text-slate-500">
                        ДҮРЭМ (MN)
                      </div>
                      <div className="mt-1 text-sm leading-relaxed">
                        {selected.ruleMn}
                      </div>
                    </div>

                    {(selected.formEn || selected.formMn) && (
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <div className="text-xs font-semibold text-slate-500">
                          FORM / ХЭЛБЭР
                        </div>
                        {selected.formEn ? (
                          <div className="mt-2">
                            <div className="text-xs text-slate-500">EN</div>
                            <div className="text-sm">{selected.formEn}</div>
                          </div>
                        ) : null}
                        {selected.formMn ? (
                          <div className="mt-2">
                            <div className="text-xs text-slate-500">MN</div>
                            <div className="text-sm">{selected.formMn}</div>
                          </div>
                        ) : null}
                      </div>
                    )}

                    <div className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="text-xs font-semibold text-slate-500">
                        EXAMPLES
                      </div>
                      <div className="mt-3 space-y-3">
                        {selected.examples.map((ex, idx) => (
                          <div
                            key={idx}
                            className="rounded-2xl border border-slate-200 p-3"
                          >
                            <div className="text-sm font-semibold">{ex.en}</div>
                            <div className="text-sm text-slate-600">
                              {ex.mn}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="py-20 text-center text-sm text-slate-500">
                  Select a lesson.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer tip */}
        <div className="mt-6 text-xs text-slate-500">
          Tip: Хэрвээ localStorage дээр хадгалмаар байвал хэлээрэй — refresh
          хийхэд custom lesson-ууд арилдаггүй болгож өгнө.
        </div>
      </div>
    </div>
  );
}
