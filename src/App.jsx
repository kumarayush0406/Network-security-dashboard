// Add this at the top:
import rawData from "./components/data/alerts.json";
import { useEffect, useState } from "react";
import AlertTimeline from "./components/charts/AlertTimeline";
import AttackSources from "./components/charts/AttackSources";
import SeverityDistribution from "./components/charts/SeverityDistribution";
import TargetedServices from "./components/charts/TargetedServices";
import alertsData from "./components/data/alerts.json";

const App = () => {
  const [alerts, setAlerts] = useState(rawData);

  useEffect(() => {
    setAlerts(alertsData);
  }, []);

  return (
    <div className="min-h-screen p-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-white">
          Network Security Dashboard
        </h1>
        <p className="text-center text-gray-400 mt-2">
          Real-time monitoring of network security alerts
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AlertTimeline data={alerts} />
        <AttackSources data={alerts} />
        <TargetedServices data={alerts} />
        <SeverityDistribution data={alerts} />
      </div>
    </div>
  );
};

export default App;
