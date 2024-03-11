import axios from "axios";
import { backendBaseUrl } from "../constants";
export const addUser = async (userId) => {
  try {
    const response = await axios.post(`${backendBaseUrl}/add-user`, { userId });
    return response;
  } catch (err) {
    const error = new Error();
    if (err.response && err.response.status === 409) {
      error.status = 409;
      throw error;
    } else {
      throw new Error("Something went wrong");
    }
  }
};
