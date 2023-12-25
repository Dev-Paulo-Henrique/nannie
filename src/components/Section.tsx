import {
  Flex,
  Heading,
  Text,
  Box,
  Center,
  Button,
  Image,
  useBreakpoint,
} from "@chakra-ui/react";
import PCD from "../assets/cuidador_pcd_angellus-min.jpg";

export function Section() {
  const breakpoint = useBreakpoint({ ssr: false });
  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify={{ base: "center", md: "space-between" }}
        // direction={{base: "column", md:"row"}}
        wrap="wrap"
        px={{ base: 5, md: 100 }}
        py={{ base: 5, md: 50 }}
        bg="white"
        color="white"
      >
        {breakpoint !== "base" && <Image src={PCD} className="pcd" w="50%" />}
        <Box w="md" mr={{ md: 50 }} mb={{ base: 5, md: 0 }}>
          <Text
            color="white"
            fontFamily="Archivo"
            letterSpacing={1}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: 16, md: 20 }}
            w="fit-content"
            bg="gray.600"
            p={2}
          >
            Crianças e adultos
          </Text>
          <Box borderBottomColor="gray.600" borderBottomWidth={1}></Box>
          <Heading
            fontWeight="bold"
            fontSize={{ base: 30, md: 70 }}
            color="#09B3CD"
            fontFamily="Archivo"
            my={2}
            // textAlign={{ base: "center", md: "start" }}
          >
            PCD
          </Heading>
          <Text
            color="gray.600"
            fontFamily="Archivo"
            letterSpacing={1}
            textAlign="justify"
            fontSize={{ base: 18, md: 20 }}
            borderLeftWidth={3}
            pl={6}
            borderLeftColor="#09B3CD"
          >
            A Nannie está preparada para auxiliar aqueles que , no momento,
            devido algum acidente ou condição existente, tenham alguma limitação
            física e queiram recuperar autonomia e desenvolver suas atividades
            diarias!
          </Text>
          {breakpoint == "base" && (
            <Center my={2}>
              <Image src={PCD} className="pcd" w="100%" />
            </Center>
          )}
          <Center>
            <Button
              mt={5}
              // variant="outline"
              fontFamily="Archivo"
              bg="#09B3CD"
              colorScheme="#0793A8"
              _hover={{ bg: "#0793A8", borderColor: "#0793A8" }}
              w={200}
              h={50}
            >
              Contrate agora!
            </Button>
          </Center>
        </Box>
      </Flex>
    </>
  );
}
