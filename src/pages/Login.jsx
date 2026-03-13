import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) => u.email === login.email && u.password === login.password
    );

    if (validUser) {
      localStorage.setItem("auth", "true");
      localStorage.setItem("currentUser", JSON.stringify(validUser));

      toast.success("Login Successful");

      navigate("/");
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" mb={3} textAlign="center">
          Login
        </Typography>

        <TextField
          fullWidth
          label="Email"
          name="email"
          sx={{ mb: 2 }}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          sx={{ mb: 3 }}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleLogin}
          sx={{ mb: 2 }}
        >
          Login
        </Button>

        <Typography textAlign="center">
          Don't have an account?
        </Typography>

        <Button
          variant="text"
          fullWidth
          onClick={() => navigate("/signup")}
        >
          Create Account / Signup
        </Button>
      </Paper>
    </Box>
  );
};

