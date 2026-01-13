import { useEffect, useState } from "react";
import {
  getFunnelData,
  getScatterData,
  getDomainStageData,
  getSummary
} from "../services/api";

import ReadingFunnel from "../components/analytics/FunnelChart";
import CitationScatter from "../components/analytics/ScatterPlot";
import DomainStageChart from "../components/analytics/StackedBarChart";

export default function Analytics() {
  const [data, setData] = useState(null);

  useEffect(() => {
    Promise.all([
      getFunnelData(),
      getScatterData(),
      getDomainStageData(),
      getSummary()
    ]).then(([f, s, d, sum]) =>
      setData({
        funnel: f.data.data,
        scatter: s.data.data,
        domain: d.data.data,
        summary: sum.data.data
      })
    );
  }, []);

  if (!data) return <p className="p-6">Loading analytics…</p>;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-10">
      <header>
        <h2 className="text-2xl font-semibold">Reading Analytics</h2>
        <p className="section-subtitle">
          Understand your research reading patterns
        </p>
      </header>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="card p-5">
          <p className="text-sm text-slate-500">Completion Rate</p>
          <p className="text-3xl font-semibold">
            {data.summary.completionRate}%
          </p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-slate-500">Domains Tracked</p>
          <p className="text-3xl font-semibold">
            {data.summary.avgCitationsPerDomain.length}
          </p>
        </div>
        <div className="card p-5">
          <p className="text-sm text-slate-500">Reading Stages</p>
          <p className="text-3xl font-semibold">
            {data.summary.papersByStage.length}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6">
        <div className="card p-6">
          <ReadingFunnel data={data.funnel} />
        </div>
        <div className="card p-6">
          <CitationScatter data={data.scatter} />
        </div>
      </div>

      <div className="card p-6">
        <DomainStageChart data={data.domain} />
      </div>
    </div>
  );
}
