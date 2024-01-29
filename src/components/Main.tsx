import { Grid, Flex, Box, Text, Heading } from "@chakra-ui/react";
import Photo1 from "../assets/Transformacao-digital-na-area-da-saude.webp";
import Photo2 from "../assets/como-atender-na-telemedicina-telemedicina-morsch.webp";
import { Images } from "./Images";


export function Main() {

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
        id="home"
      >
        <Box w="md" pr={{ md: 50 }} mb={{ base: 5, md: 0 }} flex={{ md: 1 }}>
          <Heading
            fontWeight="bold"
            fontSize={{ base: 30, md: 55 }}
            color="#09B3CD"
            fontFamily="Archivo"
            textAlign={{ base: "center", md: "start" }}
          >
            Estratégia e cuidado digital
          </Heading>
          <Text
            color="gray.600"
            fontFamily="Archivo"
            letterSpacing={1}
            textAlign="justify"
            fontSize={{ base: 14, md: 18 }}
          >
            A Nannie é uma empresa de saúde digital (Health Tech) que desenvolve
            e oferta soluções para personalizar e agilizar o cuidado em saúde.
            <br />
            <br />
            Buscamos os melhores desfechos clínicos e a melhor experiência para
            o paciente, profissionais e serviços de saúde.
          </Text>
        </Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} flex={1}>
          <Images
            src={Photo1}
            title="Nannie é tecnologia"
            text="Consultoria estratégica em saúde digital  para melhorar a performance do seu negócio"
          />
          <Images
            src={Photo2}
            title="Nannie é saúde"
            text="Atendimento médico e de enfermagem online e domiciliar. Agende e nós vamos até você!"
          />
        </Grid>
      </Flex>
    </>
  );
}
