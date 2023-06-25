// @flow
import * as React from "react";
type Props = {};
const Perguntas = (props: Props) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10">
        EU SEI QUE VOCÊ DEVE ESTAR CHEIA DE{" "}
        <span className="text-[#ff00e5]">PERGUNTAS</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="my-20 col-span-2 md:col-span-1 mx-5">
          <h1 id="kanit" className="text-3xl text-left font-bold">
            NÃO SOU CABELEIREIRA, VOU CONSEGUIR APRENDER?
          </h1>
          <p id="kanit" className="text-xl text-left font-medium">
            Sim, o nosso treinamento é bem detalhado ensinando todos passo a
            passo, para que você consiga aplicar tudo de forma bem simples.mas
            se mesmo assim tiver dúvidas temos um suporte pelo whatsApp para te
            auxiliar.
          </p>
        </div>

        <div className="col-span-2 flex justify-center">
          <div className="w-72 h-1 bg-[#ff00e5] rounded-full" />
        </div>

        <div />
        <div className="my-20 col-span-2 md:col-span-1 mx-5">
          <h1 id="kanit" className="text-3xl text-right font-bold">
            PRECISO INVESTIR EM PRODUTOS CAROS?{" "}
          </h1>
          <p id="kanit" className="text-xl text-right font-medium">
            Não, aqui dentro do treinamento vou te passar uma lista de
            fornecedores com valores acessiveis para você já iniciar e colocar
            dinheiro no bolso.
          </p>
        </div>

        <div className="col-span-2 flex justify-center">
          <div className="w-72 h-1 bg-[#ff00e5] rounded-full" />
        </div>

        <div className="my-20 col-span-2 md:col-span-1 mx-5">
          <h1 id="kanit" className="text-3xl text-left font-bold">
            E SE MESMO TERMINANDO EU TIVER MEDO DE FAZER? 
          </h1>
          <p id="kanit" className="text-xl text-left font-medium">
            Para isso eu aconselho você assistir 1 aula e praticar, com a mãe,
            com a irmã com a tia. a prática leva a perfeição.  NÃO SE COMPARE.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Perguntas;
