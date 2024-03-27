import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  TextInput: {
    borderWidth: 3,
    backgroundColor: "white",
    borderColor: "gray",
    padding: 10,
    marginTop: 10,
  },
  imgLogo: {
    height: 250,
    width: 250,
    resizeMode: "cover",
    marginTop: 30,
  },
  titulo: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 35,
  },
  TextAlcool: {
    color: "white",
    marginTop: 20,
  },
  TextGasolina: {
    color: "white",
    marginTop: 20,
  },
  Touchable: {
    fontSize: 20,
    color: "red",
  },
});
