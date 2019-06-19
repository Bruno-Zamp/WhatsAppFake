import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import FormLogin from "./components/FormLogin";
import FormCadastro from "./components/FormCadastro";
import BoasVindas from "./components/BoasVindas";
import TelaMensagens from "./components/TelaMensagens";

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="TelaPrincipal" component={FormLogin} title="Login" />
      <Scene key="FormCadastro" component={FormCadastro} title="Criar Conta" />
      <Scene key="BoasVindas" component={BoasVindas} title="Boas Vindas" />
      <Scene
        key="TelaMensagens"
        component={TelaMensagens}
        title="Tela Mensagens"
      />
    </Stack>
  </Router>
);
export default Routes;
