import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Stylesheet";
import Text2Component from "../pages/Text2Component";

export default function Home() {
  const buttonFunction = () => {
    alert("Você pressionou o botão");
  };
  pressButton = () => {
    alert("Você pressionou o botão");
  };

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <View style={Styles.container}>
      <Image
        style={Styles.imgLogo}
        source={require("../../assets/images/logo.png")}
      />

      <Text style={Styles.titulo}>Qual a melhor opção??</Text>
      <Text style={Styles.TextAlcool}> Álcool (preço por litro):</Text>
      <TextInput style={Styles.TextInput} placeholder="4.60" />

      <Text style={Styles.TextGasolina}>Gasolina (preço por litro):</Text>
      <TextInput style={Styles.TextInput} placeholder="7.30" />
      <TouchableOpacity style={Styles.Touchable} onPress={() => visModal(true)}>
        <Text style={Styles.textButton}>Calcular</Text>
      </TouchableOpacity>

      <Text2Component />
    </View>
  );
}
