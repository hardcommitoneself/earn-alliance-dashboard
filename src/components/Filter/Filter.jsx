import React from "react";

// components
import Input from "common/Input";
import Dropdown from "common/Dropdown";
import Switch from "common/Switch";
import { FormControl, FormLabel } from "common/Form";

import * as EA from "./styles";

const Filter = () => {
  return (
    <EA.Filter>
      {/* filter by query */}
      <FormControl>
        <FormLabel>Search</FormLabel>
        <Input
          id="search"
          name="search"
          placeholder="Search for a game..."
          icon="/images/search.svg"
        />{" "}
      </FormControl>

      {/* filter by genre type */}
      <FormControl>
        <FormLabel>Game Genre</FormLabel>
        <Dropdown />
      </FormControl>

      {/* filter by switch(live) */}
      <EA.LiveSwitchContainer>
        <Switch label="Live Games" />
      </EA.LiveSwitchContainer>
    </EA.Filter>
  );
};

export default Filter;
