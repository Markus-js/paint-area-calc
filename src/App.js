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
        <form>
          <label for="length">Længde</label>
          <input
            id="length"
            type="text"
            pattern="[0-9]*"
            onChange={e => setLængde(e.target.value)}
          />
          <label for="height">Højde</label>
          <input
            id="height"
            type="text"
            pattern="!/[0-9]"
            onChange={e => setHøjde(e.target.value)}
          />
        </form>
      </div>
    </container>
  );
}

export default App;
