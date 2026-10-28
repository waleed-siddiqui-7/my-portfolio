import axios from "axios";

export const Navlink = async () => {
  try {
    const res = await axios.get(
      "https://my-portfolio-three-delta-93.vercel.app/linkapi",
    );
    console.log(res, "faqs");
    return res.data.products;
  } catch (error) {
    console.log(error);
  }
};
