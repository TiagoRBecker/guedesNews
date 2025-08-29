"use client";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Headers = () => {
  const path = usePathname();

  const MovieCurrentPath = (path: string) => {
    switch (path) {
      case "/":
        return (
          <header className="relative w-full h-[849px] ">
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
                <li>Inicio</li>
                <li>Sobre</li>
                <li>Serviços</li>
                <li className="bg-[#3782FF] w-[190px] h-[52px] rounded-full text-white flex items-center justify-center">
                  Entre em contato
                </li>
              </ul>
            </nav>

            {/* Se quiser, conteúdo central do header */}
            <div className="relative z-10 flex flex-col gap-3 items-start justify-center w-full container mx-auto h-full text-center text-white">
              <div className="flex flex-col items-start gap-4">
                <div className="text-5xl w-[569px] font-bold">
                <ReactTyped
                  strings={[
                    "Seu direito protegido, sua confiança garantida",
                    "Aqui pode ser um outro tipo de texto",
                    "Aqui pode ser um outro tipo de texto e assim por diante ate  terminar",
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </div>
              </div>

              <p className="w-[569px] text-left text-base text-[#F8F8F8] mt-10">
                Estamos à frente da excelência jurídica, enfrentando casos
                difíceis com coragem e estratégia, buscando melhores resultados.
              </p>

              <button className="w-[338px] h-[58px] bg-[#3782FF] rounded-full flex items-center justify-center gap-4">
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
              <hr className="border-t-[1px] border-dashed border-[#DADADA] w-full mt-10" />
              <div className="w-full flex items-center justify-between">
                <p>Desde 2010</p>
                <p>Porto Alegre</p>
                <p>15 anos de jornada</p>
              </div>
            </div>
          </header>
        );
      case "/about":
        return (
          <header className="w-full flex flex-col h-[849px] bg-blue-500 ">
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
