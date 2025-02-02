import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart: React.FC = () => {
  // Dummy data for the bar chart
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // X-axis labels
    datasets: [
      {
        label: 'Revenue',
        data: [10000, 12000, 14000, 18000, 22000], // Data for the bars
        backgroundColor: '#5A57FF', // Bar color
        borderRadius: 10, // Rounded corners
      },
    ],
  };

  // Correctly typed Chart options
  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Rs. ${tooltipItem.raw}`,
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
    <div className="bar-chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
