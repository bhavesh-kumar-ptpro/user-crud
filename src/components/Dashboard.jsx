import {useNavigate} from 'react-router-dom'
import { useState } from "react";
export const Dashboard = () => {
  const [open, setOpen] = useState(true);
 const  navigate = useNavigate();
  return (
    <div style={{ display: "grid" }}>
      <h1>Dashboard</h1>
    </div>
  );
};