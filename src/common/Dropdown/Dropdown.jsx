import React, { useCallback } from "react";
import * as EA from "./styles";

const Dropdown = (props) => {
  const { items = [], onSelect = undefined } = props;

  const handleChange = useCallback(
    (e) => {
      if (typeof onSelect === "function") onSelect(e.target.value);
    },
    [onSelect]
  );

  return (
    <EA.Dropdown onChange={handleChange}>
      {items.map((item, index) => (
        <EA.Option key={index} value={item}>
          {item}
        </EA.Option>
      ))}
    </EA.Dropdown>
  );
};

export default Dropdown;
