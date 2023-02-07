import { createContext, useContext, useEffect, useState } from "react";
import { useGetGenreTypesGames } from "services/games";

const GamesContext = createContext();
const useGamesContext = () => {
  const context = useContext(GamesContext);

  if (!context) {
    throw new Error("useGamesContext must be used within a GamesProvider");
  }

  return context;
};

const GamesProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [genreTypes, setGenreTypes] = useState(["ALL"]);
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  const { loading, error, data } = useGetGenreTypesGames();

  useEffect(() => {
    setIsLoading(loading);

    if (!loading && !error) {
      setGames(data.games);
      setFilteredGames(data.games);
      setGenreTypes((types) => [
        ...types,
        ...data.game_genre_types.map((type) => type.genre_name),
      ]);
    }
  }, [loading, error, data]);

  const gamesContextValue = {
    isLoading,
    setIsLoading,
    games,
    setGames,
    genreTypes,
    filteredGames,
    setFilteredGames,
  };

  return <GamesContext.Provider value={gamesContextValue} {...props} />;
};

export { GamesProvider, useGamesContext };
