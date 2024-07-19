import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";
const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <GridItem>
          <Heading>{data?.name}</Heading>
          <ExpandableText>{data?.description_raw as string}</ExpandableText>
          <GameAttributes game={data!} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={data!.id} />
          <GameScreenshots gameId={data!.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
