import Badge from "@/components/bagde";
import { Sora } from "next/font/google";
import Image from "next/image";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // agora tem finos
});

const About = () => {
  return (
    <section className="w-full h-full bg-white flex  flex-col items-center gap-10 justify-start">
      <Badge
        text="Missão"
        className="bg-[#F8F8F8] w-[107px] h-[32px] rounded-md border-[#DADADA] border-1 mt-30"
      />
      <h1
        className={`text-5xl max-w-[1100px] mx-auto  text-[#1B1917]  `}
      >
        De valores firmes, nasce a nossa razão de ser, defendendo direitos e
        construindo legados
      </h1>
      <p className="max-w-[810px] text-[#707070] h-[90px] mx-auto text-center">
        Na Guedes Bampi, construímos uma trajetória sólida baseada em ética,
        transparência e resultados. Nossa missão é transformar desafios em
        oportunidades, atuando de forma estratégica para garantir confiança e
        segurança em cada decisão jurídica.
      </p>
      <div className="w-full h-full flex justify-center  items-center ">
        <Image src={"/bg-about.svg"} alt="About" width={1100} height={900} />
      </div>
      <div className="container  h-full mx-auto bg-[#EBEDF0] grid grid-cols-2 mb-10 py-10 rounded-md  ">
        <div className="w-[598px] mx-auto flex flex-col justify-center gap-10 items-start">
          <Badge
            text="Propósito"
            className="bg-[#F8F8F8] w-[107px] h-[32px] rounded-md border-[#DADADA] border-1"
          />
          <h2 className="text-5xl text-[#072137]">Assumimos nosso Compromisso</h2>
          <p className="text-[#072137]">
            Nosso propósito é promover justiça e segurança jurídica, superando
            desafios legais com conhecimento, experiência e ética. Atuamos para
            proteger e transformar a vida de empresários e pessoas físicas,
            oferecendo apoio integral em diversas áreas do Direito, sempre com
            atendimento personalizado e compromisso com resultados concretos.
          </p>
          <button className="w-[223px] h-[60px] rounded-full text-white bg-[#3782FF]">Entre em contato</button>
        </div>
        <div>
            <Image src={"/about-2.svg"} alt="About" width={739} height={730} />
        </div>
      
      </div>
    </section>
  );
};

export default About;
