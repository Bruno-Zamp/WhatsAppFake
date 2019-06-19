import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { combineReducers } from "redux";
import AutenticacaoReducer from "./src/reducers/AutenticacaoReducer";

export default combineReducers({
  AutenticacaoReducer: AutenticacaoReducer
});
AppRegistry.registerComponent(appName, () => App);
