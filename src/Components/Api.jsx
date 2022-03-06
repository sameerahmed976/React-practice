import React, { useEffect, useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  // const deleteHandle = (id) => {
  //   console.log(id);
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // };

  return (
    <div>
      <h1>API Call</h1>
      <table border="1">
        <tbody>
          <tr>
            <td>slno</td>
            <td>name</td>
            <td>username</td>
            <td>email</td>
            <td>phone</td>
            <td>website</td>
          </tr>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
                <td>
                  <button onClick={() => deleteHandle(item.id)}>
                    Delete User
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Api;
