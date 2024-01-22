import { getTripDetails } from "@/app/lib/api";
import AboutCard from "@/app/trips/[trip_id]/components/about-card";
import AdvantageDetail from "@/app/trips/[trip_id]/components/advantage-detail";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import {
  RiEarthLine,
  RiFlag2Line,
  RiRemixiconLine,
  RiSuitcaseLine,
  RiTeamLine,
} from "@remixicon/react";
import NextLink from "next/link";

interface Props {
  params: {
    trip_id: string;
  };
}

export default async function TripDetailsPage({ params }: Props) {
  const {
    advantages,
    co2kilograms,
    countries,
    days,
    description,
    photoUrl,
    subtitle,
    title,
  } = await getTripDetails(params.trip_id);

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
      <Flex direction="column" gap={2} my={8}>
        <Text fontSize="3xl" as="b">
          {title}
        </Text>
        <Text color="gray.500">{subtitle}</Text>
      </Flex>
      <Grid
        templateColumns={{ md: "repeat(1, 1fr)", lg: "repeat(3, 1fr)" }}
        gap={8}
      >
        <GridItem colSpan={2} display="flex" flexDirection="column">
          <Flex direction="column" gap={8}>
            <Flex direction="column" w="100%" gap={8}>
              <Image
                src={photoUrl}
                fallbackSrc="https://via.placeholder.com/450"
                alt={title}
                borderRadius={16}
              />
              <Text fontSize="xl" as="b">
                Overview
              </Text>
              <SimpleGrid columns={{ md: 1, lg: 2 }} spacing="40px">
                {advantages?.map((advantage, index) => (
                  <AdvantageDetail
                    key={index}
                    icon={displayAdvantageIcon(index)}
                    advantage={advantage}
                  />
                ))}
              </SimpleGrid>
            </Flex>
            <Divider />
            <Text>{description}</Text>
          </Flex>
        </GridItem>

        <GridItem
          colSpan={1}
          bg="white"
          p={8}
          h="fit-content"
          borderRadius={16}
        >
          <AboutCard
            days={days}
            co2kilograms={co2kilograms}
            countries={countries}
          />
        </GridItem>
      </Grid>
    </>
  );
}
