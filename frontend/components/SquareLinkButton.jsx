import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";

const SquareButton = ({ label, icon, href }) => {
  return (
    <Link href={href} asChild>
      <Pressable style={styles.button}>
        <Text>{label}</Text>
        {icon}
      </Pressable>
    </Link>
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
});

export default SquareButton;
