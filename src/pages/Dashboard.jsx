import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import GradesTable from '../components/GradesTable';
import schedule from '../data/scheduleData';

const Dashboard = () => {
  const [failedSubjects, setFailedSubjects] = useState([]);

  const handleGradesChange = (grades) => {
    const failed = grades.filter(({ name, prelim, midterm, endterm }) => {
      if (endterm != null) {
        const avg = (prelim * 0.3 + midterm * 0.3 + endterm * 0.4);
        return avg < 5.0; // FAILED if less than 5.0
      }
      return false;
    }).map(item => item.name);

    setFailedSubjects(failed);
  };

  const hasFailed = failedSubjects.length > 0;

  const [importantAnnouncements] = useState([
    {
      title: "Grades Submission Deadline",
      message: "All grades must be submitted by April 30th, 2025.",
      date: "April 20, 2025",
    },
  ]);



  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <p className="mb-4">Welcome to the dashboard. Here's your summary:</p>

      <div className="flex flex-col lg:flex-row w-full gap-4 mb-4">
        {/* Grades Summary */}
        <div className={`flex-1 flex flex-col p-4 m-2 rounded text-black ${hasFailed ? 'bg-red-100' : 'bg-green-100'}`}>
          <strong>Grades Summary:</strong>
          <div className="flex-1 mt-2 p-4 bg-white shadow rounded border border-gray-200">
            {hasFailed ? (
              <div>
                <p className="mb-2">Your failed subjects are:</p>
                <ul className="list-disc list-inside">
                  {failedSubjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>All subjects are passed!</p>
            )}
          </div>
        </div>

        {/* Important Announcements */}
        <div className="flex-1 flex flex-col p-4 m-2 rounded bg-yellow-100 text-black">
          <strong>Important Announcements:</strong>
          <div className="flex-1 mt-2 p-4 bg-white shadow rounded border border-gray-200">
            {importantAnnouncements.map((announcement, index) => (
              <div key={index} className="mb-4">
                <h1 className="text-2xl font-semibold">{announcement.title}</h1>
                <p>{announcement.message}</p>
                <p className="text-sm text-gray-500">{announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex flex-col lg:flex-row w-full gap-4 mb-4">
        {/* Schedule for Today */}
        <div className="flex-1 flex flex-col p-4 m-2 rounded bg-blue-100 text-black">
          <strong>Schedule Today:</strong>
          <div className="flex-1 mt-2 p-4 bg-white shadow rounded border border-gray-200">
            {importantAnnouncements.map((announcement, index) => (
              <div key={index} className="mb-4">
                <h1 className="text-2xl font-semibold">{announcement.title}</h1>
                <p>{announcement.message}</p>
                <p className="text-sm text-gray-500">{announcement.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pass grades only, not showTable */}
      <GradesTable onGradesChange={handleGradesChange} />
    </Layout>
  );
};

export default Dashboard;
