import React, { useEffect } from 'react';

const grades = [
  { subCode: 'CPE233-V', name: 'Computer Programming 5', prelim: 5.9, midterm: 4.9, endterm: 6.6 },
  { subCode: 'CPE232-V', name: 'Computer Engineering Drafting and Design', prelim: 6.8, midterm: 5.7, endterm: 6.0 },
  { subCode: 'BES223-V', name: 'Statics of Rigid Bodies', prelim: 6, midterm: 7, endterm: 6.5 },
  { subCode: 'CPE234-V', name: 'Software Design', prelim: 4.5, midterm: 7.4, endterm: 7.3 },
  { subCode: 'CPE234A-V', name: 'Logic Circuits and Design', prelim: 5.5, midterm: 4.2, endterm: 5 },
  { subCode: 'MATH333-V', name: 'Numerical Methods', prelim: 7, midterm: 7, endterm: 3.8 },
];

const GradesTable = ({ onGradesChange, showTable = false }) => {

  useEffect(() => {
    if (onGradesChange) {
      onGradesChange(grades);
    }
  }, [grades]);

  if (!showTable) return null;

  const getFinalAverage = ({ prelim, midterm, endterm }) => {
    return (prelim * 0.3 + midterm * 0.3 + endterm * 0.4).toFixed(2);
  };

  const isFailed = (average) => parseFloat(average) < 5.0;

  const convertible = ({average}) => {
    const convert = (average < 4.8 && average < 5.0) ? "Convertible" : "Not Convertible";
  };

  return (
    <table className="min-w-full border border-gray-300 rounded">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border">Subject Code</th>
          <th className="p-2 border">Subject Description</th>
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
              <td className="text-left p-2 border">{grade.subCode}</td>
              <td className="text-left p-2 border">{grade.name}</td>
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
