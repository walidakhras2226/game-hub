import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Properties {
  children: string;
}

const ExpandableText = ({ children }: Properties) => {
  const [isExpanded, setExpanded] = useState(false);
  const charLimit = 300;

  if (!children) return null;

  const formattedText = isExpanded
    ? children
    : `${children.substring(0, charLimit)}...`;

  if (children.length <= charLimit) return <Text>{children}</Text>;

  return (
    <Text>
      {formattedText}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpanded(!isExpanded)}
      >
        Read {isExpanded ? "Less" : "More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
