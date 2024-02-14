export default function NewsLetter() { 

    return (
        <div className="shadow-inner-custom-1 w-full pt-[40px] pb-[120px] text-[#313131]">
            <div className="w-fit mx-auto font-medium text-[22px] xs:text-[26px] sm:text-[30px] md:text-[35px]">
                Concorra a descontos imperdíveis
            </div>
            
            <div className="mx-auto w-full h-[45px] rounded-lg bg-[#EEE] border-[1px] border-[#E5E5E5] p-[3px] flex mt-[25px] shadow-sm max-w-[330px] xs:max-w-[400px] sm:max-w-[600px]">
                <input 
                    className="w-full h-full pl-[10px] text-[14px] xs:text-[16px] lg:text-[18px] ring-0 outline-none bg-transparent border-none" 
                    placeholder="Preencha seu melhor e-mail aqui"
                />
                <div className="w-full h-full ml-auto bg-[#3EC263] rounded-lg hover:opacity-90 cursor-pointer shadow-xs text-white flex max-w-[90px] text-[14px] xs:text-[15px] sm:text-[16px] xs:max-w-[120px] sm:max-w-[200px]">
                    <div className="m-auto">Cadastre-se</div>
                </div>
            </div>
            
        </div>
    );
}