import React from 'react';
import Layout from '../layouts/Layout';
import GradesTable from '../components/GradesTable';

const Grades = () => {
  return (
    <Layout>
      <h2 className="text-2xl font-semibold mb-4">Your Grades</h2>
      <GradesTable showTable />
    </Layout>
  );
};

export default Grades;
