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
      {selectedProduct && result !== 0 && (
        <>
          <p>Dine mål:</p>
          {result && <h2>Total areal: {result} ㎡</h2>}
          <p>Mængde information:</p>
          <h2>
            Baseret på {selectedProduct.fields.lag} lag: {calculatedArea} liter
          </h2>
          {selectedProduct.fields.produktNavnGrunder &&
          selectedProduct.fields.lagGrunder ? (
            // Med Anbefalder Grunder
            <p>
              For det bedste resultat anbefaler vi at bruge{" "}
              <b>{selectedProduct.fields.lagGrunder} lag</b> af{" "}
              <b>{selectedProduct.fields.produktNavnGrunder}</b> før{" "}
              <b>{selectedProduct.fields.lag} lag</b> af{" "}
              <b>{selectedProduct.fields.produktNavn}</b>
            </p>
          ) : (
            // Uden Grunder
            <p>
              For det bedste resultat anbefaler vi at bruge{" "}
              <b>{selectedProduct.fields.lag} lag</b> af{" "}
              <b>{selectedProduct.fields.produktNavn}</b>
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Result;
