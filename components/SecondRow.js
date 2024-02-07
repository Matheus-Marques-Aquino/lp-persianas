import Image from "next/image";


const CustomCard = ({url, title, content}) => {
    
    return(
        <div className="w-fit text-left max-w-[260px] bg-white shadow-lg rounded-md p-[20px]">
            <div className="w-[220px] h-[160px] mx-auto bg-[#D9D9D9] rounded-md shadow-sm"></div>
            <div className="w-fit text-[18px] font-medium text-[#313131] mt-[20px]">
                Nome do modelo
            </div>
            <div className="w-fit text-[14px] leading-[20px] font-normal text-[#313131] mx-auto mt-[10px]">
                is simply dummy text of the printing and typesetting industry.
            </div>
            <div className="w-fit text-[14px] leading-[20px] font-normal text-[#313131] mx-auto mt-[10px]">
                <div className="flex">
                    <div className="w-[8px] h-[20px] flex mr-[4px]">
                        <div className="rounded-full w-[6px] h-[6px] bg-[#000] my-auto"></div>
                    </div>
                    <div>
                        is simply dummy text of the printing.
                    </div>
                </div>
                <div className="flex">
                    <div className="w-[8px] h-[20px] flex mr-[4px]">
                        <div className="rounded-full w-[6px] h-[6px] bg-[#000] my-auto"></div>
                    </div>
                    <div>
                        is simply dummy text of the printing.
                    </div>
                </div>
                <div className="flex">
                    <div className="w-[8px] h-[20px] flex mr-[4px]">
                        <div className="rounded-full w-[6px] h-[6px] bg-[#000] my-auto"></div>
                    </div>
                    <div>
                        is simply dummy text of the printing.
                    </div>
                </div>
            </div>
            <div className="w-full py-[5px] mx-auto bg-[#3EC263] rounded-md text-white text-center font-medium mt-[15px] cursor-pointer hover:opacity-90 shadow-md">Solicitar Cotação</div>
        </div>
    );
}

export default function SecondRow() { 

    return (
        <div className="bg-green-100 w-full py-[40px] text-[#313131]">
            <div className="w-fit mx-auto font-medium text-[35px]">
                Confira alguns dos nossos modelos
            </div>
            <div className="w-fit mx-auto gap-x-[15px] flex pt-[40px]">
                <CustomCard 
                    url="/icons/VacuumCleaner.svg" 
                    title="Higienização" 
                    content="Todas as persianas são devidamente higienizadas"
                />
                <CustomCard 
                    url="/icons/MoneyBox.svg" 
                    title="Preço de Fábrica" 
                    content="A melhor qualidade por um preço justo"
                />
                <CustomCard 
                    url="/icons/Bacteria.svg" 
                    title="Anti Bactéria" 
                    content="Todas as persianas são anti bactéria e fungos"
                />
                <CustomCard 
                    url="/icons/Design.svg" 
                    title="Sob Medida" 
                    content="A sua persiana do jeito que sempre sonhou"
                />

            </div>
        </div>
    );
}
