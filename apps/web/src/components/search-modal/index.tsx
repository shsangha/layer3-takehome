import React, { useState } from "react";
import { Modal, Box, Button } from "@repo/ui/components";
import SearchInput from "@/components/search-modal/search-input";
import { SearchIcon } from "@repo/ui/icons";
import { useAutocomplete } from "@/hooks/autocomplete/hook";
import AutoCompleteResult from "./auto-complete-result";
import _ from "lodash";
import { useDebounce } from "@uidotdev/usehooks";

const PLACEHOLDER = "Search by address or ens";

function SearchModal() {
  const [opened, setOpened] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 200);

  const autocompleteQuery = useAutocomplete({
    searchTerm: debouncedSearchQuery,
  });

  const data = _.get(autocompleteQuery, "data.body.data", []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const clearSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setSearchQuery("");
  };

  const onClick = () => {
    setOpened(true);
  };

  if (autocompleteQuery.error) {
    return <div>Error: {autocompleteQuery.error.message}</div>;
  }

  return (
    <>
      <Box onClick={onClick} mr="md" visibleFrom="sm">
        <SearchInput
          placeholder={PLACEHOLDER}
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          clearSearch={clearSearch}
        />
      </Box>
      <Button
        color="gray.8"
        variant="transparent"
        hiddenFrom="sm"
        onClick={onClick}
        p="xs"
      >
        <SearchIcon size={16} />
      </Button>

      <Modal
        p="md"
        radius="lg"
        withCloseButton={false}
        trapFocus={false}
        opened={opened}
        onClose={() => setOpened(false)}
      >
        <SearchInput
          placeholder={PLACEHOLDER}
          searchQuery={searchQuery}
          handleSearchChange={handleSearchChange}
          clearSearch={clearSearch}
          variant="unstyled"
        />
        <AutoCompleteResult onClick={onClick} results={data} />
      </Modal>
    </>
  );
}

export default SearchModal;
