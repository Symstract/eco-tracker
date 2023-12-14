import { Pressable, StyleSheet, Text } from "react-native";

const SquareButton = ({ label, icon, onPress, onClick }) => {
  return (
    <Pressable style={styles.button} onPress={onPress} onClick={onClick}>
      <Text style={styles.text}>{label}</Text>
      {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: 134,
    height: 134,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#C0CCAA",
  },
  text: {
    color: "#000",
  },
});

export default SquareButton;
