import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Example only: replace with API call
    if (username === "TUPV-21-0656" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setBirthday("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1c1e21] flex-col p-4">
      {/* Spinning Logo */}
      <div className="mb-4">
        <img 
          src="/logo512.png" // <- replace with your logo path
          alt="Spinning Logo" 
          className="h-20 w-20 animate-spin-slow" 
        />
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white text-center">
        Computer Engineering ERS Portal
      </h1>
      
      <form onSubmit={handleLogin} className="bg-yellow-300 p-8 md:p-10 rounded shadow-md w-11/12 md:w-4/12">
        <h2 className="text-lg md:text-xl font-semibold mb-4 text-center">User Authentication</h2>
        
        <label className="text-sm text-gray-700 mb-2 block">Username:</label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        
        <label className="text-sm text-gray-700 mb-2 block">Password:</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        
        <label className="text-sm text-gray-700 mb-2 block">Birthdate:</label>
        <input
          type="date"
          placeholder="Birthdate"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        
        <div className="flex flex-col md:flex-row md:space-x-4 mb-3 w-full">
          <button
            type="button"
            onClick={handleReset}
            className="bg-blue-500 text-white rounded p-2 w-full md:w-1/2 mb-2 md:mb-0"
          >
            Clear Entries
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 w-full md:w-1/2"
          >
            Login
          </button>
        </div>
        
        <p className="text-center text-sm text-black-700 mt-4 cursor-pointer hover:underline">
          Forgot your password? Click here
        </p>
      </form>
    </div>


  );
};

export default Login;
