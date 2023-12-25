import { WrapItem, Text } from "@chakra-ui/react";
import { CircleListIcon } from "./Circle";

interface WrapItemProps {
    text: string;
}

export function Item({text}: WrapItemProps) {
  return (
    <WrapItem alignItems="center">
      <CircleListIcon />
      <Text color="gray.600" ml={2} fontSize={{base: 16, md: 18}} w={{base: "150px", md: "180px"}}>{text}</Text>
    </WrapItem>
  );
}
