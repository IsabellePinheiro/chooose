import { getTripDetails } from "@/app/lib/api";
import { AdvantageDetail } from "@/app/trips/[trip_id]/components/advantage-detail";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import {
  RiEarthLine,
  RiFlag2Line,
  RiRemixiconLine,
  RiSuitcaseLine,
  RiTeamLine,
} from "@remixicon/react";
import NextLink from "next/link";
import pluralize from "pluralize";

interface Props {
  params: {
    trip_id: string;
  };
}

export default async function TripDetailsPage({ params }: Props) {
  const response = await getTripDetails(params.trip_id);

  const displayAdvantageIcon = (index: number) => {
    switch (index) {
      case 0:
        return <RiFlag2Line size={24} />;
      case 1:
        return <RiEarthLine size={24} />;
      case 2:
        return <RiSuitcaseLine size={24} />;
      case 3:
        return <RiTeamLine size={24} />;
      default:
        return <RiRemixiconLine size={24} />;
    }
  };

  return (
    <>
      <Link as={NextLink} href={"/"}>
        Go back
      </Link>
      <Flex direction="column" gap={2} mb={8}>
        <Text fontSize="3xl" as="b">
          {response.title}
        </Text>
        <Text color="gray.500">{response.subtitle}</Text>
      </Flex>
      <Grid
        templateColumns={{ md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={8}
      >
        <GridItem colSpan={2} display="flex" flexDirection="column">
          <Flex direction="column" gap={8}>
            <Flex direction="column" w="100%" px={4} gap={8}>
              <Flex justifyContent="center">
                <Image
                  src={response.photoUrl}
                  fallbackSrc="https://via.placeholder.com/450"
                  alt={response.title}
                  borderRadius={16}
                />
              </Flex>
              <Text fontSize="xl" as="b">
                Overview
              </Text>
              <SimpleGrid columns={{ md: 1, lg: 2 }} spacing="40px">
                {response.advantages?.map((advantage, index) => (
                  <AdvantageDetail
                    key={index}
                    icon={displayAdvantageIcon(index)}
                    title={advantage.title}
                    description={advantage.description}
                  />
                ))}
              </SimpleGrid>
            </Flex>
            <Divider />
            <Text>{response.description}</Text>
          </Flex>
        </GridItem>

        <GridItem
          colSpan={1}
          bg="white"
          p={8}
          h="fit-content"
          borderRadius={16}
        >
          <Flex gap={8} direction="column">
            <Flex direction="column">
              <Text as="b" fontSize="2xl">
                {response.days} {pluralize("day", response.days)}
              </Text>
              <Text as="b" color="gray.500">
                Emissions: {response.co2kilograms} kg CO2e
              </Text>
            </Flex>
            <Divider />
            <Flex direction="column" gap={2}>
              <Text as="b" color="gray.500">
                {pluralize("Country", response.countries.length)} included:
              </Text>
              <SimpleGrid columns={2} spacing="4px">
                {response.countries.map((country) => (
                  <UnorderedList key={country}>
                    <ListItem>{country}</ListItem>
                  </UnorderedList>
                ))}
              </SimpleGrid>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
}
