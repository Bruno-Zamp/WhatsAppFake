import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { connect } from "react-redux";

const logo = require("../../img/logo.png");
export default class BoasVindas extends Component {
  render() {
    return (
      <View style={styles.total}>
        <View style={styles.topo}>
          <Text style={styles.textCadastroComSucesso}>
            Cadastro criado com sucesso!
          </Text>
          <Image source={logo} style={styles.logowpp} />
          <Text style={styles.textBemVindo}>Bem-vindo!</Text>
        </View>
        <Button
          color="#115E54"
          onPress={() => {
            Actions.TelaPrincipal();
          }}
          title="Fazer login"
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
  textBemVindo: {
    marginBottom: 50,
    fontSize: 20,
    color: "#115E54"
  },
  textCadastroComSucesso: {
    fontSize: 30,
    color: "green",
    marginBottom: 50
  }
});
