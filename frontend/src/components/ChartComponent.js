import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [],
        borderColor: "#36a2eb",
        backgroundColor: "#9bd0f5",
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("http://localhost:5000/temperature")
        .then((res) => res.json())
        .then((data) => {
          const time = new Date().toLocaleTimeString();
          setChartData((prev) => {
            const newLabels = [...prev.labels, time].slice(-20);
            const newTemps = [...prev.datasets[0].data, data.temperature].slice(-20);
            return {
              ...prev,
              labels: newLabels,
              datasets: [{ ...prev.datasets[0], data: newTemps }],
            };
          });
        });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <Line data={chartData} />;
};

export default ChartComponent;
