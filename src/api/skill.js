import axios from "axios";

export const Faq = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/skillapi`,
    );
    console.log(res, "faqs");
    return res.data.products;
  } catch (error) {
    console.log(error);
  }
};
