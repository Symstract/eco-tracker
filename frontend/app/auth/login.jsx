import { StyleSheet, View } from "react-native";
import { router } from "expo-router";
import Button from "../../components/Button";

export default function Login() {
  const onLogin = () => {
    router.replace("/home");
  };

  return (
    <View style={styles.container}>
      <Button label="Log In" onPress={onLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F7F1",
  },
});
