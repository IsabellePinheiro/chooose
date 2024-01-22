import TripList from "@/app/components/trip-list";
import { getTrips } from "@/app/lib/api";

export default async function Home() {
  const initialTrips = await getTrips({});

  return <TripList initialTrips={initialTrips} />;
}
