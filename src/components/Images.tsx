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
        objectFit="cover"
        borderRadius="150px"
        w="100%"
        h={400}
      />
      <Text as="b" fontSize={26}>
        {text}
      </Text>
    </Flex>
  );
}
