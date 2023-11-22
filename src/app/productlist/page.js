"use client";
import React, { useEffect, useState } from "react";

async function fetchEmployeeList() {
  const response = await fetch(
    "	https://dummy.restapiexample.com/api/v1/employees"
  );
  const data = await response.json();
  return data.data; // Extracting the "data" property from the response
}

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployeeList().then((data) => {
      setEmployees(data);
    });
  }, []);

  return (
    <div>
      <h3
        style={{
          margin: "6px",
          padding: "21px",
          backgroundColor: "lightgreen",
          borderRadius: "25px",
        }}
      >
        In the Employee page
      </h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td style={{ textAlign: "center" }}>{employee.employee_name}</td>
              <td>${employee.employee_salary}</td>
              <td>{employee.employee_age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
