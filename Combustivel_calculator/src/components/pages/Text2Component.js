import React, { useState } from "react";
import { Text, View, Button, Modal } from "react-native";
import { Styles } from "../../styles/Stylesheet";

export default function Text2Component() {
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
        <View style={Styles.Modal}>
          <Text style={Styles.Text}>Kamile</Text>
          <Button title="Fechar" onPress={() => visModal(false)} />
        </View>
      </View>
    </Modal>
  );
}
