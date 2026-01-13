export default function SummaryCards({ summary }) {
  if (!summary) return null;

  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="border p-4 rounded">
        <p className="text-sm text-gray-500">Completion Rate</p>
        <p className="text-2xl font-semibold">
          {summary.completionRate}%
        </p>
      </div>

      <div className="border p-4 rounded">
        <p className="text-sm text-gray-500">Reading Stages</p>
        <p className="text-sm">
          {summary.papersByStage.length} stages tracked
        </p>
      </div>

      <div className="border p-4 rounded">
        <p className="text-sm text-gray-500">Domains</p>
        <p className="text-sm">
          {summary.avgCitationsPerDomain.length} domains
        </p>
      </div>
    </div>
  );
}
