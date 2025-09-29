import { useAuthStore } from "@/store/authStore";
import { useFocusEffect } from "expo-router";
import { useCallback } from "react";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const store: any = useAuthStore();
  const { fetchUser } = store;
  useFocusEffect(
    useCallback(() => {
      fetchUser();
    }, [])
  );
  return children;
}
