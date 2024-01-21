"use client";

import { getTripsAction } from "@/app/action";
import { TripCard } from "@/app/components/trip-card";
import { Trip } from "@/app/page";
import { Box, Flex, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
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
    } else {
      setIsLastPage(true);
    }

    // window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (inView) {
      getMoreTrips();
    }
  }, [inView]);

  return (
    <Box>
      <SimpleGrid
        spacing={8}
        templateColumns="repeat(auto-fill, minmax(440px, 1fr))"
      >
        {trips.map((trip: Trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
      </SimpleGrid>

      <Spinner ref={ref} />
    </Box>
  );
}
