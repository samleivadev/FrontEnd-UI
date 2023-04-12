import React, { useEffect, useState } from 'react';

import axios from 'axios';

function EmployeeInfo() {
  const [badgeId, setBadgeId] = useState('');
  const [employeeData, setEmployeeData] = useState(null);
  const [taskData, setTaskData] = useState(null);

  useEffect(() => {
    if (badgeId) {
      axios.get(`https://localhost:3001/employees/${badgeId}`)
        .then(response => {
          setEmployeeData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [badgeId]);

  useEffect(() => {
    axios.get('https://localhost:3001/tasks') 
      .then(response => {
        setTaskData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleBadgeIdSubmit = event => {
    event.preventDefault();
    setEmployeeData(null); // Reset employeeData to null before fetching new employee data
    setBadgeId(event.target.badgeId.value);
  };

  return (
    <div>
      <form onSubmit={handleBadgeIdSubmit}>
        <label>
          Badge ID:
          <input type="text" name="badgeId" value={badgeId} onChange={event => setBadgeId(event.target.value)} />
        </label>
        <button type="submit">Enter</button>
      </form>
      {employeeData ? (
        <div className="blue-section">
          <img src={employeeData.photoId} alt="Employee Photo" />
          <p>Login: {employeeData.login}</p>
          <p>Employee Name: {employeeData.employeeName}</p>
          <p>Supervisor Name: {employeeData.supervisorName}</p>
          <img src={employeeData.supervisorPhotoId} alt="Supervisor Photo" />
        </div>
      ) : (
        <p>Please enter your badge ID.</p>
      )}
      {taskData ? (
        <div className="grey-section">
          {taskData.map(task => (
            <div key={task.id}>
              <img src={task.photoTask} alt="Task Photo" />
              <p>Task: {task.task}</p>
              <p>Assistant Name: {task.assistantName}</p>
              <img src={task.assistantPhotoId} alt="Assistant Photo" />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading task data...</p>
      )}
    </div>
  );
}

export default EmployeeInfo;
