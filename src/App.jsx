import "./App.css";
import InputForm from "./components/Inputform";
import { store } from "./Store/Store";
import { Provider } from "react-redux";

function App() {
  // const [name, setname] = useState("sujit")
  return (
    <Provider store={store}>
      <div>hello jee</div>
      <InputForm />
    </Provider>
  );
}

export default App;
