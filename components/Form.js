import { useState, useEffect } from "react";

export default function Form({selectValue, onSelectChange}) {
    const [errors, setErrors] = useState(['name', 'phone', 'email']);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        select: '',
        contact: 'whatsapp'
    });

    const validateForm = () => {

    } 

    const inputHandler = (e) => {
        if (!e || !e.target ) {
            return;
        }

        var {
            name, 
            value
        } = e.target;

        if (name.includes('preference')) {
            name = name.replace('preference-', '');
            
            if (value == 'on') {
                setForm({ ...form, contact: name })
            }

            return;
        }

        if (name.includes('select')) {
            setForm({ ...form, select: value });
            return;
        } 
        
        setForm({ ...form, [name]: value });        
    }

    useEffect(() => {
        if (selectValue != form.select) {
            setForm({ ...form, select: selectValue });
        }
    }, [selectValue]);

    //console.log('form:', form);

    return (
        <div className="bg-white w-full p-[20px] max-w-[425px] min-w-[350px] shadow-lg rounded-lg xs:p-[30px]">
            <div className="text-[#313131]" >
                <div className="w-fit mx-auto font-semibold text-[23px] leading-[30px] text-center xs:text-[25px]">
                    Solicite um orçamento e ganhe um desconto exclusivo!
                </div>
                <div className="w-fit mx-auto font-normal text-[16px] text-center mt-[8px]">
                    Preencha o formuário abaixo:
                </div>
            </div>
            <div className="w-full gap-y-[10px] mt-[30px]">
                <div>
                    <label for="name" className="block mb-[3px] text-sm font-medium text-gray-900 hidden"> {/* dark:text-gray-300 */}
                        Nome
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={(e) => { inputHandler(e); }}
                        className={`bg-white text-[16px] border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3
                            ${errors.includes('name') ? 'border-red-500 text-[#e53e3e] placeholder-red-600' : ''}`}
                        placeholder="Nome"
                    />
                </div>
                <div className="mt-[20px]">
                    <label for="email" className="block mb-[3px] text-sm font-medium text-gray-900 hidden">
                        E-mail
                    </label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={(e) => { inputHandler(e); }}
                        className={`bg-white text-[16px] border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3
                            ${errors.includes('email') ? 'border-red-500 text-[#e53e3e] placeholder-red-600' : ''}`}
                        placeholder="E-mail"
                    />
                </div>
                <div className="mt-[20px]">
                    <label for="phone" className="block mb-[3px] text-sm font-medium text-gray-900 hidden">
                        Telefone
                    </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={(e) => { inputHandler(e); }}
                        className={`bg-white text-[16px] border border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 
                            ${errors.includes('phone') ? 'border-red-500 text-[#e53e3e] placeholder-red-600' : ''}`}
                        placeholder="Telefone"
                    />
                </div>
                <div className="mt-[20px]">
                    <label for="select" className="block mb-[3px] text-sm font-medium text-gray-900 hidden">
                        Tipo de Persiana
                    </label>
                    <div className={`border border-gray-300 text-gray-900 rounded-md w-full py-2 px-3
                        ${errors.includes('select') ? 'border-red-500 text-[#e53e3e] placeholder-red-600' : ''}`} >
                        <select 
                            name="select"
                            className="bg-white text-[16px] focus:ring-0 outline-0 focus:outline-0 focus:border-0 block w-full"
                            value={selectValue} 
                            onChange={(e) => {
                                inputHandler(e);
                                onSelectChange(e.target.value)
                            }}
                        > {/*  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 */}
                            <option value="">Selecione um Assunto</option>
                            <option value="rolo-screen">Persiana Rolô Screen</option>
                            <option value="rolo-blackout">Persiana Rolô Blackout</option>
                            <option value="rolo-double-vision">Persiana Rolô Double Vision</option>
                            <option value="horizontal">Persiana Horizontal</option>
                            <option value="vertical">Persiana Vertical</option>
                            <option value="romana">Persiana Romana</option>
                        </select>
                    </div> {/*bg-white text-[16px] focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 border border-gray-300 text-gray-900 rounded-md w-full*/}

                </div>
                <div className="mt-[20px]">
                    <div className="block mb-[3px] text-[14px] font-medium text-[#313131]">
                        Forma de contato de preferência:
                    </div>
                    <div className="flex mt-[5px]">
                        <input
                            type="radio"
                            id="preference-whatsapp"
                            name="preference-whatsapp"
                            className="my-auto"
                            checked={form.contact == 'whatsapp'} 
                            onChange={(e) => { inputHandler(e); }}                           
                        />
                        <label
                            for="preference-whatsapp"
                            className="ml-[5px] text-[14px] font-medium text-[#313131]"
                        >
                            WhatsApp
                        </label>
                        <input
                            type="radio"
                            id="preference-phone"
                            name="preference-phone"
                            className="my-auto ml-[25px]"
                            checked={form.contact == 'phone'}
                            onChange={(e) => { inputHandler(e); }}
                        />
                        <label
                            for="preference-phone"
                            className="ml-[5px] text-[14px] font-medium text-[#313131]"
                        >
                            Telefone
                        </label>
                        <input
                            type="radio"
                            id="preference-email"
                            name="preference-email"
                            className="my-auto ml-[25px]"
                            checked={form.contact == 'email'}
                            onChange={(e) => { inputHandler(e); }}
                        />
                        <label
                            for="preference-email"
                            className="ml-[5px] text-[14px] font-medium text-[#313131]"
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
