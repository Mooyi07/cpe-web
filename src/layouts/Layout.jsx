import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/header';

const Layout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800 min-h-screen">
          {children}
        </main>
      </div>
    </div>  
  );
};

export default Layout;
