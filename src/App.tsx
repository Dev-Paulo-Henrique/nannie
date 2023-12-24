import { useState } from "react";
import { Aside1 } from "./Aside1";
import { Form } from "./components/Form.tsx";
import { AccordionElement as Accordion } from "./components/Accordion.tsx";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import { FloatingButton } from "./components/FloatingButton.tsx";
import { Load } from "./components/Load.tsx";

function App() {
  const [isLoad, setIsLoad] = useState(false);
  setTimeout(() => {
    setIsLoad(true);
  }, 2000);

  return (
    <>
      {!isLoad ? (
        <Load />
      ) : (
        <>
          <Header />
          {/* <Aside1 /> */}
          <Accordion />
          <Form/>
          <Footer />
          <FloatingButton />
        </>
      )}
    </>
  );
}

export default App;
