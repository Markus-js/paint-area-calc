import { useState, useEffect, useContext } from "react";
import { AppContext } from "./context/states";
import Select from "react-select";
import "./App.css";

function App() {
  const { items, setItems } = useContext(AppContext);
  const [højde, setHøjde] = useState(null);
  const [længde, setLængde] = useState(null);
  const [result, setResult] = useState(null);

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
  // const options = [
  //   test[0],

  //   // { value: "chocolate", label: "Chocolate" },
  //   // { value: "strawberry", label: "Strawberry" },
  // ];

  useEffect(() => {
    handleCalc();
    console.log(items);
  }, [højde, længde]);

  const handleCalc = () => {
    setResult(højde * længde);
  };

  function onChangeHøjde(e) {
    if (!e.target.validity.patternMismatch) {
      setHøjde(e.target.value);
    }
  }
  function onChangeLængde(e) {
    if (!e.target.validity.patternMismatch) {
      setLængde(e.target.value);
    }
  }

  return (
    <main className="app">
      <div>
        {selectedValue}
        {højde}
        {længde}
        {items !== null && (
          <Select
            options={options}
            value={options.find(obj => obj.value === selectedValue)}
            onChange={handleChange}
          />
        )}
        {/* <select value={selected} onChange={setSelected}>
      
          {items &&
            items.map(item => {
              return (
                <option key={item.sys.id} value={item.fields.produktNavn}>
                  {item.fields.produktNavn}
                </option>
              );
            })}
        </select> */}
        <div className="result-container">
          <p>result:</p>
          <h2>{result}㎡</h2>
        </div>
      </div>
      <div className="App">
        <input
          value={højde || ""}
          pattern="^[0-9]*$"
          onChange={onChangeHøjde}
        />
        <input
          value={længde || ""}
          pattern="^[0-9]*$"
          onChange={onChangeLængde}
        />
      </div>
    </main>
  );
}

export default App;
