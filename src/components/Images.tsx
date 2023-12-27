import { Flex, Text, Image } from "@chakra-ui/react";

interface ImageProps {
  src: string;
  text: string;
}

export function Images({ src, text }:ImageProps) {
  return (
    <Flex direction="column" alignItems="center">
      <Image
        src={src}
        objectFit={{base: "contain", md: "cover"}}
        borderRadius={{base: "25px",md: "150px"}}
        w="100%"
        h={{base: "auto", md: 400}}
      />
      <Text as="b" color="#09B3CD" fontSize={{base: 16, md: 26}}>
        {text}
      </Text>
    </Flex>
  );
}
