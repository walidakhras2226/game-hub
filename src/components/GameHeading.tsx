import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Properties {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Properties) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={4} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
