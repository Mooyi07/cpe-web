import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#121417] text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6 text-lg">Oops! The page you're looking for doesn't exist.</p>
      <button
        onClick={() => navigate('/dashboard')}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
      >
        Go Back to Dashboard
      </button>
    </div>
  );
};

export default NotFound;
