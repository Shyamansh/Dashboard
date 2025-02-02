"use client"
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold">Textify</h2>
        <ul className="mt-4 space-y-2">
          <li className="hover:bg-gray-200 p-2 rounded">Dashboard</li>
          <li className="hover:bg-gray-200 p-2 rounded">Customers</li>
          <li className="hover:bg-gray-200 p-2 rounded">Reports</li>
          <li className="hover:bg-gray-200 p-2 rounded">Settings</li>
          <li className="hover:bg-gray-200 p-2 rounded text-red-500">Log Out</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-white shadow p-4 flex justify-between">
          <h2 className="text-lg font-semibold">Last Week</h2>
          <div>
            <span className="font-medium">User:</span> Khuchrupuchru
            <br />
            <span className="text-gray-500">khuchrupuchru@xyz.com</span>
          </div>
        </nav>

        {/* Main Content */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
