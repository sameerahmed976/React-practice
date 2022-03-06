import React from "react";
import { Table } from "react-bootstrap";
export const NestedList = () => {
  const students = [
    {
      name: "Anil",
      email: "anil@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Burce",
      email: "bruce@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Peter",
      email: "peter@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
    {
      name: "Sam",
      email: "sam@test.com",
      address: [
        { hm: "101", city: "Noida", country: "India" },
        { hm: "10", city: "Gurgaon", country: "India" },
        { hm: "23", city: "Noida", country: "India" },
        { hm: "45", city: "Delhi", country: "India" },
      ],
    },
  ];
  return (
    <div>
      <Table variant="dark" striped>
        <tbody>
          <tr>
            <td>SlNo</td>
            <td>Name</td>
            <td>email</td>
            <td>Address</td>
          </tr>
          {students.map((student, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name} </td>
                <td>{student.email} </td>
                <td>
                  <Table variant="dark" striped>
                    <tbody>
                      {student.address.map((student, index) => {
                        return (
                          <tr key={index}>
                            <td>{student.hm}</td>
                            <td>{student.city}</td>
                            <td>{student.country}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
