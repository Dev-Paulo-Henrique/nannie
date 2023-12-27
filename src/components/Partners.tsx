import {
  Box,
  Flex,
  Text,
  Heading,
  useBreakpointValue,
  Divider,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderItem } from "./Slick";
import Medortopedista from "../assets/medortopedista-min.png";
import Terapeuta from "../assets/terapeuta_ocupacional-min.png";
import Cuidadores from "../assets/cuidadores_recife_pe-min.jpg";
import Enfermeira from "../assets/enf2-min.png";
import Supervisora from "../assets/enfermeira_angellus-min.png";
import Fisioterapeuta from "../assets/ortopedista_angellusrecife-min.jpg";
import Nutricionista from "../assets/angellus_nutricionista_recife-min.jpg";
import Educador from "../assets/educadorfisico_angellus-min.jpg";

export function Partners() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    arrows: true,
    // centerPadding: '60px',
  };

  const settingsMobile = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    arrows: true,
    // centerPadding: '120px',
  };
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
        // bgGradient="linear(to-b, white, rgb(8,178,204, 0.15))"
      >
        <Box w="md" mb={{ base: 5, md: 0 }}>
          <Text
            color="gray.600"
            fontFamily="Archivo"
            letterSpacing={1}
            // textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: 18, md: 24 }}
          >
            Profissionais
          </Text>
          <Heading
            fontWeight="bold"
            fontSize={{ base: 50, md: 80 }}
            color="#09B3CD"
            fontFamily="Archivo"
            mt={-3}
            // textAlign={{ base: "center", md: "start" }}
          >
            Parceiros
          </Heading>
          <Divider
            orientation="horizontal"
            borderWidth={1}
            w={100}
            opacity={1}
            borderColor="gray.600"
          />
          <Text
            color="gray.600"
            fontFamily="Archivo"
            letterSpacing={1}
            textAlign="justify"
            fontSize={{ base: 16, md: 20 }}
            mt={6}
            maxW={400}
          >
            Profissionais especializados prontos para te atender!
          </Text>
        </Box>
        <Flex flex={1}>
          {isWideVersion ? (
            <Slider {...settings}>
              <SliderItem src={Medortopedista} text="Médico Ortopedista" />
              <SliderItem src={Terapeuta} text="Terapeuta Ocupacional" />
              <SliderItem src={Cuidadores} text="Cuidadores Pessoais" />
              <SliderItem
                src={Enfermeira}
                text="Enfermeira (cuidados paliativos e assistência domiciliar)"
              />
              <SliderItem src={Supervisora} text="Enfermeira Supervisora" />
              <SliderItem src={Fisioterapeuta} text="Fisioterapeuta" />
              <SliderItem src={Nutricionista} text="Nutricionista" />
              <SliderItem src={Educador} text="Educador físico" />
            </Slider>
          ) : (
            <Slider {...settingsMobile}>
              <SliderItem src={Medortopedista} text="Médico Ortopedista" />
              <SliderItem src={Terapeuta} text="Terapeuta Ocupacional" />
              <SliderItem src={Cuidadores} text="Cuidadores Pessoais" />
              <SliderItem
                src={Enfermeira}
                text="Enfermeira (cuidados paliativos e assistência domiciliar)"
              />
              <SliderItem src={Supervisora} text="Enfermeira Supervisora" />
              <SliderItem src={Fisioterapeuta} text="Fisioterapeuta" />
              <SliderItem src={Nutricionista} text="Nutricionista" />
              <SliderItem src={Educador} text="Educador físico" />
            </Slider>
          )}
        </Flex>
      </Flex>
    </>
  );
}
