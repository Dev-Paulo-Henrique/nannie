import { Flex, Text, Image } from "@chakra-ui/react";
import Logo from "../assets/logo-footer.png";
import Wave from "../assets/svg/wave.svg";
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { flag, translations } = useLanguage();

  return (
    <Flex
      as="footer"
      align="center"
      justify="center"
      direction="column"
      wrap="wrap"
      padding={5}
      color="white"
      backgroundImage={Wave}
      backgroundPosition="bottom"
      backgroundRepeat="no-repeat"
      className="ocean"
    >
      <Flex align="center" mr={5}>
        <Image src={Logo} alt="Logo" w={{ base: "100px", md: "150px" }} />
      </Flex>

      <Text
        textAlign="center"
        fontFamily="Archivo"
        fontSize={{ base: 14, md: 16 }}
        color="gray.500"
      >
        {translations[flag ? "pt" : "en"]["footer"]["part1"]}
        <br />
        {translations[flag ? "pt" : "en"]["footer"]["part2"]}
         {new Date().getUTCFullYear()}©
      </Text>
    </Flex>
  );
}
