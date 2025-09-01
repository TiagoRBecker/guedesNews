"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { Sora } from "next/font/google";
import Link from "next/link";
import { menu } from "./mocks";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // agora tem finos
});

const Headers = () => {
  const texts = [
    "Guedes Bampi Advogados",
    "Seu direito protegido, sua confiança garantida",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < texts.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 2000);
      return () => clearTimeout(timer);
    }
  }, [index]);
  const path = usePathname();
  const logo = (
    <div className="w-1/5">
      <Link href={"/"}>
        <Image alt="Logo" src={"/Logo.svg"} width={250} height={100} />
      </Link>
    </div>
  );

  const links = (
    <ul className="flex-1 flex justify-end items-center gap-5 text-white">
      {menu.map((links, index) => (
        <Link key={index} href={links.link}>
          {links.title}
        </Link>
      ))}

      <Link
        href={"/contact"}
        className="bg-[#3782FF] w-[190px] h-[52px] rounded-full text-white flex items-center justify-center"
      >
        Entre em contato
      </Link>
    </ul>
  );
  const MovieCurrentPath = () => {
    switch (true) {
      case path === "/":
        return (
          <header className="relative w-full h-[896px] ">
            {/* Vídeo de fundo */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              src="/movies/home.mp4"
              autoPlay
              muted
            ></video>

            {/* Overlay opcional para contraste */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

            {/* Conteúdo do header */}
            <nav className="relative z-10 container mx-auto flex items-center justify-between py-6">
              {/* Logo */}
            {logo}

              {/* Menu */}
              {links}
            </nav>

            {/* Se quiser, conteúdo central do header */}
            <div className="relative z-10 flex flex-col gap-3 items-start justify-center w-full container mx-auto h-full text-center text-white">
              <div className="flex flex-col items-start gap-4">
                <div className=" w-[800px] h-[80px] font-bold">
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1 }}
                      className={`text-white text-6xl text-left ${sora.className} font-light`}
                    >
                      {texts[index]}
                    </motion.h1>
                  </AnimatePresence>
                </div>
              </div>

              <p className="w-[569px] text-left text-base text-[#F8F8F8] mt-10">
                Construímos confiança no direito, enfrentando desafios com
                coragem e estratégia, para alcançar os melhores resultados.
              </p>

               <Link href={"/contact"} className="w-[338px] h-[58px] bg-[#3782FF] rounded-full flex items-center justify-center gap-4">
                Converse com um especialista
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
              <hr className="border-t-[1px] border-dashed border-[#DADADA] w-full mt-[150px]" />
              <div className="w-full flex items-center justify-between">
                <p>Desde 2010</p>
                <p>Porto Alegre</p>
                <p>15 anos de jornada</p>
              </div>
            </div>
          </header>
        );
      case path ==="/about":
        return (
          <header className=" w-full h-[623px]  bg-[url('/about.svg')] bg-cover bg-center ">
            {/* Conteúdo do header */}
            <nav className="relative z-10 container mx-auto flex items-center justify-between py-6">
              {/* Logo */}
                {logo}

              {/* Menu */}
              {links}
            </nav>

            <div className=" container mt-30 mx-auto">
              <div className="flex flex-col gap-3 w-[567px] h-[205px]">
                <h1
                  className={`text-6xl text-white ${sora.className} font-light `}
                >
                  Segurança{" "}
                </h1>
                <h1
                  className={`text-6xl text-white ${sora.className} font-light `}
                >
                  jurídica para você{" "}
                </h1>
                <h1
                  className={`text-6xl text-white ${sora.className} font-light `}
                >
                  seguir em frente
                </h1>
              </div>
            </div>
          </header>
        );
      case  path.startsWith("/services"):
        return (
          <header className=" w-full h-[623px]  bg-[url('/services.svg')] bg-cover bg-center relative ">


              <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
            {/* Conteúdo do header */}
            <nav className="relative z-10 container mx-auto flex items-center justify-between py-6">
              {/* Logo */}
               {logo}

              {/* Menu */}
              {links}
            </nav>

            <div className=" container mt-30 mx-auto absolute flex items-center justify-center z-40 ">
              <div className="flex flex-col gap-3 w-[600px] h-[205px]">
                <h1
                  className={`text-6xl text-white font-light `}
                >
                 Excelência 
                </h1>
                <h1
                  className={`text-6xl text-white font-light `}
                >
                 Jurídica que Inspira
                </h1>
                <h1
                  className={`text-6xl text-white font-light `}
                >
                Confiança
                </h1>
              </div>
            </div>
          </header>
        );
      case path ==="/contact":
        return (
          <header className="relative w-full h-[701px]">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover object-center "
              src="/movies/contato.mp4"
              autoPlay
              muted
            ></video>

            {/* Overlay opcional para contraste */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
            <nav className="relative z-10 container mx-auto flex items-center justify-between py-6">
              {/* Logo */}
               {logo}

              {/* Menu */}
              {links}
            </nav>
            <div className="relative z-10 flex flex-col gap-3 items-start justify-center w-full container mx-auto mt-36">
              <div className="container mx-auto grid grid-cols-2  gap-6">
                <div className="w-full flex flex-col ">
                  <h1 className={`text-6xl text-white  font-light `}>
                    Estamos prontos
                  </h1>
                  <h1 className={`text-6xl text-white  font-light `}>
                    para lhe atender.
                  </h1>
                </div>
                <div className="w-full">
                  <p className="text-[#F8F8F8]">
                    A Guedes Bampi Advogados nasceu com o propósito de oferecer
                    soluções jurídicas de alto nível, pautadas pela ética,
                    clareza e comprometimento absoluto com cada cliente. Nosso
                    escritório é reconhecido pela atuação estratégica e pela
                    capacidade de transformar desafios jurídicos em resultados
                    sólidos e duradouros.
                  </p>
                </div>
              </div>
            </div>
          </header>
        );
    }
  };
  return <>{MovieCurrentPath()}</>;
};

export default Headers;
