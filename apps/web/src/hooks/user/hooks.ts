import { useQuery } from "@tanstack/react-query";
import { fetchClient } from "@/setup/ts-rest";

// for the profile page just returning a hardcoded user for simplicity sake
export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => fetchClient.getUser(),
  });
};
