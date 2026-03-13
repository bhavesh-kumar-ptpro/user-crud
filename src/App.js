import { useEffect } from "react";
import "./App.css";
import {
  Heading,
  Table,
  TableBody,
  TableContainer,
  Thead,
  Tr,
  Th,
  Button,
} from "@chakra-ui/react";
import { hello } from "./functions";
import { getAllUsers, createNewUser, deleteUser } from "./functions";
import { ChakraProvider } from "@chakra-ui/react";
import { Sidebar } from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { UserTable } from "./components/UserTable";

function App() {
  useEffect(() => {
    const payload = {
      name: "default",
      email: "myemail@gmail.com",
      mobile: "898988989",
      city: "sumepur",
    };
    // getAllUsers()
    // createNewUser(payload);
    // deleteUser('3d9d1d36ce584aa082524634a92cf78e')
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserTable />} />
      </Routes>
      <Sidebar />
    </div>
  );
}

export default App;
