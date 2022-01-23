import { useState, useContext } from "react";
import { AppContext } from "../context/states";
import Select from "react-select";

const SelectProduct = () => {
  const { items } = useContext(AppContext);
  const [selectedValue, setSelectedValue] = useState(null);

  let options;
  if (items) {
    options = items.map(item => {
      return {
        value: ` ${item.fields.produktNavn}`,
        label: ` ${item.fields.produktNavn}`,
      };
    });
  }

  const handleChange = e => {
    setSelectedValue(e.value);
    // find item === selectedValue
    // item.m2
    // bregning  l * h % 6.5     5-8 m2/liter --
    // link
  };

  return (
    <div>
      {selectedValue}

      {items !== null && (
        <Select
          options={options}
          value={options.find(obj => obj.value === selectedValue)}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default SelectProduct;
