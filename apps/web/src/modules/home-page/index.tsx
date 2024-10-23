import { Anchor, Grid, GridCol, Stack, Title } from "@repo/ui/components";
export default function HomePageModule() {
  return (
    <Grid justify="flex-end" align="flex-start" h="100vh">
      <GridCol p={"xl"} span={{ base: 12, sm: 8 }}>
        <Stack h="90vh" justify="center" align="flex-start">
          <Title mb={"xl"} order={3}>
            Layer3 leaderboard is where you can see the top users in the Layer3
            community. It's a dynamic showcase of our most active and engaged
            participants, highlighting their achievements and contributions. The
            leaderboard not only recognizes individual efforts but also fosters
            healthy competition and encourages community involvement. By
            featuring top users, we celebrate their dedication and inspire
            others to actively participate in our ecosystem. Whether you're
            aiming for the top spot or simply curious about the community's
            frontrunners, the Layer3 leaderboard offers valuable insights into
            the pulse of our thriving network.
          </Title>
          <Title c="blue.2" order={4}>
            You can learn more by visiting{" "}
            <Anchor inherit href="https://layer3.xyz" target="_blank">
              Layer3.xyz
            </Anchor>
            .
          </Title>
        </Stack>
      </GridCol>
      <GridCol span={{ base: 12, sm: 4 }} />
    </Grid>
  );
}
