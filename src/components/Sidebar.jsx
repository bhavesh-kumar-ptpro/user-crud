import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
export const Sidebar = () => {
  const [open, setOpen] = useState(true);
 const  navigate = useNavigate();
  return (
    <div style={{ display: "grid",width:"10%",position:"absolute",background:"white", }}>
      <button onClick={navigate('/')}>Dashboard</button>
      <button onClick={navigate('/users')}>User</button>
    </div>
  );
};
