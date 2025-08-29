import Image from "next/image";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#072137]">
      <Image alt="Logo" src={"/Logo.svg"} width={250} height={100} />
    </div>
  );
};

export default Loader;
