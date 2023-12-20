import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, FlatList } from "react-native";

export default function CO2Calculator() {
  const [selectedCar, setSelectedCar] = useState('Select a car');
  const [dateText, onChangeDateText] = useState('');
  const [kilometersText, onChangeKilometersText] = useState('');
  const [emissionsText, setEmissionsText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const carOptions = ["Land Rover Discovery, 2019, diesel", "Mercedes-Benz GLS, 2023, gas ", "Jaguar F-Pace, 2023, Hybrid(gas/electric)", "Audi A6, 2020, Hybrid(gas/electric)"];

  const renderCarOption = ({ item }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        setSelectedCar(item);
        setModalVisible(false);
      }}
    >
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  const calculateEmissions = (kilometers) => {
    // Calculate emissions
    return kilometers * 0.1; 
  };

  const updateEmissionsText = (kilometers) => {
    const emissionsValue = calculateEmissions(parseFloat(kilometers));
    if (!isNaN(emissionsValue)) {
      setEmissionsText(":)");
    } else {
      setEmissionsText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CO2 Calculator</Text>
  
      <View style={styles.inputContainer}>
        <Text style={[styles.label, styles.labelMargin]}>Select your car</Text>
        <TouchableOpacity
          style={[styles.inputCar, styles.labelMargin]}
          onPress={() => setModalVisible(true)}
        >
          <Text>{selectedCar}</Text>
        </TouchableOpacity>
      </View>
  
      <View style={[styles.rowContainer, styles.inputRowContainer]}>
        <View style={styles.column}>
          <Text style={[styles.label, styles.labelMargin]}>Date</Text>
          <TextInput
            style={styles.inputDate}
            onChangeText={(text) => onChangeDateText((text))}
            value={dateText}
            
          />
        </View>
  
        <View style={styles.column}>
          <Text style={[styles.label, styles.labelMargin]}>Kilometers</Text>
          <TextInput
            style={styles.inputKilometers}
            onChangeText={(text) => {
              onChangeKilometersText((text));
              updateEmissionsText(text);
            }}
            value={kilometersText}
            keyboardType="numeric"
          />
        </View>
      </View>
  
      <View style={styles.emissionsContainer}>
      <Text style={[styles.label, styles.labelMargin]}>Carbon dioxide emissions</Text>
    </View>

    <TextInput
      style={[styles.inputEmissions, styles.inputMargin]}
      value={emissionsText}
      editable={false}
    />

<TouchableOpacity style={styles.link} onPress={() => console.log("Weekly emissions")}>
  <Text style={styles.linkText}>View your weekly emissions</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.link} onPress={() => console.log("Yearly emissions")}>
  <Text style={styles.linkText}>View your yearly emissions</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.link} onPress={() => console.log("All time emissions")}>
  <Text style={styles.linkText}>View your all-time emissions</Text>
</TouchableOpacity>

  
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={[styles.modalContainer, styles.modalMargin]}>
          <FlatList
            data={carOptions}
            renderItem={renderCarOption}
            keyExtractor={(item) => item}
          />
        </View>
      </Modal>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 50,
    paddingBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  label: {
    marginVertical: 5,
    marginLeft: 16, 
  },
  labelMargin: {
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputCar: {
    height: 40,
    margin: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    borderRadius: 8,
    backgroundColor: "#7E8A67",
  },
  inputRowContainer: {
    marginTop: -20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    margin:53,
    marginRight:62,
    marginBottom: 402, 
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius:8,
    color: "#fff",
  },
  modalMargin: {
    marginTop: 248, 
  },
  emissionsContainer: {
    marginBottom: 40, 
  },
  option: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    width: 300,
  },
  optionText: {
    color: "#fff",
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
  },
  inputDate: {
    height: 40,
    margin: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    borderRadius: 8,
    backgroundColor: "#7E8A67",
  },
  inputKilometers: {
    height: 40,
    margin: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    borderRadius: 8,
    backgroundColor: "#7E8A67",
  },
  inputEmissions: {
    height: 40,
    margin: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    borderRadius: 8,
    backgroundColor: "#7E8A67",
  },
  inputMargin: {
    marginTop: -20,
  },
  text: {
    color: "#fff",
  },
  link: {
    alignItems: "center",
    marginTop: 10,
  },
  linkText: {
    textDecorationLine: "underline",
    color: "#000", 
  },
});
