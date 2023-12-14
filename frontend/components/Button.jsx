import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({ label, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: 160,
    borderRadius: 999,
    padding: 16,
    backgroundColor: "#7E8A67",
  },
  text: {
    color: "#fff",
  },
});

export default Button;
