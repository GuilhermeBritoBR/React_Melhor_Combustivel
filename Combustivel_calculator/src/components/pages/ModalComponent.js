import React, { useState } from "react";
import { Text, View, Modal, TouchableOpacity, Image } from "react-native";
import { Styles } from "../../styles/Stylesheet";

export default function ModalComponent({ txt, etanol, gas, setVisible, vis }) {
  return (
    <Modal transparent={vis} animationType="fade" visible={vis}>
      <View style={Styles.Modal}>
        <Image
          style={Styles.imgLogo}
          source={require("../../assets/images/gas.png")}
        />

        <Text style={Styles.compensa}>Compensa usar {txt}</Text>
        <Text style={Styles.Preços}>Com os preços:</Text>
        <Text style={Styles.Text}>Álcool: {etanol}</Text>
        <Text style={Styles.Text}>Gasolina: {gas}</Text>
        <TouchableOpacity
          style={Styles.TouchableModal}
          onPress={() => setVisible(false)}
        >
          <Text style={Styles.textModal}>Calcular novamente</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
