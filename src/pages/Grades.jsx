import React from 'react';
import Layout from '../layouts/Layout';
import GradesTable from '../components/GradesTable';

const Grades = ({ onGradesChange }) => {

  return (
    <Layout>
      <GradesTable />
    </Layout>
  );
};

export default Grades;
