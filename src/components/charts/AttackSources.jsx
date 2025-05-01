import Plot from 'react-plotly.js';

const AttackSources = ({ data }) => {
  const ipCounts = data.reduce((counts, { src_ip }) => {
    counts[src_ip] = (counts[src_ip] || 0) + 1;
    return counts;
  }, {});

  const topIPs = Object.entries(ipCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);

  return (
    <div className="p-6 bg-dark rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Top Attack Sources</h3>
      <Plot
        data={[{
          x: topIPs.map(([ip]) => ip),
          y: topIPs.map(([, count]) => count),
          type: 'bar',
          marker: { color: '#e9c46a' }
        }]}
        layout={{
          plot_bgcolor: '#1a1a1a',
          paper_bgcolor: '#1a1a1a',
          font: { color: 'white' },
          margin: { t: 0 },
          xaxis: { gridcolor: '#404040' },
          yaxis: { gridcolor: '#404040' }
        }}
        config={{ responsive: true }}
        className="w-full h-64"
      />
    </div>
  );
};

export default AttackSources;