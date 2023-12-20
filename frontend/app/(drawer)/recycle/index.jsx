import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { useState } from "react";
import RecycleButton from "../../../components/RecycleButton";

export default function Recycle() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInstructions, setModalInstructions] = useState("");

  const toggleModal = (instructions) => {
    setModalInstructions(instructions);
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recycling instructions</Text>
      <View style={styles.buttons}>
        <View style={styles.buttonRow}>
          <RecycleButton
            label="Bio"
            //icon={<CarIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for bio waste..."
          />
          <RecycleButton
            label="Paper"
            //icon={<RecycleIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for paper waste..."
          />
          <RecycleButton
            label="Carton"
            //icon={<RecycleIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for carton waste..."
          />
        </View>
        <View style={styles.buttonRow}>
          <RecycleButton
            label="Glass"
            //icon={<LeafIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for glass waste..."
          />
          <RecycleButton
            label="Metal"
            //icon={<RecyclingManIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for metal waste..."
          />
          <RecycleButton
            label="Plastic"
            //icon={<RecyclingManIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for plastic waste..."
          />
        </View>
        <View style={styles.buttonRow}>
          <RecycleButton
            label="Mixed"
            //icon={<BarChartIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for mixed waste..."
          />
          <RecycleButton
            label="Hazardous"
            //icon={<CogIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for hazardous waste..."
          />
          <RecycleButton
            label="Batteries"
            //icon={<RecyclingManIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for batteries..."
          />
        </View>
        <View style={styles.buttonRow}>
          <RecycleButton
            label="Electrical"
            //icon={<BarChartIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for electrical waste..."
          />
          <RecycleButton
            label="Bottles"
            //icon={<CogIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for bottles and cans..."
          />
          <RecycleButton
            label="Other"
            //icon={<RecyclingManIcon />}
            onPress={toggleModal}
            instructions="Recycling instructions for other waste..."
          />
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >

          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <Text>{modalInstructions}</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Text>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
  buttons: {
    gap: 50,
    marginTop: 70,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
});
