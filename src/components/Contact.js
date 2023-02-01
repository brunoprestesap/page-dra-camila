import { FaMapMarkedAlt } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="my-8">
      <div className="m-8">
        <h2 className="flex justify-center gap-3 text-4xl font-bold text-center text-stone-700">
          <FaMapMarkedAlt />
          Onde estamos
        </h2>
      </div>

      <div className="md:flex md:justify-around mx-5">
        <div className="w-full md:w-4/6 shadow-2xl shadow-stone-500/50">
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

        <div className="my-5 md:my-0 p-5 bg-[#CDBCA8] bg-opacity-60 shadow-2xl shadow-stone-500/50 rounded-2xl">
          <h1 className="py-4 md:py-0 text-4xl font-bold text-center text-stone-700">
            Contato
          </h1>
          <form
            action="https://getform.io/f/73cd82b3-0511-4dc0-845b-0c8a5b07ca19"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid md:grid-cols-2 gap-2 w-full">
              <div className="flex flex-col">
                <label className="text-sm py-2">Nome</label>
                <input
                  className="border-2 rounded-lg p-1 flex border-gray-300 focus:ring focus:ring-orange-300"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm py-2">Telefone</label>
                <input
                  className="border-2 rounded-lg p-1 flex border-gray-300 focus:ring focus:ring-orange-300"
                  type="text"
                  name="phone"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="text-sm py-2">E-mail</label>
              <input
                className="border-2 rounded-lg p-1 flex border-gray-300 focus:ring focus:ring-orange-300"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-sm py-2">Assunto</label>
              <input
                className="border-2 rounded-lg p-1 flex border-gray-300 focus:ring focus:ring-orange-300"
                type="text"
                name="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-sm py-2">Mensagem</label>
              <textarea
                className="border-2 rounded-lg p-1 border-gray-300 focus:ring focus:ring-orange-300"
                rows="5"
                name="message"
              ></textarea>
            </div>
            <button className="bg-[#CDBCA8] hover:bg-stone-700 text-gray-100 mt-4 w-full p-4 rounded-lg">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
