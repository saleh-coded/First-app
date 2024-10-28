import instance from ".";
import { storeToken } from "./storage";

const register = async (userInfo) => {
  try {
    const { data } = await instance.post(
      "/mini-project/api/auth/register",
      userInfo
    );
    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const login = async (userInfo) => {
  try {
    const { data } = await instance.post(
      "/mini-project/api/auth/login",
      userInfo
    );

    storeToken(data.token);
    return data;
  } catch (error) {
    console.log(first);
  }
};

export { register, login };
