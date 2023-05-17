import  '../home/home.css'

import React, { useEffect, useState } from 'react';

import axios from 'axios';

function HomePage () {
    const [employeeId, setEmployeeId] = useState('');
    const [employeeData, setEmployeeData] = useState(null);
  
    const handleInputChange = event => {
      setEmployeeId(event.target.value);
    };
  
    const handleSubmit = async event => {
      event.preventDefault();
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${employeeId}`);
        setEmployeeData(response.data);
      } catch (error) {
        console.error(error);
        setEmployeeData(null);
      }
    };
  
    useEffect(() => {
      const handleKeyPress = event => {
        if (event.key === 'Enter') {
          handleSubmit(event);
        }
      };
  
      document.addEventListener('keypress', handleKeyPress);
      return () => {
        document.removeEventListener('keypress', handleKeyPress);
      };
    }, [handleSubmit]);
  
    return (
        <div className="app-container">
          <div className="form-container">
            <h1>Welcome</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" value={employeeId} onChange={handleInputChange} placeholder="Scan your Badge here" />
            </form>
            {employeeData && (
              <div>
                <p>Badge ID: {employeeData.id}</p>
                <p>Name: {employeeData.name}</p>
                <p>Manager: {employeeData.email}</p>
              </div>
            )}
          </div>
          <div className="employee-details-container">
            {employeeData && (
              <div>
                <h2>Today you are goin to work on:</h2>
                <p>Workstation: {employeeData.phone}</p>
                <p>PA Assigned: {employeeData.website}</p>
              </div>
            )}
          </div>
        </div>
      );
      
  }

export default HomePage;