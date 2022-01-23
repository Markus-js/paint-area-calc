import { useContext } from "react";
import { AppContext } from "../context/states";

const Result = () => {
  const { result, selectedProduct, setCalculatedArea } = useContext(AppContext);

  // Calc ( l * h / sum of dækkeevne * lag )
  if (selectedProduct) {
    setCalculatedArea(
      (
        (result / selectedProduct.fields.dkkeevne) *
        selectedProduct.fields.lag
      ).toFixed(2)
      // ((25 / 6.5) * 2).toFixed(2)go
    );
  }
  return (
    <div className="result-container">
      <p>result:</p>
      <h2>{result}㎡</h2>
    </div>
  );
};

export default Result;
