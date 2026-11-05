import axios from "axios";

export const Updateskillapi = async (id, title, items) => {
  console.log(id);
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_APP_BASE_URL}/skillapi/${id}`,

      {
        title,
        items,
      },
    );

    console.log(res, "update");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
