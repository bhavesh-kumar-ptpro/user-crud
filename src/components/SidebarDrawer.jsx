import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";

import { useNavigate } from "react-router-dom";

export const SidebarDrawer = () => {
  const [open, setOpen] = useState(false);
  const [logoutDialog, setLogoutDialog] = useState(false);

  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth");

  const drawerWidth = open ? 220 : 70;

  const menuItems = [
    { name: "Dashboard", path: "/", icon: <DashboardIcon /> },
    { name: "Users", path: "/users", icon: <PeopleIcon /> },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleLogoutClick = () => {
    setLogoutDialog(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("currentUser");
    setLogoutDialog(false)
    navigate("/login");

  };

  return (
    <>
      {/* Top Navbar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ ml: 2 }}>
            My Dashboard
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            transition: "0.3s",
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar />

        <List>
          {menuItems.map((item) => (
            <ListItem key={item.name} disablePadding>
              <ListItemButton onClick={() => handleNavigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>

                {open && <ListItemText primary={item.name} />}
              </ListItemButton>
            </ListItem>
          ))}

          {/* Logout */}
          {isAuth && (
            <ListItem sx={{ mt: 4 }} disablePadding>
              <ListItemButton onClick={handleLogoutClick}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>

                {open && <ListItemText primary="Logout" />}
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>

      {/* Logout Dialog */}
      <Dialog open={logoutDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Logout</DialogTitle>

        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setLogoutDialog(false)}>Cancel</Button>

          <Button color="error" variant="contained" onClick={confirmLogout}>
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
