import { Flex, Accordion, Heading, Box } from "@chakra-ui/react";
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
      <Box w="md" mr={{ md: 50 }} mb={{ base: 5, md: 0 }} flex={{ md: 1 }}>
        <Heading
          fontWeight="bold"
          fontSize={{ base: 25, md: 45 }}
          color="#09B3CD"
          fontFamily="Archivo"
          textAlign={{ base: "center", md: "start" }}
        >
          TIRE TODAS AS SUAS DÚVIDAS
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
          title="Como funciona nosso atendimento de saúde"
          firstText="Os atendimentos são previamente agendados. 
          Utilizamos uma plataforma digital certificada para as 
          teleconsultas (consultas online) e a domicílio. 
          Atendemos em qualquer lugar do Brasil ou no exterior por 
          Teleconsulta.
          Atendemos visitas domiciliares apenas na região 
          metropolitana do Recife-PE."
          // bold="plano de cuidados personalizado"
          // secondText=". Os cuidadores são selecionados com base nas habilidades e experiências para atender às suas necessidades específicas."
        />
        <AccordionItem
          title="Consultoria em saúde digital"
          firstText="Planejamento estratégico, tendências e inovações tecnológicas. 
          Jornada digital, da ideação à validação de serviços, processos e produtos digitais.
          Assessoria e consultoria especializada para apoiar a transformação digital na saúde."
          // bold="(RMR)"
          // secondText=". Nosso modelo de atendimento é Home
          // Care. Isso significa que um profissional especializado irá
          // cuidar de você no conforto do seu lar."
        />
        <AccordionItem
          title="Educação em saúde digital"
          firstText={`Palestras, Cursos e Conteúdos sob demanda na área de saúde digital. Planejamento e organização educacional para oferta de cursos personalizados para gestores, profissionais e pacientes. Plataformas digitais para educação em saúde no ensino presencial ou à distância.`}
          // bold="aplicações e auxilia o uso"
          // secondText=" de medicamentos já prescritos pelo seu médico."
        />
      </Accordion>
    </Flex>
  );
}
