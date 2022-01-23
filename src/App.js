import { useState, useEffect, useContext } from "react";
import { AppContext } from "./context/states";
import Select from "react-select";
import "./App.css";

import InputCalc from "./components/InputCalc";
import Result from "./components/Result";

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
      <Result />

      <div>
        {selectedValue}

        {items !== null && (
          <Select
            options={options}
            value={options.find(obj => obj.value === selectedValue)}
            onChange={handleChange}
          />
        )}
      </div>
    </main>
  );
}

export default App;
