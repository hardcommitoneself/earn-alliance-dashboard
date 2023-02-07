import React, { useState, useEffect } from "react";

// context
import { useGames } from "context/games";

// components
import Input from "common/Input";
import Dropdown from "common/Dropdown";
import Switch from "common/Switch";
import { FormControl, FormLabel } from "common/Form";

import * as EA from "./styles";

const Filter = () => {
  const { genreTypes, filterGames } = useGames();
  const [search, setSearch] = useState("");
  const [genreType, setGenreType] = useState(genreTypes[0]);
  const [toggleLive, setToggleLive] = useState(false);

  useEffect(() => {
    console.log("load");
    filterGames(search, genreType, toggleLive);
  }, [filterGames, search, genreType, toggleLive]);

  const onSelectGenreType = (type) => {
    setGenreType(type);
  };

  const onSearchChange = (search) => {
    setSearch(search);
  };

  const onLiveCheck = (checked) => {
    setToggleLive(checked);
  };

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
          value={search}
          onChange={onSearchChange}
        />{" "}
      </FormControl>

      {/* filter by genre type */}
      <FormControl>
        <FormLabel>Game Genre</FormLabel>
        <Dropdown items={genreTypes} onSelect={onSelectGenreType} />
      </FormControl>

      {/* filter by switch(live) */}
      <EA.LiveSwitchContainer>
        <Switch label="Live Games" checked={toggleLive} onCheck={onLiveCheck} />
      </EA.LiveSwitchContainer>
    </EA.Filter>
  );
};

export default Filter;
