import { MinusIcon } from "@chakra-ui/icons";
import {
  AccordionItem,
  AccordionButton,
  Box,
  AccordionPanel,
  AccordionIcon,
  Text
} from "@chakra-ui/react";
import { CircleIcon } from "./Circle";

interface AccordionItemProps {
  title: string;
  firstText: string;
  bold?: string;
  secondText?: string;
}

export function AccordionItemElement({ title, firstText, bold, secondText}: AccordionItemProps) {
  return (
    <AccordionItem border="none">
      {({ isExpanded }) => (
        <>
            <AccordionButton
              bg="gray.200"
              color="#09B3CD"
              p={5}
              _hover={{ bg: "#09B3CD", color: "white" }}
              _expanded={{ bg: "#09B3CD", color: "white" }}
              borderRadius={isExpanded ? "10px 10px 0 0" : 10}
            >
              {isExpanded ? <MinusIcon fontSize="12px" /> : <CircleIcon />}
              <Box as="b" fontSize={{base: "16px", md:"22px"}} flex="1" textAlign="left" ml={4} fontFamily="Archivo">
                {title}
              </Box>
              {isExpanded ? (
                <AccordionIcon transform="rotate(0deg)" />
              ) : (
                <AccordionIcon transform="rotate(-90deg)" />
              )}
            </AccordionButton>
          <AccordionPanel pb={4} fontFamily="Archivo" bg="white" borderRadius="0 0 10px 10px" color="gray.500">{firstText}<Text as="b" fontFamily="Archivo" color="gray.600">{bold}</Text>{secondText}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}
