import React from "react";
import { Router, Scene, Stack } from "react-native-router-flux";
import FormLogin from "./components/FormLogin";
import FormCadastro from "./components/FormCadastro";
import BoasVindas from "./components/BoasVindas";
import TelaMensagens from "./components/TelaMensagens";

const Routes = () => (
  <Router
    navigationBarStyle={{ backgroundColor: "#115e54" }}
    titleStyle={{ color: "#ffff" }}
  >
    <Stack key="root">
      <Scene
        key="TelaPrincipal"
        component={FormLogin}
        title="Login"
        hideNavBar={true}
      />
      <Scene
        key="FormCadastro"
        component={FormCadastro}
        title="Criar Conta"
        hideNavBar={false}
      />
      <Scene
        key="BoasVindas"
        component={BoasVindas}
        title="Boas Vindas"
        hideNavBar={true}
      />
      <Scene
        key="TelaMensagens"
        component={TelaMensagens}
        title="Tela Mensagens"
        hideNavBar={true}
      />
    </Stack>
  </Router>
);
export default Routes;
