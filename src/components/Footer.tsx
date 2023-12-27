import { Flex, Text, Image } from "@chakra-ui/react";
import Logo from "../assets/logo-footer.png";
import Wave from "../assets/svg/wave.svg";

export function Footer() {
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
        Angellus – Cuidadores de pessoas
        <br />
        todos os direitos reservados – {new Date().getUTCFullYear()}©
      </Text>
    </Flex>
  );
}
