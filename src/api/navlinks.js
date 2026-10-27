import axios from "axios";

export const Navlink = async () => {
  try {
    const res = await axios.get(
      "https://my-portfolio-5c2cag2dw-waleed-siddiqui-7.vercel.app/linkapi",
    );
    console.log(res, "faqs");
    return res.data.products;
  } catch (error) {
    alert(error);
  }
};
