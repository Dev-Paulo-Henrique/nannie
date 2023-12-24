import { Grid, Flex, Box, Text, Heading } from "@chakra-ui/react";
import Photo1 from "./assets/angellus_idosos-min.jpg";
import Photo2 from "./assets/angellus_pos_operatorio-min.jpg";
import Photo3 from "./assets/cuidadorespcdrecife-min.jpg";
import { Images } from "./components/Images";

export function Aside1() {
  return (
    <Flex color="white" bg="red" h="100vh" px={100} my={50}>
      <Flex alignItems="center" w="md" bg="green.500">
        <Flex direction="column">
          <Heading size="4xl">Cuidando de você</Heading>
          <Text>com empatia e amor!</Text>
          <Text>
            Buscamos diariamente transformar vidas e realidade de maneira humana
            e empática, a Angellus nasceu do Amor e nossa maior missão e
            propósito é provar que através de cuidados e profissionalismo é
            possível vencer qualquer adversidade.
          </Text>
        </Flex>
      </Flex>
      <Flex
        alignItems="center"
        justify="center"
        direction="column"
        px={4}
        flex={1}
        bg="tomato"
      >
        <Grid templateColumns="repeat(3, 1fr)" gap={2}>
          <Box
            w="100%"
            h="200px"
            bgGradient="linear(to-r, white, transparent)"
          />
          <Text
            whiteSpace="nowrap"
            overflow="hidden"
            // textOverflow="ellipsis"
          >
            Buscamos diariamente transformar vidas e realidade de maneira humana
            e empática, a Angellus nasceu do Amor e nossa maior missão e
            propósito é provar que através de cuidados e profissionalismo é
            possível vencer qualquer adversidade.
          </Text>
          <Box
            w="100%"
            h="200px"
            bgGradient="linear(to-l, white, transparent)"
          />
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={3}>
          <Images src={Photo1} text="Idosos"/>
          <Images src={Photo2} text="Pós-operatório"/>
          <Images src={Photo3} text="PCDs"/>
        </Grid>
      </Flex>
    </Flex>
  );
}
