import { TripAdvantage } from "@/app/model";
import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  advantage: TripAdvantage;
  icon: ReactNode;
}

export default function AdvantageDetail({ advantage, icon }: Props) {
  return (
    <Box display="flex" justifyContent="space-around" gap={4}>
      <Box mt={1}>{icon}</Box>
      <Box flexDirection="column">
        <Text fontWeight="bold" fontSize="xl">
          {advantage.title}
        </Text>
        <Text color="gray.500" fontSize="md">
          {advantage.description}
        </Text>
      </Box>
    </Box>
  );
}
