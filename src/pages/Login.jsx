import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <input type="text" placeholder="Username" className="w-full p-2 border mb-4" />
        <input type="password" placeholder="Password" className="w-full p-2 border mb-4" />
        <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
      </div>
    </div>
  );
};

export default Login;
