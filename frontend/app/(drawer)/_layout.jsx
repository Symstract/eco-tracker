import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveBackgroundColor: "#C0CCAA",
        drawerActiveTintColor: "#000",
        sceneContainerStyle: {
          backgroundColor: "#EAE7DC",
        },
        headerStyle: {
          backgroundColor: "#EAE7DC",
        },
      }}
    >
      <Drawer.Screen
        name="home/index"
        options={{
          drawerLabel: "Home",
          title: "EcoTracker",
        }}
      />
      <Drawer.Screen
        name="co2-calculator/index"
        options={{
          drawerLabel: "CO2 Calculator",
          title: "CO2 Calculator",
        }}
      />
      <Drawer.Screen
        name="recycle/index"
        options={{
          drawerLabel: "Recycling Instructions",
          title: "Recycling Instructions",
        }}
      />
      <Drawer.Screen
        name="daily-activities/index"
        options={{
          drawerLabel: "Daily Activities",
          title: "Daily Activities",
        }}
      />
      <Drawer.Screen
        name="locations/index"
        options={{
          drawerLabel: "Locations",
          title: "Locations",
        }}
      />
      <Drawer.Screen
        name="statistics/index"
        options={{
          drawerLabel: "Statistics",
          title: "Statistics",
        }}
      />
      <Drawer.Screen
        name="settings/index"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
        }}
      />
    </Drawer>
  );
}
