// @flow
import * as React from "react";
type Props = {};
import certificado from "../assets/certificado.png";
import Image from "next/image";

const Questionamentos = (props: Props) => {
  return (
    <div id="part2" className="container mx-auto">
      <div className="flex justify-center md:py-20">
        <h1
          id="kanit"
          className="w-[900px] text-3xl xl:text-5xl md:text-4xl text-center py-10"
        >
          Você tem dificuldade em entregar um
          <span className="text-[#ff00e5] font-medium">Alisamento</span>
          que sua cliente vai lavar o cabelo e vai ficar lisinho?
        </h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-4 md:px-20 px-5">
        <div className="flex flex-wrap md:flex-nowrap md:my-10 md:justify-start justify-center ">
          <div className="flex justify-center w-full md:w-auto">
            <div className="flex justify-center items-center h-28 w-28 md:h-32 md:w-32 rounded-full bg-gradient-to-t from-[#C368D1] to-[#FF00E5] m-5">
              <span id="kanit" className="text-6xl font-bold ">
                ?
              </span>
            </div>
          </div>
          <h1
            id="kanit"
            className=" w-[800px] flex justify-center items-center text-center md:text-left md:text-2xl lg:text-3xl"
          >
            Fica aí gastando horrores em produtos caros e mesmo assim os seus
            ALISAMENTOS não ficam perfeitos?
          </h1>
        </div>
        <div className="flex flex-wrap md:flex-nowrap my-10 md:justify-end justify-center ">
          <div className="flex justify-center w-full md:w-auto md:hidden block">
            <div className="flex justify-center items-center h-32 w-32 rounded-full bg-gradient-to-t from-[#C368D1] to-[#FF00E5] m-5">
              <span id="kanit" className="text-6xl font-bold ">
                ?
              </span>
            </div>
          </div>
          <h1
            id="kanit"
            className=" w-[800px] flex justify-center items-center text-center md:text-2xl text-center lg:text-3xl md:text-right"
          >
            Não sabe qual tempo de pausa do produto para cada espessura de fio
            de cabelo?
          </h1>
          <div className="flex justify-center w-full md:w-auto md:block hidden">
            <div className="flex justify-center items-center h-32 w-32 rounded-full bg-gradient-to-t from-[#C368D1] to-[#FF00E5] m-5">
              <span id="kanit" className="text-6xl font-bold ">
                ?
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap my-10 md:justify-start justify-center ">
          <div className="flex justify-center w-full md:w-auto">
            <div className="flex justify-center items-center h-32 w-32 rounded-full bg-gradient-to-t from-[#C368D1] to-[#FF00E5] m-5">
              <span id="kanit" className="text-6xl font-bold ">
                ?
              </span>
            </div>
          </div>
          <h1
            id="kanit"
            className="flex justify-center items-center text-center md:text-left md:text-2xl lg:text-3xl"
          >
            Não sabe qual a temperatura exata para <br /> cada tipo de cabelo.
          </h1>
        </div>
        <div className="flex justify-center flex-wrap">
          <p
            id="kanit"
            className="md:text-5xl text-xl text-center font-bold leading-relaxed"
          >
            <span className="bg-[#FF0000] leading-relaxed">
              {" "}
              EU SEI COMO É DIFICIL
            </span>{" "}
            TER TODAS ESSAS DÚVIDAS!  PORQUE{" "}
            <span className="bg-[#FF0000] leading-relaxed">
              EU JÁ PASSEI POR ISSO
            </span>{" "}
            DENTRO DO MEU SALÃO
          </p>

          <p id="kanit" className="md:text-4xl text-center font-semibold my-10">
            Mas calma, eu criei um{" "}
            <span className="bg-[#FF0000]">TREINAMENTO LISO PREMIUM</span> onde
            eu coloquei tudo que você precisa saber para ter muita segurança
            desde a hora de conduzir uma conversar com a sua cliente até o
            momento de fazer ela se apaixonar pelo seus ALISAMENTOS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questionamentos;
