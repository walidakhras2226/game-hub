import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  return (
    <>
      <Heading>{data?.name}</Heading>
      <ExpandableText>{data?.description_raw as string}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
