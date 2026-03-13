import { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  TablePagination,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export const UserTable = () => {
  const initialUsers = [
    {
      id: 1,
      name: "default",
      email: "myemail@gmail.com",
      mobile: "898988989",
      city: "Sumerpur",
    },
    {
      id: 2,
      name: "user 2",
      email: "user2@gmail.com",
      mobile: "898988989",
      city: "Ahmedabad",
    },
    {
      id: 3,
      name: "default 1",
      email: "default1@gmail.com",
      mobile: "898988989",
      city: "Jaipur",
    },
    {
      id: 4,
      name: "user 3",
      email: "user3@gmail.com",
      mobile: "898988989",
      city: "Delhi",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(3);

  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  // Search filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(0);
  };

  // Pagination
  const handleChangePage = (e, newPage) => setPage(newPage);

  const handleRowsChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  // Delete
  const handleDelete = (id) => {
    const updated = users.filter((user) => user.id !== id);
    setUsers(updated);
  };

  // Edit open
  const handleEditOpen = (user) => {
    setEditUser(user);
    setOpen(true);
  };

  // Edit change
  const handleEditChange = (e) => {
    setEditUser({
      ...editUser,
      [e.target.name]: e.target.value,
    });
  };

  // Save edit
  const handleSave = () => {
    const updated = users.map((user) =>
      user.id === editUser.id ? editUser : user,
    );

    setUsers(updated);
    setOpen(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 12,
      }}
    >
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>

      {/* Search */}
      <TextField
        label="Search user"
        value={search}
        onChange={handleSearch}
        sx={{ mb: 3, width: 300 }}
      />

      {/* Table */}
      <TableContainer component={Paper} sx={{ width: 900 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <b>Name</b>
              </TableCell>
              <TableCell align="center">
                <b>Email</b>
              </TableCell>
              <TableCell align="center">
                <b>Mobile</b>
              </TableCell>
              <TableCell align="center">
                <b>City</b>
              </TableCell>
              <TableCell align="center">
                <b>Actions</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user.id}>
                  <TableCell align="center">{user.name}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.mobile}</TableCell>
                  <TableCell align="center">{user.city}</TableCell>

                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      onClick={() => handleEditOpen(user)}
                    >
                      <EditIcon />
                    </IconButton>

                    <IconButton
                      color="error"
                      onClick={() => handleDelete(user.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredUsers.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsChange}
        rowsPerPageOptions={[3, 5, 10]}
      />

      {/* Edit Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ pb: 1 }}>Edit User</DialogTitle>

        <DialogContent
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 3,
            p: 3,
            mt: 1,
            minHeight: "250px",
          }}
        >
          <TextField
  label="Name"
  name="name"
  value={editUser?.name || ""}
  onChange={handleEditChange}
  fullWidth
  sx={{ mt: 2 }}
/>

          <TextField
            label="Email"
            name="email"
            value={editUser?.email || ""}
            onChange={handleEditChange}
            fullWidth
            sx={{ mt: 2 }}
          />

          <TextField
            label="Mobile"
            name="mobile"
            value={editUser?.mobile || ""}
            onChange={handleEditChange}
            fullWidth
          />

          <TextField
            label="City"
            name="city"
            value={editUser?.city || ""}
            onChange={handleEditChange}
            fullWidth
          />
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpen(false)}>Cancel</Button>

          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
