import { Image } from "@chakra-ui/react";
import WhatsApp from "../assets/svg/whatsapp.svg";

export function FloatingButton() {
  return (
    <Image
      src={WhatsApp}
      position="fixed"
      bottom={5}
      right={5}
      w={16}
      h={16}
      cursor="pointer"
      title="WhatsApp"
      onClick={() => window.location.assign("https://wa.me/5581997528011")}
    />
  );
}
