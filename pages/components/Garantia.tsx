// @flow
import * as React from "react";
type Props = {};

import SELO from "../assets/SELO.png";
import Image from "next/image";

const Garantia = (props: Props) => {
  return (
    <div id="part3" className="container mx-auto">
      <div
        id="GARANTIA"
        className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r to-[#B768C3] from-[#FF00E5] py-7 px-7"
      >
        <div className=" flex justify-center items-center">
          <div className="w-[500px]">
            <Image src={SELO} alt="certificado de conclusão" />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <h1 className="text-xl md:text-2xl md:leading-[70px] font-bold my-5 md:text-left text-center">
            Relaxe
            <br />
            <span className="text-3xl md:text-5xl font-bold">
              GARANTIA DE <br />7 DIAS !
            </span>
            <p className="text-xl md:text-2xl font-semibold my-5 md:text-left text-center">
              Fique tranquila! Se não gostar do conteúdo nós devolveremos cada
              centavo! Se por algum motivo você não gostar do treinamento poderá
              solicitar reembolso total do valor do curso a qualquer momento
              dentro do prazo de 7 dias após a compra.
            </p>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Garantia;
