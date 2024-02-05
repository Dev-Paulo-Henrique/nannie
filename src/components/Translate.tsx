// import translations from "../translations.json";
import {
  //  useBoolean, 
  Button } from "@chakra-ui/react";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { useLanguage } from "../context/LanguageContext";

export function Translate() {
  // const [flag, setFlag] = useBoolean();
  // const updateUI = () => {
  //   console.log(translations[flag ? "pt" : "en"]?.home?.main?.title);
  // };

  // updateUI();
  const { flag, toggleLanguage } = useLanguage();

  return (
    <>
      <Button
        variant="outline"
        fontFamily="Archivo"
        borderColor="#0793A8"
        colorScheme="#0793A8"
        bg="white"
        _hover={{ bg: "#eee" }}
        // onClick={setFlag.toggle}
        position="fixed"
        bottom={5}
        right={5}
        zIndex={999}
        onClick={toggleLanguage}
      >
        {flag == true ? (
          <span className="fi fi-br"></span>
        ) : (
          <span className="fi fi-us"></span>
        )}
      </Button>
    </>
  );
}
