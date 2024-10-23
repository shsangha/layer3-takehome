import { V1Users } from "@repo/api-lib";
import { Card, Box, Text, Progress, Group } from "@repo/ui/components";

export default function UserOverview({ user }: { user: V1Users }) {
  return (
    <Card padding="md" shadow="sm">
      <Group>
        <Box bg="gray.2" w={150} h={150} />
        <div>
          <Text fw={500} size="lg">
            {user.username}
          </Text>
          <Text c="dimmed">Address: {user.address}</Text>
          <Text c="dimmed">Rank: {user.rank}</Text>
          <Text c="dimmed">GM Streak: {user.gmStreak}</Text>
          <Text c="dimmed">
            XP: {user.xp} | Level: {user.level}
          </Text>
        </div>
      </Group>
      <Progress value={(user.xp / 1000) * 100} mt="md" />
      <Text size="sm" mt="xs">
        {user.xp}/1000 XP
      </Text>
    </Card>
  );
}
