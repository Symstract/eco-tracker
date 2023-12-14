import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import SquareButton from "../../../components/SquareButton";
import CarIcon from "../../../assets/icons/car.svg";
import RecycleIcon from "../../../assets/icons/recycle.svg";
import LeafIcon from "../../../assets/icons/leaf.svg";
import RecyclingManIcon from "../../../assets/icons/recycling-man.svg";
import BarChartIcon from "../../../assets/icons/bar-chart.svg";
import CogIcon from "../../../assets/icons/cog.svg";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to EcoTracker</Text>
      <Text style={styles.subtitle}>What would you like to do this time?</Text>
      <View style={styles.buttons}>
        <View style={styles.buttonRow}>
          <Link href="/co2-calculator" asChild>
            <SquareButton
              label="Add CO2 driving emissions"
              icon={<CarIcon />}
            />
          </Link>
          <Link href="/recycle" asChild>
            <SquareButton
              label="Find recycling instructions"
              icon={<RecycleIcon />}
            />
          </Link>
        </View>
        <View style={styles.buttonRow}>
          <Link href="/daily-activities" asChild>
            <SquareButton label="Add daily activities" icon={<LeafIcon />} />
          </Link>
          <Link href="/locations" asChild>
            <SquareButton
              label="Find nearest recycling centre"
              icon={<RecyclingManIcon />}
            />
          </Link>
        </View>
        <View style={styles.buttonRow}>
          <Link href="/statistics" asChild>
            <SquareButton label="See your statistics" icon={<BarChartIcon />} />
          </Link>
          <Link href="/settings" asChild>
            <SquareButton label="Settings" icon={<CogIcon />} />
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 15,
  },
  buttons: {
    gap: 40,
    marginTop: 50,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
  },
});
