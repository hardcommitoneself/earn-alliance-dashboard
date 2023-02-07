import React, { useCallback } from "react";
import * as EA from "./styles";

const Swtich = (props) => {
  const { label = "", checked = false, onCheck = undefined } = props;

  const handleClick = useCallback(() => {
    if (typeof onCheck === "function") onCheck(!checked);
  }, [onCheck, checked]);

  return (
    <EA.Switch>
      <EA.ToggleContainer onClick={handleClick}>
        <EA.Toggle checked={checked} />
      </EA.ToggleContainer>

      {label && <EA.SwitchLabel>{label}</EA.SwitchLabel>}
    </EA.Switch>
  );
};

export default Swtich;
