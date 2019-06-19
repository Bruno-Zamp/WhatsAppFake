import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { connect } from "react-redux";

const logo = require("../../img/logo.png");
export default class TelaMensagens extends Component {
  render() {
    return (
      <View style={styles.total}>
        <View style={styles.topo}>
          <Image source={logo} style={styles.logowpp} />
          <Text style={styles.textoRealizouLogin}>Você realizou o login!</Text>
        </View>
        <Button
          color="#115E54"
          onPress={() => {
            Actions.TelaPrincipal();
          }}
          title="Sair"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  total: {
    flex: 1,
    padding: 13,
    justifyContent: "center"
  },
  topo: {
    alignItems: "center"
  },
  logowpp: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  textoRealizouLogin: {
    marginBottom: 50,
    fontSize: 20,
    color: "#115E54",
    marginTop: 5
  },
  textCadastroComSucesso: {
    fontSize: 30,
    color: "green",
    marginBottom: 50
  }
});
