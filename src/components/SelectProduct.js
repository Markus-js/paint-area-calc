import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
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
    calculatedArea,
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

    // link
  };
  return (
    <div className="select-container">
      {selectedValue}
      <p>Calculated area:</p>
      {calculatedArea && calculatedArea}
      {items !== null && (
        <Select
          // Selection children from items
          options={options}
          //   Get selected value
          value={options.find(obj => obj.value === selectedValue)}
          onChange={handleChange}
        />
      )}
      <div>
        <p>link</p>
        {selectedProduct && (
          <>
            <a
              target="_blank"
              rel="noreferrer"
              href={selectedProduct.fields.link}
            >
              Link to product
            </a>
            <p>anbefaldet lag:</p> <p>{selectedProduct.fields.lag}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectProduct;
