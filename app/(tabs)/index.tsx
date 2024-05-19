import { StyleSheet } from "react-native";
import { Text, View } from "react-native";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text className="text-blue-500 font-bold text-xl">Tab Index3</Text>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
