import Badge from "@/components/bagde";
import { singleServices } from "@/components/mocks";
import Image from "next/image";

type Params = {
  params: { id: string };
};
const ServiceId = async  ({ params }: Params) => {
  const {id} = await params
  const filter = singleServices.filter(
    (service: { id: number }) => service.id === Number(id)
  );
  return (
    <section className="w-full h-full py-10 ">
      <div className="container  mx-auto bg-[#05111B] grid grid-cols-2 mb-10 py-10 rounded-md  ">
        <div className="w-[598px] mx-auto flex flex-col justify-center gap-10 items-start">
          <h2 className="text-5xl text-[#F8F8F8]">{filter[0].title}</h2>
          <p className="text-[#F8F8F8] text-justify">{filter[0].description}</p>
          <button className="w-[223px] h-[60px] rounded-full text-white bg-[#3782FF]">
            Entre em contato
          </button>
        </div>
        <div className="flex items-center justify-center w-full h-full p-2">
          <Image src={"/Logo.svg"} alt="About" width={709} height={730} />
        </div>
      </div>
      <div className="w-full h-full flex items-center-safe justify-center flex-col gap-10">
        <Badge
          text="Soluções únicas"
          className="bg-[#F8F8F8] w-[180px] h-[35px] rounded-md border-[#DADADA] border-1"
        />
        <h2
          className={`text-5xl max-w-[729px] mx-auto text-[#1B1917] text-center  `}
        >
          Casos que em que podemos ajudar nessa área.
        </h2>
        <button className="w-[223px] h-[60px] rounded-full text-white bg-[#3782FF]">
          Descubra mais
        </button>

        <h1 className={`text-[200px]  uppercase text-[#EAE9E7] font-thin `}>
          {filter[0].title}
        </h1>
      </div>
    </section>
  );
};

export default ServiceId;
