import axios from "axios";

export const adminapi = async (username, password) => {
  const res = await axios.post("http://localhost:8000/adminapi", {
    username,
    password,
  });
  return res.data;
};
