import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box>
      <SimpleGrid
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(440px, 1fr))"
      >
        {Array(6).fill(<Skeleton height="500px" borderRadius={16} p={4} />)}
      </SimpleGrid>
    </Box>
  );
}
