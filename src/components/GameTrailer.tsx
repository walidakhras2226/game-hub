import useTrailers from "../hooks/useTrailers";

interface Properties {
  gameId: number;
}

const GameTrailer = ({ gameId }: Properties) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (error) throw error;
  if (isLoading) return null;

  const first = data?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
