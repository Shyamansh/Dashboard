import BarChart from './BarChart'; // Make sure the BarChart component is imported

interface DashboardCardProps {
  title: string;
  value: string;
  color: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, color }) => {
  return (
    <div className="dashboard-card">
      <h3>{title}</h3>
      <p className="value" style={{ color }}>{value}</p>

      {/* Render the BarChart component only for Revenue and Expenses cards */}
      {(title === 'Revenue' || title === 'Expenses') && <BarChart />}
    </div>
  );
};

const DashboardCards = () => {
  return (
    <div className="dashboard-cards">
      <DashboardCard title="Revenue" value="Rs. 24,000" color="green" />
      <DashboardCard title="Expenses" value="Rs. 14,000" color="red" />
      <DashboardCard title="Sales" value="3,272" color="blue" />
    </div>
  );
};

export default DashboardCards;
