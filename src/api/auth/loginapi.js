import axios from "axios";

export const adminapi = async (username, password) => {
  const res = await axios.post("https://express-backend-mocha.vercel.app/adminapi", {
    username,
    password,
  });
  return res.data;
};
