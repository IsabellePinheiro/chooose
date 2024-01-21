import { Trip } from "@/app/page";

export const getTripDetails = async (id: string): Promise<Trip> => {
  const response = await fetch(`http://localhost:8000/trips/${id}`);
  const data = await response.json();
  return data;
};
