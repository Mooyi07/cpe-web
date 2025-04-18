import React, { useState } from 'react';
import Layout from '../layouts/Layout';
import GradesTable from '../components/GradesTable'; // import your new component

const Dashboard = () => {
  const [hasFailedSubject, setHasFailedSubject] = useState(null);

  const handleGradesChange = (grades) => {
    const passingGrade = 5.0;

    const hasFailed = grades.some(item => {
      const { prelim, midterm, endterm } = item;
      if (endterm !== null && endterm !== undefined) {
        const average = (prelim * 0.3 + midterm * 0.3 + endterm * 0.4);
        return average > passingGrade;
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
          <strong>Summary:</strong> {hasFailedSubject ? 'You have at least one failed subject.' : 'All subjects are passed!'}
        </div>
      )}

      <GradesTable onGradesChange={handleGradesChange} />
    </Layout>
  );
};

export default Dashboard;
