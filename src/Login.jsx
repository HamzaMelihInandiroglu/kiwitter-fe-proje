import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUser } from "./auth";

export default function Login() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [nick, setNick] = useState("");

  function handleLogin() {
    const n = name.trim();
    const k = nick.trim();
    if (!n || !k) return;

    const avatar = `https://api.dicebear.com/7.x/thumbs/svg?seed=${encodeURIComponent(k)}`;

    setUser({ name: n, nick: k, avatar });
    nav("/");
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 border">
        <div className="text-2xl font-bold text-violet-800">Login</div>
        <div className="text-slate-500 text-sm mt-1">
          Tweet atmak için giriş yap.
        </div>

        <div className="mt-5 space-y-3">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="İsmin (ör: Hamza)"
            className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-violet-300"
          />
          <input
            value={nick}
            onChange={(e) => setNick(e.target.value)}
            placeholder="Nick (ör: hamza123)"
            className="w-full rounded-xl border p-3 outline-none focus:ring-2 focus:ring-violet-300"
          />

          <button
            onClick={handleLogin}
            className="w-full mt-2 px-4 py-3 rounded-xl bg-violet-700 text-white font-semibold hover:bg-violet-800"
          >
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
}
