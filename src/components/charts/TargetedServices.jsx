import Plot from 'react-plotly.js';

const portToService = {
  3306: 'MySQL',
  1433: 'MSSQL',
  5432: 'PostgreSQL',
  1521: 'Oracle',
  22: 'SSH',
  5060: 'SIP'
};

const TargetedServices = ({ data }) => {
  const serviceCounts = data.reduce((counts, { dest_port }) => {
    const service = portToService[dest_port] || 'Other';
    counts[service] = (counts[service] || 0) + 1;
    return counts;
  }, {});

  return (
    <div className="p-6 bg-dark rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Targeted Services</h3>
      <Plot
        data={[{
          values: Object.values(serviceCounts),
          labels: Object.keys(serviceCounts),
          type: 'pie',
          marker: { colors: ['#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#9d6b53'] }
        }]}
        layout={{
          plot_bgcolor: '#1a1a1a',
          paper_bgcolor: '#1a1a1a',
          font: { color: 'white' },
          margin: { t: 0 },
          showlegend: false
        }}
        config={{ responsive: true }}
        className="w-full h-64"
      />
    </div>
  );
};

export default TargetedServices;