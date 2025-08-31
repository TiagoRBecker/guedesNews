import Badge from "@/components/bagde";
import { consumerAll } from "@/components/mocks";

const Contatc = () => {
  return (
    <section className="w-full h-full py-10">
      <div className="container mx-auto flex items-start gap-10 mt-36">
        <div className="w-[840px] h-full flex flex-col gap-10 ">
          <Badge
            text="Entre em contato"
            className="bg-[#F8F8F8] w-[330px] h-[40px] rounded-md border-[#DADADA] border-1"
          />
          <h2 className="text-5xl font-light teext-[#1B1917]">
            Converse com a nossa equipe
          </h2>
          <p className="text-[#707070]">
            Our team is here to provide answers, support, and direction when you
            need it most. Fill out the form, give us a call, or stop by our
            office to discuss how we can assist you.
          </p>
          <form className="w-full flex flex-col gap-10">
            <input
              type="text"
              className="outline-none border-1 border-[#DADADA] w-full rounded-3xl h-16 pl-6"
              placeholder="Nome"
            />
            <input
              type="email"
              className="outline-none border-1 border-[#DADADA] w-full rounded-3xl h-16 pl-6"
              placeholder="Email"
            />
            <input
              type="text"
              className="outline-none border-1 border-[#DADADA] w-full rounded-3xl h-16 pl-6"
              placeholder="Telefone"
            />
            <select className="outline-none border-1 border-[#DADADA] w-full rounded-3xl h-16 px-2 text-[#DADADA]]">
              <option value={""}>Em qual área podemos te ajudar</option>
              {consumerAll.map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>

            <textarea
              className="w-full h-[250px] outline-none border-1 border-[#DADADA] rounded-3xl"
              name=""
              id=""
            ></textarea>
            <button className="w-full h-[58px] bg-black text-white rounded-3xl">
              Enviar Formulário
            </button>
          </form>
        </div>
        <div className="w-[346px] rounded-3xl h-[401px] bg-[#F8F8F8] mx-auto  flex flex-col  pl-10 gap-8  pt-10 text-[#1A191C}">
          <h1 className="text-2xl font-normal">Fale Conosco</h1>
          <ul className="w-full flex flex-col list-none  items-start justify-center gap-4">
            <li className=" flex items-center gap-4">
              <img src="/contacts/email.svg" alt="" className="w-6 h-6" />
              mail@guedesbampi.com.br
            </li>
            <li className=" flex items-center gap-4">
              <img src="/contacts/ph.svg" alt="" className="w-6 h-6" />
              +55 51 9999-9999
            </li>
            <li className="flex items-center gap-2">
              <img src="/contacts/maps.svg" alt="" className="w-6 h-6" />
              Avenida Borges de Medeiros Porto Alegre, RS, Brazil
            </li>
            <li className=" flex items-center gap-4">
              <img src="/contacts/link.svg" alt="" className="w-6 h-6" />
              Guedes Bampi
            </li>
            <li className=" flex items-center gap-4">
              <img src="/contacts/f.svg" alt="" className="w-6 h-6" />
              Guedes Bampi
            </li>
            <li className=" flex items-center gap-4">
              <img src="/contacts/y.svg" alt="" className="w-6 h-6" />
              Guedes Bampi
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contatc;
