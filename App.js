import { Provider } from "react-redux";
import Navigator from "./src/navigation/Navigator";
import Store from "./src/Store";

export default function App() {
  return (
    <Provider store={Store}>
      <Navigator />
    </Provider>
  );
}
