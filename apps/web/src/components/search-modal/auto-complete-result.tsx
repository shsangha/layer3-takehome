import { AutocompleteV1 } from "@repo/api-lib";
import { Flex, List } from "@repo/ui/components";
import AutoCompleteCard from "@/components/search-modal/auto-complete-card";

export default function AutoCompleteResult({
  onClick,
  results,
}: {
  onClick: () => void;
  results: AutocompleteV1["data"];
}) {
  return (
    <List mt="xl" listStyleType="none">
      {results.map((result) => {
        return (
          <Flex p="xs" key={result.address} justify="center" align="center">
            <List.Item onClick={onClick} key={result.address}>
              <AutoCompleteCard
                avatarUri={result.avatarUri}
                username={result.username}
                address={result.address}
              />
            </List.Item>
          </Flex>
        );
      })}
    </List>
  );
}
