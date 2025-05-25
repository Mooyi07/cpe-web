import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  const linkClass = (path) =>
    `block p-2 rounded transition-colors duration-200 ${
      location.pathname === path
        ? 'bg-blue-900 text-white dark:bg-blue-600 dark:text-white'
        : 'hover:bg-blue-100 dark:hover:bg-gray-700 dark:text-gray-200'
    }`;

  return (
    <aside className="w-64 bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-4 h-screen sticky top-0">
      <nav className="space-y-2">
        <Link to="/dashboard" className={linkClass('/dashboard')}>Dashboard</Link>
        <Link to="/grades" className={linkClass('/grades')}>Grades</Link>
        <Link to="/schedule" className={linkClass('/schedule')}>Schedule</Link>
        <Link to="/announcement" className={linkClass('/announcement')}>Announcement</Link>
        <Link to="/student-guide" className={linkClass('/student-guide')}>Student Guide</Link>
        <Link to="/teachers" className={linkClass('/teachers')}>Teachers</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
