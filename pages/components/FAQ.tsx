// @flow
import * as React from "react";
type Props = {};
const FAQ = (props: Props) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-20">
        FAQ TIRE SUAS
        <span className="text-[#ff00e5]"> DÚVIDAS</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="my-20 col-span-2 md:col-span-1 mx-5">
          <h1 id="kanit" className="text-3xl text-left font-bold">
            QUAL FORMATO DAS AULAS?
          </h1>
          <p id="kanit" className="text-xl text-left font-medium">
            VIDEO AULAS GRAVADAS BEM DETALHADAMENTE
          </p>
        </div>

        <div className="col-span-2 flex justify-center">
          <div className="w-72 h-1 bg-[#ff00e5] rounded-full" />
        </div>

        <div />
        <div className="my-20 col-span-2 md:col-span-1 mx-5">
          <h1 id="kanit" className="text-3xl text-right font-bold">
            QUAL A FORMA DE PAGAMENTO?
          </h1>
          <p id="kanit" className="text-xl text-right font-medium">
            CARTÃO DE CRÉDITO, DÉBITO OU PIX
          </p>
        </div>

        <div className="col-span-2 flex justify-center">
          <div className="w-72 h-1 bg-[#ff00e5] rounded-full" />
        </div>

        <div className="my-20 col-span-2 md:col-span-1 mx-5">
          <h1 id="kanit" className="text-3xl text-left font-bold">
            COMO RECEBO MEU ACESSO?
          </h1>
          <p id="kanit" className="text-xl text-left font-medium">
            VOCÊ RECEBERÁ SEU ACESSO EM ATÉ 5 MINUTOS APÓS A CONFIRMAÇÃO DE
            PAGAMENTO NO SEU E MAIL COM O LINK DE ACESSO AO TREINAMENTO.
          </p>
        </div>
        <div />
        <div className="col-span-2 flex justify-center">
          <div className="w-72 h-1 bg-[#ff00e5] rounded-full" />
        </div>
        <div />

        <div className="my-20 col-span-2 md:col-span-1 mx-5">
          <h1 id="kanit" className="text-3xl text-right font-bold">
            TENHO GARANTIA?
          </h1>
          <p id="kanit" className="text-xl text-right font-medium">
            SIM, GARANTIA DE 7 DIAS INCONDICIONAL CASO VOCE Vê QUE ESSE
            TREINAMENTO NÃO É PARA VOCÊ E COMO EU GARANTO QUE ESSE TREINAMENTO
            VAI SER UM DIVISOR DE ÁGUA NA SUA VIDA, EU ME COMPROMETO QUE SE VOCÊ
            DISSER QUE SEGUIU TODOS OS PASSO A PASSO E MESMO ASSIM NÃO CONSEGUIU
            FATURAR, EU MAIZA DEVOLVO SEU DINHEIRO DE VOLTA.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
