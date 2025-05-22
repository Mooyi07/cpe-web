import React, { useEffect, useState } from 'react';
// List of grades for each subject
import grades from '../data/gradesData'; 

/**
 * GradesTable Component
 * Displays a table of student grades with computed final averages and grade status.
 * @param {Function} onGradesChange - Callback function to send grades back to parent.
 * @param {boolean} showTable - Determines whether to show the table or not.
 */
const GradesTable = ({ onGradesChange, showTable = false }) => {
  const [belowSixCount, setBelowSixCount] = useState(0);

  useEffect(() => {
    if (onGradesChange) {
      onGradesChange(grades);
    }
    countBelowSixSubjects();
  }, []);

  /**
   * Calculates the final average based on prelim (30%), midterm (30%), and endterm (40%).
   * @param {Object} param0 - Grade object with prelim, midterm, endterm.
   * @returns {string} Final average as a string with 2 decimal places.
   */
  const getFinalAverage = ({ prelim, midterm, endterm }) => {
    return (prelim * 0.3 + midterm * 0.3 + endterm * 0.4).toFixed(2);
  };

  /**
   * Checks if the given final average is considered a failing grade.
   * @param {string|number} average - Final average.
   * @returns {boolean} True if failed, otherwise false.
   */
  const isFailed = (average) => parseFloat(average) < 5.0;

  /**
   * Checks if the final average is between 5.0 and 6.0 (inclusive of 5.0).
   * @param {string|number} average - Final average.
   * @returns {boolean} True if below 6, otherwise false.
   */
  const isBelowSix = (average) => parseFloat(average) > 4.99 && parseFloat(average) < 6.0;

  /**
   * Determines if a failing grade is "convertible" based on certain rules:
   * - Average > 4.89: Convertible
   * - Average between 4.8–4.9 with less than 4 subjects below 6: Convertible
   * - Average between 4.7–4.8 with less than 3 subjects below 6: Convertible
   * @param {string|number} average - Final average.
   * @param {number} belowSixCount - Number of subjects below 6.0.
   * @returns {boolean} True if convertible, otherwise false.
   */
  const convertible = (average, belowSixCount) => {
    const avg = parseFloat(average);
  
    return (
      avg > 4.89 ||
      (avg > 4.79 && avg <= 4.89 && belowSixCount < 4) ||
      (avg > 4.69 && avg <= 4.79 && belowSixCount < 3)
    );
  };
  
  const gradesPerimeter = (average) => {
    const avg = parseFloat(average);
  
    if (avg >= 8) return "Excellent";
    if (avg >= 6) return "Good";
    
    return "Satisfactory";
  };
  
  /**
   * Counts how many subjects have a final average below 6.0.
   * Updates the `belowSixCount` state.
   */
  const countBelowSixSubjects = () => {
    const belowSix = grades.filter((grade) => isBelowSix(getFinalAverage(grade))).length;
    setBelowSixCount(belowSix);
  };

  if (!showTable) return null;

  return (
    <div>
      <table className="min-w-full border border-gray-300 dark:border-gray-700 rounded mb-4">
        <thead className="bg-gray-100 dark:bg-gray-800 dark:text-white">
          <tr>
            <th className="p-2 border dark:border-gray-700">Subject Code</th>
            <th className="p-2 border dark:border-gray-700">Subject Description</th>
            <th className="p-2 border dark:border-gray-700">Prelim</th>
            <th className="p-2 border dark:border-gray-700">Midterm</th>
            <th className="p-2 border dark:border-gray-700">Endterm</th>
            <th className="p-2 border dark:border-gray-700">Final Average</th>
            <th className="p-2 border dark:border-gray-700">Grade Status</th>
          </tr>
        </thead>
        <tbody className="dark:text-white">
          {grades.map((grade, idx) => {
            const average = getFinalAverage(grade);
            const textColor = isFailed(average) ? 'text-red-600' : 'text-green-600';
            const convertStatus = isFailed(average)
              ? (convertible(average, belowSixCount) ? 'Convertible' : 'Not Convertible')
              : gradesPerimeter(average);

            return (
              <tr key={idx} className="text-center even:bg-gray-50 dark:even:bg-gray-800">
                <td className="text-left p-2 border dark:border-gray-700">{grade.subCode}</td>
                <td className="text-left p-2 border dark:border-gray-700">{grade.name}</td>
                <td className="p-2 border dark:border-gray-700">{grade.prelim}</td>
                <td className="p-2 border dark:border-gray-700">{grade.midterm}</td>
                <td className="p-2 border dark:border-gray-700">{grade.endterm}</td>
                <td className={`p-2 border font-semibold dark:border-gray-700 ${textColor}`}>{average}</td>
                <td className="p-2 border font-semibold dark:border-gray-700">{convertStatus}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default GradesTable;
