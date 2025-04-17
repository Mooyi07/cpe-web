import React from 'react';
import Layout from '../layouts/Layout';

const Grades = () => {
    const baseGrades = [
        { subject: "Math", prelim: 6.3, midterm: 7, endterm: 2.52 },
        { subject: "Physics", prelim: 2.8, midterm: 4.2, endterm: 7.25 },
        { subject: "Programming", prelim: 2, midterm: 2.5, endterm: 9.13 }
    ];

    const passingGrade = 5.0;
    const highestGrade = 10.0;

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
        needed: need > highestGrade
            ? 'Impossible'
            : need.toFixed(2),
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
                ? 'text-red-500'
                : 'text-green-600'; // Optional: make passing grades green
              

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
