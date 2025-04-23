import React from 'react';
import Layout from '../layouts/Layout';

const Schedule = () => {
  const schedule = [
    { day: "Monday", subject_code: "CpE 223", subject: "Computer Programming 5", prof: "Quintanilla", room: "ECL", time: "8:15 AM - 12:00 PM" },
    { day: "Monday", subject_code: "MATH 332", subject: "Numerical Methods", prof: "Romero", room: "MTB R1", time: "1:00 PM - 6:00 PM" },
    { day: "Tuesday", subject_code: "CpE 234A", subject: "Logic Circuits and Design", prof: "Lumauag", room: "MTB R1", time: "8:15 AM - 12:00 PM" },
    { day: "Tuesday", subject_code: "CpE 232", subject: "Computer Engineering Drafting and Design", prof: "Padernal", room: "R 19", time: "1:00 PM - 6:00 PM" },
    { day: "Wednesday", subject_code: "CpE 234", subject: "Software Design", prof: "Apawan", room: "R 19", time: "8:15 AM - 12:00 PM" },
    { day: "Wednesday", subject_code: "CpE 234A", subject: "Logic Circuits and Design", prof: "Lumauag", room: "R 19", time: "1:00 PM - 4:45 PM" },
    { day: "Thursday", subject_code: "BES 232", subject: "Dynamics of Rigid Bodies", prof: "Bergola", room: "R 19", time: "9:30 AM - 12:00 PM" },
    { day: "Thursday", subject_code: "GEC 6", subject: "Art Appreciation", prof: "Discutido", room: "R 19", time: "12:00 PM - 4:45 PM" },
    { day: "Friday", subject_code: "CpE 234", subject: "Software Design", prof: "Apawan", room: "ECL", time: "8:15 AM - 12:00 PM" },
    { day: "Friday", subject_code: "CpE 223", subject: "Computer Programming 5", prof: "Quintanilla", room: "ECL", time: "1:00 PM - 3:30 PM" },
  ];

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  // Generate time slots in 30-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    let start = new Date("1970-01-01T08:00:00");
    const end = new Date("1970-01-01T20:30:00");

    while (start <= end) {
      const hour = start.getHours();
      const minutes = start.getMinutes().toString().padStart(2, '0');
      const suffix = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour > 12 ? hour - 12 : hour;
      const timeStr = `${displayHour}:${minutes} ${suffix}`;
      slots.push(timeStr);
      start.setMinutes(start.getMinutes() + 30);
    }

    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Convert time string to Date object
  const parseTime = str => new Date(`1970-01-01T${convertTo24Hr(str)}`);

  const convertTo24Hr = time => {
    const [timePart, modifier] = time.split(' ');
    let [hours, minutes] = timePart.split(':').map(Number);

    if (modifier === 'PM' && hours !== 12) hours += 12;
    if (modifier === 'AM' && hours === 12) hours = 0;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
  };

  // Determine if a time slot starts a subject block
  const getScheduleMap = () => {
    const map = {};

    weekdays.forEach(day => {
      map[day] = Array(timeSlots.length).fill(null);
    });

    schedule.forEach(({ day, subject, time }) => {
      const [startStr, endStr] = time.split(" - ");
      const startTime = parseTime(startStr);
      const endTime = parseTime(endStr);

      const startIndex = timeSlots.findIndex(t => parseTime(t).getTime() === startTime.getTime());
      const endIndex = timeSlots.findIndex(t => parseTime(t).getTime() === endTime.getTime());

      map[day][startIndex] = { subject, span: endIndex - startIndex };

      // Fill rest with placeholder to skip rendering
      for (let i = startIndex + 1; i < endIndex; i++) {
        map[day][i] = "skip";
      }
    });

    return map;
  };

  const scheduleMap = getScheduleMap();

  const getColor = subject => {
    const colors = {
      Math: "bg-blue-200",
      Programming: "bg-green-200",
      Physics: "bg-yellow-200",
    };
    return colors[subject] || "bg-gray-100";
  };

  return (
    <Layout>
      <div className="p-4 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>
        <table className="min-w-full table-fixed border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2 w-32">Time</th>
              {weekdays.map(day => (
                <th key={day} className="border border-gray-300 p-2">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timeSlots.map((time, rowIndex) => (
              <tr key={rowIndex}>
                <td className="border border-gray-300 p-2">{time}</td>
                {weekdays.map(day => {
                  const cell = scheduleMap[day][rowIndex];

                  if (cell === "skip") return null;
                  if (cell && typeof cell === "object") {
                    return (
                      <td
                        key={day}
                        className={`border border-gray-300 p-2 text-center align-middle ${getColor(cell.subject)}`}
                        rowSpan={cell.span}
                      >
                        {cell.subject}
                      </td>
                    );
                  }

                  return <td key={day} className="border border-gray-300 p-2 text-center" />;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Schedule;
