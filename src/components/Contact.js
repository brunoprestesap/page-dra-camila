import { FaMapMarkedAlt, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa"

function Contact() {
    return (

        <div id="contact" className="pl-5 pr-5">
            <div className="p-5">
                <div className="flex justify-center gap-3 text-4xl font-bold text-center uppercase">
                    <FaMapMarkedAlt />
                    Onde estamos
                </div>
            </div>

            <div className="md:flex text-left gap-5">
                <iframe
                    className="w-full rounded-xl"
                    title="Onde eu atendo"
                    width="600"
                    height="500"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7YYbzwvhYY0RY0V-Dkp_Am8&key=AIzaSyAKyXjIGENqlWQFa4Pzk5HwUhuxpnmLZ_s">
                </iframe>
                <div className="flex flex-col text-left px-12 gap-2 mt-5">
                    <div className="flex gap-3 items-center text-left">
                        <FaMapMarkerAlt className="text-4xl mb-3"/>
                        <h2 className="font-bold text-2xl">Nosso endereço</h2>
                    </div>

                    <div className="flex text-left">
                        
                        <h3>Rua Manoel Eudóxio Pereira, 826 - Centro. CEP 68900-021. Macapá / Amapá.</h3>
                    </div>

                    <h2 className="font-bold text-2xl">Contato</h2>

                    <div className="flex items-center gap-3">
                        <FaMobileAlt className="text-4xl" />
                        <a href="https://wa.me/5596981163765" target="_blank" rel="noreferrer">
                            <h3 className="text-xl">(96) 98116-3765</h3>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Contact