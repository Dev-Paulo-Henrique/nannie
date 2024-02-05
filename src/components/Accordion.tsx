import { Flex, Accordion, Heading, Box } from "@chakra-ui/react";
import { AccordionItemElement as AccordionItem } from "./AccordionItem";
import Background from "../assets/waves.png";
import { useLanguage } from '../context/LanguageContext';

export function AccordionElement() {
  const { flag, translations } = useLanguage();

  return (
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
      bgImage={Background}
      bgRepeat="no-repeat"
      bgPosition="bottom right"
    >
      <Box w="md" mr={{ md: 50 }} mb={{ base: 5, md: 0 }} flex={{ md: 1 }}>
        <Heading
          fontWeight="bold"
          fontSize={{ base: 30, md: 45 }}
          color="#09B3CD"
          fontFamily="Archivo"
          textAlign={{ base: "center", md: "start" }}
        >
          {translations[flag ? "pt" : "en"]["home"]["accordion"]["title"]}
        </Heading>
        {/* <Text
          color="gray.600"
          fontFamily="Archivo"
          letterSpacing={1}
          textAlign="justify"
          fontSize={{ base: 14, md: 20 }}
        >
          Este ao lado é o nosso F.A.Q! Nele você pode sanar todas as suas
          dúvidas sobre a Nannie e os nossos cuidados!
        </Text> */}
      </Box>
      <Accordion allowToggle flex={1} display="flex" flexDir="column" gap={2}>
        <AccordionItem
          title={translations[flag ? "pt" : "en"]["home"]["accordion"]["item1"]["title"]}
          text={translations[flag ? "pt" : "en"]["home"]["accordion"]["item1"]["text"]}
          // bold="plano de cuidados personalizado"
          // secondText=". Os cuidadores são selecionados com base nas habilidades e experiências para atender às suas necessidades específicas."
        />
        <AccordionItem
          title={translations[flag ? "pt" : "en"]["home"]["accordion"]["item2"]["title"]}
          text={translations[flag ? "pt" : "en"]["home"]["accordion"]["item2"]["text"]}
          // bold="(RMR)"
          // secondText=". Nosso modelo de atendimento é Home
          // Care. Isso significa que um profissional especializado irá
          // cuidar de você no conforto do seu lar."
        />
        <AccordionItem
          title={translations[flag ? "pt" : "en"]["home"]["accordion"]["item3"]["title"]}
          text={translations[flag ? "pt" : "en"]["home"]["accordion"]["item3"]["text"]}
          // bold="aplicações e auxilia o uso"
          // secondText=" de medicamentos já prescritos pelo seu médico."
        />
      </Accordion>
    </Flex>
  );
}
