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
import { useLanguage } from "../context/LanguageContext";
import { Country, State, City } from "country-state-city";

export function Form() {
  const countries = Country.getAllCountries();
  const formik = useFormik({
    initialValues: {
      name: "",
      country: "",
      state: "",
      city: "",
      option: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { flag, translations } = useLanguage();


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
      <Heading
        color="#09B3CD"
        fontWeight="bold"
        fontFamily="Archivo"
        fontSize={{ base: 30, md: 45 }}
        mb={5}
        overflowY="hidden"
      >
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
              placeholder={
                translations[flag ? "pt" : "en"]["home"]["form"]["placeholder1"]
              }
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
              placeholder={
                translations[flag ? "pt" : "en"]["home"]["form"]["country"]
              }
              color="gray.500"
              id="country"
              name="country"
              onChange={(e) => {
                formik.handleChange(e);
                formik.setFieldValue('state', '');
                formik.setFieldValue('city', '');
              }}
              value={formik.values.country}
            >
              {countries.map((country, index) => (
                <option key={index} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </Select>
            {formik.values.country && <Select
              mt={3}
              placeholder={
                translations[flag ? "pt" : "en"]["home"]["form"]["state"]
              }
              color="gray.500"
              id="state"
              name="state"
              onChange={(e) => {
                formik.handleChange(e);
                formik.setFieldValue('city', '');
              }}
              value={formik.values.state}
            >
              {State.getStatesOfCountry(`${formik.values.country}`).map((state, index) => (
                <option key={index} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </Select>}
            {formik.values.state && <Select
              mt={3}
              placeholder={
                translations[flag ? "pt" : "en"]["home"]["form"]["city"]
              }
              color="gray.500"
              id="city"
              name="city"
              onChange={formik.handleChange}
              value={formik.values.city}
            >
              {City.getCitiesOfState(`${formik.values.country}`, `${formik.values.state}`).map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))}
            </Select>}
          </FormControl>
          <FormControl isRequired>
            <FormLabel color="#09B3CD" fontWeight="regular" fontSize={20}>
              {translations[flag ? "pt" : "en"]["home"]["form"]["input3"]}
            </FormLabel>
            <Select
              placeholder={
                translations[flag ? "pt" : "en"]["home"]["form"]["placeholder3"]
              }
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
            // isDisabled={!formik.values.country || !formik.values.state || !formik.values.city || !formik.values.name || !formik.values.option}
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
