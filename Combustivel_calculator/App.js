import { Text, View } from "react-native";
import { Styles } from "./src/styles/Stylesheet";
import TextComponent from "./src/components/partials/TextComponent";

export default function App() {
  return (
    <View style={Styles.container}>
      <TextComponent />
    </View>
  );
}
