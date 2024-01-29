import { WrapItem, Text } from "@chakra-ui/react";
import { CircleListIcon } from "./Circle";

interface WrapItemProps {
    text: string;
}

export function Item({text}: WrapItemProps) {
  return (
    <WrapItem alignItems="center">
      <CircleListIcon />
      <Text color="gray.600" ml={2} fontSize={{base: 12, md: 16}} w={{base: "130px", md: "170px"}}>{text}</Text>
    </WrapItem>
  );
}
