import { useEffect, useContext } from "react";
import { AppContext } from "../context/states";

const InputCalc = () => {
  const { højde, setHøjde, længde, setLængde, setResult } =
    useContext(AppContext);

  // Rerender ui when onChange => inputs
  useEffect(() => {
    handleCalc();
  }, [højde, længde]);

  // SET Calc RESULT IN CONTEXT
  const handleCalc = () => {
    setResult(højde * længde);
  };

  //   Validate input | Only number types
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
    <div className="input-container container">
      <header className="process">
        <div className="circle">
          <span>2</span>
        </div>
        <h2>Hvor meget maling skal du bruge</h2>
      </header>
      <input
        value={højde || ""}
        pattern="^[0-9]*$"
        maxLength="3"
        onChange={onChangeHøjde}
      />
      <input
        value={længde || ""}
        pattern="^[0-9]*$"
        maxLength="3"
        onChange={onChangeLængde}
      />
    </div>
  );
};

export default InputCalc;
