'use client';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
Chart.register(ArcElement, Tooltip, Legend);

function BusinessCardEngagementChart({ stats }) {
  const [chartData, setChartData] = useState({
    labels: ['Total Clients', '  Clients  Contacted '],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#E8DAB2', '#C0D6DF'],
        borderColor: ['#E8DAB2', '#C0D6DF'],
        borderWidth: 1,
      },
    ],
  });
  const [chartOptions] = useState({
    plugins: {
      maintainAspectRatio: false,
      responsive: true,
      legend: {
        labels: {
          font: {
            size: 15,
          },
          color: 'primary',
        },
      },
    },
  });
  useEffect(() => {
    const updateChartData = (stats) =>
      setChartData((prevData) => {
        const updatedData = { ...prevData };
        updatedData.datasets = [...prevData.datasets];
        updatedData.datasets[0] = {
          ...updatedData.datasets[0],
          data: [
            stats.profileStats['totalClients'],
            stats.profileStats['totalOutreach'],
          ],
        };
        return updatedData;
      });

    updateChartData(stats);
  }, [stats]);

  return (
    <div className='hidden sm:block h-full w-full sm:p-2'>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
}
export default BusinessCardEngagementChart;