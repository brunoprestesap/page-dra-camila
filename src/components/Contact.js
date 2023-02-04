import { FaMapMarkedAlt } from "react-icons/fa";

function Contact() {
  return (
    <div id="contact" className="my-8">
      <div className="m-8">
        <h2 className="flex justify-center gap-3 text-4xl font-bold text-center text-[#003E53]">
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

        <div className="my-5 md:my-0 p-5 bg-[#003E53]/70 bg-opacity-60 shadow-2xl shadow-stone-500/50 rounded-2xl">
          <h1 className="py-4 md:py-0 text-4xl font-bold text-center text-white">
            Contato
          </h1>
          <form
            action="https://getform.io/f/73cd82b3-0511-4dc0-845b-0c8a5b07ca19"
            method="POST"
            encType="multipart/form-data"
          >
            <div className="grid md:grid-cols-2 gap-2 w-full">
              <div className="flex flex-col">
                <label className="text-sm py-2 text-white font-medium">Nome</label>
                <input
                  className="rounded-lg p-1 flex border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                  type="text"
                  name="name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm py-2 text-white font-medium">Telefone</label>
                <input
                  className="rounded-lg p-1 flex border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                  type="text"
                  name="phone"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="text-sm py-2 text-white font-medium">E-mail</label>
              <input
                className="rounded-lg p-1 flex border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                type="email"
                name="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-sm py-2 text-white font-medium">Assunto</label>
              <input
                className="border-2 rounded-lg p-1 flex border-[#003E53]-300 focus:ring focus:ring-[#003E53]"
                type="text"
                name="subject"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-sm py-2 text-white font-medium">Mensagem</label>
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
  );
}

export default Contact;
