import { useEffect, useContext } from "react";
import { AppContext } from "../context/states";

const InputCalc = () => {
  const {
    højde,
    setHøjde,
    længde,
    setLængde,
    setResult,
    antalLag,
    setAntalLag,
  } = useContext(AppContext);

  // Rerender ui when onChange => inputs
  useEffect(() => {
    handleCalc();
  }, [højde, længde, antalLag]);

  // SET Calc RESULT IN CONTEXT
  const handleCalc = () => {
    setResult(længde);
    // setResult(højde * længde);
  };

  //  **  Validate input | Only number types **

  // function onChangeHøjde(e) {
  //   if (!e.target.validity.patternMismatch) {
  //     setHøjde(e.target.value);
  //   }
  // }
  function onChangeLængde(e) {
    if (!e.target.validity.patternMismatch) {
      setLængde(e.target.value);
    }
  }
  function onChangeLag(e) {
    if (!e.target.validity.patternMismatch) {
      setAntalLag(e.target.value);
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
      <div className="flex-container">
        <div className="input-box">
          <div className="input-wrapper">
            <label htmlFor="længde">Total areal</label>
            <input
              id="længde"
              value={længde || ""}
              pattern="^[0-9]*$"
              maxLength="3"
              onChange={onChangeLængde}
            />
          </div>
          <span>㎡</span>
        </div>
        {/* <div className="input-box">
          <div className="input-wrapper">
            <label htmlFor="højde">Højde</label>
            <input
              id="højde"
              value={højde || ""}
              pattern="^[0-9]*$"
              maxLength="3"
              onChange={onChangeHøjde}
            />
          </div>
          <span>m</span>
        </div> */}
        <div className="input-box">
          <div className="input-wrapper">
            <label htmlFor="højde">Antal lag</label>
            <input
              id="højde"
              value={antalLag || ""}
              pattern="^[0-9]*$"
              maxLength="3"
              onChange={onChangeLag}
            />
          </div>
        </div>
      </div>
      {/* <p>Skriv højden og længden på den overflade du ønsker at renovere.</p> */}
    </div>
  );
};

export default InputCalc;
