import "./App.css";

import InputCalc from "./components/InputCalc";
import Result from "./components/Result";
import SelectProduct from "./components/SelectProduct";

function App() {
  return (
    <main className="app">
      <SelectProduct />
      <InputCalc />
      <Result />
    </main>
  );
}

export default App;
