import { StyleSheet, Text, View } from "react-native";
import SquareLinkButton from "../../../components/SquareLinkButton";
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
          <SquareLinkButton
            href="/co2-calculator"
            label="Add CO2 driving emissions"
            icon={<CarIcon />}
          />
          <SquareLinkButton
            href="/recycle"
            label="Find recycling instructions"
            icon={<RecycleIcon />}
          />
        </View>
        <View style={styles.buttonRow}>
          <SquareLinkButton
            href="/daily-activities"
            label="Add daily activities"
            icon={<LeafIcon />}
          />
          <SquareLinkButton
            href="/locations"
            label="Find nearest recycling centre"
            icon={<RecyclingManIcon />}
          />
        </View>
        <View style={styles.buttonRow}>
          <SquareLinkButton
            href="/statistics"
            label="See your statistics"
            icon={<BarChartIcon />}
          />
          <SquareLinkButton
            href="/settings"
            label="Settings"
            icon={<CogIcon />}
          />
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
