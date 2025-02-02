"use client";

import { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

export default function Charts() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        if (typeof window !== 'undefined') { // Check if window is defined (client-side)
            ChartJS.register(
                CategoryScale,
                LinearScale,
                BarElement,
                Title,
                Tooltip,
                Legend,
                LineElement
              );
        }
    }, []);


    const barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Revenue',
            data: [50, 60, 70, 80, 90],
            backgroundColor: '#5A57FF',
          },
          {
            label: 'Expenses',
            data: [30, 40, 50, 60, 70],
            backgroundColor: '#FF5733',
          },
        ],
      };
    
      const lineChartData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [
          {
            label: 'Sales',
            data: [30, 45, 60, 85, 100],
            borderColor: '#28A745',
            fill: false,
          },
        ],
      };

  return (
    <div>
      <div className="card">
        <h3>Revenue & Expenses</h3>
        {isClient && <Bar data={barChartData} />}
      </div>

      <div className="card">
        <h3>Sales</h3>
        {isClient && <Line data={lineChartData} />}
      </div>
    </div>
  );
}