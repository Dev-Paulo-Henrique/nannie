import { Grid, Flex, Box, Text, Heading } from "@chakra-ui/react";
import Photo1 from "../assets/angellus_idosos-min.jpg";
import Photo2 from "../assets/angellus_pos_operatorio-min.jpg";
import Photo3 from "../assets/cuidadorespcdrecife-min.jpg";
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
      >
        <Box w="md" pr={{ md: 50 }} mb={{ base: 5, md: 0 }}>
          <Heading
            fontWeight="bold"
            fontSize={{ base: 40, md: 80 }}
            color="#09B3CD"
            fontFamily="Archivo"
            // textAlign={{ base: "justify", md: "start" }}
          >
            Cuidando de você
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
            com empatia e amor!
          </Text>
          <Text
            color="gray.600"
            fontFamily="Archivo"
            letterSpacing={1}
            textAlign="justify"
            fontSize={{ base: 14, md: 18 }}
          >
            Buscamos diariamente transformar vidas e realidade de maneira humana
            e empática, a Nannie nasceu do Amor e nossa maior missão e
            propósito é provar que através de cuidados e profissionalismo é
            possível vencer qualquer adversidade.
          </Text>
        </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={4} flex={1}>
        <Images src={Photo1} text="Idosos" />
        <Images src={Photo2} text="Pós-operatório" />
        <Images src={Photo3} text="PCDs" />
      </Grid>
      </Flex>
    </>
  );
}
