// @flow
import Image from "next/image";
import * as React from "react";

import cardBotox from "../assets/cardBotox.png";
import cardWPP from "../assets/cardWPP.png";

type Props = {};
const Bonus = (props: Props) => {
  return (
    <div className="container mx-auto">
      <h1 id="kanit" className="text-3xl font-bold text-center mt-10">
        RECEBA TAMBÉM
        <span className="text-[#ff00e5]"> BÔNUS ESPECIAIS</span>
      </h1>
      <div className="">
        <div className="mx-5">
          <h1 id="kanit" className="text-2xl font-bold text-left mt-10 mb-5">
            Curso
            <span className="text-[#ff00e5]"> Botox Capilar</span>
          </h1>
          <p id="kanit" className="md:pr-96">
            AQUI VOCÊ VAI APRENDER TUDO SOBRE O BOTOX CAPILAR, COMO VOCE PODE
            VENDER MAIS ESSE PROCEDIMENTO PARA AS MESMAS CLIENTES DAS
            PROGRESSIVAS, VAI APRENDER O PASSO A PASSO DE ACORDO COM O QUE O
            CABELO PRECISA… ENTENDER QUE É UMA QUÍMICA SIM, PORÉM VOCE TEM QUE
            SABER FALAR A DIFERENÇA PARA SUAS CLIENTES E EXPLICAR PRA ELAS EM
            QUE MOMENTO ELAS PODE ESTAR FAZENDO ESSE PROCEDIMENTO.
          </p>
          <div className="flex justify-center w-full my-20">
            <div className="w-96">
              <Image src={cardBotox} alt="card de preço" />
            </div>
          </div>
        </div>
        <div className="mx-5">
          <h1 id="kanit" className="text-2xl font-bold text-left mt-10 mb-5">
            Curso Lotando sua agenda através do
            <span className="text-[#ff00e5]"> Whatsapp</span>
          </h1>
          <p id="kanit" className="md:pr-96">
            NESSA AULA BÔNUS EU VOU TE ENSINAR ESTRATÉGIAS QUE EU USO AQUI NO
            MEU SALÃO QUE TE ENSINO DESDE O PRIMEIRO CONTATO COM A CLIENTE,
            CONFIRMAÇÃO DE ATENDIMENTO, PÓS ATENDIMENTO E LEMBRAR AS CLIENTES
            QUE JÁ ESTA NA HORA DELA VOLTAR, POIS ELAS AMAM SEREM LEMBRADAS….E
            ISSO FIDELIZA MUITO AS CLIENTES.
          </p>
          <div className="flex justify-center w-full my-20">
            <div className="w-96">
              <Image src={cardWPP} alt="card de preço" />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-5">
        <h1 id="kanit" className="text-3xl font-bold text-center mt-10">
          AQUI ESTÁ TUDO QUE VOCÊ ESTÁ
          <span className="text-[#ff00e5]"> LEVANDO HOJE</span>
        </h1>
        <h1 id="kanit" className="text-2xl font-bold text-left mt-10">
          Vídeo Aulas - Liso Premium: R$197,00
        </h1>
        <h1 id="kanit" className="text-2xl font-bold text-left mt-10">
          Bônus - Botox Capilar: R$97,00 <br />
          Bônus - Bombando no Whatsapp: R$97,00
        </h1>
        <h1 id="kanit" className="text-3xl font-bold text-center mt-10">
          O TOTAL DARIA:
          <span className="text-[#F02424] text-4xl"> R$391,00</span>
        </h1>
        <h1 id="kanit" className="text-3xl font-bold text-center mt-10">
          MAS <span className="text-[#13D460]"> LEVANDO HOJE ! </span>
          TODO ESSE CONTEÚDO VAI SAIR SOMENTE POR
        </h1>
        <h1 id="kanit" className="text-6xl font-bold text-center mt-10">
          <span className="text-[#13D460]">R$49,00</span>
        </h1>
      </div>
    </div>
  );
};

export default Bonus;
