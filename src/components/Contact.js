import { FaMapMarkedAlt, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa"

function Contact() {
    return (

        <div id="contact" className="pl-5 pr-5">
            <div className="p-5">
                <div className="flex justify-center gap-3 text-4xl font-bold text-center uppercase">
                    <FaMapMarkedAlt />
                    Onde eu atendo
                </div>
            </div>

            <div className="md:flex justify-center gap-5">
                <iframe
                    className="w-full rounded-xl"
                    title="Onde eu atendo"
                    width="600"
                    height="500"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7YYbzwvhYY0RY0V-Dkp_Am8&key=AIzaSyAKyXjIGENqlWQFa4Pzk5HwUhuxpnmLZ_s">
                </iframe>
                <div className="flex flex-col content-center text-center px-12 gap-2 mt-5">
                    <div className="flex flex-col items-center">
                        <FaMapMarkerAlt className="text-4xl mb-3"/>
                        <h2 className="font-bold text-xl">Meu endereço</h2>
                    </div>

                    <div className="flex justify-center items-center">
                        
                        <h3>Rua Manoel Eudóxio Pereira, 826 - Centro. CEP 68900-021. Macapá / Amapá.</h3>
                    </div>

                    <h2 className="font-bold text-xl">Contato</h2>

                    <div className="flex justify-center items-center gap-5">
                        <FaMobileAlt className="text-2xl" />
                        <a href="https://wa.me/5596981163765" target="_blank" rel="noreferrer">
                            <h3 className="text-xl">(96)98116-3765</h3>
                        </a>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Contact