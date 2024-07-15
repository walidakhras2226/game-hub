import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Properties {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Properties) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={4} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
