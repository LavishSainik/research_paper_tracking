import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const item = (to, label) => (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
        pathname === to
          ? "bg-slate-900 text-white"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-lg tracking-tight">
            📚 Research Tracker
          </h1>
          <p className="text-xs text-slate-500">
            Reading analytics for academics
          </p>
        </div>
        <nav className="flex gap-2">
          {item("/", "Library")}
          {item("/add", "Add Paper")}
          {item("/analytics", "Analytics")}
        </nav>
      </div>
    </header>
  );
}
