import axios from "axios";

export const projectapi = async () => {
  try {
    const res = await axios.get(
      "https://my-portfolio-5c2cag2dw-waleed-siddiqui-7.vercel.app/projectapi",
    );
    console.log(res, "faqs");
    return res.data.data;
  } catch (error) {
    alert(error);
  }
};
