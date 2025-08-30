"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

import { Sora } from "next/font/google";
import Link from "next/link";


const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // agora tem finos
});

const Headers = () => {
  const texts = ["Guedes Bampi Advogados", "Seu direito protegido, sua confiança garantida"];
  
  const [index, setIndex] = useState(0);

 useEffect(() => {
    if (index < texts.length - 1) {
      const timer = setTimeout(() => setIndex(index + 1), 2000);
      return () => clearTimeout(timer);
    }
    // Quando index == texts.length - 1, não faz mais nada → último texto fica na tela
  }, [index]);
  const path = usePathname();

  const MovieCurrentPath = (path: string) => {
    switch (path) {
      case "/":
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
              <div className="w-1/5">
                <Image alt="Logo" src={"/Logo.svg"} width={250} height={100} />
              </div>

              {/* Menu */}
              <ul className="flex-1 flex justify-end items-center gap-5 text-white">
                <Link href={"/"}>
                Inicio
                </Link>
                <Link href={"/about"}>
                Sobre
                </Link>
               
                <li>Serviços</li>
                <li className="bg-[#3782FF] w-[190px] h-[52px] rounded-full text-white flex items-center justify-center">
                  Entre em contato
                </li>
              </ul>
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
                      transition={{ duration: 1}}
                      className={`text-white text-6xl text-left ${sora.className} font-light`}
                    >
                      {texts[index]}
                    </motion.h1>
                  </AnimatePresence>
                </div>
              </div>

              <p
           
                className="w-[569px] text-left text-base text-[#F8F8F8] mt-10"
              >
                Construímos confiança no direito, enfrentando desafios com
                coragem e estratégia, para alcançar os melhores resultados.
              </p>

              <button
              
                className="w-[338px] h-[58px] bg-[#3782FF] rounded-full flex items-center justify-center gap-4"
              >
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
              </button>
              <hr
              
                className="border-t-[1px] border-dashed border-[#DADADA] w-full mt-[150px]"
              />
              <div
             
                className="w-full flex items-center justify-between"
              >
                <p>Desde 2010</p>
                <p>Porto Alegre</p>
                <p>15 anos de jornada</p>
              </div>
            </div>
          </header>
        );
      case "/about":
        return (
         <header className=" w-full h-[623px]  bg-[url('/about.svg')] bg-cover bg-center ">
          
        

      

            {/* Conteúdo do header */}
            <nav className="relative z-10 container mx-auto flex items-center justify-between py-6">
              {/* Logo */}
              <div className="w-1/5">
                <Image alt="Logo" src={"/Logo.svg"} width={250} height={100} />
              </div>

              {/* Menu */}
              <ul className="flex-1 flex justify-end items-center gap-5 text-white">
                <Link href={"/"}>
                Inicio
                </Link>
                <Link href={"/about"}>
                Sobre
                </Link>
               
                <li>Serviços</li>
                <li className="bg-[#3782FF] w-[190px] h-[52px] rounded-full text-white flex items-center justify-center">
                  Entre em contato
                </li>
              </ul>
            </nav>

    
   
                <div className=" container mt-30 mx-auto">
                <div className="flex flex-col gap-3 w-[567px] h-[205px]">
<h1 className={`text-6xl text-white ${sora.className} font-light `}>Segurança </h1>
<h1 className={`text-6xl text-white ${sora.className} font-light `}>jurídica para você </h1>
<h1 className={`text-6xl text-white ${sora.className} font-light `}>seguir em frente</h1>
                </div>
                  
                 </div>
       

          
              
             
        
          </header>
        );
      case "/services":
        return (
          <header className="w-full flex flex-col h-[849px] bg-blue-500">
            <nav className="container mx-auto flex items-center">
              <div className="w-[20%]">
                <Image alt="Logo" src={"/Logo.svg"} width={250} height={100} />
              </div>
              <ul className=" flex-1 flex items-center gap-5">
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Serviços</li>
                <li>Entre em contato</li>
              </ul>
            </nav>
          </header>
        );
      case "/contact":
        return (
          <header className="w-full flex flex-col h-[849px] bg-blue-500">
            <nav className="container mx-auto flex items-center">
              <div className="w-[20%]">
                <Image alt="Logo" src={"/Logo.svg"} width={250} height={100} />
              </div>
              <ul className=" flex-1 flex items-center gap-5">
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Serviços</li>
                <li>Entre em contato</li>
              </ul>
            </nav>
          </header>
        );
    }
  };
  return <>{MovieCurrentPath(path)}</>;
};

export default Headers;
