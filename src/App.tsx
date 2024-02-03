import { useState } from "react";
import { Form } from "./components/Form.tsx";
import { AccordionElement as Accordion } from "./components/Accordion.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
// import { FloatingButton } from "./components/FloatingButton.tsx";
import { Load } from "./components/Load.tsx";
import { Section } from "./components/Section.tsx";
import { Partners } from "./components/Partners.tsx";
import { Care } from "./components/Care.tsx";
import { Main } from "./components/Main.tsx";
import { LanguageProvider } from "./context/LanguageContext";
import { Translate } from "./components/Translate";

function App() {
  const [isLoad, setIsLoad] = useState(true);
  setTimeout(() => {
    setIsLoad(false);
  }, 2000);

  return (
    <>
      {isLoad ? (
        <Load />
      ) : (
        <>
          <LanguageProvider>
            <Header />
            <Main />
            <Care />
            <Partners />
            <Section />
            <Accordion />
            <Form />
            <Footer />
            <Translate/>
            {/* <FloatingButton /> */}
          </LanguageProvider>
        </>
      )}
    </>
  );
}

export default App;
