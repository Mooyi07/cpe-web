import React, { useEffect } from 'react';

const GradesTable = ({ onGradesChange }) => {
  const grades = [
    { name: 'Math', prelim: 3.0, midterm: 3.5, endterm: 5.5 },
    { name: 'Physics', prelim: 2.5, midterm: 2.0, endterm: 2.5 },
  ];

  useEffect(() => {
    if (onGradesChange) {
      onGradesChange(grades);
    }
  }, [onGradesChange]);

  return (
    <div>
      {/* Render your actual grades table here */}
      <h3 className="text-lg font-bold mb-2">Your Grades</h3>
      <ul className="list-disc ml-5">
        {grades.map((grade, index) => (
          <li key={index}>{grade.name}: Prelim {grade.prelim}, Midterm {grade.midterm}, Endterm {grade.endterm}</li>
        ))}
      </ul>
    </div>
  );
};

export default GradesTable;
