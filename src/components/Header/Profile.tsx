import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Breno Henrique</Text>
        <Text color="gray.300" fontSize="small">
          bhfs.2908@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Breno Henrique"
        src="https://github.com/breno44.png"
      />
    </Flex>
  );
}
