import {
  getRefreshToken,
  getToken,
  removeToken,
  saveToken,
} from "@/utils/utils";
import axios from "axios";
import { router } from "expo-router";
export const instance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
  // timeout: 1000,
});

instance.interceptors.request.use(async (config) => {
  const { accessToken } = await getToken();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const { refreshToken } = await getToken();
      if (!refreshToken) {
        await removeToken();
        router.push("/login");
        return;
      }
      const newToken = await getRefreshToken(refreshToken);

      if (!newToken) {
        await removeToken();
        router.push("/login");
        return;
      }
      await saveToken(newToken);
      return instance(error.config);
    }
    return Promise.reject(error);
  }
);
