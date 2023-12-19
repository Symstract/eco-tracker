import { Pressable, StyleSheet, Text } from "react-native";

const RecycleButton = ({ label, icon, onPress, instructions }) => {
  return (
    <Pressable onPress={() => onPress(instructions)} style={styles.button}>
        <Text>{label}</Text>
        {icon}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: 100,
    height: 100,
    borderRadius: 8,
    padding: 12,
    backgroundColor: "#C0CCAA",
  },
});

export default RecycleButton;
