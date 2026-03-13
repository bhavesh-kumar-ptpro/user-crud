import { Box, Grid, Paper, Typography, Fab, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);

  const stats = [
    {
      title: "Total Users",
      value: 120,
      icon: <PeopleIcon fontSize="large" color="primary" />,
    },
    {
      title: "New Users",
      value: 15,
      icon: <PersonAddIcon fontSize="large" color="success" />,
    },
    {
      title: "Edited Users",
      value: 10,
      icon: <EditIcon fontSize="large" color="warning" />,
    },
    {
      title: "Deleted Users",
      value: 5,
      icon: <DeleteIcon fontSize="large" color="error" />,
    },
  ];

  const handleLogoutClick = () => {
    setOpenDialog(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("currentUser");
    setOpenDialog(false)
    navigate("/login");
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 12,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: "900px", mt: 2 }}>
        {stats.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={4}
              sx={{
                p: 3,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderRadius: 3,
              }}
            >
              <Box>
                <Typography variant="subtitle2" color="text.secondary">
                  {item.title}
                </Typography>

                <Typography variant="h5" fontWeight="bold">
                  {item.value}
                </Typography>
              </Box>

              {item.icon}
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Floating Logout Button */}
      <Fab
        color="error"
        aria-label="logout"
        onClick={handleLogoutClick}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
        }}
      >
        <LogoutIcon />
      </Fab>

      {/* Logout Confirmation Dialog */}
      <Dialog open={openDialog} onClose={handleCancel}>
        <DialogTitle>Logout</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>

          <Button
            onClick={handleConfirmLogout}
            color="error"
            variant="contained"
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};