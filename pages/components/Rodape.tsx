// @flow
import Image from "next/image";
import * as React from "react";
import vantagens from "../assets/vantagens.png";
type Props = {};
const Rodape = (props: Props) => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center w-full">
        <div className="w-[1000px] my-10 md:p-24 p-10">
          <Image src={vantagens} alt="" />
        </div>
      </div>
      <div className="p-5">
        <p id="kanit" className="text-center">
          Maiza Gonçalves Treinamentos | Copyright ©️2023 <br /> Todos os
          direitos reservados
        </p>
      </div>
    </div>
  );
};
export default Rodape;
