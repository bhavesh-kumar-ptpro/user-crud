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
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { UserTable } from "./components/UserTable";
import { SidebarDrawer } from "./components/SidebarDrawer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp";
import { Login } from "./pages/Login";
import { PrivateRoute } from "./PrivateRoute";
function App() {
  useEffect(() => {
    const payload = {
      name: "default",
      email: "myemail@gmail.com",
      mobile: "898988989",
      city: "sumepur",
    };
    getAllUsers(payload);
  }, []);

  return (
    <div className="App">
      <ToastContainer position="top-right" />
      <BrowserRouter>
        <SidebarDrawer />
        <Routes>
          <Route path="/signup" element={<SignUp />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute>
                <UserTable />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
