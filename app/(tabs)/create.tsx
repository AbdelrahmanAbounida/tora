import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView className="bg-dark h-full">
      <View>
        <Text className="text-primary font-bold text-xl">Create</Text>
      </View>
    </SafeAreaView>
  );
}
