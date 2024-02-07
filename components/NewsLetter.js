export default function NewsLetter() { 

    return (
        <div className="bg-green-100 w-full py-[40px] text-[#313131]">
            <div className="w-fit mx-auto font-medium text-[30px]">
                Concorra a descontos imperdíveis
            </div>
            
            <div className="mx-auto w-full max-w-[600px] h-[45px] rounded-lg bg-[#D9D9D9] p-[6px] flex mt-[25px] shadow-sm">
                <input 
                    className="w-full h-full pl-[10px] text-[18px] ring-0 outline-none bg-transparent border-none" 
                    placeholder="Preencha seu melhor e-mail aqui"
                />
                <div className="w-full max-w-[200px] h-full ml-auto bg-[#3EC263] rounded-lg hover:opacity-90 cursor-pointer shadow-md"></div>
            </div>
            
        </div>
    );
}