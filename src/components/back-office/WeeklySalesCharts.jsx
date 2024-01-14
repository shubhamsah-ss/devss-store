"use client";
import { faker } from '@faker-js/faker';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
} from 'chart.js';
import { useState } from "react";
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const WeeklySalesCharts = () => {
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const tabs = [
    {
      title: "Sales",
      type: "sales",
      activeClassName:
        "text-green-600 border-green-600 dark:hover:text-green-600",
      className:
        "border-transparent text-slate-400 hover:text-green-600 hover:border-green-600 dark:hover:text-green-600",
        data: {
            labels,
            datasets: [
              {
                label: "Sales",
                data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
                borderColor: 'rgb(22, 163, 74)',
                backgroundColor: 'rgba(22, 163, 74, 0.5)',
              }
            ],
        }
    },
    {
      title: "Orders",
      type: "orders",
      activeClassName:
        "text-orange-600 border-orange-600 dark:hover:text-orange-600",
      className:
        "border-transparent text-slate-400 hover:text-orange-600 hover:border-orange-600 dark:hover:text-orange-600",
        data: {
            labels,
            datasets: [
              {
                label: "Orders",
                data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
                borderColor: 'rgb(234, 88, 12)',
                backgroundColor: 'rgba(234, 88, 12, 0.5)',
              }
            ],
        }
    },
  ];

  const [chartToDisplay, setChartToDisplay] = useState(tabs[0].type);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="rounded-xl p-5 shadow-lg bg-slate-100 dark:bg-slate-800">
      <h2 className="text-xl font-bold mb-5">Weekly Sales</h2>

      {/* TABS */}
      <div className="p-4">
        <div className="text-sm font-medium text-center dark:text-gray-500 border-b dark:border-gray-600">
          <ul className="flex flex-wrap -mb-px">
            {tabs.map((tab, i) => (
              <li key={i} className="me-1">
                <button
                  onClick={() => setChartToDisplay(tab.type)}
                  className={`inline-block p-4 border-b-2
                rounded-t-lg
                ${
                  chartToDisplay === tab.type
                    ? tab.activeClassName
                    : tab.className
                }`}
                >
                  {tab.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* CONTENT */}
      {tabs.map((tab, i) => {
        if (chartToDisplay === tab.type) return <Line key={i} options={options} data={tab.data} />;
        return null;
      })}

      
    </div>
  );
};

export default WeeklySalesCharts;
