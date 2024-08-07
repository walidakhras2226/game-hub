import { SimpleGrid, Image } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Properties {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Properties) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
      }}
      spacing={3}
    >
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
