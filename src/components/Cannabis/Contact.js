import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="my-8">
      <div className="flex justify-center gap-3 mb-8">
        <h2 className="flex gap-2 text-4xl font-bold text-center text-[#CDBCA8]">
          <FaMapMarkedAlt color="003E53" />
          ONDE
        </h2>
        <h2 className="text-4xl font-bold text-center text-[#003E53] underline decoration-[#7C5A12] underline-offset-8">
          ESTAMOS
        </h2>
      </div>

      <div className="mx-5 flex flex-col md:flex-row items-start justify-center">
        <div className="flex flex-col w-full">
          <div className="w-full flex justify-center">
            <a
              href="https://www.google.com/maps/dir//Psiquiatra+Macap%C3%A1+-+Dra+Camila+Neiva+R.+Manoel+Eud%C3%B3xio+Pereira,+826+-+Centro+Macap%C3%A1+-+AP+68900-021/@0.0426545,-51.0660276,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8d61e10bcf1b86ed:0x6f027f4a0e7e4563!2m2!1d-51.0660276!2d0.0426545"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-[#003E53] rounded-lg w-full py-3 px-8 mb-5 text-center hover:border hover:border-stone-100 hover:shadow-xl">
                <h2 className="text-white uppercase font-bold">Traçar rotas</h2>
              </button>
            </a>
          </div>
          <div className="w-full shadow-2xl shadow-stone-500/50">
            <iframe
              className="w-full rounded-xl"
              title="Onde eu atendo"
              width="600"
              height="615"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7YYbzwvhYY0RY0V-Dkp_Am8&key=AIzaSyAKyXjIGENqlWQFa4Pzk5HwUhuxpnmLZ_s"
            ></iframe>
          </div>
        </div>

        <div className="w-full px-5 my-5 md:my-0">
          <div className="w-full mb-8 flex justify-center items-center">
            <h1 className="text-4xl font-bold text-center text-[#003E53] underline decoration-[#7C5A12] underline-offset-8">
              CONTATO
            </h1>
          </div>

          <div className="w-full p-5 bg-[#CDBCA8] shadow-2xl shadow-stone-500/50 rounded-xl">
            <form
              action="https://getform.io/f/73cd82b3-0511-4dc0-845b-0c8a5b07ca19"
              method="POST"
              encType="multipart/form-data"
            >
              <div className="grid md:grid-cols-2 gap-2 w-full">
                <div className="flex flex-col">
                  <label className="text-sm py-2 text-black font-medium">
                    Nome
                  </label>
                  <input
                    className="rounded-lg p-1 flex border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm py-2 text-black font-medium">
                    Telefone
                  </label>
                  <input
                    className="rounded-lg p-1 flex border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                    type="text"
                    name="phone"
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="text-sm py-2 text-black font-medium">
                  E-mail
                </label>
                <input
                  className="rounded-lg p-1 flex border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                  type="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="text-sm py-2 text-black font-medium">
                  Mensagem
                </label>
                <textarea
                  className="rounded-lg p-1 border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                  rows="5"
                  name="message"
                ></textarea>
              </div>
              <button className="bg-[#003E53] hover:bg-stone-700 text-gray-100 mt-4 w-full p-4 rounded-lg">
                <h2 className="text-lg font-bold">Enviar mensagem</h2>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
