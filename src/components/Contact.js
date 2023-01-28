import { FaMapMarkedAlt, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa"

function Contact() {
    return (

        <div id="contact" className="m-8">
            <div className="mb-5">
                <h2 className="flex justify-center gap-3 text-4xl font-bold text-center text-stone-700">
                    <FaMapMarkedAlt />
                    Onde estamos
                </h2>
            </div>

            <div className="md:flex gap-5">
                <div className="w-full shadow-2xl shadow-stone-500/50">
                    <iframe
                        className="w-full rounded-xl"
                        title="Onde eu atendo"
                        width="600"
                        height="500"
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7YYbzwvhYY0RY0V-Dkp_Am8&key=AIzaSyAKyXjIGENqlWQFa4Pzk5HwUhuxpnmLZ_s">
                    </iframe>
                </div>

                <div className="flex flex-col p-8 text-left gap-2 bg-orange-100 shadow-2xl shadow-stone-500/50 rounded-2xl m-5">
                    <div className="flex gap-3 items-center text-left">
                        <FaMapMarkerAlt className="text-4xl mb-3"/>
                        <h2 className="font-bold text-2xl text-stone-700">Nosso endereço</h2>
                    </div>

                    <div className="flex text-left">
                        
                        <h3 className="text-stone-700 text-base md:text-xl">Rua Manoel Eudóxio Pereira, 826 - Centro. CEP 68900-021. Macapá / Amapá.</h3>

                    </div>

                    <hr className="w-6/6 mx-8 my-3 border-stone-700 border-1"></hr>

                    <h2 className="font-bold text-2xl text-stone-700">Contato</h2>

                    <div className="flex items-center gap-3">
                        <FaMobileAlt className="text-4xl" />
                        <a href="https://wa.me/5596981163765" target="_blank" rel="noreferrer">
                            <h3 className="text-xl text-stone-700">(96) 98116-3765</h3>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Contact