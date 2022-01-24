import { useContext, useEffect } from "react";
import { AppContext } from "../context/states";

const Result = () => {
  const { result, selectedProduct, calculatedArea } = useContext(AppContext);

  useEffect(() => {
    console.log(result);
  }, [selectedProduct]);

  return (
    <div className="result-container container">
      <header className="process">
        <div className="circle">
          <span>3</span>
        </div>
        <h2>Resultat</h2>
      </header>
      {selectedProduct && result !== 0 && (
        <>
          <p>Dine mål:</p>
          {result && <h2>Total area: {result} ㎡</h2>}
          <p>Mængde information:</p>
          <h2>
            Baseret på {selectedProduct.fields.lag} lag: {calculatedArea} liter
          </h2>
        </>
      )}
    </div>
  );
};

export default Result;
