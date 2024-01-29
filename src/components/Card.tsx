import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Image,
  //   useBreakpoint,
  // useBreakpointValue,
} from "@chakra-ui/react";
// import Heart from "../assets/svg/heart.svg";
import Cuidador from "../assets/doutuora.jpg";

export function Card() {
  // const isWideVersion = useBreakpointValue({
  //   base: false,
  //   lg: true
  // })
  //   const breakpoint = useBreakpoint({ ssr: false });
  return (
    <>
      <Flex
        as="section"
        align="center"
        justify={{ base: "center", md: "space-between" }}
        //   direction={{base: "column", md:"row"}}
        //   wrap="wrap"
        p={5}
        bg="white"
        color="white"
        boxShadow="lg"
        rounded={150}
        // maxW={{ md: "70%" }}
        flex={{ md: 1 }}
        //   bgImage={Waves}
        //   bgRepeat="no-repeat"
        //   bgPosition="bottom right"
      >
        <Box display="absolute" mr={10}>
          <Image
            src={Cuidador}
            rounded="100%"
            w={250}
            h={250}
            objectFit="cover"
            objectPosition="top"
          />
        </Box>
        {/* <Box position="relative" top={-24} right={20} bg="white" py={2} px={4} borderColor="gray.200" borderWidth={2} rounded={100}>
          <Image src={Heart} rounded="100%" w={3} />
        </Box> */}
        <Flex flex={1} flexDir="column">
          <Heading
            color="#09B3CD"
            overflow="hidden"
            fontSize={{ base: 22, md: 36 }}
          >
            Conheça nossa equipe médica
          </Heading>
          <Text
            color="gray.600"
            fontSize={{ base: 12, md: 16 }}
            my={2}
            maxW={300}
          >
            Clique e agende um atendimento
          </Text>
          <Button
            mt={2}
            // variant="outline"
            fontFamily="Archivo"
            bg="#09B3CD"
            colorScheme="#0793A8"
            _hover={{ bg: "#0793A8", borderColor: "#0793A8" }}
            w={200}
            h={50}
            isDisabled
          >
            Solicitar agora!
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
