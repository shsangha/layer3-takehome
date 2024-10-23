import { V1Users, V1WalletActivity } from "@repo/api-lib";
import { Grid } from "@repo/ui/components";
import UserProfileDetails from "@/modules/profile/user-profile-details";
import OnChainActivityDetails from "./on-chain-activity-details";

export default function ProfileDetails({
  user,
  activeNetworks,
  address,
}: {
  user: V1Users;
  activeNetworks: V1WalletActivity["activeChains"];
  address: string;
}) {
  return (
    <Grid gutter="md">
      <Grid.Col span={{ base: 12, md: 3, sm: 12 }}>
        <UserProfileDetails user={user} />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 9, sm: 12 }}>
        <OnChainActivityDetails
          address={address}
          activeNetworks={activeNetworks}
        />
      </Grid.Col>
    </Grid>
  );
}
