import React, { useState } from 'react';

import axios from 'axios';

function DowntimeTracker() {
  const [downtimeStart, setDowntimeStart] = useState(null);
  const [downtimeEnd, setDowntimeEnd] = useState(null);
  const [workstation, setWorkstation] = useState('');

  const handleDowntimeStart = () => {
    const currentDate = new Date().toISOString();
    setDowntimeStart(currentDate);
    setWorkstation('');
    axios.post('http://localhost:3001/downtime/start', { workstation })
      .then(() => {
        console.log('Downtime started');
      })
      .catch((error) => {
        console.error('Failed to start downtime:', error);
      });
  };

  const handleDowntimeEnd = () => {
    const currentDate = new Date().toISOString();
    setDowntimeEnd(currentDate);
    axios.post('http://localhost:3001/downtime/end', { workstation })
      .then(() => {
        console.log('Downtime ended');
      })
      .catch((error) => {
        console.error('Failed to end downtime:', error);
      });
  };

  return (
    <div>
      <h2>Downtime Tracker</h2>
      <div>
        <label>Workstation Name: </label>
        <input
          type="text"
          value={workstation}
          onChange={(e) => setWorkstation(e.target.value)}
        />
      </div>
      {downtimeStart && <p>Downtime start: {downtimeStart}</p>}
      {downtimeEnd && <p>Downtime end: {downtimeEnd}</p>}
      <button onClick={handleDowntimeStart}>Start Downtime</button>
      <button onClick={handleDowntimeEnd}>End Downtime</button>
    </div>
  );
}

export default DowntimeTracker;

  