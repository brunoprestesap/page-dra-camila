import { Link } from "react-router-dom";

function FormScheduler({ color }) {
    return (
        <div id="scheduler" className="flex items-center flex-col p-5">
            <h2 className="text-[26px] mt-5 font-bold text-center uppercase">
                AGENDE SEU CONSULTA AGORA
            </h2>

            <div className="w-full mt-5 bg-white md:p-12 p-5 lg:max-w-2xl shadow-2xl dark:bg-gray-800 dark:text-gray-200">
                <form>
                    <div className="flex flex-col text-sm gap-1 uppercase">
                        <label>Nome:</label>
                        <input
                            type="text"
                            class="rounded my-3 dark:bg-gray-200 dark:text-gray-800"
                            placeholder="Insira seu nome"
                        ></input>
                        <label>E-mail:</label>
                        <input
                            type="email"
                            class="rounded my-3 dark:bg-gray-200 dark:text-gray-800"
                            placeholder="Insira seu e-mail preferido"
                        ></input>
                        <label>Whatsapp:</label>
                        <input
                            type="number"
                            class="rounded my-3 dark:bg-gray-200 dark:text-gray-800"
                            placeholder="Insira seu whatsapp para contato futuro"
                        ></input>
                        <label>Data:</label>
                        <input
                            type="date"
                            class="rounded my-3 dark:bg-gray-200 dark:text-gray-800"
                            placeholder="Insira seu e-mail preferido"
                        ></input>
                        <div className="text-center text-[20px] pt-10">
                            <button
                                className="p-5 w-70 text-white font-bold rounded-full transform duration-500 hover:-translate-y-1"
                                style={{ background: color }}
                            >
                                Agendar
                            </button>
                            <Link to="/">
                                <button
                                    className="ml-5 p-5 w-70 text-white font-bold rounded-full transform duration-500 hover:-translate-y-1"
                                    style={{ background: color }}
                                >
                                    Voltar
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormScheduler;
