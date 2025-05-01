import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleSettingsClick = () => {
    navigate('/settings');
  };

  const handleLogoutClick = () => {
    // Add logout logic (optional)
    navigate('/');
  };

  return (
    <header className="flex justify-between items-center text-white bg-[#1c1e21] p-2 w-full h-16 relative">
      <div className="flex items-center space-x-2">
        <img src="/logo192.png" alt="Logo" className="h-10 w-10" />
        <h1 className="text-xl font-bold">CpE Department</h1>
      </div>

      <div className="flex items-center space-x-4 relative">
        <h1 className="text-md">Welcome, Computer Engineer</h1>
        <img
          src="/user.png"
          alt="User"
          className="h-10 w-10 cursor-pointer rounded-full"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <div className="absolute right-0 top-14 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
            <ul>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleProfileClick}
              >
                Profile
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleSettingsClick}
              >
                Settings
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={handleLogoutClick}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
