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
import { useState } from "react";
import { useFormik } from "formik";
import { useLanguage } from "../context/LanguageContext";
import { Country, State } from "country-state-city";
import Swal from "sweetalert2";
import { CityCode } from "./cities";
import Cities from 'cities.json';

interface City {
  lng: string;
  lat: string;
  name: number;
  country: string;
  admin1: string;
  admin2: string;
}

export function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const countries = Country.getAllCountries();
  const formik = useFormik({
    initialValues: {
      name: "",
      country: "",
      state: "",
      city: "",
      option: "",
      email: "",
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const response = await fetch("https://hzpjfk-9001.csb.app/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          Swal.fire({
            title: "Email enviado com sucesso!",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
          formik.resetForm();
        } else {
          Swal.fire({
            title: "Erro ao enviar o email!",
            icon: "error",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      } catch (error) {
        console.error("Erro ao enviar o email:", error);
        Swal.fire({
          title:
            "Erro ao enviar o email. Por favor, tente novamente mais tarde.",
          icon: "error",
          showConfirmButton: false,
          timer: 2000,
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  let stateCode = "";
  for (const state of CityCode) {
    if (state.name === formik.values.state) {
      stateCode = state.code;
      break;
    }
  }
// console.log(Cities)

const cidades: City[] = Cities as City[]

const cities: City[] = cidades as unknown as City[];

  const filteredCities = cities
    .filter(
      (city: City) =>
        city.country === formik.values.country &&
        city.admin1 === stateCode?.split(".")[1]
    )
    .sort((a: City, b: City) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
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
              htmlFor="email"
            >
              {translations[flag ? "pt" : "en"]["home"]["form"]["email"]}
            </FormLabel>
            <Input
              placeholder={
                translations[flag ? "pt" : "en"]["home"]["form"]["email"]
              }
              type="email"
              color="gray.500"
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              name="email"
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
                formik.setFieldValue("state", "");
                // formik.setFieldValue("city", "");
              }}
              value={formik.values.country}
            >
              {countries.map((country, index) => (
                <option key={index} value={country.isoCode}>
                  {country.name}
                </option>
              ))}
            </Select>
            {State.getStatesOfCountry(`${formik.values.country}`).length !==
              0 && (
              <Select
                mt={3}
                placeholder={
                  translations[flag ? "pt" : "en"]["home"]["form"]["state"]
                }
                color="gray.500"
                id="state"
                name="state"
                onChange={(e) => {
                  formik.handleChange(e);
                  formik.setFieldValue("city", "");
                }}
                value={formik.values.state}
              >
                {State.getStatesOfCountry(`${formik.values.country}`).map(
                  (state, index) => (
                    <option key={index} value={state.name}>
                      {state.name}
                    </option>
                  )
                )}
              </Select>
            )}
            {formik.values.state && (
              <Select
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
            {/* {City.getCitiesOfState(`${formik.values.country}`, `${formik.values.state}`).map((city, index) => (
                <option key={index} value={city.name}>
                  {city.name}
                </option>
              ))} */}
            {filteredCities.map((city: City, index: number) => (
                  <option key={index} value={city?.name}>
                    {city?.name}
                  </option>
                ))}
            </Select>
            )}
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
              <option>
                {translations[flag ? "pt" : "en"]["home"]["form"]["item1"]}
              </option>
              <option>
                {translations[flag ? "pt" : "en"]["home"]["form"]["item2"]}
              </option>
              <option>
                {translations[flag ? "pt" : "en"]["home"]["form"]["item3"]}
              </option>
              <option>
                {translations[flag ? "pt" : "en"]["home"]["form"]["item4"]}
              </option>
              <option>
                {translations[flag ? "pt" : "en"]["home"]["form"]["item5"]}
              </option>
            </Select>
          </FormControl>
          <Button
            mt={4}
            bg="#09B3CD"
            colorScheme="#0793A8"
            _hover={{ bg: "#0793A8", borderColor: "#0793A8" }}
            overflowY="hidden"
            isDisabled={
              !formik.values.country ||
              !formik.values.state ||
              // !formik.values.city ||
              !formik.values.name ||
              !formik.values.option
            }
            isLoading={isLoading}
            type="submit"
          >
            {!isLoading &&
              translations[flag ? "pt" : "en"]["home"]["form"]["button"]}
          </Button>
        </form>
      </Box>
    </Flex>
  );
}
