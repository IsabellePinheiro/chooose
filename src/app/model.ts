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
  advantages: Array<TripAdvantage>;
}

export interface TripAdvantage {
  title: string;
  description: string;
}
