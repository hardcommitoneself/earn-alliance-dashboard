import { gql } from "@apollo/client";

export const GET_GENRETYPES_AND_GAMES = gql`
  query GET_GENRETYPES_AND_GAMES {
    game_genre_types {
      genre_name
    }
    games {
      name
      id
      is_live
      directory_gif_name
      directory_image_name
      genres {
        genre_name
      }
    }
  }
`;
