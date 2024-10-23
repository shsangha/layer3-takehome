import { Layout, Stack } from "@repo/ui/components";
import LinkLarge from "../links/link-large";
import { ROUTES } from "@/constants/routes";

export default function Navbar({ setClose }: { setClose: () => void }) {
  return (
    <Layout.Navbar py="md" px={4}>
      <Stack h="100%" justify="center" align="center" gap="md">
        <LinkLarge onClick={setClose} href={ROUTES.LEADERBOARD} mr="md">
          Leaderboard
        </LinkLarge>
        <LinkLarge onClick={setClose} href={ROUTES.FAQ} mr="md">
          FAQ
        </LinkLarge>
        <LinkLarge onClick={setClose} href={ROUTES.FEEDBACK} mr="md">
          Feedback
        </LinkLarge>
      </Stack>
    </Layout.Navbar>
  );
}
