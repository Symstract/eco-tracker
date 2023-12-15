import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../../../components/Button";
import NewActivityModal from "../../../components/NewActivityModal";

const initialActivities = [
  {
    day: "Today",
    activities: ["Car drive, Audi A4, 25 km"],
  },
  {
    day: "Thursday, 14. December",
    activities: [
      "Car drive, Audi A4, 11 km",
      "Car drive, Audi A4, 35 km",
      "Car drive, Audi A4, 3 km",
    ],
  },
  {
    day: "Monday, 11. December",
    activities: ["Car drive, Audi A4, 12 km", "Car drive, Audi A4, 33 km"],
  },
  {
    day: "Sunday, 10. December",
    activities: ["Car drive, Audi A4, 16 km", "Car drive, Audi A4, 5 km"],
  },
];

export default function DailyActivities() {
  const [modalVisible, setModalVisible] = useState(false);
  const [activities, setActivities] = useState(initialActivities);

  const addActivity = (activity) => {
    const activitiesCopy = [...activities];
    activitiesCopy[0].activities.push(activity);
    setActivities(activitiesCopy);
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <NewActivityModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        onAddActivity={addActivity}
      ></NewActivityModal>

      <ScrollView contentContainerStyle={styles.container}>
        <Button
          label="New activity"
          onPress={() => setModalVisible(!modalVisible)}
        />
        <View style={styles.listContainer}>
          {activities.map(({ day, activities }) => (
            <View style={styles.section} key={day}>
              <Text style={styles.sectionTitle}>{day}</Text>
              <View style={styles.sectionContent}>
                {activities.map((activity) => (
                  <View key={activity} style={styles.listItem}>
                    <Text style={styles.listItemText}>{activity}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listContainer: {
    width: "100%",
    alignItems: "flex-start",
  },
  section: {
    width: "100%",
  },
  sectionTitle: {
    marginBottom: 18,
    fontSize: 16,
    fontWeight: "700",
    color: "#515A40",
  },
  sectionContent: {
    gap: 10,
    width: "100%",
    marginBottom: 30,
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
});
