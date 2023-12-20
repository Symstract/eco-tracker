import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  return (
    <View style={styles.container}>

      <View style={styles.ok}><Text style={styles.sectionTitle}>Personal Information</Text></View>
    <View style={styles.listItem}>
      <TouchableOpacity>
        <Text style={styles.listItemText}>Change Password</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.listItem}>
      <TouchableOpacity>
        <Text style={styles.listItemText}>Language and location</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.listItem}>
      <TouchableOpacity>
        <Text style={styles.listItemText}>Delete account</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.ok}><Text style={styles.sectionTitle}>Application settings</Text></View>
    <View style={styles.listItem}>
      <TouchableOpacity>
        <Text style={styles.listItemText}>Announcements</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.listItem}>
      <TouchableOpacity>
        <Text style={styles.listItemText}>Own updates</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.listItem}>
      <TouchableOpacity>
        <Text style={styles.listItemText}>Updates</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.ok}><Text style={styles.sectionTitle}>Practices</Text></View>
    <View style={styles.listItem}>
      <TouchableOpacity>
        <Text style={styles.listItemText}>Terms of use</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.listItem}>
      <TouchableOpacity>
        <Text style={styles.listItemText}>Privacy policy</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.listItem}>
      <TouchableOpacity>
        <Text style={styles.listItemText}>Information</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -105,
  },
  listItem: {
    width: "90%",
    padding: 16,
    marginTop: 10,
    borderRadius: 8,
    backgroundColor: "#F8F7F1",
  },
  sectionTitle: {
    marginBottom: 18,
    fontSize: 16,
    fontWeight: "700",
    color: "#515A40",
  },
  listItemText: {
    fontSize: 12,
  },
  ok: {
    width: "100%",
    marginLeft: 38,
    marginTop: 35,
  }
});
