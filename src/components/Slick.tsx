import { Flex, Text, Image, Center } from "@chakra-ui/react";

interface SliderItemProps {
  src: string | undefined;
  text: string;
}

export function SliderItem({ src, text }: SliderItemProps) {
  return (
    <Flex direction="column" mx={3} w={200}>
      <Center>
        <Image src={src} borderRadius="150px 10px 150px 150px" objectFit="cover" objectPosition="center" w={{base: 150, md: 200}} h={{base: 150, md: 200 }} alt={text}/>
      </Center>
      <Text fontSize={{base: "sm", md: "lg"}} mt="0.5rem" fontWeight="bold" textAlign="center" fontFamily="Archivo" color="gray.600">
        {text}
      </Text>
    </Flex>
  );
}
