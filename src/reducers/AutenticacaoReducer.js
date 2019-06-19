const INITIAL_STATE = {
  nome: "",
  email: "",
  senha: "",
  telefone: "",
  erroCadastro: "",
  erroLogin: ""
};
export default (state = INITIAL_STATE, action) => {
  if (action.type == "modifica_email") {
    return { ...state, email: action.payload };
  }
  if (action.type == "modifica_senha") {
    return { ...state, senha: action.payload };
  }
  if (action.type == "modifica_telefone") {
    return { ...state, telefone: action.payload };
  }
  if (action.type == "modifica_nome") {
    return { ...state, nome: action.payload };
  }
  if (action.type == "cadastro_usuario_erro") {
    return { ...state, erroCadastro: action.payload };
  }
  if (action.type == "cadastro_usuario_sucesso") {
    return { ...state, ...INITIAL_STATE };
  }
  if (action.type == "login_usuario_erro") {
    return { ...state, erroLogin: action.payload };
  }
  if (action.type == "login_usuario_sucesso") {
    return { ...state, ...INITIAL_STATE };
  }
  return state;
};
