"use server";

import { getTrips } from "@/app/lib/api";

export async function getTripsAction({ page = 1 }: { page?: number }) {
  return await getTrips({ page });
}
