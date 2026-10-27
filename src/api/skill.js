import axios from "axios";

export const Faq = async () => {
  try {
    const res = await axios.get("http://localhost:8000/skillapi");
    console.log(res, "faqs");
    return res.data.products;
  } catch (error) {
    alert(error);
  }
};
