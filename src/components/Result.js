import { useContext } from "react";
import { AppContext } from "../context/states";

const Result = () => {
  const { result, selectedProduct, calculatedArea } = useContext(AppContext);

  return (
    <div className="result-container container">
      <header className="process">
        <div className="circle">
          <span>3</span>
        </div>
        <h2>Resultat</h2>
      </header>
      {selectedProduct && <p>{selectedProduct.fields.lag}</p>}
      area:
      {calculatedArea && calculatedArea}
      <p>result:</p>
      <h2>{result}㎡</h2>
    </div>
  );
};

export default Result;
