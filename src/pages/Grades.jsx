import React from 'react';
import Layout from '../layouts/Layout';

const Grades = () => {
    const grades = [
      { subject: "Math", grade: "3", needed: "3.5" },
      { subject: "Physics", grade: "3", needed: "3.5" },
      { subject: "Programming", grade: "2", needed: "6" }
    ];
  
    return (
        <Layout>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-4">Your Grades</h2>
                <table className="min-w-full bg-white shadow rounded">
                <thead>
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
                    {grades.map((item, index) => (
                    <tr key={index}>
                        <td className="py-2 px-4 border-b">{item.subject}</td>
                        <td className="py-2 px-4 border-b">{item.grade}</td>
                        <td className="py-2 px-4 border-b">{item.grade}</td>
                        <td className="py-2 px-4 border-b">{item.grade}</td>
                        <td className="py-2 px-4 border-b">{item.grade}</td>
                        <td className="py-2 px-4 border-b">{item.needed}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </Layout>
    );
  };
  
  export default Grades;