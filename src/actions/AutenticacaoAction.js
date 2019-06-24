import firebase from "firebase";
import { Actions } from "react-native-router-flux";
import b64 from "base-64";

export const modificaEmail = texto => {
  return {
    type: "modifica_email",
    payload: texto
  };
};
export const modificaSenha = texto => {
  return {
    type: "modifica_senha",
    payload: texto
  };
};
export const modificaTelefone = texto => {
  return {
    type: "modifica_telefone",
    payload: texto
  };
};
export const modificaNome = texto => {
  return {
    type: "modifica_nome",
    payload: texto
  };
};
export const cadastrarUsuario = ({ nome, email, senha }) => {
  return dispatch => {
    dispatch({ type: "login_em_andamento" });

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(user => {
        let emailB64 = b64.encode(email);
        firebase
          .database()
          .ref("/contatos/" + emailB64)
          .push({ nome })
          .then(value => fluxoCadastroSucesso(dispatch));
      })
      .catch(erro => fluxoCadastroErro(dispatch, erro));
  };
};
export const logarUsuario = ({ email, senha }) => {
  return dispatch => {
    dispatch({ type: "login_em_andamento" });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(user => {
        fluxoLoginSucesso(dispatch);
      })
      .catch(erro => fluxoLoginErro(dispatch, erro));
  };
};
const fluxoCadastroSucesso = dispatch => {
  dispatch({
    type: "cadastro_usuario_sucesso"
  });
  Actions.BoasVindas();
};
const fluxoCadastroErro = (dispatch, erro) => {
  dispatch({
    type: "cadastro_usuario_erro",
    payload: erro.message
  });
};
const fluxoLoginSucesso = dispatch => {
  dispatch({
    type: "login_usuario_sucesso"
  });
  Actions.TelaMensagens();
};
const fluxoLoginErro = (dispatch, erro) => {
  dispatch({
    type: "login_usuario_erro",
    payload: erro.message
  });
};
