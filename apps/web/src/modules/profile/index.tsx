"use client";

import { useGetUser } from "@/hooks/user/hooks";
import { useGetWalletCrossChainActivity } from "@/hooks/wallet/hooks";
import { V1Users, V1WalletActivity } from "@repo/api-lib";
import _ from "lodash";
import ProfileDetails from "@/modules/profile/profile-details";

export default function ProfileModule({ address }: { address: string }) {
  const userInfoQuery = useGetUser();

  const activeNetworksQuery = useGetWalletCrossChainActivity({
    walletAddress: address,
  });

  const user = _.get(userInfoQuery, "data.body", null) as V1Users;

  const activeNetworks = _.get(
    activeNetworksQuery.data,
    "body.activeChains",
    []
  ) as V1WalletActivity["activeChains"];

  if (userInfoQuery.isPending || activeNetworksQuery.isPending) {
    return <div>Loading...</div>;
  }

  if (userInfoQuery.isError || activeNetworksQuery.isError) {
    return <div>Error...</div>;
  }
  return (
    <ProfileDetails
      user={user}
      address={address}
      activeNetworks={activeNetworks}
    />
  );
}
