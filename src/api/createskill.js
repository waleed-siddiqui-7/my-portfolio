import axios from "axios";

export const Createskillapi = async (items, title) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_APP_BASE_URL}/skillapi`,
      {
        items,
        title,
      },
    );

    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
