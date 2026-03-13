import { Button, CloseButton, Drawer, Portal } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Sidebar = () => {
  const navigate = useNavigate();
  const handleUserClick = () => {
    // console.log("working fine");
    navigate("/users");
  };
  return (
    // <div style={{ display: "grid",width:"20%",position:"sticky",top:"0",background:"white",border:"1px solid gray",height:"100vh",gap:"20px" }}>
    // <aside class="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0 dark:bg-gray-900 dark:border-gray-700">
    // <nav class="flex flex-col flex-1 space-y-6">
    <div
      classe="grid"
      style={{
        border: "1px solid gray",
        width: "20%",
        height: "100vh",
        gap: "50px",
        position:"absolute",
        top:"0px",
        background:"gray",
        padding:"50px"
      }}
    >
      <button onClick={navigate("/")}>Dashboard</button>

      <br />
      <button onClick={handleUserClick}>User</button>
    </div>

    // </nav>
  );
};
