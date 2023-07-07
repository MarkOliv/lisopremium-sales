// @flow
import * as React from "react";
type Props = {};

import FOTO02 from "../assets/FOTO2.png";
import Image from "next/image";

const ParaQuem = (props: Props) => {
  return (
    <div id="parte4" className="container mx-auto">
      <h1 id="kanit" className="text-5xl text-center py-10">
        Para quem é o<br />{" "}
        <span className="text-[#ff00e5] font-medium">Curso</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          id="fotoMobile"
          className="flex justify-center items-center md:hidden block"
        >
          <Image src={FOTO02} alt="foto maiza" />
        </div>
        <div id="texto" className="grid grid-cols-1 p-10">
          <p id="kanit" className="text-2xl text-center my-5 md:text-right">
            Cabelereira iniciantes Quer aprender da maneira certa a criar o LISO
            PREMIUN em qualquer cabelo...
          </p>
          <p id="kanit" className="text-2xl text-center my-5 md:text-right">
            Deseja faturar mais de $3.000.00 sendo Especialista em Alisamento
            com pouco investimento..
          </p>
          <p id="kanit" className="text-2xl text-center my-5 md:text-right">
            Amaria ter seu próprio Salão de Beleza e ser referência
          </p>
          <div className="flex lg:justify-end justify-center md:p-20">
            <a
              target="_blank"
              href="https://go.hotmart.com/P84169592I?ap=fbe8"
              id="kanit"
              className="rounded-3xl md:px-14 px-10 py-5 bg-gradient-to-r from-[#c368d1] to-[#ff00e5] md:text-4xl text-3xl font-semibold md:mt-3 mt-14 text-center hover:brightness-75"
            >
              EU QUERO
            </a>
          </div>
        </div>
        <div
          id="foto"
          className="flex justify-center items-center md:block hidden"
        >
          <Image src={FOTO02} alt="foto maiza" />
        </div>
      </div>
    </div>
  );
};

export default ParaQuem;
