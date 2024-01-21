import { Trip } from "@/app/page";

export const BASE_URL = "https://chooose-api.vercel.app";

export const getTrips = async ({
  page = 1,
}: {
  page?: number;
}): Promise<Trip[]> => {
  const response = await fetch(`${BASE_URL}/trips?_page=${page}`);
  return await response.json();
};

export const getTripDetails = async (id: string): Promise<Trip> => {
  const response = await fetch(`${BASE_URL}/trips/${id}`);
  const data = await response.json();
  return data;
};
