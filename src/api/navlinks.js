import axios from "axios";

export const Navlink = async () => {
  try {
    const res = await axios.get("http://localhost:8000/linkapi");
    console.log(res, "faqs");
    return res.data.products;
  } catch (error) {
    alert(error);
  }
};
