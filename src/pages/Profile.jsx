import React from 'react';

const Profile = () => {
  return (
    <div className="p-6 text-white bg-[#121417] min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
      <div className="bg-[#1c1e21] p-4 rounded-xl shadow-md">
        <p className="mb-2"><strong>Name:</strong> Computer Engineer</p>
        <p className="mb-2"><strong>Email:</strong> engineer@example.com</p>
        <p className="mb-2"><strong>Role:</strong> Student</p>
        {/* Add more profile info or edit form here */}
      </div>
    </div>
  );
};

export default Profile;
