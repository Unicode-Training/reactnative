import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useFocusEffect, usePathname, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import { instance } from "@/libs/axios";
import { useAuthStore } from "@/store/authStore";
export default function LoginScreen() {
  const router = useRouter();
  const [form, setForm] = useState({} as { email: string; password: string });
  const [status, setStatus] = useState("idle");
  const pathname = usePathname();
  const authStore: any = useAuthStore();
  const { setUser, setAuthenticated, setLoading } = authStore;
  useEffect(() => {
    setForm({} as { email: string; password: string });
  }, [pathname]);

  useFocusEffect(
    useCallback(() => {
      setUser(null);
      setAuthenticated(false);
      setLoading(true);
    }, [])
  );

  const handleChangeValue = (fieldName: string, value: string) => {
    setForm({ ...form, [fieldName]: value });
  };
  const requestLogin = async (email: string, password: string) => {
    const response = await instance.post(`/auth/login`, { email, password });
    const data = response.data;
    const accessToken = data.access_token; //Truy cập tài nguyên private trên server
    const refreshToken = data.refresh_token; //Cấp lại access_token mới khi hết hạn
    await SecureStore.setItemAsync("access_token", accessToken);
    await SecureStore.setItemAsync("refresh_token", refreshToken);
  };
  const getProfile = async () => {
    const response = await instance.get(`/auth/profile`);
    if (response?.data) {
      return response.data;
    }
    return false;
  };
  const handleLogin = async () => {
    const { email, password }: any = form;
    if (!email || !password) {
      return Alert.alert("Vui lòng nhập email và password");
    }
    setStatus("pending");
    try {
      //Gọi api login
      await requestLogin(email, password);
      //Gọi profile --> Lưu vào store
      const user = await getProfile();
      if (user) {
        setAuthenticated(true);
        setUser(user);
        setLoading(false);
      }
      router.push(`/profile`);
    } catch {
      return Alert.alert("Email hoặc mật khẩu không chính xác");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Login
      </Text>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          placeholder="Email..."
          autoCapitalize={"none"}
          style={styles.input}
          onChangeText={(value) => handleChangeValue("email", value)}
          value={form.email}
        />
      </View>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          placeholder="Password..."
          autoCapitalize={"none"}
          secureTextEntry
          style={styles.input}
          onChangeText={(value) => handleChangeValue("password", value)}
          value={form.password}
        />
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={handleLogin}
        disabled={status === "pending"}
      >
        <Text style={styles.btnText}>
          {status === "pending" ? "Loading..." : "Login"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  label: {
    marginBottom: 10,
  },
  formGroup: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ddd",
    padding: 10,
  },
  btn: {
    backgroundColor: "green",

    padding: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
