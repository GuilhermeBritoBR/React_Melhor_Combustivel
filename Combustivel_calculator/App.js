import { View } from "react-native";
import { Styles } from "./src/styles/Stylesheet";
import Home from "./src/components/pages/Home";

export default function App() {
  return (
    <View style={Styles.container}>
      <Home />
    </View>
  );
}
