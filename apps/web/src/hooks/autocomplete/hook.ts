import { fetchClient } from "@/setup/ts-rest";
import { useQuery } from "@tanstack/react-query";

export const useAutocomplete = ({
  searchTerm,
  limit = 5,
}: {
  searchTerm: string;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ["autocomplete", searchTerm, limit],
    queryFn: () =>
      fetchClient.getAutocompleteSuggestions({
        query: {
          searchTerm,
          limit,
        },
      }),
    enabled: searchTerm.length > 0,
  });
};
