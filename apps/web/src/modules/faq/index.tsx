"use client";

import { useState } from "react";
import { Box, Text, Button, Collapse, Title } from "@repo/ui/components";

function FAQSection() {
  const [opened, setOpened] = useState(Array(4).fill(false));

  const toggleItem = (index: number) => {
    setOpened((prev) => {
      const newOpened = [...prev];
      newOpened[index] = !newOpened[index];
      return newOpened;
    });
  };

  const faqData = [
    {
      question: "What is the Layer3 leaderboard?",
      answer:
        "The Layer3 leaderboard is a dynamic showcase of the most active and engaged users in the Layer3 community. It highlights individual achievements and contributions, fostering healthy competition and encouraging community involvement.",
    },
    {
      question: "How can I improve my ranking on the Layer3 leaderboard?",
      answer:
        "To improve your ranking, actively participate in the Layer3 ecosystem. This includes completing tasks, engaging with other community members, and contributing valuable content or insights to the platform.",
    },
    {
      question: "How often is the Layer3 leaderboard updated?",
      answer:
        "The Layer3 leaderboard is updated in real-time, reflecting the latest user activities and achievements as they occur on the platform.",
    },
    {
      question:
        "Are there any rewards for top-ranked users on the Layer3 leaderboard?",
      answer:
        "While specific rewards may vary, top-ranked users often gain increased visibility within the community, potential networking opportunities, and sometimes exclusive access to certain features or events. Check the official Layer3 communications for current reward structures.",
    },
  ];

  return (
    <Box pt="xl" style={{ maxWidth: 900, margin: "auto" }}>
      <Title mb="xl" fz={"2.6rem"} fs="bold" fw={500} order={2} ta="center">
        Frequently Asked Questions
      </Title>
      {faqData.map((item, index) => (
        <Box key={index} mb="md">
          <Button
            onClick={() => toggleItem(index)}
            fullWidth
            variant="subtle"
            radius="md"
          >
            {item.question}
          </Button>
          <Collapse in={opened[index]}>
            <Text ta="center" mt="xs">
              {item.answer}
            </Text>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
}

export default FAQSection;
