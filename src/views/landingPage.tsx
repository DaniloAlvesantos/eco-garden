import Earth from "../assets/earth.svg";

import { PiPlant } from "react-icons/pi";

export const LandingPage = () => {
  return (
    <section
      id="hero"
      className="flex flex-col sm:flex-row mx-auto my-[3rem] sm:my-[6.25rem] items-center justify-center lg:gap-12"
    >
      <div className="space-y-4 text-center md:text-start">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
          Cultive mais, <br /> desperdice menos
        </h2>
        <p className="max-w-[32.25rem] text-lg sm:text-base">
          Sistema de irrigação inteligente com sensores automaticos para manter
          hortas comunitárias sempre saudável, economizando água e facilitando o
          cuidado coletivo
        </p>
        <button className="flex items-center justify-center w-full sm:w-auto mx-auto md:mx-0  gap-4 bg-eco-green-500 text-eco-light px-8 py-2.5 rounded-full cursor-pointer hover:bg-eco-green-400 transition-colors duration-300 text-lg">
          <PiPlant className="text-eco-green-300 size-7" /> Faça sua parte
        </button>
      </div>
      <img
        src={Earth}
        alt="earth illustration"
        className="size-[20rem] sm:size-[18rem] md:size-[20rem] object-cover drop-shadow-md"
      />
    </section>
  );
};
