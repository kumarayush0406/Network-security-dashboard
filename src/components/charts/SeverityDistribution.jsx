import Plot from "react-plotly.js";

const SeverityDistribution = ({ data }) => {
  const severityCounts = data.reduce((counts, entry) => {
    const severity = entry?.alert?.severity;
    if (typeof severity !== "undefined") {
      counts[severity] = (counts[severity] || 0) + 1;
    }
    return counts;
  }, {});

  return (
    <div className="p-6 bg-dark rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-4">
        Severity Distribution
      </h3>
      <Plot
        data={[
          {
            values: Object.values(severityCounts),
            labels: Object.keys(severityCounts),
            type: "pie",
            marker: { colors: ["#2a9d8f", "#e9c46a", "#e76f51"] },
          },
        ]}
        layout={{
          plot_bgcolor: "#1a1a1a",
          paper_bgcolor: "#1a1a1a",
          font: { color: "white" },
          margin: { t: 0 },
          showlegend: false,
        }}
        config={{ responsive: true }}
        className="w-full h-64"
      />
    </div>
  );
};

export default SeverityDistribution;
