import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Computer Department</h2>
      <ul>
        <li>
          <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/grades" className="block py-2 px-4 rounded hover:bg-gray-700">
            Grades
          </Link>
        </li>
        <li>
          <Link to="/schedule" className="block py-2 px-4 rounded hover:bg-gray-700">
            Schedule
          </Link>
        </li>
        <li>
          <Link to="/announcements" className="block py-2 px-4 rounded hover:bg-gray-700">
            Announcements
          </Link>
        </li>
        <li>
          <Link to="/playground" className="block py-2 px-4 rounded hover:bg-gray-700">
            Code Playground
          </Link>
        </li>
        <li>
          <Link to="/messages" className="block py-2 px-4 rounded hover:bg-gray-700">
            Messages
          </Link>
        </li>
        <li>
          <Link to="/notes" className="block py-2 px-4 rounded hover:bg-gray-700">
            Notes
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
