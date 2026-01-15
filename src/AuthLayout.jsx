import { Link } from "react-router-dom";

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-700 to-fuchsia-700 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white/95 shadow-2xl p-8">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/" className="text-xl font-extrabold text-purple-700">
            Kiwit<span className="text-fuchsia-600">ter</span>
          </Link>
          <div className="text-sm text-gray-500">Auth</div>
        </div>
        {children}
      </div>
    </div>
  );
}
