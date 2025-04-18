import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import GradesTable from '../components/GradesTable';

const Dashboard = () => {
  const [hasFailedSubject, setHasFailedSubject] = useState(null);

  const handleGradesChange = (grades) => {
    const hasFailed = grades.some(({ prelim, midterm, endterm }) => {
      if (endterm != null) {
        const avg = (prelim * 0.3 + midterm * 0.3 + endterm * 0.4);
        return avg > 5.0;
      }
      return false;
    });
    setHasFailedSubject(hasFailed);
  };

  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
      <p className="mb-4">Welcome to the dashboard. Here's your summary:</p>

      {hasFailedSubject !== null && (
        <div className={`p-4 mb-4 rounded ${hasFailedSubject ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
          <strong>Grades Summary:</strong> {hasFailedSubject ? 'You have at least one failed subject.' : 'All subjects are passed!'}
        </div>
      )}

      <GradesTable onGradesChange={handleGradesChange} />
    </Layout>
  );
};

export default Dashboard;
