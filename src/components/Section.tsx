import {
  Flex,
  Heading,
  Text,
  Box,
  Center,
  Button,
  Image,
  useBreakpoint,
  // useBreakpointValue,
} from "@chakra-ui/react";
import PCD from "../assets/treinamento.jpg";
// import XXX from "../assets/xxx-min.png";

export function Section() {
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
        // direction={{base: "column", md:"row"}}
        wrap="wrap"
        px={{ base: 5, md: 100 }}
        py={{ base: 5, md: 50 }}
        bg="white"
        color="white"
      >
        {/* <Image src={XXX} w={16} position="absolute"  /> */}
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
            Saúde Digital
          </Text>
          <Box borderBottomColor="gray.600" borderBottomWidth={1}></Box>
          <Heading
            fontWeight="bold"
            fontSize={{ base: 30, md: 60 }}
            color="#09B3CD"
            fontFamily="Archivo"
            my={2}
            // textAlign={{ base: "center", md: "start" }}
          >
            MAIS QUE TECNOLOGIA
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
            A Nannie cuida do seu negócio. Incorporar as melhores práticas em
            saúde digital é fundamental para entregar soluções digitais que
            melhorarem a experiência do seu cliente e a performance da sua
            indústria ou serviço de saúde. Ofertamos consultoria estratégica
            para apoiar a transformação digital, conteúdos, palestras e cursos
            personalizados para gestores, profissionais de saúde e pacientes.
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
              isDisabled
            >
              Contrate agora!
            </Button>
          </Center>
        </Box>
      </Flex>
    </>
  );
}
