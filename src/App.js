import { useState, useEffect, useContext } from "react";
import { AppContext } from "./context/states";
import Select from "react-select";
import "./App.css";

import InputCalc from "./components/InputCalc";

function App() {
  const { items, result } = useContext(AppContext);

  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = e => {
    setSelectedValue(e.value);
    // find item === selectedValue
    // item.m2
    // bregning  l * h % 6.5     5-8 m2/liter --
    // link
  };

  let options;
  if (items) {
    options = items.map(item => {
      return {
        value: ` ${item.fields.produktNavn}`,
        label: ` ${item.fields.produktNavn}`,
      };
    });
  }

  return (
    <main className="app">
      <InputCalc />

      <div>
        {selectedValue}

        {items !== null && (
          <Select
            options={options}
            value={options.find(obj => obj.value === selectedValue)}
            onChange={handleChange}
          />
        )}

        <div className="result-container">
          <p>result:</p>
          <h2>{result}㎡</h2>
        </div>
      </div>
    </main>
  );
}

export default App;
