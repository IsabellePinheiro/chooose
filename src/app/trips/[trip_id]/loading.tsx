import {
  Divider,
  Flex,
  Grid,
  GridItem,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Skeleton width="50px" height="20px" />
      <Flex direction="column" gap={2} my={8}>
        <Skeleton width="300px" height="30px" />
        <Skeleton width="150px" height="20px" />
      </Flex>
      <Grid
        templateColumns={{ md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={8}
      >
        <GridItem colSpan={2} display="flex" flexDirection="column">
          <Flex direction="column" gap={8}>
            <Flex direction="column" w="100%" gap={8}>
              <Skeleton width="700" height="400" borderRadius={16} />
              <Text fontSize="xl" as="b">
                Overview
              </Text>
              <SimpleGrid columns={{ md: 1, lg: 2 }} spacing="40px">
                <Skeleton height="100px" />
                <Skeleton height="100px" />
                <Skeleton height="100px" />
                <Skeleton height="100px" />
              </SimpleGrid>
            </Flex>
            <Divider />
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          </Flex>
        </GridItem>

        <GridItem
          colSpan={1}
          bg="white"
          p={8}
          h="fit-content"
          borderRadius={16}
        >
          <Skeleton height="200px" />
        </GridItem>
      </Grid>
    </>
  );
}
