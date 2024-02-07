export default function Form() {
    return (
        <div className="bg-white w-full p-[30px] max-w-[425px] shadow-lg rounded-lg">
            <div className="text-[#313131]" >
                <div className="w-fit mx-auto font-semibold text-[25px] leading-[30px] text-center">
                    Solicite um orçamento e ganhe um desconto exclusivo!
                </div>
                <div className="w-fit mx-auto font-normal text-[16px] text-center mt-[8px]">
                    Preencha o formuário abaixo:
                </div>
            </div>
            <div className="w-full gap-y-[10px] mt-[30px]">
                <div>
                    <label for="name" className="block mb-[3px] text-sm font-medium text-gray-900 dark:text-gray-300 hidden">
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="bg-white text-[16px] border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Nome"
                    />
                </div>
                <div className="mt-[20px]">
                    <label for="email" className="block mb-[3px] text-sm font-medium text-gray-900 dark:text-gray-300 hidden">
                        E-mail
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="bg-white text-[16px] border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="E-mail"
                    />
                </div>
                <div className="mt-[20px]">
                    <label for="phone" className="block mb-[3px] text-sm font-medium text-gray-900 dark:text-gray-300 hidden">
                        Telefone
                    </label>
                    <input
                        type="text"
                        id="phone"
                        className="bg-white text-[16px] border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Telefone"
                    />
                </div>
                <div className="mt-[20px]">
                    <div className="block mb-[3px] text-[14px] font-medium text-[#313131] dark:text-gray-300 ">
                        Forma de contato de preferência:
                    </div>
                    <div className="flex mt-[5px]">
                        <input
                            type="radio"
                            id="preference-whatsapp"
                            name="preference"
                            className="my-auto"
                            checked
                        />
                        <label
                            for="preference-whatsapp"
                            className="ml-[5px] text-[14px] font-medium text-[#313131] dark:text-gray-300"
                        >
                            WhatsApp
                        </label>
                        <input
                            type="radio"
                            id="preference-phone"
                            name="preference"
                            className="my-auto ml-[25px]"
                        />
                        <label
                            for="preference-phone"
                            className="ml-[5px] text-[14px] font-medium text-[#313131] dark:text-gray-300"
                        >
                            Telefone
                        </label>
                        <input
                            type="radio"
                            id="preference-email"
                            name="preference"
                            className="my-auto ml-[25px]"
                        />
                        <label
                            for="preference-email"
                            className="ml-[5px] text-[14px] font-medium text-[#313131] dark:text-gray-300"
                        >
                            E-mail
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-full text-white text-center py-[8px] mt-[25px] cursor-pointer bg-[#3EC263] rounded-md hover:opacity-85 transition ease-in-out duration-300">
                Enviar
            </div>
        </div>
    );
}
