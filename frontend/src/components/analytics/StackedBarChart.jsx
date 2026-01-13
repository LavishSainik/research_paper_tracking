import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

import { READING_STAGES } from "../../constants/enums";
import { STAGE_COLORS } from "../../constants/chartColors";

export default function DomainStageChart({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div>
      <h3 className="section-title mb-1">
        Domain vs Reading Stage
      </h3>
      <p className="section-subtitle mb-4">
        Reading depth across research domains
      </p>

      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={data}>
          <XAxis dataKey="domain" />
          <YAxis />
          <Tooltip />
          <Legend />

          {READING_STAGES.map(stage => (
            <Bar
              key={stage}
              dataKey={stage}
              stackId="a"
              fill={STAGE_COLORS[stage]}
              radius={[2, 2, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
