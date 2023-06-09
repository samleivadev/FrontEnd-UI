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
          setTimeout(() => {
            setEmployeeData(null);
            setEmployeeId(''); // Clear the form input
          }, 5000); // Hide employee info after 5 seconds (5000 milliseconds)
        } catch (error) {
          console.error(error);
          setEmployeeData(null);
          setEmployeeId(''); // Clear the form input
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
            <input type="text" value={employeeId} onChange={handleInputChange} placeholder="Scan Your badge here" />
          </form>
          {employeeData && (
            <div>
              <p>Badge ID: {employeeData.id}</p>
              <p>Login: {employeeData.name}</p>
              <p>Name: {employeeData.name}</p>
              <p>Shift: {employeeData.name}</p>
              <p>Manager: {employeeData.email}</p>
              <p>AM Login: {employeeData.name}</p>
              <p>Department: {employeeData.name}</p>
              
            </div>
          )}
        </div>
        <div className="employee-details-container">
          {employeeData && (
            <div>
              <h2>Today you are going to work in</h2>
              <p>Icon: {employeeData.phone}</p>
              <p>Worstation: {employeeData.phone}</p>
              <p>Location: {employeeData.phone}</p>
              <p>PA Assigned: {employeeData.website}</p>
              <p>Movitational Quote: {employeeData.website}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

export default HomePage;