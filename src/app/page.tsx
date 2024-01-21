import { getTripsAction } from "@/app/action";
import TripList from "@/app/components/trip-list";

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
  const initialTrips = await getTripsAction({ page });

  return <TripList initialTrips={initialTrips} />;
}
