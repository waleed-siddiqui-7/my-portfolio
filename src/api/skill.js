import axios from "axios";

export const Faq = async () => {
  try {
    const res = await axios.get(
      "https://my-portfolio-5c2cag2dw-waleed-siddiqui-7.vercel.app/skillapi",
    );
    console.log(res, "faqs");
    return res.data.products;
  } catch (error) {
    alert(error);
  }
};
