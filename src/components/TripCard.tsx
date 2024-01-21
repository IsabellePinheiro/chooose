"use client";

import { Trip } from "@/app/page";
import {
  Box,
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
import { Rating } from "react-simple-star-rating";
import pluralize from "pluralize";

interface Props {
  trip: Trip;
}

export function TripCard({ trip }: Props) {
  return (
    <Card border={`8px solid white`} borderRadius={16} p={4}>
      <Box
        bgImage={trip.photoUrl}
        px={8}
        pt={8}
        bgSize="cover"
        borderRadius={16}
      >
        <Flex direction="column" gap={16} align="center" justify="center">
          <CardHeader>
            <Flex direction="column" align="center" justify="center">
              <Text fontSize="4xl" color="white" as="b">
                {trip.title}
              </Text>
              <Text fontSize="2xl" color="white">
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

          <CardFooter
            width="100%"
            gap={4}
            flexDirection="column"
            mb={-4}
            pb={0}
          >
            <Container bg="blue.900" color="white" p={4} borderRadius={16}>
              <Flex align="center" justify="space-between">
                <Text as="b">Emissions offset:</Text>
                <Text as="b">
                  {Math.round(trip.co2kilograms * 10) / 10} kg CO2e
                </Text>
              </Flex>
            </Container>
            <Container
              bg="white"
              color="black"
              p={4}
              borderRadius={16}
              alignContent="center"
              h={20}
            >
              <Flex direction="row" gap={2}>
                <Text as="b">Trip rating </Text>
                {/* <Rating
                  size={24}
                  readonly
                  allowFraction
                  initialValue={trip.rating}
                /> */}
                <Text as="b"> {trip.rating}</Text>
              </Flex>
            </Container>
          </CardFooter>
        </Flex>
      </Box>
    </Card>
  );
}
