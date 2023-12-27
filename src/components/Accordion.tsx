import { Flex, Accordion, Heading, Text, Box } from "@chakra-ui/react";
import { AccordionItemElement as AccordionItem } from "./AccordionItem";
import Background from "../assets/waves.png";

export function AccordionElement() {
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
      <Box w="md" mr={{ md: 50 }} mb={{ base: 5, md: 0 }}>
        <Heading
          fontWeight="bold"
          fontSize={{ base: 35, md: 45 }}
          color="#09B3CD"
          fontFamily="Archivo"
          // textAlign={{ base: "justify", md: "start" }}
        >
          TIRE TODAS AS SUAS DÚVIDAS
        </Heading>
        <Text
          color="gray.600"
          fontFamily="Archivo"
          letterSpacing={1}
          textAlign="justify"
          fontSize={{ base: 14, md: 20 }}
        >
          Este ao lado é o nosso F.A.Q! Nele você pode sanar todas as suas
          dúvidas sobre a Nannie e os nossos cuidados!
        </Text>
      </Box>
      <Accordion allowToggle flex={1} display="flex" flexDir="column" gap={2}>
        <AccordionItem
          title="Como funciona o atendimento"
          firstText="Nosso atendimento é realizado de forma totalmente humanizada e empática. Realizamos uma avaliação das necessidades do cliente e a definição de um "
          bold="plano de cuidados personalizado"
          secondText=". Os cuidadores são selecionados com base nas habilidades e experiências para atender às suas necessidades específicas."
        />
        <AccordionItem
          title="Em quais localidades atendemos"
          firstText="Atendemos toda a Região Metropolitana do Recife "
          bold="(RMR)"
          secondText=". Nosso modelo de atendimento é Home
          Care. Isso significa que um profissional especializado irá
          cuidar de você no conforto do seu lar."
        />
        <AccordionItem
          title="Dúvidas sobre medicações"
          firstText="Não prescrevemos nenhum tipo de medicação! O nosso time de enfermagem realiza "
          bold="aplicações e auxilia o uso"
          secondText=" de medicamentos já prescritos pelo seu médico."
        />
        <AccordionItem
          title="Existem planos de cuidados 24 horas?"
          firstText="Sim! Esse modelo aplica-se a pacientes "
          bold="hospitalizados ou pós-operátorio"
          secondText=" que ainda não obtiveram alta. Um cuidador irá acompanha-ló e passar a noite com você no hospital, cuidando, observando e auxiliando."
        />
      </Accordion>
    </Flex>
  );
}
