"use client";

import { getTripsAction } from "@/app/action";
import { TripCard } from "@/app/components/trip-card";
import { Trip } from "@/app/model";
import { Box, Flex, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  initialTrips: Array<Trip>;
}

export default function TripList({ initialTrips }: Props) {
  const { inView, ref } = useInView();
  const [currentPage, setCurrentPage] = useState(1);
  const [trips, setTrips] = useState<Trip[]>(initialTrips);
  const [isLastPage, setIsLastPage] = useState(false);

  const getMoreTrips = async () => {
    const nextPage = currentPage + 1;
    const paginatedTrips = await getTripsAction({ page: nextPage });

    if (paginatedTrips.length) {
      setTrips((prev) => [...paginatedTrips, ...prev]);
      setCurrentPage(nextPage);
      setIsLastPage(false);
    } else {
      setIsLastPage(true);
    }
  };

  useEffect(() => {
    if (inView && !isLastPage) {
      getMoreTrips();
    }
  }, [inView, isLastPage]);

  return (
    <Box style={{ overflowAnchor: "none" }}>
      <SimpleGrid
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(440px, 1fr))"
      >
        {trips.map((trip: Trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </SimpleGrid>

      <Flex w="100%" align="center" justify="center" py={8}>
        {!isLastPage && <Spinner ref={ref} />}
      </Flex>
    </Box>
  );
}
