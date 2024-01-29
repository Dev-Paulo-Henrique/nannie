import { Flex, Image, Center, Link } from "@chakra-ui/react";

interface SliderItemProps {
  src: string | undefined;
  text: string;
  link: string;
}

export function SliderItem({ src, text, link }: SliderItemProps) {
  return (
    <Flex direction="column" mx={3} w={200} alignItems="center">
      <Center>
        <Link href={link} target="_blank">
          <Image
            src={src}
            // borderRadius="150px 10px 150px 150px"
            // objectFit="contain"
            // objectPosition="center"
            // w={{ base: 150, md: 200 }}
            maxH={{ base: 150, md: 70 }}
            alt={text}
          />
        </Link>
      </Center>
      {/* <Text
        fontSize={{ base: "sm", md: "lg" }}
        mt="0.5rem"
        fontWeight="bold"
        textAlign="center"
        fontFamily="Archivo"
        color="gray.600"
      >
        {text}
      </Text> */}
    </Flex>
  );
}
