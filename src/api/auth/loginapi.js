import axios from "axios";

console.log(import.meta.env.VITE_APP_BASE_URL);

export const adminapi = async (username, password) => {
  const res = await axios.post(
    `${import.meta.env.VITE_APP_BASE_URL}/adminapi`,
    {
      username,
      password,
    }
  );

  return res.data;
};