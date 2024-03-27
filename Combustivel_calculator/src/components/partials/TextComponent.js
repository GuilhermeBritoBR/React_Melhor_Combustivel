import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Stylesheet";

export default function TextComponent() {
  const buttonFunction = () => {
    alert("Você pressionou o botão");
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
      <TouchableOpacity
        style={Styles.Touchable}
        onPress={() => console.log("TouchableOpacity!")}
      >
        <Text>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}
