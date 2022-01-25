import { useContext, useEffect } from "react";
import { AppContext } from "../context/states";
import Select from "react-select";

const SelectProduct = () => {
  const {
    items,
    result,
    selectedValue,
    setSelectedValue,
    selectedProduct,
    setSelectedProduct,
    setCalculatedArea,
  } = useContext(AppContext);

  let options;
  if (items) {
    // for each product, create a object child for Select element
    options = items.map(item => {
      return {
        value: `${item.fields.produktNavn}`,
        label: `${item.fields.produktNavn}`,
      };
    });
  }

  const handleChange = e => {
    setSelectedValue(e.value);
  };

  // Rerender ui then selecting product
  useEffect(() => {
    handleCalcArea();

    console.log(selectedProduct);
  }, [handleChange]);

  // Calculate selectedValue/ProductName
  const handleCalcArea = () => {
    // SelectedProduct === (find item <=Match=> selectedValue)
    if (selectedValue) {
      setSelectedProduct(
        items.find(obj => obj.fields.produktNavn === selectedValue)
      );
    }

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
  };

  return (
    <div className="select-container container">
      <header className="process">
        <div className="circle">
          <span>1</span>
        </div>
        <h2>Vælg produkt</h2>
      </header>
      <div className="col">
        {/* Product Image */}
        {selectedProduct && (
          <div className="img-wrapper">
            <img src={selectedProduct.fields.img_url} alt="product" />
          </div>
        )}

        <div>
          {/* Select product */}
          {items !== null && (
            <Select
              // Selection children from items
              options={options}
              //   Get selected value
              placeholder="Søg"
              value={options.find(obj => obj.value === selectedValue)}
              onChange={handleChange}
              className="select-product"
            />
          )}

          {/* Link to selected product */}
          {selectedProduct && (
            <a
              target="_blank"
              rel="noreferrer"
              href={selectedProduct.fields.link}
            >
              <button className="btn-link">Se produkt</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectProduct;
