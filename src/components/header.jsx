import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between items-center text-white bg-[#1c1e21] p-2 w-full h-16">
      <div className="flex items-center space-x-2">
        <img src="/logo192.png" alt="Logo" className="h-10 w-10" />
        <h1 className="text-xl font-bold">CpE Department</h1>
      </div>
      <div className="flex items-center space-x-4">
        <h1 className="text-md">Welcome, Computer Engineer</h1>
        <img src="/user.png" alt="User" className="h-10 w-10" />
      </div>
    </header>
  );
};

export default Header;
