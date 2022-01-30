import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/states";
import { BiLinkExternal } from "react-icons/bi";

const Result = () => {
  const { result, selectedProduct, calculatedArea, antalLag } =
    useContext(AppContext);
  const [grunderArea, setGrunderArea] = useState(null);

  useEffect(() => {
    handleGrunder();
  }, [calculatedArea]);

  const handleGrunder = () => {
    if (selectedProduct) {
      // Calc ( l * h / sum of dækkeevne * lag )

      setGrunderArea(
        (
          (result / selectedProduct.fields.dkkeevneGrunder) *
          selectedProduct.fields.lagGrunder
        ).toFixed(2)
      );
    }
  };

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
          {selectedProduct.fields.link ? (
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href={selectedProduct.fields.link}
            >
              <h2 className="product-title">
                {selectedProduct.fields.produktNavn}
                <BiLinkExternal className="icon" />
              </h2>
            </a>
          ) : (
            <h2 className="product-title">
              {selectedProduct.fields.produktNavn}
            </h2>
          )}
          <p className="text-info">Dine mål:</p>
          {result && <h3>Total areal: {result} ㎡.</h3>}
          <p className="text-info">Mængde information:</p>
          <h3>
            Baseret på {antalLag} lag: {calculatedArea} liter.
          </h3>
          {selectedProduct.fields.produktNavnGrunder &&
          selectedProduct.fields.lagGrunder &&
          selectedProduct.fields.dkkeevneGrunder ? (
            // Med Anbefalder Grunder
            <>
              <p className="text-info">
                For det bedste resultat anbefaler vi at bruge{" "}
                <b>{selectedProduct.fields.lagGrunder} lag</b> af{" "}
                <b>{selectedProduct.fields.produktNavnGrunder}</b> før{" "}
                <b>{selectedProduct.fields.lag} lag</b> af{" "}
                <b>{selectedProduct.fields.produktNavn}.</b>
              </p>

              {grunderArea !== null && (
                <>
                  {selectedProduct.fields.linkGrunder ? (
                    <a
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      href={selectedProduct.fields.linkGrunder}
                    >
                      <h2 className="product-title">
                        {selectedProduct.fields.produktNavnGrunder}
                        <BiLinkExternal className="icon" />
                      </h2>
                    </a>
                  ) : (
                    <h2 className="product-title">
                      {selectedProduct.fields.produktNavnGrunder}
                    </h2>
                  )}

                  <p className="text-info">Dine mål:</p>
                  {result && <h3>Total areal: {result} ㎡.</h3>}
                  <p className="text-info">Mængde information:</p>
                  <h3>
                    Baseret på {selectedProduct.fields.lagGrunder} lag:{" "}
                    {grunderArea} liter.
                  </h3>
                </>
              )}
            </>
          ) : (
            // Uden Grunder
            <p className="text-info">
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
