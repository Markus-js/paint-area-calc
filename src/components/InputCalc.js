import React from "react";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/states";

const InputCalc = () => {
  const { højde, setHøjde, længde, setLængde, setResult } =
    useContext(AppContext);

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
    <div className="App">
      <input value={højde || ""} pattern="^[0-9]*$" onChange={onChangeHøjde} />
      <input
        value={længde || ""}
        pattern="^[0-9]*$"
        onChange={onChangeLængde}
      />
    </div>
  );
};

export default InputCalc;
