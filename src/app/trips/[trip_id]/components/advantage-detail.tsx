import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function AdvantageDetail({ title, description, icon }: Props) {
  return (
    <Box display="flex" justifyContent="space-around" gap={4}>
      <Box mt={1}>{icon}</Box>
      <Box flexDirection="column">
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Text color="gray.500" fontSize="md">
          {description}
        </Text>
      </Box>
    </Box>
  );
}
