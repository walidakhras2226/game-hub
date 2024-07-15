import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { ResponseProperties } from "../services/api-client";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useQuery<ResponseProperties<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient.get<ResponseProperties<Game>>('/games', {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    }
  }).then(res => res.data),
})

export default useGames;