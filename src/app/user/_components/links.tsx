export const videos = [
  {
    title: "English Speaking Practice - sDaily Conversation",
    url: "https://youtu.be/g5_kHyAOhPM?si=V5QjpM8kGZJMs7xP",
    publishedAt: "Mar 1, 2026",
    tone: "from-red-500 to-orange-400",
  },
  {
    title: "New English Lesson 3",
    url: "https://youtu.be/iNyUmbmQQZg?si=neXQO5bYkIfFYqjc",
    publishedAt: "Mar 4, 2026",
    tone: "from-sky-500 to-cyan-400",
  },
  {
    title: "Active tense",
    url: "https://youtu.be/W1_IRU6zx9g?si=T8kGX7Yqb__N38qe",
    publishedAt: "Feb 25, 2026",
    tone: "from-indigo-500 to-sky-400",
  },
  {
    title: "Passive tense",
    url: "https://youtu.be/C6pHfjH0Efg?si=RuO3Ck7DvrVY81ht",
    publishedAt: "Feb 18, 2026",
    tone: "from-violet-500 to-fuchsia-400",
  },
  {
    title: "26 tense",
    url: "https://youtu.be/Ljjiw9mC_Cg?si=P6SOXxsTeYFR-mFQ",
    publishedAt: "Feb 9, 2026",
    tone: "from-cyan-500 to-blue-400",
  },
  {
    title: "Adjective clause",
    url: "https://youtu.be/GpV39YEmh5k?si=YvyWMNIr7YT37jjp",
    publishedAt: "Jan 31, 2026",
    tone: "from-emerald-500 to-teal-400",
  },
  {
    title: "Noun clause ",
    url: "https://youtu.be/9SrEEPt4MQA?si=CvY0TyLjvX0uouYA",
    publishedAt: "Jan 20, 2026",
    tone: "from-amber-500 to-red-400",
  },
  {
    title: "Adverb clause",
    url: "https://youtu.be/fkooLJ9MWVE?si=o0gyM1wiWaVPvsLJ",
    publishedAt: "Jan 20, 2026",
    tone: "from-amber-500 to-red-400",
  },
  {
    title: "How to prepare the TOEFL",
    url: "https://youtu.be/Gvj3VpmwUGw?si=vy0JKiGY1tl4go8I",
    publishedAt: "Jan 20, 2026",
    tone: "from-amber-500 to-red-400",
  },
  {
    title: "How to prepare the IELTS",
    url: "https://youtu.be/s2M1t-pHJcc?si=Iibxt8s6m-CkFuDi",
    publishedAt: "Jan 20, 2026",
    tone: "from-amber-500 to-red-400",
  },
  {
    title: "New English Lesson",
    url: "https://youtu.be/Wofw2XHAObw?si=P4wH920Nd26fs_gT",
    publishedAt: "Mar 4, 2026",
    tone: "from-purple-500 to-indigo-400",
  },
  {
    title: "New English Lesson 2",
    url: "https://youtu.be/TjPFZaMe2yw?si=kiaRIi9F86gHG1XN",
    publishedAt: "Mar 4, 2026",
    tone: "from-rose-500 to-orange-400",
  },
];

function getYoutubeVideoId(url: string) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "").trim();
    }

    if (parsed.hostname.includes("youtube.com")) {
      return parsed.searchParams.get("v") || "";
    }
  } catch {
    return "";
  }

  return "";
}

function getYoutubeThumbnail(url: string) {
  const id = getYoutubeVideoId(url);
  if (!id) return "";
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

export default function Links() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="mb-4 text-sm font-semibold text-slate-800">YouTube Links</p>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {videos.map((video, index) => (
          <a
            key={`${video.url}-${index}`}
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:shadow-md"
          >
            <div
              className={`relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br ${video.tone}`}
            >
              <img
                src={getYoutubeThumbnail(video.url)}
                alt={video.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/25 backdrop-blur-sm">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 text-white drop-shadow"
                  >
                    <path d="m10 8 6 4-6 4V8Z" fill="currentColor" />
                  </svg>
                </span>
              </span>
              <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
                YouTube
              </span>
            </div>

            <div className="p-3">
              <h3 className="line-clamp-2 text-sm font-semibold text-slate-900">
                {video.title}
              </h3>

              <p className="text-xs text-slate-500">{video.publishedAt}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
