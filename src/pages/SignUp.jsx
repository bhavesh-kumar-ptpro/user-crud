import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Mobile validation (only numbers, max 10)
    if (name === "mobile") {
      const onlyNumbers = value.replace(/\D/g, ""); // remove non-digits

      if (onlyNumbers.length <= 10) {
        setForm({
          ...form,
          [name]: onlyNumbers,
        });
      }
      return;
    }

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
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

    const emailExists = users.some((user) => user.email === form.email);

    if (emailExists) {
      return toast.error("Email already registered");
    }

    const newUser = { ...form };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("auth", "true");
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    toast.success("Signup Successful");

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
          value={form.name}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          sx={{ mb: 2 }}
          value={form.email}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          label="Mobile"
          name="mobile"
          sx={{ mb: 2 }}
          value={form.mobile}
          onChange={handleChange}
          inputProps={{ maxLength: 10 }}
        />

        <TextField
          fullWidth
          label="City"
          name="city"
          sx={{ mb: 2 }}
          value={form.city}
          onChange={handleChange}
        />

        <TextField
          fullWidth
          type="password"
          label="Password"
          name="password"
          sx={{ mb: 2 }}
          value={form.password}
          onChange={handleChange}
        />

        <Button variant="contained" fullWidth onClick={handleSubmit}>
          Signup
        </Button>
      </Paper>
    </Box>
  );
}