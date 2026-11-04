import axios from "axios";

export const Createprojectapi = async (title, discription, tech, link) => {
  try {
const res = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/projectapi`, { 
  title, 
  discription, 
  tech, 
  link, 
});

    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
