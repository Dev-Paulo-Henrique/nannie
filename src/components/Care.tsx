import {
  Flex,
  Heading,
  Text,
  Box,
  Wrap,
  Center,
  Image,
  useBreakpoint,
  Button,
  // useBreakpointValue,
} from "@chakra-ui/react";
import Waves from "../assets/svg/waves.svg";
import Nivel from "../assets/svg/nivel.svg";
import Heart from "../assets/svg/heart.svg";
import Cuidador from "../assets/cuidador_angellus-min-1.jpg";
// import Agent from "../assets/enfermeira_angellus_rec-min-1024x733.jpg";
import { Item } from "./Wrap";
import { Card } from "./Card";

export function Care() {
  // const isWideVersion = useBreakpointValue({
  //   base: false,
  //   lg: true
  // })
  const breakpoint = useBreakpoint({ ssr: false });
  return (
    <>
      <Image src={Waves} transform="rotate(180deg)" />
      <Flex
        as="section"
        align="center"
        justify={{ base: "center", md: "space-between" }}
        // direction={{base: "column", md:"row"}}
        wrap="wrap"
        px={{ base: 5, md: 100 }}
        py={{ base: 5, md: 50 }}
        bg="rgb(8,178,204, 0.15)"
        color="white"
        //   bgImage={Waves}
        //   bgRepeat="no-repeat"
        //   bgPosition="bottom right"
      >
        <Box w="md" mb={{ base: 5, md: 0 }}>
          <Heading
            fontWeight="bold"
            fontSize={{ base: 35, md: 80 }}
            color="#09B3CD"
            fontFamily="Archivo"
            // mt={-3}
            // textAlign={{ base: "center", md: "start" }}
          >
            MAIS QUE CUIDADOS
          </Heading>
          <Text
            as="b"
            color="gray.600"
            fontFamily="Archivo"
            letterSpacing={1}
            mt={-2}
            textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: 18, md: 24 }}
            display="flex"
            flexDirection="row"
          >
            COMPROMISSO E SERIEDADE <Image src={Heart} w={6} ml={2} />
          </Text>
          <Text
            color="gray.600"
            fontFamily="Archivo"
            letterSpacing={1}
            textAlign="justify"
            fontSize={{ base: 14, md: 18 }}
            my={4}
            maxW={400}
          >
            Contratar um Cuidador Pessoal para o vô, para a vó, mãe , pai ou
            parentes é assegurar um serviço qualificado e todo compromisso
            necessário…{" "}
          </Text>
          <Wrap justify="space-between">
            <Item text="Cuidados Higiênicos" />
            <Item text="Rotina de Medicação" />
            <Item text="Alimentação" />
            <Item text="Passeios" />
            <Item text="Sociointerativo" />
            <Item text="Atividades Lúdicas" />
          </Wrap>
          {breakpoint == "base" && (
            <Center my={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Image src={Cuidador} rounded="100%" maxW={{base: 300, md: 250}} my={4}/>

                <Heading
                  color="#09B3CD"
                  overflow="hidden"
                  fontSize={{ base: 22, md: 36 }}
                >
                  Cuidadores Pessoais Disponíveis
                </Heading>
                <Text
                  color="gray.600"
                  fontSize={{ base: 12, md: 16 }}
                  my={2}
                  fontWeight="bold"
                  // maxW={300}
                >
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
            </Center>
          )}
        </Box>
        {breakpoint !== "base" && <Card />}
      </Flex>
      <Image src={Nivel} />
    </>
  );
}
