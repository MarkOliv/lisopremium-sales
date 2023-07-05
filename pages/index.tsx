import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Inicio from "./components/Inicio";
import decorativotop from "./assets/decorativo-top.png";
import Sobre from "./components/Questionamentos";
import Garantia from "./components/Garantia";
import ParaQuem from "./components/ParaQuem";
import Rodape from "./components/Rodape";
import Treinamento from "./components/Treinamento";
import Oferta from "./components/Oferta";
import Questionamentos from "./components/Questionamentos";
import Conteudos from "./components/Conteudos";
import Perguntas from "./components/Perguntas";
import Bonus from "./components/Bonus";
import FAQ from "./components/FAQ";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Marcos Oliveira" />
        <meta name="description" content="Treinamento Liso Premium" />
        <title>Treinamento Liso Premium</title>
      </Head>

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-CVK0SWR347"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CVK0SWR347');
          
          `}
      </Script>

      <Inicio />
      <Treinamento />
      <Oferta />
      <Questionamentos />
      <ParaQuem />
      <Garantia />
      <Conteudos />
      <Perguntas />
      <Garantia />
      <Bonus />
      <FAQ />
      <Rodape />

      {/* <Sobre /> */}
    </div>
  );
}
