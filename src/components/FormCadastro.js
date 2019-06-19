import React, { Component } from "react";
import { Text, View, TextInput, Button, StyleSheet, Image } from "react-native";
import { connect } from "react-redux";
import {
  modificaEmail,
  modificaTelefone,
  modificaSenha,
  modificaNome,
  cadastrarUsuario
} from "../actions/AutenticacaoAction";

const logo = require("../../img/logo.png");
const mapStateToProps = state => ({
  nome: state.AutenticacaoReducer.nome,
  email: state.AutenticacaoReducer.email,
  senha: state.AutenticacaoReducer.senha,
  telefone: state.AutenticacaoReducer.telefone,
  erroCadastro: state.AutenticacaoReducer.erroCadastro
});

class formCadastro extends Component {
  _cadastraUsuario() {
    const { nome, email, senha } = this.props;
    this.props.cadastrarUsuario({ nome, email, senha });
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
            style={styles.entradaDeTexto}
            autoCompleteType="name"
            placeholder="Nome"
            value={this.props.nome}
            onChangeText={text => this.props.modificaNome(text)}
          />
          <TextInput
            style={styles.entradaDeTexto}
            autoCompleteType="email"
            placeholder="E-mail"
            value={this.props.email}
            onChangeText={text => this.props.modificaEmail(text)}
          />
          <TextInput
            style={styles.entradaDeTexto}
            autoCompleteType="cc-number"
            placeholder="Telefone"
            value={this.props.telefone}
            onChangeText={text => this.props.modificaTelefone(text)}
          />
          <TextInput
            style={styles.entradaDeTexto}
            autoCompleteType="password"
            placeholder="Senha"
            value={this.props.senha}
            secureTextEntry
            onChangeText={text => this.props.modificaSenha(text)}
          />
          <Text style={styles.textoErroCadastro}>
            {this.props.erroCadastro}
          </Text>
        </View>
        <View style={styles.divBaixo}>
          <Button
            style={styles.botao}
            onPress={() => this._cadastraUsuario()}
            title="Cadastrar"
            color="#115E54"
          />
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  {
    modificaEmail,
    modificaTelefone,
    modificaSenha,
    modificaNome,
    cadastrarUsuario
  }
)(formCadastro);

const styles = StyleSheet.create({
  total: {
    flex: 1,
    padding: 13
  },
  divTopo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  divMeio: {
    flex: 3
  },
  divBaixo: {
    flex: 2,
    paddingTop: 50
  },
  titulo: {
    fontSize: 30
  },
  entradaDeTexto: {
    fontSize: 20,
    height: 45
  },
  logowpp: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  textoErroCadastro: {
    color: "#ff0040",
    fontSize: 18,
    marginBottom: 5
  }
});
