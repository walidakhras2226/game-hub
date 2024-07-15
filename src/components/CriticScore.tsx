import { Badge } from "@chakra-ui/react";

interface Properties {
  score: number;
}

const CriticScore = ({ score }: Properties) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="15px" paddingX={2} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default CriticScore;
