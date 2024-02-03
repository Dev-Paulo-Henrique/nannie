import { Grid, Flex, Box, Text, Heading } from "@chakra-ui/react";
import Photo1 from "../assets/Transformacao-digital-na-area-da-saude.webp";
import Photo2 from "../assets/como-atender-na-telemedicina-telemedicina-morsch.webp";
import { Images } from "./Images";
import { useLanguage } from '../context/LanguageContext';


export function Main() {
  const { flag, translations } = useLanguage();

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
        <h1 id="greeting"></h1>
          <Heading
            fontWeight="bold"
            fontSize={{ base: 30, md: 55 }}
            color="#09B3CD"
            fontFamily="Archivo"
            textAlign={{ base: "center", md: "start" }}
          >
            {translations[flag ? "pt" : "en"]["home"]["main"]["title"]}
          </Heading>
          <Text
            color="gray.600"
            fontFamily="Archivo"
            letterSpacing={1}
            textAlign="justify"
            fontSize={{ base: 14, md: 18 }}
          >
            {translations[flag ? "pt" : "en"]["home"]["main"]["text1"]}
            <br />
            <br />
            {translations[flag ? "pt" : "en"]["home"]["main"]["text2"]}
          </Text>
        </Box>
        <Grid templateColumns="repeat(2, 1fr)" gap={4} flex={1}>
          <Images
            src={Photo1}
            title={translations[flag ? "pt" : "en"]["home"]["main"]["imgtitle1"]}
            text={translations[flag ? "pt" : "en"]["home"]["main"]["imgtext1"]}
          />
          <Images
            src={Photo2}
            title={translations[flag ? "pt" : "en"]["home"]["main"]["imgtitle2"]}
            text={translations[flag ? "pt" : "en"]["home"]["main"]["imgtext2"]}
          />
        </Grid>
      </Flex>
    </>
  );
}
