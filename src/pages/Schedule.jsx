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
    { day: "Thursday", subject_code: "GEC 6", subject: "Art Appreciation", prof: "Discutido", room: "R 19", time: "1:00 PM - 4:45 PM" },
    { day: "Friday", subject_code: "CpE 234", subject: "Software Design", prof: "Apawan", room: "ECL", time: "8:15 AM - 12:00 PM" },
    { day: "Friday", subject_code: "CpE 223", subject: "Computer Programming 5", prof: "Quintanilla", room: "ECL", time: "1:00 PM - 3:30 PM" },
    { day: "Monday", subject: "Lunch Break", time: "12:00 PM - 1:00 PM" },
    { day: "Tuesday", subject: "Lunch Break", time: "12:00 PM - 1:00 PM" },
    { day: "Wednesday", subject: "Lunch Break", time: "12:00 PM - 1:00 PM" },
    { day: "Thursday", subject: "Lunch Break", time: "12:00 PM - 1:00 PM" },
    { day: "Friday", subject: "Lunch Break", time: "12:00 PM - 1:00 PM" },
  ];

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const generateTimeSlots = () => {
    const slots = [];
    let current = new Date("1970-01-01T08:00:00");
    const end = new Date("1970-01-01T20:30:00");

    while (current <= end) {
      const hour = current.getHours();
      const mins = current.getMinutes().toString().padStart(2, "0");
      const suffix = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      slots.push(`${displayHour}:${mins} ${suffix}`);
      current.setMinutes(current.getMinutes() + 15);
    }
    return slots;
  };
  

  const timeSlots = generateTimeSlots();

  const normalizeTime = time => {
    const [hours, minutes] = time.match(/\d+/g).map(Number);
    const isPM = time.includes("PM");
    let h = hours % 12;
    if (isPM) h += 12;
    return h * 60 + minutes;
  };

  const scheduleMap = {};
  weekdays.forEach(day => {
    scheduleMap[day] = Array(timeSlots.length).fill(null);
  });

  schedule.forEach(({ day, subject_code, subject, prof, room, time }) => {
    const [startStr, endStr] = time.split(" - ");
    const startMinutes = normalizeTime(startStr);
    const endMinutes = normalizeTime(endStr);

    const startIndex = timeSlots.findIndex(slot => normalizeTime(slot) === startMinutes);
    const endIndex = timeSlots.findIndex(slot => normalizeTime(slot) === endMinutes);

    if (startIndex === -1 || endIndex === -1) return;

    scheduleMap[day][startIndex] = {
      content: subject === "Lunch Break"
        ? "Lunch Break"
        : `${subject_code}\n${subject}\nProf. ${prof}\nRoom: ${room}`,
      span: endIndex - startIndex,
      subject,
    };

    for (let i = startIndex + 1; i < endIndex; i++) {
      scheduleMap[day][i] = "skip";
    }
  });


  const getColor = subject => {
    const colors = {
      "Computer Programming 5": "bg-blue-200",
      "Numerical Methods": "bg-green-200",
      "Logic Circuits and Design": "bg-yellow-200",
      "Software Design": "bg-purple-200",
      "Dynamics of Rigid Bodies": "bg-red-200",
      "Art Appreciation": "bg-pink-200",
      "Computer Engineering Drafting and Design": "bg-teal-200",
      "Lunch Break": "bg-orange-200 italic text-center font-semibold",
    };
    return colors[subject] || "bg-gray-100";
  };

  return (
    <Layout>
      <div className="p-4 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>
        <table className="min-w-full table-fixed border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="w-[100px] border border-gray-300 p-2 w-32">Time</th>
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
                        className={`w-[100px] border border-gray-300 p-2 whitespace-pre-line align-middle ${getColor(cell.subject)}`}
                        rowSpan={cell.span}
                      >
                        {cell.content}
                      </td>
                    );
                  }
                  return <td key={day} className="border border-gray-300 p-2" />;
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
