import { useColorScheme } from "@repo/hooks";
import { ActionIcon, LightbulbIcon } from "@repo/ui/icons";

export default function ThemeToggle() {
  const { toggleColorScheme } = useColorScheme();

  return (
    <ActionIcon variant="transparent" onClick={toggleColorScheme}>
      <LightbulbIcon />
    </ActionIcon>
  );
}
