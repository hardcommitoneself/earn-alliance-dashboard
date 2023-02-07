import React, { useState } from "react";
import { useGames } from "context/games";

// components
import Pagination from "common/Pagination";
import Loader from "components/Loader";
import Game from "./Game";

import * as EA from "./styles";

const Games = () => {
  const { filteredGames, isLoading } = useGames();
  const [current, setCurrent] = useState(0);

  const paginate = (page) => {
    setCurrent(page);
  };

  return (
    <EA.GamesContainer>
      {isLoading ? (
        <Loader />
      ) : !filteredGames.length ? (
        <EA.GamesEmpty>Not found</EA.GamesEmpty>
      ) : (
        <EA.GamesMain>
          {filteredGames.slice(current * 12, (current + 1) * 12).map((game) => (
            <Game key={game.id} {...game} />
          ))}
        </EA.GamesMain>
      )}

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
