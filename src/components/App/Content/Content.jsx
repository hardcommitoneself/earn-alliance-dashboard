import React from "react";
import * as EA from "./styles";

const Content = (props) => {
  const { children } = props;

  return (
    <EA.Content>
      <EA.ContentInner>{children}</EA.ContentInner>
    </EA.Content>
  );
};

export default Content;
