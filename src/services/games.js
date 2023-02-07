import { useQuery } from "@apollo/client";
import { GET_GENRETYPES_AND_GAMES } from "./grapql-query";

export const useGetGenreTypesGames = () => {
  const { loading, error, data } = useQuery(GET_GENRETYPES_AND_GAMES);

  return {
    loading,
    error,
    data,
  };
};
