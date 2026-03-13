import axios from "axios";

const BACKEND_URL = "https://crudcrud.com/api/YOUR_API_KEY/users";

// GET ALL USERS
export const getAllUsers = async () => {
  try {
    const response = await axios.get(BACKEND_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error.message);
    throw error;
  }
};

// CREATE USER
export const createNewUser = async (payload) => {
  try {
    const response = await axios.post(BACKEND_URL, payload);
    return response.data;
  } catch (error) {
    console.error("Error creating user:", error.message);
    throw error;
  }
};

// EDIT USER
export const editUser = async (id, payload) => {
  try {
    const response = await axios.put(`${BACKEND_URL}/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error.message);
    throw error;
  }
};

// DELETE USER
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${BACKEND_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error.message);
    throw error;
  }
};