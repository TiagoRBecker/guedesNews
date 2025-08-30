import { Sora } from "next/font/google";
import { socials } from "./mocks";
import Image from "next/image";
const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"], // agora tem finos
});

const Footer = () => {
  return (
    <footer className="w-full  p-4 py-10 bg-[url(/bgf.svg)] bg-center bg-no-repeat bg-cover rounded-md relative">
      <div className="w-[900px] mx-auto ">
        <div className="w-full flex items-center justify-center mt-40">
          <div>
            <h1 className={`${sora.className} text-white text-6xl w-[720px]`}>
              Nos diga, como podemos ajudar?
            </h1>
          </div>
          <div>
            <button
              className={`bg-[#3782FF] text-white w-[262px] h-[58px]  text-base rounded-full  ${sora.className}  flex items-center justify-center gap-4`}
            >
              Entrar em contato
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
          </div>
        </div>
      </div>

      <div className="w-[90%] mx-auto bg-black/30 h-full  mt-20 rounded-md backdrop-blur-sm">
        <div className="w-full h-full  grid grid-cols-4 py-10">
          <div className="w-full h-full flex items-center justify-center">
            <Image src={"/lf.svg"} alt="Logo" width={200} height={200} />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-start">
            <h2 className="text-[#707070] uppercase text-xl mb-5">Menu</h2>
            <ul className="list-none text-white flex flex-col gap-6">
              <li>Ínicio</li>
              <li>Sobre</li>
              <li>Serviços</li>
              <li>Contato</li>
            </ul>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-self-auto text-white ">
            <h2 className="text-[#707070] uppercase text-xl mb-5">Contato</h2>
            <p>Avenida Borges de Medeiros</p>
            <p>Porto Alegre, RS, Brazil</p>
            <p className="flex items-center gap-4 mt-6">
              <img src={"/phone.svg"} alt="Phone" className="w-6 h-6" />
              +55 51 9999-9999
            </p>
          </div>
          <div className="w-full h-full flex flex-col items-start justify-start">
            <h2 className="text-[#707070] uppercase text-xl mb-5">
              Siga Nossas Redes
            </h2>
            <div className="flex items-center gap-3">
              <ul className="list-none text-white flex items-center gap-4">
                {socials.map((medias, index) => (
                  <img
                    key={index}
                    src={medias.image}
                    alt={medias.title}
                    className="w-8 h-8"
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="h-[0.6px] bg-gray-300 border-0 mt-6" />
        <div className="w-full h-[90px] text-white flex items-center justify-center ">
          <ul className=" flex items-center w-full justify-around">
            <li>Plitica de privacidade</li>
            <li>Desenvolido</li>
            <li>Termos e condiçoes</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
