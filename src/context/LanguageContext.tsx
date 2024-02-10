import { useBoolean } from "@chakra-ui/react";
import React, { createContext, useContext, ReactNode } from "react";
import translations from "../translations.json";

type LanguageContextType = {
  flag: boolean;
  toggleLanguage: () => void;
  translate: (key: string) => string;
  translations: {
    pt: {
      header: {
        home: string;
        contact: string;
      };
      footer: {
        part1: string;
        part2: string;
      };
      home: {
        main: {
          title: string;
          text1: string;
          text2: string;
          imgtitle1: string;
          imgtext1: string;
          imgtitle2: string;
          imgtext2: string;
        };
        care: {
          title: string;
          subtitle: string;
          description: string;
          item1: string;
          item2: string;
          item3: string;
          item4: string;
          button: string;
          cardtitle: string;
          cardsubtitle: string;
        };
        partners: {
          title: string;
          subtitle: string;
          description: string;
        };
        section: {
          title: string;
          category: string;
          text: string;
          button: string;
        };
        accordion: {
          title: string;
          item1: {
            title: string;
            text: string;
          };
          item2: {
            title: string;
            text: string;
          };
          item3: {
            title: string;
            text: string;
          };
        };
        form: {
            title: string;
            email: string;
            input1: string;
            placeholder1: string;
            input2: string;
            country: string;
            state: string;
            city: string;
            input3: string;
            placeholder3: string;
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: string;
            button: string;
        }
      };
    };
    en: {
      header: {
        home: string;
        contact: string;
      };
      footer: {
        part1: string;
        part2: string;
      };
      home: {
        main: {
          title: string;
          text1: string;
          text2: string;
          imgtitle1: string;
          imgtext1: string;
          imgtitle2: string;
          imgtext2: string;
        };
        care: {
          title: string;
          subtitle: string;
          description: string;
          item1: string;
          item2: string;
          item3: string;
          item4: string;
          button: string;
          cardtitle: string;
          cardsubtitle: string;
        };
        partners: {
          title: string;
          subtitle: string;
          description: string;
        };
        section: {
          title: string;
          category: string;
          text: string;
          button: string;
        };
        accordion: {
          title: string;
          item1: {
            title: string;
            text: string;
          };
          item2: {
            title: string;
            text: string;
          };
          item3: {
            title: string;
            text: string;
          };
        };
        form: {
            title: string;
            email: string;
            input1: string;
            placeholder1: string;
            input2: string;
            country: string;
            state: string;
            city: string;
            input3: string;
            placeholder3: string;
            button: string;
            item1: string;
            item2: string;
            item3: string;
            item4: string;
            item5: string;
        }
      };
    };
  };
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [flag, setFlag] = useBoolean(true);

  const toggleLanguage = () => {
    setFlag.toggle();
  };

  const translate = (key: string): string => {
    return key;
  };

  const contextValue: LanguageContextType = {
    flag,
    toggleLanguage,
    translate,
    translations,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
