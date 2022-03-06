import React from "react";

const ReactList = () => {
  //   const students = ["Sameer", "Harry", "Ron"];
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
      <table>
        {students.map((student, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ReactList;
