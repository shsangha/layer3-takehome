import { fetchClient } from "@/setup/ts-rest";
import { CHAINS, SORT_ORDER } from "@repo/api-lib";
import { useQuery } from "@tanstack/react-query";

export const useGetWalletCrossChainActivity = ({
  walletAddress,
}: {
  walletAddress: string;
}) => {
  return useQuery({
    queryKey: ["wallet-cross-chain-activity", walletAddress],
    queryFn: () =>
      fetchClient.getWalletCrossChainActivity({
        query: { address: walletAddress },
      }),
  });
};

export const useGetWalletBalance = ({
  walletAddress,
  chain = CHAINS.ETHEREUM_MAINNET,
}: {
  walletAddress: string;
  chain?: string;
}) => {
  return useQuery({
    queryKey: ["wallet-balance", walletAddress, chain],
    queryFn: () =>
      fetchClient.getWalletBalance({
        query: { chain, address: walletAddress },
      }),
  });
};

export const useGetTransactionsByWallet = ({
  walletAddress,
  chain = CHAINS.ETHEREUM_MAINNET,
  sortOrder = SORT_ORDER.DESC,
}: {
  walletAddress: string;
  chain?: string;
  sortOrder?: string;
}) => {
  return useQuery({
    queryKey: ["transactions-by-wallet", walletAddress, chain, sortOrder],
    queryFn: () =>
      fetchClient.getTransactionsByWallet({
        query: {
          sortOrder,
          chain,
          walletAddress,
          limit: 10,
        },
      }),
    enabled: !!walletAddress,
  });
};
