import React, { useEffect } from 'react';

const GradesTable = ({ onGradesChange, showTable = false }) => {
  const grades = [
    { name: 'Math', prelim: 3.0, midterm: 3.5, endterm: 5.5 },
    { name: 'Physics', prelim: 2.5, midterm: 2.0, endterm: 2.5 },
    { name: 'Chemistry', prelim: 2.8, midterm: 3.0, endterm: 2.9 },
  ];

  useEffect(() => {
    if (onGradesChange) {
      onGradesChange(grades);
    }
  }, [onGradesChange]);

  if (!showTable) return null;

  const getFinalAverage = ({ prelim, midterm, endterm }) => {
    return (prelim * 0.3 + midterm * 0.3 + endterm * 0.4).toFixed(2);
  };

  const isFailed = (average) => parseFloat(average) > 5.0;

  return (
    <table className="min-w-full border border-gray-300 rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Subject</th>
          <th className="p-2 border">Prelim</th>
          <th className="p-2 border">Midterm</th>
          <th className="p-2 border">Endterm</th>
          <th className="p-2 border">Final Average</th>
        </tr>
      </thead>
      <tbody>
        {grades.map((grade, idx) => {
          const average = getFinalAverage(grade);
          const textColor = isFailed(average) ? 'text-red-600' : 'text-green-600';

          return (
            <tr key={idx} className="text-center">
              <td className="p-2 border">{grade.name}</td>
              <td className="p-2 border">{grade.prelim}</td>
              <td className="p-2 border">{grade.midterm}</td>
              <td className="p-2 border">{grade.endterm}</td>
              <td className={`p-2 border font-semibold ${textColor}`}>
                {average}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default GradesTable;
