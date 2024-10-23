"use client";

import { Box, Burger, Flex, Layout } from "@repo/ui/components";
import LeaderboardIcon from "@/components/icons/leaderboard-icon";
import SearchModal from "@/components/search-modal";
import ThemeToggle from "@/components/theme-toggle";
import LinkNav from "@/components/links/link-nav";
import { ROUTES } from "@/constants/routes";
import { ActionIcon } from "@repo/ui/icons";

export default function Header({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  return (
    <Layout.Header withBorder={false} p="md">
      <Flex align="center" justify="space-between">
        <Box>
          <Flex align="center" justify="center">
            <Box mr="xl">
              <LinkNav href={ROUTES.HOME}>
                <ActionIcon maw={40} variant="transparent">
                  <LeaderboardIcon />
                </ActionIcon>
              </LinkNav>
            </Box>
            <Flex align="center" visibleFrom="sm">
              <LinkNav href={ROUTES.LEADERBOARD} mr="md">
                Leaderboard
              </LinkNav>
              <LinkNav href={ROUTES.FAQ} mr="md">
                FAQ
              </LinkNav>
              <LinkNav href={ROUTES.FEEDBACK} mr="md">
                Feedback
              </LinkNav>
            </Flex>
          </Flex>
        </Box>
        <Flex align="center" justify="center">
          <SearchModal />
          <ThemeToggle />
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Flex>
      </Flex>
    </Layout.Header>
  );
}
