import axios from "axios";

export const adminapi = async (username, password) => {
  const res = await axios.post("http://express-backend-mocha.vercel.app/adminapi", {
    username,
    password,
  });
  return res.data;
};
