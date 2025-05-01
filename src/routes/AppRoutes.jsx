import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Grades from "../pages/Grades";
import Schedule from "../pages/Schedule";
import Announcement from "../pages/Announcement";
import Profile from "../pages/Profile";     
import Settings from "../pages/Settings";     
import Layout from "../components/Layout";   
import NotFound from "../pages/NotFound"; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/grades" element={<Layout><Grades /></Layout>} />
      <Route path="/schedule" element={<Layout><Schedule /></Layout>} />
      <Route path="/announcement" element={<Layout><Announcement /></Layout>} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/settings" element={<Layout><Settings /></Layout>} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};


export default AppRoutes;
