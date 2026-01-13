import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const IMPACT_Y = {
  "High Impact": 4,
  "Medium Impact": 3,
  "Low Impact": 2,
  "Unknown": 1
};

const COLORS = {
  "High Impact": "#ef4444",
  "Medium Impact": "#f59e0b",
  "Low Impact": "#3b82f6",
  "Unknown": "#9ca3af"
};

export default function CitationScatter({ data }) {
  if (!data || data.length === 0) return null;

  const grouped = {};

  data.forEach(p => {
    if (!grouped[p.impactScore]) grouped[p.impactScore] = [];
    grouped[p.impactScore].push({
      x: p.citationCount,
      y: IMPACT_Y[p.impactScore]
    });
  });

  return (
    <div>
      <h3 className="section-title mb-1">
        Citations vs Impact Score
      </h3>
      <p className="section-subtitle mb-4">
        Relationship between impact classification and citations
      </p>

      <ResponsiveContainer width="100%" height={260}>
        <ScatterChart>
          <XAxis
            dataKey="x"
            name="Citations"
            type="number"
          />
          <YAxis
            type="number"
            domain={[0, 5]}
            ticks={[1, 2, 3, 4]}
            tickFormatter={v =>
              Object.keys(IMPACT_Y).find(k => IMPACT_Y[k] === v)
            }
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />

          {Object.keys(grouped).map(score => (
            <Scatter
              key={score}
              name={score}
              data={grouped[score]}
              fill={COLORS[score]}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}
