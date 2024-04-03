import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity, Image } from "react-native";
import { Styles } from "../../styles/Stylesheet";

export default function Text2Component({ txt, etanol, gas }) {
  const [visible, setVisible] = useState(false);

  visModal = (vis) => {
    if (!visible) {
      setVisible(vis);
    } else {
      setVisible(vis);
    }
  };

  return (
    <Modal transparent={visible} animationType="fade" visible={visible}>
      <View style={Styles.Text2}>
        <Image
          style={Styles.imgLogo}
          source={require("../../assets/images/gas.png")}
        ></Image>

        <Text style={Styles.compensa}>Compensa usar {txt}</Text>
        <Text style={Styles.Preços}>Com os preços:</Text>
        <Text style={Styles.Text}>Álcool: {etanol}</Text>
        <Text style={Styles.Text}>Gasolina: {gas}</Text>
        <TouchableOpacity
          style={Styles.TouchableModal}
          onPress={() => visModal(false)}
        >
          <Text style={Styles.textModal}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
