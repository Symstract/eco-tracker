import { useRef, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Button from "../../../components/Button";

const locations = [
  {
    name: "Turun Ekotori",
    adress: "Rautakatu 12, Itäharju, 20520 Turku",
    coordinates: {
      latitude: 60.4487568995259,
      longitude: 22.303892226102707,
      latitudeDelta: 0.05,
      longitudeDelta: 0.2,
    },
  },
  {
    name: "Turun Puutorin kirppis",
    adress: "Brahenkatu 14, 20100 Turku",
    coordinates: {
      latitude: 60.45457809411673,
      longitude: 22.267207477201666,
      latitudeDelta: 0.05,
      longitudeDelta: 0.2,
    },
  },
  {
    name: "UFF Turku",
    adress: "Humalistonkatu 5, 20100 Turku",
    coordinates: {
      latitude: 60.45069958982126,
      longitude: 22.25974092745369,
      latitudeDelta: 0.05,
      longitudeDelta: 0.2,
    },
  },
];

export default function Locations() {
  const mapRef = useRef(null);

  const onLocationPress = (location) => {
    mapRef.current.animateToRegion(location.coordinates);
  };

  return (
    <ScrollView>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Locations and recycling points</Text>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Locations</Text>
          <View style={styles.listItems}>
            {locations.map((location) => (
              <Pressable
                key={location.name}
                style={styles.listItem}
                onPress={() => onLocationPress(location)}
              >
                <Text style={styles.listItemText}>{location.name}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <View style={styles.buttons}>
          <Button label="Add Recycling Point" />
          <Button label="Maps" />
        </View>
      </View>

      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={locations[0].coordinates}
      >
        {locations.map(({ name, coordinates, adress }) => (
          <Marker
            key={name}
            coordinate={coordinates}
            title={name}
            description={adress}
          />
        ))}
      </MapView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    alignItems: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "700",
  },
  listContainer: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  listTitle: {
    marginBottom: 18,
    fontSize: 16,
    fontWeight: "700",
    color: "#515A40",
  },
  listItems: {
    width: "100%",
    gap: 10,
  },
  listItem: {
    width: "100%",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#F8F7F1",
  },
  listItemText: {
    fontSize: 12,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
  map: {
    width: "100%",
    height: 350,
    marginTop: 30,
  },
});
