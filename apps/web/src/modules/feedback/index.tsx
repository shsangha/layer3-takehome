import { Title, Text, Stack, Button } from "@repo/ui/components";

export default function FeedbackPage() {
  return (
    <Stack mt="xl" align="center">
      <Title mb="xl" fz={"2.6rem"} fs="bold" fw={500} order={2} ta="center">
        Feedback
      </Title>
      <Text fz="xl" ta="center">
        Thanks for taking a look at my take home assignment!
      </Text>
      <Text maw={600} ta="center">
        Whether it's a suggestion, or to learn more about the project, I'm eager
        to connect to hear y our thoughts!
      </Text>
      <Button
        radius="xl"
        variant="outline"
        component="a"
        href="mailto:shawn.sangha@icloud.com"
        size="lg"
      >
        Get in touch!
      </Button>
    </Stack>
  );
}
