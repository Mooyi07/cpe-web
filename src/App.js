import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login'; // Adjust path based on your folder structure
import Dashboard from './pages/Dashboard'; // Dashboard route
import Schedule from './pages/Schedule'; // Schedule route
import Grades from './pages/Grades'; // Grades route
import Announcement from './pages/Announcement'; // Announcement route
// import CodePlayground from './components/CodePlayground/CodePlayground';
// import PostsMessaging from './components/PostsMessaging/PostsMessaging';
// import Notifications from './components/Notifications/Notifications';

import './tailwind.output.css';

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/grades" element={<Grades />} />
        <Route path="/announcement" element={<Announcement />} />
      </Routes>
    </Router>
  );
}

export default App;
