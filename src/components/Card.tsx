import {
  Flex,
  Heading,
  Text,
  Box,
  Wrap,
  Center,
  Button,
  Image,
  useBreakpoint,
  // useBreakpointValue,
} from "@chakra-ui/react";
import Heart from "../assets/svg/heart.svg";
import Cuidador from "../assets/cuidador_angellus-min-1.jpg";

export function Card() {
  // const isWideVersion = useBreakpointValue({
  //   base: false,
  //   lg: true
  // })
  const breakpoint = useBreakpoint({ ssr: false });
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
        flex={1}
        //   bgImage={Waves}
        //   bgRepeat="no-repeat"
        //   bgPosition="bottom right"
      >
        <Box display="absolute">
          <Image src={Cuidador} rounded="100%" maxW={250} />
        </Box>
        <Box position="relative" top={-24} right={20} bg="white" py={2} px={4} borderColor="gray.200" borderWidth={2} rounded={100}>
          <Image src={Heart} rounded="100%" w={3} />
        </Box>
        <Flex
          flex={1}
          flexDir="column"
        >
          <Heading color="#09B3CD" overflow="hidden" fontSize={{ base: 22, md: 36 }}>
            Cuidadores Pessoais Disponíveis
          </Heading>
          <Text color="gray.600" fontSize={{ base: 12, md: 16 }} my={2} maxW={300}>
            Clique no botão abaixo e solicite agora um cuidador home care.
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
          >
            Solicitar agora!
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
