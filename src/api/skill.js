import axios from "axios";

export const Faq = async () => {
  try {
    const res = await axios.get(
      "https://express-backend-beta.vercel.app/skillapi",
    );
    console.log(res, "faqs");
    return res.data.products;
  } catch (error) {
    console.log(error);
  }
};
