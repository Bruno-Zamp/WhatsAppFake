import React, { Component } from "react";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableHighlight,
  Image
} from "react-native";
import {
  modificaEmail,
  modificaSenha,
  logarUsuario
} from "../actions/AutenticacaoAction";
const logo = require("../../img/logo.png");

const mapStateToProps = state => ({
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  erroLogin: state.AutenticacaoReducer.erroLogin
});

class formLogin extends Component {
  _logarUsuario() {
    const { email, senha } = this.props;
    this.props.logarUsuario({ email, senha });
  }
  render() {
    return (
      <View style={styles.total}>
        <View style={styles.divTopo}>
          <Image source={logo} style={styles.logowpp} />
          <Text style={styles.titulo}>WhatsApp Clone</Text>
        </View>
        <View style={styles.divMeio}>
          <TextInput
            value={this.props.email}
            style={styles.entradaDeTexto}
            placeholder="E-mail"
            onChangeText={texto => this.props.modificaEmail(texto)}
          />
          <TextInput
            style={[styles.entradaDeTexto, { marginBottom: 10 }]}
            placeholder="Senha"
            value={this.props.senha}
            secureTextEntry
            onChangeText={texto => this.props.modificaSenha(texto)}
          />
          <TouchableHighlight onPress={() => Actions.FormCadastro()}>
            <Text style={styles.msgNaoPossuiuConta}>
              Ainda não tem cadastro? Cadastre-se
            </Text>
          </TouchableHighlight>
          <Text style={styles.msgErroLogin}>{this.props.erroLogin}</Text>
        </View>
        <View style={styles.divBaixo}>
          <Button
            style={styles.botao}
            onPress={() => this._logarUsuario()}
            title="Acessar"
            color="#115E54"
          />
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  { modificaEmail, modificaSenha, logarUsuario }
)(formLogin);

const styles = StyleSheet.create({
  total: {
    flex: 1,
    padding: 10
  },
  divTopo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  divMeio: {
    flex: 2
  },
  divBaixo: {
    flex: 2
  },
  titulo: {
    fontSize: 30
  },
  entradaDeTexto: {
    fontSize: 20,
    height: 45
  },
  msgNaoPossuiuConta: {
    fontSize: 15,
    marginLeft: 20
  },
  msgErroLogin: {
    color: "#ff0040",
    fontSize: 18,
    marginBottom: 5
  },
  logowpp: {
    height: 50,
    width: 50,
    marginRight: 10
  }
});
