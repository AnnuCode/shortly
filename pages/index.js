import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import { Container } from "../src/components/styled/Container.styled";
import Header from "../src/components/Header";
import { ThemeProvider } from "@emotion/react";
import { GlobalStyles } from "../src/components/styled/Global";
import Hero from "../src/components/Hero";
import Panel from "../src/components/URLInputBox";
import URLInputBox from "../src/components/URLInputBox";
import AdvancedSection from "../src/components/AdvancedSection";
import Footer from "../src/components/Footer";
import AltFooter from "../src/components/AltFooter";
import Headerrr from "../src/components/Headerrr";
import {Global, css} from '@emotion/react'

const styles = css`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap');
body{
  font-family: 'Poppins', sans-serif;
}
  `

  


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
        
        <Headerrr/>
        <Hero />
        
        <AdvancedSection />
        <Footer />
      </>
    </ThemeProvider>
  );
}
