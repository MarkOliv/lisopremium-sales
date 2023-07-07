// @flow
import * as React from "react";
type Props = {};

import FOTO3 from "../assets/FOTO3.png";
import SELOBONUS from "../assets/SELOBONUS.svg";

import Image from "next/image";

const Conteudos = (props: Props) => {
  return (
    <div id="parte4" className="container mx-auto">
      <h1 id="kanit" className="text-3xl text-center py-10">
        O que você vai encontrar <br /> dentro do{" "}
        <span className="text-[#ff00e5] font-medium">Treinamento</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div id="foto" className="flex justify-center items-center ">
          <Image src={FOTO3} alt="foto maiza" />
        </div>

        <div id="texto" className="grid grid-cols-1 p-10">
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • O QUE VAI TE DIFERENCIAR DOS SEUS CONCORRENTES. 
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • ANALISE DOS FIOS HIGIENIZAÇÃO DOS FIOS 
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • CRISTALIZAÇÃO APLICAÇÃO DO PRODUTO 
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • TEMPO DE PAUSA PARA CADA TIPO DE CABELO 
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • RETIRADA DO PRODUTO SECAGEM E SECAGEM EXPRESS
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • CHAPINHA CRIATIVA
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • ALISAMENTO NO CABELO TODO
          </p>
          <p
            id="kanit"
            className="text-3xl text-center my-5 md:text-left font-bold"
          >
            • RETOQUE DE RAIZ E CRISTALIZAÇÃO
          </p>

          <div className="flex lg:justify-start justify-center md:p-20">
            <a
              target="_blank"
              href="https://go.hotmart.com/P84169592I?ap=3ec1"
              id="kanit"
              className="rounded-3xl md:px-14 px-10 py-5 bg-gradient-to-r from-[#c368d1] to-[#ff00e5] md:text-4xl text-3xl font-semibold md:mt-3 mt-14 text-center hover:brightness-75"
            >
              QUERO PARTICIPAR
            </a>
          </div>
        </div>

        <div
          id="aulas teoricas"
          className="mx-5 md:mx-20 col-span-2 md:col-span-1 my-5"
        >
          <h1 className="text-4xl font-bold text-left">
            Aulas <span className="text-[#ff00e5]">Teóricas</span>
          </h1>
          <p className="text-xl text-left w-full">
            Nas aulas teóricas você vai aprender sobre atendimento, sobre a
            diferença de formol e ácidos, sobre o couro cabeludo.
          </p>
        </div>
        <div />
        <div />
        <div
          id="aulas praticas"
          className="mx-5 md:mx-20 col-span-2 md:col-span-1 my-5"
        >
          <h1 className="text-4xl font-bold text-right">
            Aulas <span className="text-[#ff00e5]">Praticas</span>
          </h1>
          <p className="text-xl text-right">
            Nas aulas práticas vocÊ vai aprender, retoque de raiz e
            cristalização e também alisamento em todo o cabelo vai aprender
            também sobre teste de mecha, sobre higienização, sobre aplicação
            express, retirada certa do produto após o tempo de pausa
            (importantíssimo para um resultado de excelência) Escova express,
            chapinha criativa e mostrar o resultado final para sua cliente. Vai
            aprender sobre CRISTALIZAÇÃO para suas clientes não ter o cabelo
            ralo com o tempo.
          </p>
        </div>

        <div className="col-span-2">
          <h1 className="text-4xl font-bold text-center mt-10">
            CURSOS <span className="text-[#ff00e5]">BÔNUS</span>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:mx-20 md:my-20 my-10 mx-10">
            <div>
              <div className="my-5">
                <h1 id="kanit" className="text-3xl text-center md:text-left">
                  Curso<span className="text-[#ff00e5]"> Botox Capilar</span>
                </h1>
                <p id="kanit" className="text-xl text-center md:text-left">
                  o que é para mim 40% do lucro do meu salão
                </p>
              </div>
              <div className="my-10">
                <h1 id="kanit" className="text-3xl text-center md:text-left">
                  Curso Lotando sua agenda através do <br />
                  <span className="text-[#ff00e5]"> Whatsapp</span>
                </h1>
                <p id="kanit" className="text-xl text-center md:text-left">
                  para você nunca ser esquecida pelas suas clientes
                </p>
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-72">
                <Image src={SELOBONUS} alt="selo bonus" />
              </div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center mt-10">
            O <span className="text-[#ff00e5]">SUPORTE</span>
          </h1>
          <p className="text-xl font-bold text-center mt-10">
            temos suporte pelo whatsapp
          </p>

          <div className="w-full flex justify-center md:my-20 p-10">
            <a
              target="_blank"
              href="https://go.hotmart.com/P84169592I?ap=3ec1"
              id="kanit"
              className="rounded-3xl md:px-28 px-10 py-5 bg-gradient-to-r from-[#c368d1] to-[#ff00e5] md:text-3xl text-3xl text-center font-semibold md:mt-3 mt-14 hover:brightness-75"
            >
              QUERO TER ACESSO A TUDO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conteudos;
