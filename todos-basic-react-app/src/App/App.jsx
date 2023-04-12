import Hint from "../components/Hint/Hint";
import Portal from "../components/Portal/Portal";
import ToDo from "../components/ToDo/ToDo";
import { legacy_createStore as createStore } from "redux";
import reducer from "../reducer/reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <ToDo />
      <Portal>
        <Hint />
      </Portal>
    </Provider>
  );
}

export default App;
