import axios from "axios";

export const projectapi = async () => {
  try {
    
    const res = await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/projectapi`);

    console.log(res, "faqs");
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
