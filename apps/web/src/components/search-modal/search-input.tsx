import React, { useEffect, useRef } from "react";
import { Box, Input } from "@repo/ui/components";
import { SearchIcon, CloseIcon, ActionIcon } from "@repo/ui/icons";
import { useTheme } from "@repo/hooks";

interface SearchInputProps {
  placeholder: string;
  searchQuery: string;
  handleSearchChange: React.ChangeEventHandler<HTMLInputElement>;
  clearSearch: React.MouseEventHandler<HTMLButtonElement>;
  variant?: string;
}

const SearchInput = ({
  placeholder,
  searchQuery,
  handleSearchChange,
  clearSearch,
  variant,
}: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const theme = useTheme();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Input
      miw={300}
      radius="lg"
      ref={inputRef}
      placeholder={placeholder}
      value={searchQuery}
      onChange={handleSearchChange}
      leftSection={<SearchIcon size={16} />}
      rightSectionPointerEvents="all"
      rightSection={
        <Box>
          {searchQuery && (
            <ActionIcon bg="transparent" onClick={clearSearch}>
              <CloseIcon color={`${theme.colors.gray[5]}`} size={16} />
            </ActionIcon>
          )}
        </Box>
      }
      variant={variant}
    />
  );
};

export default SearchInput;
