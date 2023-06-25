// @flow
import * as React from "react";
import Image from "next/image";

import oferta from "../assets/oferta.png";
import certificado from "../assets/certificado.png";

const Oferta = () => {
  return (
    <div id="part3" className="container mx-auto">
      <div className="flex flex-wrap justify-center md:mb-32 p-5 md:p-0">
        <div className="w-[800px] mt-5">
          <Image src={oferta} alt="oferta" />
        </div>
        <div className="flex lg:justify-center justify-center px-10 w-full">
          <a
            href="https://pay.hotmart.com/A69854210Q"
            id="kanit"
            className="rounded-3xl md:px-14 px-10 py-5 bg-gradient-to-r from-[#c368d1] to-[#ff00e5] md:text-7xl text-3xl font-semibold md:mt-3 mt-14 text-center hover:brightness-75"
          >
            APROVEITAR OFERTA
          </a>
        </div>
      </div>

      <div
        id="certificado"
        className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-[#B768C3] to-[#FF00E5] py-7 px-7"
      >
        <div className="flex items-center justify-center">
          <h1 className="text-xl md:text-2xl md:leading-[70px] font-bold my-5 md:text-left text-center">
            Incluso esse Maravilhoso <br />
            <span className="text-3xl md:text-5xl font-bold">
              CERTIFICADO DE <br />
              CONCLUSÃO!
            </span>
          </h1>
        </div>
        <div className=" flex justify-center items-center">
          <div className="w-[500px]">
            <Image src={certificado} alt="certificado de conclusão" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oferta;
