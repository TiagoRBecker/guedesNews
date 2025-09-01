"use client";
import Badge from "@/components/bagde";
import { consumerAll } from "@/components/mocks";
import Swal from "sweetalert2";
import { useState } from "react";

const Contatc = () => {
  const [errors, setErrors] = useState<any>({});
  const [pending, setPending] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    area: "",
    message: "",
  });
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Campo é obrigatório";
        break;
      case "email":
        if (!value.trim()) return "Campo é obrigatório";
        if (!validateEmail(value)) return "Email inválido";
        break;
      case "area":
        if (!value.trim()) return "Selecione uma área";
        break;
      case "phone":
        if (!value.trim()) return "Campo é obrigatório";
        break;
      case "message":
        if (!value.trim()) return "Campo é obrigatório";
        break;
      default:
        return "";
    }
    return "";
  };
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    // Validação em tempo real (opcional)
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setPending(true);
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      //@ts-ignore
      const error = validateField(key, values[key]);
      //@ts-ignore
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const res = await fetch("api/contact", {
        method: "POST",
        body: JSON.stringify(values),
      });

      if (res.ok) {
        await Swal.fire(
          "Obrigado pelo seu contato! ",
          "Em breve, um de nossos profissionais entrará em contato para ajudá-lo com sua solicitação",
          "success"
        );

        setValues({
          name: "",
          email: "",
          phone: "",
          area: "",
          message: "",
        });
        setPending(false);
        return;
      }
    }
    setPending(false);
    return;
  };
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
          <form className="w-full flex flex-col gap-10" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              className="outline-none border-1 border-[#DADADA] w-full rounded-3xl h-16 pl-6"
              placeholder="Nome"
              value={values.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 ml-4">{errors.name}</p>
            )}
            <input
              type="email"
              name="email"
              className="outline-none border-1 border-[#DADADA] w-full rounded-3xl h-16 pl-6"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 ml-4">{errors.email}</p>
            )}
            <input
              type="text"
              name="phone"
              className="outline-none border-1 border-[#DADADA] w-full rounded-3xl h-16 pl-6"
              placeholder="Telefone"
              value={values.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1 ml-4">{errors.phone}</p>
            )}
            <select
              name="area"
              className="outline-none border-1 border-[#DADADA] w-full rounded-3xl h-16 px-2 "
              value={values.area}
              onChange={handleChange}
            >
              <option value={""}>Em qual área podemos te ajudar</option>
              {consumerAll.map((service, index) => (
                <option key={index} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            {errors.area && (
              <p className="text-red-500 text-sm mt-1 ml-4">{errors.area}</p>
            )}

            <textarea
              name="message"
              value={values.message}
              onChange={handleChange}
              className="w-full h-[250px] outline-none border-1 border-[#DADADA] rounded-3xl p-5"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 ml-4">{errors.message}</p>
            )}

            <button
              type={pending ? "button" : "submit"}
              className="w-full h-[58px] bg-black text-white rounded-3xl"
            >
              {pending ? "Aguarde enviando ..." : "Enviar Formulário"}
            </button>
          </form>
        </div>
        <div className="w-[450px] rounded-3xl h-[401px] bg-[#F8F8F8] mx-auto  flex flex-col  pl-10 gap-8  pt-10 text-[#1A191C}">
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
              <span className="pl-2">
                <p>Rua General Cãmara 432, sala 204</p>
                <p>Centro Histórico / Porto Alegre</p>
              </span>
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
