import { getTripsAction } from "@/app/action";
import { TripCard } from "@/app/components/trip-card";
import TripList from "@/app/components/trip-list";
import Loading from "@/app/trips/[trip_id]/loading";
import { SimpleGrid, Spinner } from "@chakra-ui/react";
import { Suspense } from "react";

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
  const page = 1;
  const res = fetch("api");
  const initialTrips = await getTripsAction({ page });

  return <TripList initialTrips={initialTrips} />;
}
