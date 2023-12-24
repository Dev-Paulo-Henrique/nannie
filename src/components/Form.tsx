import {
  Flex,
  Select,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading
} from "@chakra-ui/react";
import { useFormik } from "formik";

export function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      option: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Flex
      as="nav"
      align="center"
      justify="center"
      direction="column"
      px={{ base: 5, md: 100 }}
      py={{ base: 5, md: 50 }}
      bg="white"
      id="contato"
    >
        <Heading color="#09B3CD" fontWeight={600} mb={5}>Contato</Heading>
      <Box w={{base: "2sm", md:"xl"}} border="2px solid #09B3CD" p={5} borderRadius="md">
        <form onSubmit={formik.handleSubmit}>
          <FormControl isRequired>
            <FormLabel
              color="#09B3CD"
              fontWeight="regular"
              fontSize={20}
              htmlFor="name"
            >
              Como você se chama?
            </FormLabel>
            <Input
              placeholder="Digite seu nome..."
              color="gray.500"
              onChange={formik.handleChange}
              value={formik.values.name}
              id="name"
              name="name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="#09B3CD" fontWeight="regular" fontSize={20}>
              Como vamos te ajudar?
            </FormLabel>
            <Select
              placeholder="Selecione uma opção"
              color="gray.500"
              id="option"
              name="option"
              onChange={formik.handleChange}
              value={formik.values.option}
            >
              <option>Idosos</option>
              <option>Paciente hospitalizado</option>
              <option>Pós-operatório</option>
              <option>PCDs</option>
            </Select>
          </FormControl>
          <Button
            mt={4}
            bg="#09B3CD"
            colorScheme="#0793A8"
            _hover={{ bg: "#0793A8", borderColor: "#0793A8" }}
            // isLoading={props.isSubmitting}
            type="submit"
          >
            Enviar
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
