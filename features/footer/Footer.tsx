import FooterView from "./components/FooterView";
import FooterProvider from "./context/FooterProvider";

export default function Footer() {
  return (
    <FooterProvider>
      <FooterView />
    </FooterProvider>
  );
}
