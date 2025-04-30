import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `block p-2 rounded ${
      location.pathname === path ? 'bg-blue-900 text-white' : 'hover:bg-blue-100'
    }`;

  return (
    <aside className="w-64 bg-white border-r p-4 h-screen sticky top-0">
      <nav className="space-y-2">
        <Link to="/dashboard" className={linkClass('/dashboard')}>Dashboard</Link>
        <Link to="/grades" className={linkClass('/grades')}>Grades</Link>
        <Link to="/schedule" className={linkClass('/schedule')}>Schedule</Link>
        <Link to="/announcement" className={linkClass('/announcement')}>Announcement</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
