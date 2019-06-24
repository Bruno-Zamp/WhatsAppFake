const INITIAL_STATE = {
  nome: "",
  email: "",
  senha: "",
  telefone: "",
  erroCadastro: "",
  erroLogin: "",
  loading: false
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "modifica_email":
      return { ...state, email: action.payload };
    case "modifica_senha":
      return { ...state, senha: action.payload };
    case "modifica_telefone":
      return { ...state, telefone: action.payload };
    case "modifica_nome":
      return { ...state, nome: action.payload };
    case "cadastro_usuario_erro":
      return { ...state, loading: false, erroCadastro: action.payload };
    case "cadastro_usuario_sucesso":
      return { ...state, ...INITIAL_STATE };
    case "login_usuario_erro":
      return { ...state, loading: false, erroLogin: action.payload };
    case "login_usuario_sucesso":
      return { ...state, ...INITIAL_STATE };
    case "login_em_andamento":
      return { ...state, loading: true };
    default:
      return state;
  }
};
