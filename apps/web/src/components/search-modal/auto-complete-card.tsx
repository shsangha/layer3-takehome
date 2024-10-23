import { Image, Flex, Text, Box } from "@repo/ui/components";
import BaseWrappedLink from "../links/base-wrapped-link";

// going to assume all users have a username and image for time sake. Also is safe to assume given the api validation in place
export default function AutoCompleteCard({
  avatarUri,
  username,
  address,
}: {
  avatarUri: string;
  username: string;
  address: string;
}) {
  return (
    <Box>
      <BaseWrappedLink href={`/profile/${address}`}>
        <Flex p="md" bg=" blue.4">
          <Image
            mr="md"
            width={20}
            height={20}
            src={avatarUri}
            alt="profile image"
          />
          <Text>{username}</Text>
        </Flex>
      </BaseWrappedLink>
    </Box>
  );
}
