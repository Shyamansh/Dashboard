import "../styles/sidebar.css"; // Assuming you have a CSS file for sidebar styles

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h1>Textify</h1>
      </div>

      {/* Sidebar Button Group */}
      <div className="sidebar-btns">
        <button className="sidebar-btn">
          <i className="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </button>
        <button className="sidebar-btn">
          <i className="fas fa-users"></i>
          <span>Customers</span>
        </button>
        <button className="sidebar-btn">
          <i className="fas fa-file-alt"></i>
          <span>Reports</span>
        </button>
      </div>

      {/* Sidebar Footer with Settings and Log Out */}
      <div className="settings-logout-btns">
        <button className="settings-logout-btn">
          <i className="fas fa-cogs"></i>
          <span>Settings</span>
        </button>
        <button className="settings-logout-btn">
          <i className="fas fa-sign-out-alt"></i>
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
