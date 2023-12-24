import { Flex, Text, Image } from "@chakra-ui/react";
import Logo from "../assets/logo-footer.png";
// import Waves from "../assets/waves.png"
// import "./Waves.css"

export function Footer() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      direction="column"
      wrap="wrap"
      padding={5}
      bg="#09B3CD"
      color="white"
    //   backgroundImage={Waves}
    //   backgroundPosition="top right"
    //   backgroundRepeat="repeat"
      className="ocean"
    >
      <Flex align="center" mr={5}>
        <Image src={Logo} alt="Logo" w="150px" />
      </Flex>

      <Text textAlign="center" fontFamily="Archivo">
        Angellus – Cuidadores de pessoas<br/>todos os direitos reservados – {new Date().getUTCFullYear()}©
      </Text>
    </Flex>
  );
}
