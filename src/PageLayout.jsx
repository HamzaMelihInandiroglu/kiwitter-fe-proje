import { Link } from "react-router-dom";

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-800">
      <header className="bg-white shadow-md">
        <div className="max-w-3xl mx-auto p-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-purple-700">
            Kiwitter
          </Link>
          <div className="flex gap-4">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto p-6">{children}</main>
    </div>
  );
}
