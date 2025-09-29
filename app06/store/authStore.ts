import { instance } from "@/libs/axios";
import { create } from "zustand";
type User = {
  name: string;
  email: string;
};
export const useAuthStore = create((set) => {
  return {
    user: null,
    isLoading: true,
    isAuthenticated: false,
    setUser: (user: User) => set({ user }),
    setLoading: (isLoading: boolean) => set({ isLoading }),
    setAuthenticated: (isAuthenticated: boolean) => set({ isAuthenticated }),
    fetchUser: async () => {
      try {
        const response = await instance.get(`/auth/profile`);
        if (response?.data) {
          const user = response.data;
          set({
            user,
            isLoading: false,
            isAuthenticated: true,
          });
        }
      } catch {
        set({
          isAuthenticated: false,
          isLoading: false,
          user: null,
        });
      }
    },
  };
});
