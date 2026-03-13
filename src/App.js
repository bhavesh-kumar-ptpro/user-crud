import { useEffect } from "react";
import "./App.css";
import { getAllUsers } from "./functions";
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

  const isLoggedIn = localStorage.getItem("auth");

  return (
    <div className="App">
      <ToastContainer position="top-right" />

      <BrowserRouter>

        {/* Show drawer only when logged in */}
        {isLoggedIn && <SidebarDrawer />}

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