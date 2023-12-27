import { Flex, Image } from "@chakra-ui/react";
import LoadImage from "../assets/load.png";

export function Load() {
  return (
    <Flex direction="column" alignItems="center" justify="center" h="100vh">
      <Image src={LoadImage} w="lg" className="animate__animated animate__fadeIn"/>
    </Flex>
  );
}
