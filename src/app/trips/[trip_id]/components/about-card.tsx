import {
  Divider,
  Flex,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import pluralize from "pluralize";

interface Props {
  days: number;
  co2kilograms: number;
  countries: Array<string>;
}

export default function AboutCard({ days, co2kilograms, countries }: Props) {
  return (
    <Flex gap={8} direction="column">
      <Flex direction="column">
        <Text as="b" fontSize="2xl">
          {days} {pluralize("day", days)}
        </Text>
        <Text as="b" color="gray.500">
          Emissions: {co2kilograms} kg CO2e
        </Text>
      </Flex>
      <Divider />
      <Flex direction="column" gap={2}>
        <Text as="b" color="gray.500">
          {pluralize("Country", countries.length)} included:
        </Text>
        <SimpleGrid columns={2} spacing="4px">
          {countries.map((country) => (
            <UnorderedList key={country}>
              <ListItem>{country}</ListItem>
            </UnorderedList>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
