import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Styles } from "../../styles/Stylesheet";
import React, { useState } from "react";
import ModalComponent from "./ModalComponent";

export default function Home() {
  const [gasolina, setGasolina] = useState("");
  const [alcool, setAlcool] = useState("");
  const [visible, setVisible] = useState(false);
  const dividir = parseFloat(alcool) / parseFloat(gasolina);
  const mensagem = dividir < 0.7 ? "Àlcool" : "Gasolina";

  console.log(typeof setAlcool);

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
      <TouchableOpacity
        style={Styles.Touchable}
        onPress={() => setVisible(true)}
      >
        <Text style={Styles.textButton}>Calcular</Text>
      </TouchableOpacity>

      <ModalComponent
        txt={mensagem}
        etanol={alcool}
        gas={gasolina}
        setVisible={setVisible}
        vis={visible}
      />
    </View>
  );
}
