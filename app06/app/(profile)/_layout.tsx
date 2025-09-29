import AuthProvider from "@/components/AuthProvider";
import { useAuthStore } from "@/store/authStore";
import { Stack } from "expo-router";

export default function ProfileLayout() {
  const { isAuthenticated, isLoading }: any = useAuthStore();

  return (
    <AuthProvider>
      <Stack>
        <Stack.Protected guard={!isLoading && isAuthenticated}>
          <Stack.Screen name="profile" />
          <Stack.Screen name="order" />
        </Stack.Protected>
      </Stack>
    </AuthProvider>
  );
}
