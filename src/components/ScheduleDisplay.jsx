import React, { useEffect, useState } from 'react';
import { fetchScheduleData } from '../data/scheduleData';

const Schedule = () => {
  const [todaySchedule, setTodaySchedule] = useState([]);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const getTodaySchedule = async () => {
      const allData = await fetchScheduleData();

      const today = new Date();
      const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });
      setCurrentDate(today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }));

      const filtered = allData
        .filter(item => item.day === dayName && item.subject !== 'Lunch Break'); // Exclude lunch
      setTodaySchedule(filtered);
    };

    getTodaySchedule();
  }, []);

  if (todaySchedule.length === 0) {
    return (
        <div className="p-4 bg-white text-center text-gray-500">Loading schedule...</div>
    );
  }
  

  return (
    <div className="flex-1 mt-2 p-4 bg-white shadow rounded border border-gray-200">
      <h2 className="text-xl font-semibold mb-2">{currentDate}</h2>
      {todaySchedule.length > 0 ? (
        <ul className="list-disc list-inside">
          {todaySchedule.map((item, index) => (
            <li key={index}>
              <strong>{item.subject}</strong> ({item.subject_code}) <br />
              Time: {item.time} <br />
              Room: {item.room}, Prof: {item.prof}
            </li>
          ))}
        </ul>
      ) : (
        <p>No classes scheduled for today.</p>
      )}
    </div>
  );
};

export default Schedule;
