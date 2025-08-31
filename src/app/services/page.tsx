import Badge from "@/components/bagde";
import { consumerAll, services } from "@/components/mocks";
import Image from "next/image";
import Link from "next/link";

const Services = () => {
  return (
    <section className="w-full h-full">
      <div className="container mx-auto h-full flex flex-col gap-10 py-30 ">
        {services.map((service, index) => (
          <div className="w-full h-full  flex items-center justify-center" key={index}>
            <Image
              key={index}
              src={service.image}
              alt="Services"
              width={1100}
              height={180}
            />
          </div>
        ))}
      </div>
      <div className="w-[90%]   h-[835px] mx-auto bg-[#072137] grid grid-cols-2 mb-10 py-10 rounded-md   ">
        <div className="w-[598px] mx-auto flex flex-col justify-center gap-10 items-start">
          <Badge
            text="Assessoria Jurídica de Confiança"
            className="bg-[#F8F8F8] w-[318px] h-[32px] rounded-md border-[#DADADA] border-1"
          />
          <h2 className="text-5xl text-[#F8F8F8]">
            Seu caminho para decisões seguras
          </h2>
          <p className="text-[#F8F8F8]">
            Na Guedes Bampi, estamos à frente da excelência jurídica, oferecendo
            um nível de especialização e dedicação que nos diferencia. Nossa
            equipe atua com precisão técnica, visão estratégica e profundo
            comprometimento com cada cliente.
          </p>
          <button className="w-[223px] h-[60px] rounded-full text-white bg-[#3782FF]">
            Entre em contato
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Image src={"/services/bg.svg"} alt="About" width={643} height={421} />
        </div>
      </div>
      <div className="w-full h-full flex flex-col gap-10 items-center mt-36 mb-24">
          <Badge
            text="Soluções únicas"
            className="bg-[#F8F8F8] w-[180px] h-[35px] rounded-md border-[#DADADA] border-1"
          />
           <h1
        className={`text-5xl max-w-[1100px] mx-auto text-[#1B1917] text-center  `}
      >
       Expertise em diversas áreas do Direito, para oferecer soluções integradas e eficazes
      </h1>
       <div className="container  mx-auto flex items-start justify-center gap-10 py-10">
                <div className="w-full grid grid-cols-4 gap-10">
                  {consumerAll.map((services, index: number) => (
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
      
                      <h2 className={` text-xl`}>{services.title}</h2>
                      <p className="text-[#707070]">{services.text}</p>
                      <hr className="h-[1px] bg-gray-300 border-0" />
                      <Link  href={`/services/${services.id}`} >
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
      </div>
    </section>
  );
};

export default Services;
