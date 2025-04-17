import { useReducer, useState } from "react";
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
    <div className="min-h-screen flex items-center justify-center bg-[#1c1e21] flex-col">
      <h1 className="text-3xl font-bold mb-4 text-white">Computer Engineering ERS Portal</h1>
      <form onSubmit={handleLogin} className="bg-yellow-300 p-10 rounded shadow-md w-4/12">
        <h2 className="text-xl font-semibold mb-4">User Authentication</h2>
        <label className="text-sm text-gray-700 mb-2 block">Username: </label>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <label className="text-sm text-gray-700 mb-2 block">Password: </label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <label className="text-sm text-gray-700 mb-2 block">Birthdate: </label>
        <input
          type="date"
          placeholder="Birthdate"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <div className="flex space-x-40 mb-3 w-full">
          <button
            type="button"
            onClick={handleReset}
            className="bg-blue-500 text-white rounded p-1 w-1/2"
          >
            Clear Entries
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-1 w-1/2"
          >
            Login
          </button>
        </div>
        <p>Forgot your password? Click here</p>
      </form>
    </div>
  );
};

export default Login;
