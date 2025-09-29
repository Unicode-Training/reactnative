import * as SecureStore from "expo-secure-store";
export const getRefreshToken = async (refreshToken: string) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    }
  );
  if (!response.ok) {
    return false;
  }
  const data = await response.json();
  return data;
};

export const getToken = async () => {
  const accessToken = await SecureStore.getItemAsync("access_token");
  const refreshToken = await SecureStore.getItemAsync("refresh_token");
  return {
    accessToken,
    refreshToken,
  };
};

export const saveToken = async (token: {
  access_token: string;
  refresh_token: string;
}) => {
  await SecureStore.setItemAsync("access_token", token.access_token);
  await SecureStore.setItemAsync("refresh_token", token.refresh_token);
};

export const removeToken = async () => {
  await SecureStore.deleteItemAsync("access_token");
  await SecureStore.deleteItemAsync("refresh_token");
};
