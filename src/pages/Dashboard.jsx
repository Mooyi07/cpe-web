import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import GradesTable from '../components/GradesTable';

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

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <p className="mb-4">Welcome to the dashboard. Here's your summary:</p>

      <div className="flex w-full justify-between items-center mb-4">
        <div className={`w-full p-4 mb-4 m-5 rounded ${hasFailed ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          <strong>Grades Summary:</strong>
          {hasFailed ? (
              <ul className="list-disc list-inside mt-2">
                Your failed subjects are:
                {failedSubjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
          ) : (
            <p className="mt-2">All subjects are passed!</p>
          )}
        </div>
        <div className={`w-full p-4 mb-4 m-5 rounded ${hasFailed ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          <strong>Grades Summary:</strong>
          {hasFailed ? (
              <ul className="list-disc list-inside mt-2">
                Your failed subjects are:
                {failedSubjects.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
          ) : (
            <p className="mt-2">All subjects are passed!</p>
          )}
        </div>
      </div>
      

      {/* Pass grades only, not showTable */}
      <GradesTable onGradesChange={handleGradesChange} />
    </Layout>
  );
};

export default Dashboard;
