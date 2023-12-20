import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import { useState } from "react";
import RecycleButton from "../../../components/RecycleButton";
import BioIcon from "../../../assets/icons/food-apple.svg";
import PaperIcon from "../../../assets/icons/document.svg";
import CartonIcon from "../../../assets/icons/milk-carton.svg";
import GlassIcon from "../../../assets/icons/water-glass.svg";
import MetalIcon from "../../../assets/icons/tin.svg";
import PlasticIcon from "../../../assets/icons/detergent.svg";
import MixedIcon from "../../../assets/icons/trash.svg";
import HazardousIcon from "../../../assets/icons/dangersvg.svg";
import BatteriesIcon from "../../../assets/icons/battery-charging.svg";
import ElectricalIcon from "../../../assets/icons/electric-plug.svg";
import BottlesIcon from "../../../assets/icons/wine-bottle.svg";
import OtherIcon from "../../../assets/icons/recycle.svg";


export default function Recycle() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    recyclable: [],
    nonRecyclable: [],
  });

  const toggleModal = (content) => {
    setModalContent(content);
    setModalVisible(!modalVisible);
  };

  const contentForBio = {
    title: "Recycling instructions for bio waste",
    recyclable: ["Lorem"],
    nonRecyclable: ["ipsum"],
  };
  const contentForPaper = {
    title: "Recycling instructions for paper waste",
    recyclable: ["Clean paper", "Paper bags"],
    nonRecyclable: ["Used tissues", "Paper cups with plastic lining"],
  };
  const contentForCarton = {
    title: "Recycling instructions for carton waste",
    recyclable: ["Lorem"],
    nonRecyclable: ["ipsum"],
  };
  const contentForGlass = {
    title: "Recycling instructions for glass waste",
    recyclable: ["Glass bottles", "Glass jars"],
    nonRecyclable: ["Broken glass", "Ceramics"],
  };
  const contentForMetal = {
    title: "Recycling instructions for metal waste",
    recyclable: ["Lorem"],
    nonRecyclable: ["ipsum"],
  };
  const contentForPlastic = {
    title: "Recycling instructions for plastic waste",
    recyclable: ["Lorem"],
    nonRecyclable: ["ipsum"],
  };
  const contentForMixed = {
    title: "Recycling instructions for mixed waste",
    recyclable: ["Lorem"],
    nonRecyclable: ["ipsum"],
  };
  const contentForHazardous = {
    title: "Recycling instructions for hazardous waste",
    recyclable: ["Lorem"],
    nonRecyclable: ["ipsum"],
  };
  const contentForBatteries = {
    title: "Recycling instructions for battery waste",
    recyclable: ["Lorem"],
    nonRecyclable: ["ipsum"],
  };
  const contentForElectrical = {
    title: "Recycling instructions for electrical waste",
    recyclable: ["Lorem"],
    nonRecyclable: ["ipsum"],
  };
  const contentForBottles = {
    title: "Recycling instructions for bottles",
    recyclable: ["Lorem"],
    nonRecyclable: ["ipsum"],
  };
  const contentForOther = {
    title: "Recycling instructions for other waste",
    recyclable: ["Lorem"],
    nonRecyclable: ["ipsum"],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recycling instructions</Text>
      <View style={styles.buttons}>
        <View style={styles.buttonRow}>
          <RecycleButton
            label="Bio"
            icon={<BioIcon />}
            onPress={() => toggleModal(contentForBio)}
          />
          <RecycleButton
            label="Paper"
            icon={<PaperIcon />}
            onPress={() => toggleModal(contentForPaper)}
          />
          <RecycleButton
            label="Carton"
            icon={<CartonIcon />}
            onPress={() => toggleModal(contentForCarton)}
          />
        </View>
        <View style={styles.buttonRow}>
          <RecycleButton
            label="Glass"
            icon={<GlassIcon />}
            onPress={() => toggleModal(contentForGlass)}
          />
          <RecycleButton
            label="Metal"
            icon={<MetalIcon />}
            onPress={() => toggleModal(contentForMetal)}
          />
          <RecycleButton
            label="Plastic"
            icon={<PlasticIcon />}
            onPress={() => toggleModal(contentForPlastic)}
          />
        </View>
        <View style={styles.buttonRow}>
          <RecycleButton
            label="Mixed"
            icon={<MixedIcon />}
            onPress={() => toggleModal(contentForMixed)}
          />
          <RecycleButton
            label="Hazardous"
            icon={<HazardousIcon />}
            onPress={() => toggleModal(contentForHazardous)}
          />
          <RecycleButton
            label="Batteries"
            icon={<BatteriesIcon />}
            onPress={() => toggleModal(contentForBatteries)}
          />
        </View>
        <View style={styles.buttonRow}>
          <RecycleButton
            label="Electrical"
            icon={<ElectricalIcon />}
            onPress={() => toggleModal(contentForElectrical)}
          />
          <RecycleButton
            label="Bottles"
            icon={<BottlesIcon />}
            onPress={() => toggleModal(contentForBottles)}
          />
          <RecycleButton
            label="Other"
            icon={<OtherIcon />}
            onPress={() => toggleModal(contentForOther)}
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
            <Text>{modalContent.title}</Text>
              <View style={styles.row}>
                <View style={styles.column}>
                  <View style={[styles.box, { backgroundColor: "#7FFF00" }]}>
                    <Text style={styles.header}>YES</Text>
                    {modalContent.recyclable.map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </View>
                </View>
                <View style={styles.column}>
                  <View style={[styles.box, { backgroundColor: "#FF4500" }]}>
                    <Text style={styles.header}>NO</Text>
                    {modalContent.nonRecyclable.map((item) => (
                      <Text key={item}>{item}</Text>
                    ))}
                  </View>
                </View>
              </View>
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
  row: {
    flexDirection: "row",
    marginTop: 20,
  },
  column: {
    flex: 1,
    marginLeft: 20,
  },
  box: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
