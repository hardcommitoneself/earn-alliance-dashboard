import React from "react";
import * as EA from "./styles";

const FromControl = (props) => {
  const { children } = props;
  return <EA.FormControl>{children}</EA.FormControl>;
};

export default FromControl;
