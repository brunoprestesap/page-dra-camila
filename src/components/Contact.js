import { FaHeadset, FaHospitalAlt } from "react-icons/fa"

function Contact() {
    return (

        <div id="contact" className="pl-5 pr-5">
            <div className="p-5">
                <div className="text-4xl font-bold text-center uppercase">
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
                    <h2 className="font-bold text-xl">Meu local de atendimento</h2>
                    
                    <div className="flex items-center gap-2">
                        <FaHospitalAlt className="text-6xl"/>
                        <h3>Rua Manoel Eudóxio Pereira, 826 - Centro. CEP 68900-021. Macapá / Amapá.</h3>
                    </div>

                    <h2 className="font-bold text-xl">Entre em contato</h2>
                    
                    <div className="flex items-center gap-2">
                        <FaHeadset className="text-6xl"/>
                        <h3>(96)98116-3765</h3>
                    </div>
                </div>    
            </div>

        </div>

    )
}

export default Contact