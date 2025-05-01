import React from 'react';

const Settings = () => {
  return (
    <div className="p-6 text-white bg-[#121417] min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="bg-[#1c1e21] p-4 rounded-xl shadow-md">
        <p className="mb-2">This is where you can update your preferences.</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Change password</li>
          <li>Notification preferences</li>
          <li>Theme selection (coming soon)</li>
        </ul>
        {/* Add real settings inputs later */}
      </div>
    </div>
  );
};

export default Settings;
