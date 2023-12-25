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
} from "@chakra-ui/react";
import Waves from "../assets/svg/waves.svg";
import Agent from "../assets/enfermeira_angellus_rec-min-1024x733.jpg";
import { Item } from "./Wrap";

export function Consultation() {
  const breakpoint = useBreakpoint({ ssr: false });
  console.log(breakpoint)
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
        bgGradient="linear(to-b, white, rgb(8,178,204, 0.15))"
        //   bgImage={Waves}
        //   bgRepeat="no-repeat"
        //   bgPosition="bottom right"
      >
        <Box w="md" mr={{ md: 50 }} mb={{ base: 5, md: 0 }}>
          <Text
            color="gray.600"
            fontFamily="Archivo"
            letterSpacing={1}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: 18, md: 24 }}
          >
            Te acompanhamos nas
          </Text>
          <Heading
            fontWeight="bold"
            fontSize={{ base: 50, md: 80 }}
            color="#09B3CD"
            fontFamily="Archivo"
            mt={-3}
            textAlign={{ base: "center", md: "start" }}
          >
            Consultas <br />{" "}
            <Text color="gray.600" fontSize={{ base: 40, md: 70 }} mt={-5}>
              e Exames
            </Text>
          </Heading>
          {breakpoint == "base" && (
            <Center>
              <Image src={Agent} className="agent" w="100%" h="100%" />
            </Center>
          )}
          <Wrap mt={4} justify="space-between">
            <Item text="Exames de Rotina" />
            <Item text="Hemograma" />
            <Item text="Endoscopia" />
            <Item text="Exames de Imagem" />
            <Item text="Eletrocardiograma" />
            <Item text="Ecocardiograma" />
          </Wrap>
          <Center color="gray.600" fontSize={{ base: 18, md: 20 }} mt={5}>
            E muito mais!
          </Center>
          <Center>
            <Button
              mt={2}
              variant="outline"
              fontFamily="Archivo"
              bg="#09B3CD"
              colorScheme="#0793A8"
              _hover={{ bg: "#0793A8", borderColor: "#0793A8" }}
              w={200}
              h={50}
            >
              Contate agora!
            </Button>
          </Center>
        </Box>
        {breakpoint == "md" && (
          <Image src={Agent} className="agent" w="50%" />
        )}
      </Flex>
      <Image src={Waves} />
    </>
  );
}
