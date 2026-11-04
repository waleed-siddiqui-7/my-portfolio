import axios from "axios";

export const Deleteskillapi = async (id) => {
  console.log(id);
  try {
    const res = await axios.delete(
      `${import.meta.env.VITE_APP_BASE_URL}/skillapi/${id}`,
    );

    console.log(res, "faqs");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
