import axios from "axios";

export const Updateprojectapi = async (id, title, discription, tech, link) => {
  console.log(id);
  try {
    const res = await axios.put(
      `${import.meta.env.VITE_APP_BASE_URL}/projectapi/${id}`,

      {
        title,
        discription,
        tech,
        link,
      },
    );

    console.log(res, "update");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
