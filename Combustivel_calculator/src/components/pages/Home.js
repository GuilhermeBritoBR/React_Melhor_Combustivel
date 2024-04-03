import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Stylesheet";
import Text2Component from "../pages/Text2Component";
import React, { useState } from "react";

export default function Home() {
  // const [recomendado] = useState("");
  const [gasolina, setGasolina] = useState("");
  const [alcool, setAlcool] = useState("");
  const dividir = parseFloat(alcool) / parseFloat(gasolina);
  const mensagem = dividir < 0.7 ? "Àlcool" : "Gasolina";

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
      <TextInput
        onChangeText={(text) => setAlcool(text)}
        style={Styles.TextInput}
        placeholder="Digite aqui"
      />

      <Text style={Styles.TextGasolina}>Gasolina (preço por litro):</Text>
      <TextInput
        onChangeText={(text) => setGasolina(text)}
        style={Styles.TextInput}
        placeholder="Digite aqui"
      />
      <TouchableOpacity style={Styles.Touchable} onPress={() => visModal(true)}>
        <Text style={Styles.textButton}>Calcular</Text>
      </TouchableOpacity>

      <Text2Component txt={mensagem} etanol={alcool} gas={gasolina} />
    </View>
  );
}
