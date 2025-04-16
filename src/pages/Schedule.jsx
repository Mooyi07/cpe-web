import React from 'react';
import Layout from '../layouts/Layout';

const Schedule = () => {
    const schedule = [
      { day: "Monday", subject: "Math", time: "8:00 AM - 9:30 AM" },
      { day: "Wednesday", subject: "Programming", time: "10:00 AM - 11:30 AM" },
      { day: "Friday", subject: "Physics", time: "1:00 PM - 2:30 PM" },
    ];
  
    return (
      <Layout>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Your Schedule</h2>
          <ul className="space-y-2">
            {schedule.map((item, index) => (
              <li key={index} className="p-4 bg-white rounded shadow">
                <p className="font-medium">{item.subject}</p>
                <p>{item.day} — {item.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    );
  };
  
  export default Schedule;
  