import React from "react";
import { Table } from "react-bootstrap";
const BootstrapList = () => {
  const students = [
    {
      name: "Sameer",
      email: "Sam@gmail.com",
      phone: 1111,
    },
    {
      name: "Harry",
      email: "Harry@gmail.com",
      phone: 22222,
    },
    {
      name: "Ron",
      email: "Ron@gmail.com",
      phone: 3333,
    },
  ];
  return (
    <div>
      <Table striped variant="dark">
        <tbody>
          <tr>
            <td>S.no</td>
            <td>Name</td>
            <td>email</td>
            <td>Phone</td>
          </tr>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default BootstrapList;
