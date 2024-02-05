import { Flex, Text, Image } from "@chakra-ui/react";

interface ImageProps {
  src: string;
  title: string;
  text: string;
}

export function Images({ src, title, text }:ImageProps) {
  return (
    <Flex direction="column" alignItems="center">
      <Image
        src={src}
        objectFit={{base: "contain", md: "cover"}}
        borderRadius="25px"
        w="100%"
        h={{base: "auto", md: "auto"}}
      />
      <Text as="b" color="gray.600" fontSize={{base: 16, md: 26}}>
        {title}
      </Text>
      <Text color="gray.500" fontSize={{base: 12, md: 18}} textAlign="center">
        {text}
      </Text>
    </Flex>
  );
}
