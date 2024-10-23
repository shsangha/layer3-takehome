import React from "react";
import { List, Avatar, Group, Text, Flex, Box } from "@repo/ui/components";
import { V1Leaderboard } from "@repo/api-lib";
import Link from "next/link";

const Leaderboard = ({
  leaderboardData,
}: {
  leaderboardData: V1Leaderboard["data"];
}) => {
  return (
    <List
      mb="xl"
      w="100%"
      center
      listStyleType="none"
      flex={2}
      spacing="sm"
      size="lg"
    >
      {leaderboardData.map((item, index: number) => (
        <Link
          href={`/profile/${item.address}`}
          key={index}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Box
            style={{
              width: "100%",
              border: "1px solid grey",
              borderRadius: 10,
              cursor: "pointer",
            }}
            mb="lg"
          >
            {/* List.Item needs to set wideth on the wrapper and element, no exposed mantine props and don't want to add a css file for now */}
            <Flex p="md" justify="space-between" align="center">
              <Group>
                <Avatar size="sm" color="blue" radius="xl">
                  {item.rank}
                </Avatar>
                <Text>{item.username}</Text>
              </Group>
              <Group>
                <Text fs="sm" c="orange">
                  🔥 {item.gmStreak}
                </Text>
                <Flex>
                  <Text fs="xs" mr="xs">
                    {item.xp}
                  </Text>
                  <Text fs="sm" c="green">
                    XP
                  </Text>
                </Flex>
              </Group>
            </Flex>
          </Box>
        </Link>
      ))}
    </List>
  );
};

export default Leaderboard;
