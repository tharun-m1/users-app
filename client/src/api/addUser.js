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

export const getData = async () => {
  try {
    const response = await axios.get(`${backendBaseUrl}/users`);
    return response;
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong try again...");
  }
};
