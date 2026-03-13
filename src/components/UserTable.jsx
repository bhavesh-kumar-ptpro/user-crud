import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const UserTable = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const users = [
    {
      name: "default",
      email: "myemail@gmail.com",
      mobile: "898988989",
      city: "sumepur",
    },
    {
      name: "user 2",
      email: "myemgdail@gmail.com",
      mobile: "898988989",
      city: "sumepur",
    },
  ];
  return (
    <div style={{ display: "grid" }}>
      <h1>User Table</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>City</th>
        </tr>
        <tbody>
          {users.map((el, ind) => {
            return (
              <tr key={ind}>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.mobile}</td>
                <td>{el.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
