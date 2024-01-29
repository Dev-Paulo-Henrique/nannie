import {
  Box,
  Stack,
  Flex,
  Link,
  // Button,
  useDisclosure,
  Image
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../assets/logo-header.png"


export function Header(){
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={5}
      bg="#09B3CD"
      color="white"
      // position="fixed"
      // zIndex={999}
      w="100%"
      // h="100px"
      // {...props}
    >
      <Flex align="center" mr={5}>
          <Image src={Logo} alt='Logo' w='150px' onClick={() => window.location.reload()} cursor="pointer"/>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        // alignItems="center"
        justify="flex-end"
        mr={10}
        gap={{base: 1 , md: 100}}
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
        // flexDirection={{ base: "row", md: "column"}}
      >
        <Link href="#home" fontFamily="Archivo">Início</Link>
        {/* <Link href="#" fontFamily="Archivo">Blog</Link>
        <Link href="#" fontFamily="Archivo">Dúvidas</Link> */}
        <Link href="#contato" fontFamily="Archivo">Contato</Link>
      </Stack>

      {/* <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant="outline"
          fontFamily="Archivo"
          colorScheme="#0793A8"
          _hover={{ bg: "#0793A8", borderColor: "#0793A8" }}
        >
          Criar conta
        </Button>
      </Box> */}
    </Flex>
  );
}