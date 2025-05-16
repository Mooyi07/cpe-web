import React, { useState, useEffect, useRef, use } from 'react';
import { useNavigate } from 'react-router-dom';
import {firstName, lastName} from '../data/userData';

const Header = () => {
  const formattedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();

  const firstInitial = firstName.charAt(0).toUpperCase();

  const username = formattedLastName + " " + firstInitial + ".";

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const closeDropdown = () => setIsOpen(false);

  const handleProfileClick = () => {
    navigate('/profile');
    closeDropdown();
  };

  const handleSettingsClick = () => {
    navigate('/settings');
    closeDropdown();
  };

  const handleLogoutClick = () => {
    // Optional: clear session/token here
    navigate('/');
    closeDropdown();
  };

  // Optional: Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex justify-between items-center text-white bg-[#1c1e21] p-2 w-full h-16 relative">
      <div className="flex items-center space-x-2">
        <img src="/logo192.png" alt="Logo" className="h-10 w-10" />
        <h1 className="text-xl font-bold">CpE Department</h1>
      </div>

      <div className="flex items-center space-x-4 relative">
        <h1 className="text-md">Welcome, {username}</h1>
        <img
          src="/user.png"
          alt="User"
          className="h-10 w-10 cursor-pointer rounded-full"
          onClick={toggleDropdown}
        />
        {isOpen && (
          <div
            ref={dropdownRef}
            className="absolute right-0 top-14 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50"
          >
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
