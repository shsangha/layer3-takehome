import { fetchClient } from "@/setup/ts-rest";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export const useGetLeaderboard = ({
  offset = 0,
  limit = 5,
}: {
  offset: number;
  limit: number;
}) => {
  return useQuery({
    queryKey: ["leaderboard", offset, limit],
    queryFn: () =>
      fetchClient.getLeaderboard({
        query: {
          offset: offset * limit,
          limit,
        },
      }),
    placeholderData: keepPreviousData, // when we move back and forth between pages, we keep the previous data if we are within the cache
    enabled: true,
  });
};
