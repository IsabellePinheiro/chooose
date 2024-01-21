"use client";

import { Trip } from "@/app/page";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import pluralize from "pluralize";
import { Rating } from "react-simple-star-rating";

interface Props {
  trip: Trip;
}

export function TripCard({ trip }: Props) {
  return (
    <Card border={`8px solid white`} borderRadius={16} p={4}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        bgImage={trip.photoUrl}
        px={8}
        pt={8}
        bgSize="cover"
        borderRadius={16}
        h="500px"
      >
        <CardHeader>
          <Flex direction="column" align="center" justify="center">
            <Text fontSize="3xl" color="white" as="b" textAlign="center">
              {trip.title}
            </Text>
            <Text fontSize="xl" color="white">
              {trip.countries.length}{" "}
              {pluralize("country", trip.countries.length)}, {trip.days}{" "}
              {pluralize("day", trip.days)}
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Link as={NextLink} href={`/trips/${trip.id}`} passHref>
            <Button colorScheme="blue">Learn more</Button>
          </Link>
        </CardBody>

        <CardFooter width="100%" gap={4} flexDirection="column" pb={0}>
          <Container bg="blue.900" color="white" p={4} borderRadius={16}>
            <Flex align="center" justify="space-between">
              <Text as="b">Emissions offset:</Text>
              <Text as="b">
                {Math.round(trip.co2kilograms * 10) / 10} kg CO2e
              </Text>
            </Flex>
          </Container>
          <Flex
            display={"flex"}
            gap={2}
            bg="white"
            color="black"
            p={4}
            borderTopRadius={16}
            h={14}
            justifyContent="space-between"
            align={"flex-start"}
          >
            <Text as="b">Trip rating </Text>
            <Flex align="flex-start" gap={2}>
              <Rating
                size={24}
                readonly
                initialValue={trip.rating}
                allowFraction
                SVGstyle={{ display: "inline-block" }}
              />
              <Text as="b"> {trip.rating}</Text>
            </Flex>
          </Flex>
        </CardFooter>
      </Flex>
    </Card>
  );
}
