import React, { useCallback } from "react";
import * as EA from "./styles";

const Input = (props) => {
  const {
    id = "",
    name = "",
    value = "",
    onChange = undefined,
    placeholder = "",
    icon = "",
  } = props;

  const handleChange = useCallback(
    (e) => {
      if (typeof onChange === "function") onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <EA.InputContainer>
      <EA.Input
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        isIconExist={!!icon}
      />

      {icon && (
        <EA.InputIcon>
          <EA.InputIconImage src={icon} />
        </EA.InputIcon>
      )}
    </EA.InputContainer>
  );
};

export default Input;
