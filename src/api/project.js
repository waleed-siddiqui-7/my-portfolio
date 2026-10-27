import axios from "axios";

export const projectapi = async () => {
  try {
    const res = await axios.get("http://localhost:8000/projectapi");
    console.log(res, "faqs");
    return res.data.data;
  } catch (error) {
    alert(error);
  }
};
