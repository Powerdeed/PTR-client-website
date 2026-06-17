import ContactProvider from "@/app/contact/context/ContactProvider";
import FooterView from "./components/FooterView";
import FooterProvider from "./context/FooterProvider";

export default function Footer() {
  return (
    <ContactProvider>
      <FooterProvider>
        <FooterView />
      </FooterProvider>
    </ContactProvider>
  );
}
