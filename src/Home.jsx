import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { USERS, INITIAL_TWITS } from "./data";

export default function Home() {
  const [twits, setTwits] = useState(INITIAL_TWITS);
  const [text, setText] = useState("");

  
  const currentUserNick = "Anonymous";

  const usersByNick = useMemo(() => {
    const map = {};
    for (const u of USERS) map[u.nick] = u;
    return map;
  }, []);

  const feed = useMemo(() => {
   
    return [...twits].sort((a, b) => b.id - a.id);
  }, [twits]);

  function addTwit() {
    const msg = text.trim();
    if (!msg) return;

    const newTwit = {
      id: Date.now(),
      userNick: currentUserNick,
      content: msg,
      likeCount: 0,
      replyCount: 0,
      daysAgo: 0,
    };

    setTwits((prev) => [newTwit, ...prev]);
    setText("");
  }

  return (
    <div className="space-y-6">
      {/* Tweet yazma */}
      <div className="rounded-2xl bg-white shadow-md p-5 border">
        <div className="text-sm text-slate-500 mb-2">
          Yeni twit (demo kullanıcı: <span className="font-semibold">{currentUserNick}</span>)
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={180}
          placeholder="Ne düşünüyorsun?"
          className="w-full resize-none rounded-xl border p-3 outline-none focus:ring-2 focus:ring-sky-300"
          rows={4}
        />

        <div className="mt-3 flex items-center justify-between">
          <div className="text-xs text-slate-400">{180 - text.length} karakter kaldı</div>
          <button
            onClick={addTwit}
            className="px-4 py-2 rounded-xl bg-sky-700 text-white font-semibold hover:bg-sky-800"
          >
            Gönder
          </button>
        </div>
      </div>

      {/* Feed */}
      {feed.map((t) => {
        const u = usersByNick[t.userNick] || {
          name: "User",
          nick: t.userNick,
          avatar: "https://i.pravatar.cc/80?img=1",
        };

        return (
          <div key={t.id} className="rounded-2xl bg-white shadow-md p-6 flex gap-5 border">
            <Link to={`/profile/${u.nick}`} className="shrink-0">
              <img src={u.avatar} alt="" className="w-16 h-16 rounded-full object-cover" />
            </Link>

            <div className="flex-1">
              <Link
                to={`/profile/${u.nick}`}
                className="font-semibold text-lg hover:underline inline-block"
              >
                {u.name}{" "}
                <span className="text-gray-500 font-normal text-base">({u.nick})</span>
              </Link>

              <div className="mt-2 text-gray-800">{t.content}</div>

              <div className="mt-3 text-sm text-gray-400">
                {t.daysAgo === 0 ? "a few seconds ago" : `${t.daysAgo} days ago`}
              </div>

              <div className="mt-3 text-sm text-gray-500 flex gap-6">
                <span>♡ {t.likeCount}</span>
                <span>↻ {Math.floor((t.likeCount ?? 0) / 2)}</span>
                <span>💬 {t.replyCount}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
