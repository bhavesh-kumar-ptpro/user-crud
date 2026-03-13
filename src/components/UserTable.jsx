
import { useState } from "react";
import { Sidebar } from "./Sidebar";
export const UserTable = () => {
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
    {
      name: "default 1",
      email: "myemail@gmail.com",
      mobile: "898988989",
      city: "sumepur",
    },
    {
      name: "user 3",
      email: "myemgdail@gmail.com",
      mobile: "898988989",
      city: "sumepur",
    },
  ];

  const [userData, setUserData] = useState(users);
  const handleChange = (e) => {
    e.preventDefault()
    console.log("handlechange");
    const searchQuery = e.target.value;
    const filteredData = users.filter((users) =>
      users.name.includes(searchQuery),
    );

    setUserData(filteredData || []);
  };
  console.log("handlechange");
  return (
    <div style={{display:"flex",marginTop:"100px"}}>
      {/* <Sidebar/> */}
      <h1>User Table</h1>
      <div style={{display:"flex"}}>
        <input placeholder="search" onChange={handleChange} />
      </div>
      <table mb="4" style={{border:"1px solid gray"}}>
        <tr style={{border:"1px solid gray",padding:"10px"}}> 
          <th >Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>City</th>
        </tr>

        {userData.map((user,i) => (
          <tr key={i}>
            <td style={{border:"1px solid gray",padding:"10px"}}>{user.name}</td>
            <td style={{border:"1px solid gray",padding:"10px"}}>{user.email}</td>
            <td style={{border:"1px solid gray",padding:"10px"}}>{user.mobile}</td>
            <td style={{border:"1px solid gray",padding:"10px"}}>{user.city}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
