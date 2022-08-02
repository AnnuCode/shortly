import { ThemeProvider } from "@emotion/react";

import Hero from "../src/components/Hero";

import AdvancedSection from "../src/components/AdvancedSection";
import Footer from "../src/components/Footer";

import Headerrr from "../src/components/Headerrr";
import { Global, css } from "@emotion/react";

const styles = css`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap");
  body {
    font-family: "Poppins", sans-serif;
  }
`;

const theme = {
  colors: {
    header: "#fff",
    body: "#fff",
    footer: "003333",
    tomato: "red",
    heading: "rgb(31 41 55)",
  },
};

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global styles={styles} />

        <Headerrr />
        <Hero />

        <AdvancedSection />
        <Footer />
      </>
    </ThemeProvider>
  );
}
