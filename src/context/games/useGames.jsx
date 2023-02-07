import { useCallback } from "react";

import { useGamesContext } from "./GamesContextProvider";

const useGames = () => {
  const {
    isLoading,
    setIsLoading,
    games,
    genreTypes,
    filteredGames,
    setFilteredGames,
  } = useGamesContext();

  const filterGames = useCallback(
    (search = "", genreType = "ALL", toggleLive = false) => {
      setIsLoading(true);

      const isMatchSearchQuery = (game) =>
        game.name.toLowerCase().includes(search);
      const isMatchGenreType = (game) =>
        genreType === "ALL"
          ? true
          : !!game.genres.find((genre) => genre.genre_name === genreType);
      const isMatchLive = (game) => game.is_live === toggleLive;

      const filtered = games.filter(
        (game) =>
          isMatchSearchQuery(game) &&
          isMatchGenreType(game) &&
          isMatchLive(game)
      );

      setFilteredGames(filtered);

      setIsLoading(false);
    },
    [setIsLoading, setFilteredGames, games]
  );

  return {
    isLoading,
    genreTypes,
    filteredGames,
    filterGames,
  };
};

export default useGames;
