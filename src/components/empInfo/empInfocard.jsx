import React, { useState } from "react";

import style from "../empInfo/emp.module.css";

const EmployeeInfo = () => {
  const [employeeInfo, setEmployeeInfo] = useState(null);
  const [employeeId, setEmployeeId] = useState("");

  const handleIdChange = (e) => {
    setEmployeeId(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      fetch(`http://localhost:3001/${employeeId}`)
        .then((response) => response.json())
        .then((data) => {
          setEmployeeInfo(data);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className={style.empCard}>
      <label htmlFor="employee-id">Enter Employee ID:</label>
      <input
        type="text"
        id="employee-id"
        value={employeeId}
        onChange={handleIdChange}
        onKeyPress={handleKeyPress}
      />

      {employeeInfo && (
        <div>
          <img
            className={style.picture}
            src={employeeInfo.photo}
            alt={employeeInfo.name}
          />
          <h2>{employeeInfo.name}</h2>
          <p>Skills: {employeeInfo.skills.join(", ")}</p>
          <p>Phone: {employeeInfo.phone}</p>
        </div>
      )}
    </div>
  );
};

export default EmployeeInfo;
