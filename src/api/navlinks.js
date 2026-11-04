import axios from "axios";

export const Navlink = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_APP_BASE_URL}/linkapi`,
    );
    console.log(res, "faqs");
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
