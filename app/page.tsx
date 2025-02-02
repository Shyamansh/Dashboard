"use client";

import { Bar, Line } from 'react-chartjs-2'; // Import Line chart
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js'; // Register PointElement for Line chart
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import "../styles/main.css";
import "../styles/dashboard.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// Register components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

export default function Dashboard() {
  // Dummy data for the BarChart
  const revenueData = {
    labels: ['MON', 'TUE', 'WED', 'THU', 'FRI'],
    datasets: [
      {
        label: 'Revenue',
        data: [10000, 8000, 9000, 14000, 16000], // Data for the bars
        backgroundColor: '#5A57FF', // Color of the bars
        borderRadius: 10, // Rounded corners
      },
    ],
  };

  const expensesData = {
    labels: ['WED', 'THU', 'FRI', 'SAT', 'SUN'],
    datasets: [
      {
        label: 'Expenses',
        data: [5000, 6000, 2000, 4000, 7800], // Data for the bars
        backgroundColor: '#FF5733', // Color of the bars (different color for Expenses)
        borderRadius: 10, // Rounded corners
      },
    ],
  };

  // Dummy data for the Line chart
  const salesData = {
    labels: ['MON', 'TUE', 'WED', 'THU', 'FRI'], // X-axis labels for Sales
    datasets: [
      {
        label: 'Sales',
        data: [1200, 1500, 1700, 1900, 2000], // Data for the Line chart (Sales numbers)
        borderColor: '#FF5733', // Line color for sales
        backgroundColor: 'rgba(255, 87, 51, 0.2)', // Light background for line chart
        fill: true, // Makes the line chart area filled
        tension: 0.4, // Curves the line
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `Rs. ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="main-container">
      <Sidebar />
      <Navbar />
      <main className="main-content">
        <div className="dashboard">
          {/* Dashboard Cards */}
          <div className="section">
            <div className="card">
              <div className="title">Revenue</div>
              <div className="value">Rs. 16,000</div>
              {/* Bar Chart for Revenue */}
              <div className="bar-chart-container">
                <Bar data={revenueData} options={chartOptions} />
              </div>
            </div>
            <div className="card">
              <div className="title">Expenses</div>
              <div className="value">Rs. 7800</div>
              {/* Bar Chart for Expenses */}
              <div className="bar-chart-container">
                <Bar data={expensesData} options={chartOptions} />
              </div>
            </div>
            <div className="card">
              <div className="title">Sales</div>
              <div className="value">3,272</div>
              {/* Line Chart for Sales */}
              <div className="bar-chart-container">
                <Line data={salesData} options={chartOptions} />
              </div>
            </div>
          </div>

          {/* Recent Messages Section */}
          <div className="section">
            <div className="card">
              <div className="title">Recent Messages</div>
              <div className="messages-list">
                <div className="message-item">
                  <img className="message-avatar" src="/user1.jpeg" alt="User" />
                  <span className="message-sender">Kadin George</span>
                  <span className="message-content">How to access AI services</span>
                  <span className="message-status answered">Answered</span>
                  <span className="message-time">10:25</span>
                </div>
                <div className="message-item">
                  <img className="message-avatar" src="/user2.jpeg" alt="User" />
                  <span className="message-sender">Anika Calzoni</span>
                  <span className="message-content">Product Query</span>
                  <span className="message-status pending">Pending</span>
                  <span className="message-time">12:30</span>
                </div>
                <div className="message-item">
                  <img className="message-avatar" src="/user3.jpeg" alt="User" />
                  <span className="message-sender">Mira Bator</span>
                  <span className="message-content">Discount coupons</span>
                  <span className="message-status pending">Pending</span>
                  <span className="message-time">Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
