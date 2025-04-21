import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Grades from "../pages/Grades";
import Schedule from "../pages/Schedule";
import Announcement from "../pages/Announcement";
import Layout from "../components/Layout";  // import Layout

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      
      {/* Wrap all other routes with Layout */}
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/grades" element={<Layout><Grades /></Layout>} />
      <Route path="/schedule" element={<Layout><Schedule /></Layout>} />
      <Route path="/announcement" element={<Layout><Announcement /></Layout>} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default AppRoutes;
