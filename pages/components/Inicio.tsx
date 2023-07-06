// @flow
import * as React from "react";
type Props = {};

import Image from "next/image";
import FOTO01 from "../assets/FOTO01.png";
import decorativotop from "../assets/decorativo-top.png";
import vantagens from "../assets/vantagens.png";

const Inicio = (props: Props) => {
  return (
    <div id="parte1" className="container mx-auto">
      <Image
        className="-mt-[100px] md:-mt-[230px] 2xl:-mt-[440px] xl:-mt-[340px] lg:-mt-[290px]"
        src={decorativotop}
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div
          id="imagem"
          className="md:hidden block flex justify-center items-center px-14 mt-10"
        >
          <Image src={FOTO01} alt="" />
        </div>
        <div id="titulo" className="flex justify-center items-center md:pl-10">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold md:text-left text-center">
            {" "}
            <span id="kanit" className="lg:text-4xl text-xl font-normal">
              Aprenda o segredo dos Alisamentos
            </span>
            <br />
            <span id="kanit" className="lg:text-5xl text-xl font-normal">
              Que me fez faturar
            </span>
            <span className="text-[#ff00e5]">
              <br />
              Mais de R$10.000
              <br />
              por mês
            </span>
            <br />
            <span id="kanit" className="lg:text-4xl text-xl font-normal">
              Mesmo que você seja iniciante
            </span>
          </h1>
        </div>
        <div
          id="imagem"
          className="md:block hidden flex justify-center items-center md:p-5"
        >
          <Image src={FOTO01} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        <a
          href="https://go.hotmart.com/P84169592I?ap=fbe8"
          id="kanit"
          className="rounded-3xl md:px-28 px-10 py-5 bg-gradient-to-r from-[#c368d1] to-[#ff00e5] md:text-4xl text-3xl font-semibold md:mt-3 mt-14 hover:brightness-75"
        >
          QUERO APRENDER
        </a>
        <div className="flex justify-center w-full">
          <div className="w-[1000px] my-10 md:p-24 p-10">
            <Image src={vantagens} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
