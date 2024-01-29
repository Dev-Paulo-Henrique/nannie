import {
  Box,
  Flex,
  Text,
  Heading,
  useBreakpointValue,
  Divider,
  Image,
  Link,
  Grid,
  Center,
  // Wrap,
  // WrapItem
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderItem } from "./Slick";
import TiSaude from "../assets/logo_ti-saude.png";
import Fecomercio from "../assets/logo_fecomercio.png";
import DPSP from "../assets/logo_dpsp.png";
import Interne from "../assets/logo_interne.png";

export function Partners() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: false,
    arrows: false,
    cssEase: "linear",
    // centerPadding: '60px',
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
        // bg="white"
        color="white"
        mt={10}
        bgGradient="linear(to-b, white, rgb(8,178,204, 0.15))"
      >
        <Box w="md" mb={{ base: 5, md: 0 }} flex={{ md: 1 }}>
          <Text
            color="gray.600"
            fontFamily="Archivo"
            letterSpacing={1}
            // textAlign={{ base: "center", md: "start" }}
            fontSize={{ base: 18, md: 24 }}
          >
            Clientes e
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
            Conheça quem já conheceu a Nannie
          </Text>
        </Box>
        <Flex flex={1}>
          {isWideVersion ? (
            <Slider {...settings}>
              <SliderItem src={TiSaude} link="https://www.tisaude.com" text="TiSaude" />
              <SliderItem src={Fecomercio} link="https://www.fecomercio-ce.com.br" text="Fecomércio-CE" />
              <SliderItem src={DPSP} link="https://www.grupodpsp.com.br" text="DPSP" />
              <SliderItem src={Interne} link="https://interne.com.br" text="Interne" />
            </Slider>
          ) : (
            // <Slider {...settingsMobile}>
            <Grid templateColumns="repeat(2, 1fr)" alignItems="center" gap={6}>
              <Center><Link href="https://www.fecomercio-ce.com.br" target="_blank"><Image maxW="100%" src={Fecomercio} /></Link></Center>
              <Center><Link href="https://interne.com.br" target="_blank"><Image maxW="100%"  src={Interne} /></Link></Center>
              <Center><Link href="https://www.tisaude.com" target="_blank"><Image maxW="100%" src={TiSaude} /></Link></Center>
              <Center><Link href="https://www.grupodpsp.com.br" target="_blank"><Image maxW="100%" src={DPSP} /></Link></Center>
            </Grid>
            // </Slider>
          )}
        </Flex>
      </Flex>
    </>
  );
}
