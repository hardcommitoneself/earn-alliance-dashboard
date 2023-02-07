import React, { useState } from "react";
import { useGames } from "context/games";

// components
import Pagination from "common/Pagination";

import * as EA from "./styles";

const Games = () => {
  const { filteredGames } = useGames();
  const [current, setCurrent] = useState(0);

  const paginate = (page) => {
    setCurrent(page);
  };

  return (
    <EA.GamesContainer>
      <EA.GamesMain></EA.GamesMain>

      <EA.GamesPaginationContainer>
        <Pagination
          total={filteredGames.length}
          current={current}
          paginate={paginate}
        />
      </EA.GamesPaginationContainer>
    </EA.GamesContainer>
  );
};

export default Games;
