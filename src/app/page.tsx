import { getTrips } from "@/app/api/trips";
import { TripCard } from "@/components/TripCard";
import { Flex, SimpleGrid } from "@chakra-ui/react";

export interface Trip {
  id: number;
  photoUrl: string;
  title: string;
  subtitle: string;
  countries: Array<string>;
  days: number;
  co2kilograms: number;
  rating: number;
  description: string;
  advantages: [
    {
      title: string;
      description: string;
    }
  ];
}

export default async function Home() {
  const response = await getTrips();

  return (
    <SimpleGrid
      spacing={8}
      templateColumns="repeat(auto-fill, minmax(440px, 1fr))"
    >
      {response.map((trip: Trip) => (
        <TripCard key={trip.id} trip={trip} />
      ))}
    </SimpleGrid>
  );
}
