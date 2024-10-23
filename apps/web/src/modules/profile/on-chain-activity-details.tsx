import React, { useState } from "react";
import { Card, Select, Text } from "@repo/ui/components";
import TransactionTable from "@/modules/profile/transaction-table"; // Import the TransactionTable component
import { useGetTransactionsByWallet } from "@/hooks/wallet/hooks";
import { V1TransactionByWallet, V1WalletActivity } from "@repo/api-lib";
import _ from "lodash";

export default function OnChainActivityDetails({
  address,
  activeNetworks,
}: {
  address: string;
  activeNetworks: V1WalletActivity["activeChains"];
}) {
  const activeChainNames = _.map(activeNetworks, "chain");

  const [selectedNetwork] = useState(activeChainNames[0]); // assuming the address is active on 1 chain (needs to be to exist)

  const { data, isLoading, isError } = useGetTransactionsByWallet({
    walletAddress: address,
    chain: selectedNetwork,
  });

  const transactions = _.get(data, "body", {}) as V1TransactionByWallet;

  return (
    <Card padding="md" shadow="sm">
      <Text fw={500} size="lg">
        User On-Chain Activity
      </Text>
      <Select
        label="Select Network"
        value={selectedNetwork}
        data={activeChainNames}
        mt="md"
      />

      {isLoading && <div>Loading...</div>}
      {isError && <div>Failed to fetch transactions.</div>}

      {!isLoading && !isError && transactions && transactions.results && (
        <TransactionTable transactions={transactions} />
      )}
    </Card>
  );
}
