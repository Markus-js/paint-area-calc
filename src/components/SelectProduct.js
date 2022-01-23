import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/states";
import Select from "react-select";

const SelectProduct = () => {
  const { items, result } = useContext(AppContext);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [calculatedArea, setCalculatedArea] = useState(null);

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

    // Calc  l * h / sum of dækkeevne =>  5-8 === sum 6.5
    if (selectedProduct) {
      setCalculatedArea((result / selectedProduct.fields.dkkeevne).toFixed(2));
    }

    // link
  };
  return (
    <div>
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
          <a
            target="_blank"
            rel="noreferrer"
            href={selectedProduct.fields.link}
          >
            Link to product
          </a>
        )}
      </div>
    </div>
  );
};

export default SelectProduct;
