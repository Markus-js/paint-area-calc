import { useState, useEffect } from "react";
import Select from "react-select";
import "./App.css";

function App() {
  const [højde, setHøjde] = useState(null);
  const [længde, setLængde] = useState(null);
  const [result, setResult] = useState(null);
  const [items, setItems] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const SPACEID = process.env.REACT_APP_SPACEID;
  const ACCESSTOKEN = process.env.REACT_APP_ACCESSTOKEN;

  const handleChange = e => {
    setSelectedValue(e.value);
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

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `https://cdn.contentful.com/spaces/${SPACEID}/environments/master/entries?access_token=${ACCESSTOKEN}`
      );
      const resJson = await response.json();
      setItems(resJson.items);
    };
    fetchApi();
  }, []);

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
    <container className="app">
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
    </container>
  );
}

export default App;
