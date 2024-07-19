import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Properties {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Properties) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.2s ease-in",
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
