import axios from "axios";

export const Faq = async () => {
  try {
    const res = await axios.get(
      "https://my-portfolio-three-delta-93.vercel.app/skillapi",
    );
    console.log(res, "faqs");
    return res.data.products;
  } catch (error) {
    console.log(error);
  }
};
