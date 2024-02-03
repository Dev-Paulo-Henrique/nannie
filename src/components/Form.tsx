import {
  Flex,
  Select,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useFormik } from "formik";
// import Geonames from "geonames.js";
import { useLanguage } from '../context/LanguageContext';

export function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      local: "",
      option: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { flag, translations } = useLanguage();

  // const geonames = Geonames({
  //   username: "myusername",
  //   lan: "pt",
  //   encoding: "JSON",
  // });

  // const country: string[] = [];

  // geonames
  //   .search({ q: "CONT" })
  //   .then((resp) => {
  //     country.push(...resp.geonames);
  //     console.log(country);
  //   })
  //   .catch((err) => console.error(err));

  return (
    <Flex
      as="section"
      align="center"
      justify="center"
      direction="column"
      px={{ base: 5, md: 100 }}
      py={{ base: 5, md: 50 }}
      bg="white"
      id="contato"
    >
      <Heading color="#09B3CD" fontWeight={600} mb={5} overflowY="hidden">
      {translations[flag ? "pt" : "en"]["home"]["form"]["title"]}
      </Heading>
      <Box
        w={{ base: "2sm", md: "xl" }}
        border="2px solid #09B3CD"
        p={5}
        borderRadius="md"
      >
        <form onSubmit={formik.handleSubmit}>
          <FormControl isRequired>
            <FormLabel
              color="#09B3CD"
              fontWeight="regular"
              fontSize={20}
              htmlFor="name"
            >
              {translations[flag ? "pt" : "en"]["home"]["form"]["input1"]}
            </FormLabel>
            <Input
              placeholder={translations[flag ? "pt" : "en"]["home"]["form"]["placeholder1"]}
              color="gray.500"
              onChange={formik.handleChange}
              value={formik.values.name}
              id="name"
              name="name"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel
              color="#09B3CD"
              fontWeight="regular"
              fontSize={20}
              htmlFor="local"
            >
              {translations[flag ? "pt" : "en"]["home"]["form"]["input2"]}
            </FormLabel>
            <Select
              placeholder={translations[flag ? "pt" : "en"]["home"]["form"]["placeholder2"]}
              color="gray.500"
              id="local"
              name="local"
              onChange={formik.handleChange}
              value={formik.values.local}
            >
              <option>Brasil</option>
              <option>EUA</option>
              <option>Canadá</option>
              <option>Portugal</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="#09B3CD" fontWeight="regular" fontSize={20}>
            {translations[flag ? "pt" : "en"]["home"]["form"]["input3"]}
            </FormLabel>
            <Select
              placeholder={translations[flag ? "pt" : "en"]["home"]["form"]["placeholder3"]}
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
            {translations[flag ? "pt" : "en"]["home"]["form"]["button"]}
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
