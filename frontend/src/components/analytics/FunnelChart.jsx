import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function ReadingFunnel({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div>
      <h3 className="section-title mb-1">Reading Progress Funnel</h3>
      <p className="section-subtitle mb-4">
        Paper count at each reading stage
      </p>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          data={data}
          layout="vertical"
          margin={{ left: 80, right: 20 }}
        >
          <XAxis type="number" />
          <YAxis
            type="category"
            dataKey="stage"
            width={140}
          />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="#0f172a"
            radius={[4, 4, 4, 4]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
