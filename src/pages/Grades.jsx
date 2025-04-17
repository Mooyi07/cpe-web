import React, { useState, useEffect } from 'react';
import Layout from '../layouts/Layout';

const Grades = ({ onGradesChange }) => {
  const [baseGrades, setGrades] = useState([
    { subject: "Math", prelim: 4.5, midterm: 5, endterm: 5.5 },
    { subject: "Physics", prelim: 5, midterm: 5, endterm: 4.5 },
    { subject: "Programming", prelim: 6, midterm: 6, endterm: 6 }
  ]);

  const passingGrade = 5.0;
  const highestGrade = 10.0;

  useEffect(() => {
    if (onGradesChange) {
      onGradesChange(baseGrades);
    }
  }, [baseGrades, onGradesChange]);

  const grades = baseGrades.map(item => {
    const { prelim, midterm, endterm } = item;

    if (endterm !== null && endterm !== undefined) {
      const average = (prelim * 0.3 + midterm * 0.3 + endterm * 0.4);
      return {
        ...item,
        average: average.toFixed(2),
        needed: '-',
        status: average > passingGrade ? 'Fail' : 'Pass'
      };
    } else {
      const need = (passingGrade - (prelim * 0.3 + midterm * 0.3)) / 0.4;
      return {
        ...item,
        average: '-',
        needed: need > highestGrade ? 'Impossible' : need.toFixed(2),
        status: '-'
      };
    }
  });

  return (
    <Layout>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Your Grades</h2>
        <table className="min-w-full bg-white shadow rounded">
          <thead className="text-left">
            <tr>
              <th className="py-2 px-4 border-b">Subject</th>
              <th className="py-2 px-4 border-b">Prelim</th>
              <th className="py-2 px-4 border-b">Midterm</th>
              <th className="py-2 px-4 border-b">Endterm</th>
              <th className="py-2 px-4 border-b">Average</th>
              <th className="py-2 px-4 border-b">Need</th>
            </tr>
          </thead>
          <tbody>
            {grades.map((item, index) => {
              const gradeClass = item.average !== '-' && parseFloat(item.average) > passingGrade
                ? 'text-green-600'
                : 'text-red-500';

              return (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.subject}</td>
                  <td className="py-2 px-4 border-b">{item.prelim}</td>
                  <td className="py-2 px-4 border-b">{item.midterm}</td>
                  <td className="py-2 px-4 border-b">{item.endterm ?? '—'}</td>
                  <td className={`py-2 px-4 border-b ${gradeClass}`}>{item.average}</td>
                  <td className="py-2 px-4 border-b">{item.needed}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Grades;
