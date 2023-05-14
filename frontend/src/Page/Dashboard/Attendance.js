import React, { useEffect, useState } from "react";

const Attendance = () => {
    const [attendance, setAttendance] = useState({
        week: 1,
        learners: [
          // example data, you can replace this with real data later
          { name: "Mehdi", attendance: [true, false, true, true, false] },
          { name: "Ines", attendance: [false, true, true, false, true] },
        
        ],
      });
      const nextWeek = () => {
        setAttendance((prev) => ({ ...prev, week: prev.week + 1 }));
      };
      
      const prevWeek = () => {
        if (attendance.week > 1) {
          setAttendance((prev) => ({ ...prev, week: prev.week - 1 }));
        }
      }; 
    return (
  <div>
     <h1>Attendance for Cohort 1 - Week {attendance.week}</h1>

   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
   <a href="#" onClick={(event) => {event.preventDefault(); prevWeek()}}>Previous Week</a>
   <a href="#" onClick={(event) => {event.preventDefault(); nextWeek()}}>Next Week</a>
</div>
<div style={{ textAlign: 'center' }}>
</div>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
        </tr>
      </thead>
      <tbody>
        {attendance.learners.map((learner) => (
          <tr>
            <td>{learner.name}</td>
            {learner.attendance.map((day, i) => (
              <td key={i}>{day ? "Present" : "Absent"}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
            };

export default Attendance;
