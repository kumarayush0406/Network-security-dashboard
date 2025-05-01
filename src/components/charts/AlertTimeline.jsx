import Plot from 'react-plotly.js';

const AlertTimeline = ({ data }) => {
  const dates = data.map(alert => new Date(alert.timestamp));
  
  return (
    <div className="p-6 bg-dark rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-white mb-4">Alerts Timeline</h3>
      <Plot
        data={[{
          x: dates,
          type: 'histogram',
          marker: { color: '#2a9d8f' }
        }]}
        layout={{
          plot_bgcolor: '#1a1a1a',
          paper_bgcolor: '#1a1a1a',
          font: { color: 'white' },
          xaxis: { gridcolor: '#404040' },
          yaxis: { gridcolor: '#404040' },
          margin: { t: 0 }
        }}
        config={{ responsive: true }}
        className="w-full h-64"
      />
    </div>
  );
};

export default AlertTimeline;