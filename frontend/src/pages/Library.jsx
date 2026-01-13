import { useEffect, useState } from "react";
import { getPapers } from "../services/api";
import {
  RESEARCH_DOMAINS,
  READING_STAGES,
  IMPACT_SCORES
} from "../constants/enums";

export default function Library() {
  const [papers, setPapers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({
    researchDomain: [],
    readingStage: [],
    impactScore: []
  });

  useEffect(() => {
    fetchPapers();
  }, [filters]);

  const fetchPapers = async () => {
    setLoading(true);
    const params = {};
    Object.entries(filters).forEach(([k, v]) => {
      if (v.length) params[k] = v.join(",");
    });
    const res = await getPapers(params);
    setPapers(res.data.data);
    setLoading(false);
  };

  const toggle = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(v => v !== value)
        : [...prev[key], value]
    }));
  };

  const FilterBlock = ({ title, values, keyName }) => (
    <div>
      <p className="text-sm font-medium mb-3">{title}</p>
      <div className="space-y-2">
        {values.map(v => (
          <label key={v} className="flex gap-2 text-sm cursor-pointer">
            <input type="checkbox" onChange={() => toggle(keyName, v)} />
            {v}
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-12 gap-6">
      {/* Filters */}
      <aside className="col-span-3 sticky top-20 h-fit card p-4 space-y-6">
        <FilterBlock title="Domain" values={RESEARCH_DOMAINS} keyName="researchDomain" />
        <FilterBlock title="Stage" values={READING_STAGES} keyName="readingStage" />
        <FilterBlock title="Impact" values={IMPACT_SCORES} keyName="impactScore" />
      </aside>

      {/* Papers */}
      <main className="col-span-9 space-y-4">
        <header>
          <h2 className="text-2xl font-semibold">Paper Library</h2>
          <p className="section-subtitle">
            Browse and track your research reading
          </p>
        </header>

        {loading && <p className="text-sm text-slate-500">Loading papers…</p>}

        {!loading && papers.length === 0 && (
          <div className="card p-6 text-center text-slate-500">
            No papers found. Try changing filters.
          </div>
        )}

        {papers.map(p => (
          <div key={p._id} className="card card-hover p-5">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-500">
                  {p.firstAuthor} · {p.researchDomain}
                </p>
              </div>
              <span className="badge">{p.citationCount} cites</span>
            </div>

            <div className="mt-3 flex gap-2">
              <span className="badge">{p.readingStage}</span>
              <span className="badge">{p.impactScore}</span>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
