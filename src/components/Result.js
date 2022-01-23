import { useContext } from "react";
import { AppContext } from "../context/states";

const Result = () => {
  const { result, selectedProduct, calculatedArea } = useContext(AppContext);

  return (
    <div className="result-container">
      {selectedProduct && <p>{selectedProduct.fields.lag}</p>}
      area:
      {calculatedArea && calculatedArea}
      <p>result:</p>
      <h2>{result}㎡</h2>
    </div>
  );
};

export default Result;
