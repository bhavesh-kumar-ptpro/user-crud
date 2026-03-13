import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function  SignUp () {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    if (!form.name) return toast.error("Name is required");

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return toast.error("Invalid email");

    if (!/^[0-9]{10}$/.test(form.mobile))
      return toast.error("Mobile must be 10 digits");

    if (!form.city) return toast.error("City required");

    if (form.password.length < 6)
      return toast.error("Password must be 6 characters");

    return true;
  };

const navigate = useNavigate();

const handleSubmit = () => {
  // validations
  if (!form.name.trim()) {
    return toast.error("Name is required");
  }

  if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    return toast.error("Invalid email address");
  }

  if (!/^[0-9]{10}$/.test(form.mobile)) {
    return toast.error("Mobile must be 10 digits");
  }

  if (!form.city.trim()) {
    return toast.error("City is required");
  }

  if (form.password.length < 6) {
    return toast.error("Password must be at least 6 characters");
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  // check duplicate email
  const emailExists = users.some((user) => user.email === form.email);

  if (emailExists) {
    return toast.error("Email already registered");
  }

  const newUser = {
    name: form.name,
    email: form.email,
    mobile: form.mobile,
    city: form.city,
    password: form.password,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  // set login state
  localStorage.setItem("auth", "true");
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  toast.success("Signup Successful");

  // redirect to dashboard
  navigate("/");
};

  return (
    <Box display="flex" justifyContent="center" mt={8}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" mb={3}>
          Signup
        </Typography>

        <TextField
          fullWidth
          label="Name"
          name="name"
          sx={{ mb: 2 }}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          sx={{ mb: 2 }}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Mobile"
          name="mobile"
          sx={{ mb: 2 }}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="City"
          name="city"
          sx={{ mb: 2 }}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          sx={{ mb: 2 }}
          onChange={handleChange}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
        >
          Signup
        </Button>
      </Paper>
    </Box>
  );
};