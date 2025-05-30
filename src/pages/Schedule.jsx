import React, { useEffect, useState } from 'react';
import Layout from '../layouts/Layout';
import { fetchScheduleData } from '../data/scheduleData';
import html2canvas from 'html2canvas';

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [compactMode, setCompactMode] = useState(false); // ✅ new state

  useEffect(() => {
    const getSchedule = async () => {
      const scheduleData = await fetchScheduleData();
      setSchedule(scheduleData);
    };
    getSchedule();
  }, []);

  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  const normalizeTime = time => {
    const [hours, minutes] = time.match(/\d+/g).map(Number);
    const isPM = time.includes("PM");
    let h = hours % 12;
    if (isPM) h += 12;
    return h * 60 + minutes;
  };

  const generateTimeSlots = (schedule, interval) => {
    const slots = [];
    let current = new Date("1970-01-01T08:00:00");

    let maxMinutes = 0;
    schedule.forEach(({ time }) => {
      const [, endStr] = time.split(" - ");
      const endMinutes = normalizeTime(endStr);
      if (endMinutes > maxMinutes) maxMinutes = endMinutes;
    });

    const endHour = Math.floor(maxMinutes / 60);
    const endMin = maxMinutes % 60;
    const end = new Date(`1970-01-01T${endHour.toString().padStart(2, "0")}:${endMin.toString().padStart(2, "0")}:00`);

    while (current <= end) {
      const hour = current.getHours();
      const mins = current.getMinutes().toString().padStart(2, "0");
      const suffix = hour >= 12 ? "PM" : "AM";
      const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
      slots.push(`${displayHour}:${mins} ${suffix}`);
      current.setMinutes(current.getMinutes() + interval); // ✅ dynamic interval
    }

    return slots;
  };

  const timeSlots = generateTimeSlots(schedule, compactMode ? 60 : 15); // ✅ pass interval

  const scheduleMap = {};
  weekdays.forEach(day => {
    scheduleMap[day] = Array(timeSlots.length).fill(null);
  });

  schedule.forEach(({ day, subject_code, subject, prof, room, time }) => {
    const [startStr, endStr] = time.split(" - ");
    const startMinutes = normalizeTime(startStr);
    const endMinutes = normalizeTime(endStr);

    const startIndex = timeSlots.findIndex(slot => normalizeTime(slot) >= startMinutes);
    const endIndex = timeSlots.findIndex(slot => normalizeTime(slot) >= endMinutes);


    if (startIndex === -1 || endIndex === -1) return;

    scheduleMap[day][startIndex] = {
      content: subject === "Lunch Break"
        ? "Lunch Break"
        : `<i>${subject_code}</i>\n<b>${subject}</b>\nProf: ${prof.toUpperCase()}\nRoom: ${room}`,
      span: endIndex - startIndex,
      subject,
    };

    for (let i = startIndex + 1; i < endIndex; i++) {
      scheduleMap[day][i] = "skip";
    }
  });

  const exportSched = () => {
    const element = document.getElementById('sched');
    html2canvas(element, {
      scale: 2,
      scrollY: -window.scrollY,
      windowWidth: element.scrollWidth,
      windowHeight: element.scrollHeight
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'schedule.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  const getColor = subject => {
  if (subject === "Lunch Break") {
      return "bg-orange-100 dark:bg-orange-800 italic text-center font-semibold text-black dark:text-white";
    }
    return "bg-blue-500 dark:bg-blue-800 text-white";
  };


  if (schedule.length === 0) {
    return (
      <Layout>
        <div className="p-4 text-center text-gray-500">Loading schedule...</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="p-4 overflow-x-auto">
        <div className='flex justify-between items-center mb-4'>
          <h2 className="text-xl font-semibold">Weekly Schedule</h2>
          <div className="flex gap-2">
            <button
              onClick={() => setCompactMode(prev => !prev)} // ✅ toggle compact
              className='bg-blue-500 text-white rounded px-4 py-2'
            >
              {compactMode ? "Normal Mode" : "Compact Mode"}
            </button>
            <button
              onClick={exportSched}
              className="bg-blue-500 text-white rounded px-4 py-2"
            >
              Export Schedule
            </button>
          </div>
        </div>

        <table id='sched' className="min-w-full table-fixed border border-gray-300 text-sm">
          <thead>
            <tr>
              <th className="w-[10px] border border-gray-300 p-2 w-32">Time</th>
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
                        className={`w-[100px] p-2 whitespace-pre-line align-middle 
                          ${getColor(cell.subject)} 
                          ${cell.subject === "Lunch Break" ? "" : "border border-gray-300"}`
                        }
                        rowSpan={cell.span}
                      >

                        <span dangerouslySetInnerHTML={{ __html: cell.content }} />
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
