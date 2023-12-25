import { WrapItem, Text } from "@chakra-ui/react";
import { CircleListIcon } from "./Circle";

interface WrapItemProps {
    text: string;
}

export function Item({text}: WrapItemProps) {
  return (
    <WrapItem alignItems="center">
      <CircleListIcon />
      <Text color="gray.600" ml={2} fontSize={{base: 14, md: 18}} w={{base: "130px", md: "180px"}}>{text}</Text>
    </WrapItem>
  );
}
