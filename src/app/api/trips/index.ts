export const getTrips = async () => {
  const response = await fetch("http://localhost:8000/trips");
  const data = await response.json();
  return data;
};
