import React, { useState } from "react";
import * as EA from "./styles";

const Game = (props) => {
  const [isHover, setIsHover] = useState(false);

  const {
    directory_gif_name = "",
    directory_image_name = "",
    is_live = false,
    name = "",
    genres = [],
  } = props;

  return (
    <EA.GameCard
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <EA.GameImageContainer>
        <EA.GameImage
          src={`images/${
            isHover
              ? directory_gif_name ?? "default.gif"
              : directory_image_name ?? "default.jpeg"
          }`}
          alt={name}
        />
      </EA.GameImageContainer>

      <EA.GameDetailContainer>
        <EA.GameStatus isHover={isHover} isLive={is_live}>
          {is_live ? "Live" : "Down"}
        </EA.GameStatus>

        <EA.GameName isHover={isHover}>{name}</EA.GameName>
        <EA.GameGenreTypes isHover={isHover}>
          {genres.map((genre) => genre.genre_name).join(", ")}
        </EA.GameGenreTypes>

        <EA.GameDescription isHover={isHover}>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
        </EA.GameDescription>
      </EA.GameDetailContainer>
    </EA.GameCard>
  );
};

export default Game;
