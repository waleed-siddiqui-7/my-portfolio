import axios from "axios";

export const projectapi = async () => {
  try {
    const res = await axios.get(
      "https://my-portfolio-three-delta-93.vercel.app/projectapi",
    );
    console.log(res, "faqs");
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
