import Image from "next/image";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  return (
    <>
      <section className="w-full bg-white h-screen  grid grid-cols-2 gap-9">
        <div className="w-full h-full flex items-start justify-center relative">
          <p className="bg-[#DADADA] text-black w-[140px] h-[45px] rounded-2xl absolute top-30 flex items-center justify-center">
            Sobre Nós
          </p>
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
            <button className="w-[210px] h-[58px] rounded-full bg-[#3782FF] text-sm text-white">
              Saiba mais
            </button>
          </div>
        </div>
      </section>
      <section className="w-full h-[1300px] bg-[#072137] flex flex-col gap-10 py-[80px]">
        <div className="container mx-auto flex flex-col items-center justify-center">
          <button className="bg-[#F8F8F8] mt-36 rounded-md w-[140px] h-[50px] ">
            Lideranças
          </button>
          <h1 className="text-white text-6xl">Excelência e confiança</h1>
        </div>
        <div className="w-[1280px] mx-auto grid grid-cols-2   p-4 h-[446px] ">
          <div className="bg-white w-[600px]  rounded-md grid grid-cols-2 p-4">
            <div className="w-full">
              <Image
                alt="Alex"
                src={"/al.png"}
                width={250}
                height={300}
                className="rounded-md"
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
              <div className=" flex items-center gap-10">
                <Image
                  alt="Alex"
                  src={"/l.svg"}
                  width={30}
                  height={30}
                  className="rounded-md"
                />
                <Image
                  alt="Alex"
                  src={"/x.svg"}
                  width={30}
                  height={30}
                  className="rounded-md"
                />
                <Image
                  alt="Alex"
                  src={"/i.svg"}
                  width={30}
                  height={30}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="bg-white w-[600px]   h-full rounded-md grid grid-cols-2 gap-4 p-4">
            <div className="w-full h-full">
              <Image
                alt="Alex"
                src={"/de.png"}
                width={250}
                height={300}
                className="rounded-md"
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
              <div className=" flex items-center gap-10">
                <Image
                  alt="Alex"
                  src={"/l.svg"}
                  width={30}
                  height={30}
                  className="rounded-md"
                />
                <Image
                  alt="Alex"
                  src={"/x.svg"}
                  width={30}
                  height={30}
                  className="rounded-md"
                />
                <Image
                  alt="Alex"
                  src={"/i.svg"}
                  width={30}
                  height={30}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <h1
          className={`text-[110px] uppercase text-center tracking-[50px] ${sora.style} font-thin`}
        >
          Advogados
        </h1>
      </section>
      <section className="w-full h-screen bg-white relative">
        <div className="container mx-auto h-[600px] bg-[#EBEDF0] rounded-md absolute top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2">
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
            <button className="bg-[#CECECE] rounded-md w-[318px] h-[40px] text-[#072137]">
              Assessoria Jurídica de Confiança
            </button>
            <h1 className=" text-5xl text-[#072137]  ">
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
            <button className="w-[230px] h-[58px] rounded-full bg-[#3782FF] text-white">
              Entre em contato
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
