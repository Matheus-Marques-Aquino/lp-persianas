import { useState, useEffect } from "react";
import axios from "axios";

const patterns = {
    email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
}

export default function NewsLetter() { 
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState('');

    const validateForm = () => {
        if (!patterns.email.test(email)) {
            setError(true);

            setTimeout(() => {
                setError(false);
            }, 4000);

            return false;
        }

        return true;
    }

    const inputHandler = (e) => {
        if (!e || !e.target){
            return;
        }

        setEmail(e.target.value);
        setError(false);
    }

    const sendForm = async () => {
        if (!validateForm() || loading) {
            return;
        }

        setLoading(true);

        var url = "/api/newsletter";

        var headers = {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }

        var data = { email };

        axios.post(url, data, { headers: headers })
            .then((response) => {
                console.log('Success:', response);
                setSuccess(true);
                setLoading(false);

                setTimeout(() => {
                    setSuccess(false);
                }, 8000);
            })
            .catch((error) => {
                console.error('Error:', error);
                setSuccess(false);
                setLoading(false);
            });
    }



    return (
        <div className="shadow-inner-custom-1 w-full pt-[40px] pb-[120px] text-[#313131]">
            <div className="w-fit mx-auto font-medium text-[22px] xs:text-[26px] sm:text-[30px] md:text-[35px]">
                Concorra a descontos imperdíveis
            </div>
            
            <div className="mx-auto w-full h-[45px] rounded-lg bg-[#EEE] border-[1px] border-[#E5E5E5] p-[3px] flex mt-[25px] mb-[15px] shadow-sm max-w-[330px] xs:max-w-[400px] sm:max-w-[600px]">
                <input 
                    onChange={(e) => { inputHandler(e); }}
                    className={`w-full h-full pl-[10px] text-[14px] xs:text-[16px] lg:text-[18px] ring-0 outline-none bg-transparent border-none
                        ${error ? 'text-[#e53e3e] placeholder-red-600' : ''}
                    `} 
                    placeholder="Preencha seu melhor e-mail aqui"
                />
                <div 
                    onClick={() => { sendForm(); }}
                    className="w-full h-full ml-auto bg-[#3EC263] rounded-lg hover:opacity-90 cursor-pointer shadow-xs text-white flex max-w-[90px] text-[14px] xs:text-[15px] sm:text-[16px] xs:max-w-[120px] sm:max-w-[200px]"
                >
                    <div className="m-auto">Cadastre-se</div>
                </div>
            </div>
            
            <div className={`w-fit h-fit mx-auto text-[19px] font-normal text-green-600 leading-[20px] transition transition-all ease-in-out duration-500 overflow-hidden
                     ${success ? 'opacity-1 max-h-[20px]' : 'opacity-0 max-h-0'}
                `}>
                E-mail cadastrado com sucesso.
            </div>
            <div className={`w-fit h-fit mx-auto text-[19px] font-normal text-[#e53e3e] leading-[20px] transition transition-all ease-in-out duration-500 overflow-hidden
                     ${error ? 'opacity-1 max-h-[20px]' : 'opacity-0 max-h-0'}
                `}>
                E-mail inválido.
            </div>
            
        </div>
    );
}