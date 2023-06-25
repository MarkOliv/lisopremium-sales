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

export default function Home() {
  return (
    <div>
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
