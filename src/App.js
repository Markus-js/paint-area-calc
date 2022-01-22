import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [højde, setHøjde] = useState(null);
  const [længde, setLængde] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    handleCalc();
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
    <container className="app">
      <div>
        {højde}
        {længde}

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
