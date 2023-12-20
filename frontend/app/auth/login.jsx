import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import Button from "../../components/Button";
import LoginScreenGraphic from "../../assets/login-screen";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </View>
      </View>
      <Text style={{ ...styles.link, ...styles.forgotPassword }}>
        Forgot your password?
      </Text>
      <Button label="Log In" onPress={onLogin} />
      <Text style={{ ...styles.link, ...styles.register }}>Register</Text>
      <LoginScreenGraphic />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 140,
    paddingHorizontal: 68,
    backgroundColor: "#F8F7F1",
  },
  title: {
    marginBottom: 35,
    fontSize: 20,
    fontWeight: "700",
  },
  formContainer: {
    alignItems: "flex-start",
    gap: 16,
    width: "100%",
    marginBottom: 16,
  },
  inputContainer: {
    width: "100%",
  },
  label: {
    fontWeight: "500",
    marginBottom: 6,
  },
  input: {
    width: "100%",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#A3B18A",
  },
  link: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
  forgotPassword: {
    marginBottom: 35,
  },
  register: {
    marginTop: 35,
    marginBottom: 48,
  },
});
