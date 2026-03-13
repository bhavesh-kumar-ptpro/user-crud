import {useNavigate} from 'react-router-dom'
import { useState } from "react";
import { NewUserForm } from './NewUserFrom';
import { UserTable } from './UserTable';
export const Dashboard = () => {

 const  navigate = useNavigate();
  return (
    <div style={{ display: "grid",marginTop:"20px" }}>
      <h1 className='mb-5'>Dashboard</h1>
      <NewUserForm/>
      <UserTable/>
    </div>
  );
};