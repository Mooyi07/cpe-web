import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r p-4 h-screen sticky top-0">
      <nav className="space-y-2">
        <Link to="/dashboard" className="block p-2 hover:bg-blue-100 rounded">Dashboard</Link>
        <Link to="/grades" className="block p-2 hover:bg-blue-100 rounded">Grades</Link>
        <Link to="/schedule" className="block p-2 hover:bg-blue-100 rounded">Schedule</Link>
        <Link to="/announcement" className="block p-2 hover:bg-blue-100 rounded">Announcement</Link>
        {/* Add more links as needed */}
      </nav>
    </aside>
  );
};

export default Sidebar;
