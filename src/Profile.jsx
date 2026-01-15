import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { USERS, INITIAL_TWITS } from "./data";

export default function Profile() {
  const { nick } = useParams();

  const user = useMemo(() => USERS.find((u) => u.nick === nick), [nick]);
  const userTwits = useMemo(
    () => INITIAL_TWITS.filter((t) => t.userNick === nick).sort((a, b) => b.id - a.id),
    [nick]
  );

  if (!user) {
    return <div className="p-4">Kullanıcı bulunamadı: {nick}</div>;
  }

  return (
    <div className="space-y-6">
      {/* Profil üst */}
      <div className="text-center">
        <img
          src={user.avatar}
          alt=""
          className="w-28 h-28 rounded-full object-cover mx-auto shadow-md"
        />
        <div className="mt-3 text-2xl font-bold">{user.name}</div>
        <div className="text-slate-500">({user.nick})</div>

        <div className="mt-4">
          <Link to="/" className="text-sky-700 hover:underline">
            ← Ana sayfaya dön
          </Link>
        </div>
      </div>

      {/* Tweetler */}
      <div className="space-y-4">
        {userTwits.length === 0 ? (
          <div className="text-slate-500">Bu kullanıcının henüz twiti yok.</div>
        ) : (
          userTwits.map((t) => (
            <div key={t.id} className="rounded-2xl bg-white shadow-md p-6 flex gap-5 border">
              <img src={user.avatar} alt="" className="w-14 h-14 rounded-full object-cover" />

              <div className="flex-1">
                <div className="font-semibold text-lg">
                  {user.name}{" "}
                  <span className="text-gray-500 font-normal text-base">
                    ({user.nick})
                  </span>
                </div>

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
          ))
        )}
      </div>
    </div>
  );
}
