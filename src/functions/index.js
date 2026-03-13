import axios from "axios";
export const hello = () => {
  console.log("working");
};
// const BACKEND_URL = process.env.REACT_APP_BACKEND_URI;
const BACKEND_URL = "https://crudcrud.com/api";

export const getAllUsers = async () => {
  console.log("fetching", BACKEND_URL);

  try {
    const { data } = await axios.get(`${BACKEND_URL}`);
    console.log("data", data);
  } catch (error) {
    console.log(error.message);
  }
};

export const createNewUser = async (payload) => {
  console.log("fetching createNewUser");
  const {
    name = "default user",
    email = "user@email.com",
    mobile = "7887787887",
    city = "Sumerpur",
  } = payload;
  try {
    const { data } = await axios.post(`${BACKEND_URL}`, payload);
    console.log("createNewUser", data);
  } catch (error) {
    console.log("error", error.message);
  }
};

export const editUser = async (payload, id) => {
  try {
    const { data } = await axios.put(`${BACKEND_URL}/${id}`, payload);
    console.log("createNewUser", data);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (id) => {
  try {
    const { data } = await axios.delete(`${BACKEND_URL}/${id}`);
    console.log("createNewUser", data);
  } catch (error) {
    console.log(error.message);
  }
};
