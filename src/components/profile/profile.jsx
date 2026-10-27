import { Text, TouchableOpacity, View } from "react-native";

export function Profile() {
  return (
    <View>
      <Text>Edit components/profile/profile.jsx to edit this sentence.</Text>
      {/* <TouchableOpacity onPress={() => navigation.navigate("index")}> */}
      <TouchableOpacity>
        <Text>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
}
