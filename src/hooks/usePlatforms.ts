import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Platform } from "./useGames";
import { ResponseProperties } from "./useData";
import platforms from "../data/platforms";

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<ResponseProperties<Platform>>('/platforms/lists/parents').then(res => res.data),
    staleTime: 24 * 60 * 60 * 1_000, // 24 hours
    initialData: { count: platforms.length, results: platforms },

})
export default usePlatforms;