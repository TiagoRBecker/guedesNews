import Image from "next/image";
import { Sora } from "next/font/google";
import Badge from "@/components/bagde";
import { consumer } from "@/components/mocks";
import Footer from "@/components/footer";
import Link from "next/link";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // agora tem finos
});

export default function Home() {
  return (
    <>
      <section className="w-full bg-white  grid grid-cols-2 gap-9">
        <div className="w-full  flex items-start justify-center relative">
          <div className="absolute top-30 flex items-center justify-center">
            <Badge
              text="  Sobre Nós"
              className="bg-[#F8F8F8] border-[1px] border-[#DADADA] rounded-md w-[115px] h-[40px] text-[#1B1917]"
            />
          </div>

          <Image alt="banner" src={"/banner2.svg"} width={877} height={732} />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 max-w-[620px]">
          <h1 className="w-[600px] text-7xl  ">
            Onde desafios se tornam conquistas
          </h1>
          <p className="  text-[#707070]">
            A Guedes Bampi é uma banca de advogados com ampla experiência e
            atuação em diversas áreas do Direito, reconhecida pela dedicação e
            excelência. Com mais de 3 mil processos ativos e presença em várias
            cidades, atuamos nacionalmente, comprometidos em orientar, proteger
            e representar clientes com ética, clareza e resultados concretos.
          </p>
          <div className="w-full flex  ">
            <Link href={"/contact"} className="w-[210px] h-[58px] rounded-full bg-[#3782FF] text-sm text-white flex items-center justify-center">  Saiba mais </Link>
            
            
          </div>
        </div>
      </section>
      <section className="w-full  bg-[#072137] flex flex-col gap-10 pt-10 pb-[200px] ">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <Badge
            text="Lideranças"
            className="bg-[#F8F8F8]   border-[1px] border-[#DADADA] rounded-md w-[139px] h-[40px] text-[#1B1917]"
          />

          <h1
            className={`text-white text-6xl  text-center mt-4 font-thin   w-full`}
          >
            Excelência e confiança
          </h1>
        </div>
        <div className="w-[1280px] mx-auto grid grid-cols-2   p-4 h-[446px] ">
          <div className="bg-white w-[600px]   h-[466px] rounded-md grid grid-cols-2 gap-4 p-4">
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                alt="Alex"
                src={"/al.png"}
                width={700}
                height={500}
                className="rounded-md w-full h-full object-cover"
              />
              <Badge
                text="Guiding Partners"
                className="bg-[#F8F8F8]  absolute bottom-4 border-[1px] border-[#DADADA] rounded-md w-[200px] h-[40px] text-[#1B1917]  "
              />
            </div>
            <div className="w-full  bg-[#F8F8F8] rounded-md flex flex-col justify-between gap-4 p-4">
              <div className="w-full flex flex-col gap-4">
                <h1 className="text-2xl text-black">Alex Bampi</h1>
                <p className="text-[#707070]">
                  Advogado, administrador, mestre e professor de pós-graduação,
                  com sólida trajetória em direito civil, empresarial e
                  contratual. Lidera o escritório com visão estratégica,
                  combinando ampla experiência, inovação e atendimento
                  personalizado de excelência
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white w-[600px]   h-[466px] rounded-md grid grid-cols-2 gap-4 p-4">
            <div className="w-full h-full relative flex items-center justify-center">
              <Image
                alt="Alex"
                src={"/de.png"}
                width={700}
                height={500}
                className="rounded-md w-full h-full object-cover"
              />
              <Badge
                text="Guiding Partners"
                className="bg-[#F8F8F8]  absolute bottom-4 border-[1px] border-[#DADADA] rounded-md w-[200px] h-[40px] text-[#1B1917]  "
              />
            </div>
            <div className="w-full h-full bg-[#F8F8F8] rounded-md flex flex-col justify-between gap-4 p-4">
              <div className="w-full flex flex-col gap-4">
                <h1 className="text-2xl text-black">Deusa Guedes</h1>
                <p className="text-[#707070]">
                  Advogada atuante em contratos, direito civil, trabalhista e
                  empresarial, atua também como professora e palestrante. Une
                  conhecimento técnico e atenção aos detalhes para garantir
                  segurança jurídica e resultados consistentes aos seus
                  clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className={`text-[110px] uppercase text-center   font-thin `}>
          Advogados
        </h1>
      </section>
      <section className="w-full h-[600px] bg-white relative ">
        <div className="container mx-auto h-full bg-[#EBEDF0] rounded-md absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
          <div className="w-full h-full flex items-center justify-center">
            <Image
              alt="Alex"
              src={"/bg.png"}
              width={450}
              height={400}
              className="rounded-md"
            />
          </div>
          <div className="max-w-[537px] h-full flex flex-col   gap-6 justify-center">
            <Badge
              text="Assessoria Jurídica de Confiança"
              className="bg-[#EBEDF0] border-[1px] border-[#DADADA] rounded-md w-[318px] h-[40px] text-[#07213]"
            />

            <h1 className={`text-5xl text-[#072137]  ${sora.style}`}>
              Domínio e experiência para os litígios mais complexos.
            </h1>
            <p className="text-[#072137]">
              Com mais de duas décadas de experiência, a Guedes Bampi se
              consolidou como referência em assessoria jurídica para empresas e
              pessoas físicas. Ao longo de sua história, o escritório construiu
              uma atuação pautada em advocacia preventiva, na defesa de litígios
              e na busca constante dos direitos de seus clientes, administrando
              hoje mais de 3.000 processos ativos em todo o Brasil.
            </p>
            <Link
              href={"/contact"}
              className="w-[230px] h-[58px] rounded-full bg-[#3782FF] text-white flex items-center justify-center"
            >
              {" "}
              Entre em contato
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center gap-9    ">
        <Badge
          text="Resultados"
          className="bg-[#EBEDF0] border-[1px] border-[#DADADA]   rounded-md w-[136px] h-[40px] text-[#1B1917]"
        />
        <h1 className={`text-[#1B1917] ${sora.style} text-5xl `}>
          Juntos nessa trajetória, conheça nosso apoio jurídico.
        </h1>
        <p className="text[#707070] text-base">
          Consulte nossos especialistas!
        </p>
        <div className="container mx-auto flex items-start justify-center gap-10">
          <div className="flex flex-col gap-10">
            <div className="w-[760px] h-[559px] rounded-md">
              <img src="/e.svg" alt="Law" />
            </div>
            <div className="w-full  flex items-center justify-end">
              <div className="w-[377px] h-[200px] rounded-md">
                <button
                  className={` bg-[#3782FF] text-white w-full h-full text-2xl rounded-md flex flex-col items-center justify-center fap-4 ${sora.style}`}
                >
                  <span
                    className={`w-[210px] flex items-center justify-center text-left  h-[53px]  tex-white ${sora.style} font-light`}
                  >
                    Conheça nosso escritório
                  </span>

                  <span
                    className={`w-[210px] flex items-center  text-left gap-4  h-[53px]  tex-white ${sora.style} font-light`}
                  >
                    Ver todos
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4 mt-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="w-[560px] h-[340px] rounded-md">
              <img src="/d.svg" alt="Law" />
            </div>
            <div className="w-[763px] h-[332px] rounded-md">
              <img src="/c.svg" alt="Law" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  flex flex-col items-center gap-9 pt-20    ">
        <Badge
          text="Soluções únicas"
          className="bg-[#EBEDF0] border-[1px] border-[#DADADA]  rounded-md w-[236px] h-[40px] text-[#1B1917]"
        />
        <h1 className={`text-[#1B1917]  text-5xl  max-w-[1060px] text-center`}>
          Expertise em diversas áreas do Direito, para oferecer soluções
          integradas e eficazes
        </h1>
        <Link
          href={"/services"}
          className={`bg-[#3782FF] text-white w-[216px] h-[50px] py-4 text-base rounded-full flex items-center justify-center   `}
        >
          Ver todos serviços
        </Link>

        <div className="container  mx-auto flex items-start justify-center gap-10">
          <div className="w-full grid grid-cols-4 gap-10">
            {consumer.map((services, index: number) => (
              <div
                className="bg-[#F8F8F8] flex flex-col justify-around w-[305px] h-[382px] rounded-md p-4 group"
                key={index}
              >
                <div className="w-16 h-16 bg-black flex items-center justify-center rounded-full group-hover:bg-blue-600 transition-colors duration-100">
                  <img
                    src={services.image}
                    alt={services.title}
                    className="w-10 h-10 "
                  />
                </div>

                <h2 className={`${sora.style} text-xl`}>{services.title}</h2>
                <p className="text-[#707070]">{services.text}</p>
                <hr className="h-[1px] bg-gray-300 border-0" />
                <Link href={`/services/${services.id}`}>
                  <button className="mt-4 text-[#1B1917] text-left text-xl flex items-center gap-2 font-bold cursor-pointer">
                    Saiba mais{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <h1 className={`text-[200px]  uppercase text-[#EAE9E7] font-thin `}>
          Especialidades
        </h1>
      </section>
    </>
  );
}
