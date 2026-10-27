import axios from "axios";

export const Navlink = async () => {
  try {
    const res = await axios.get("https://my-portfolio-o3v7.vercel.app/linkapi");
    console.log(res, "faqs");
    return res.data.products;
  } catch (error) {
    alert(error);
  }
};
