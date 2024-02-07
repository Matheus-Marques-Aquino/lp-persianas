import Image from "next/image";


const CustomCard = ({url, title, content}) => {
    
    return(
        <div className="w-full max-w-[210px] text-center">
            <div className="w-fit h-fit mx-auto">
                <Image
                    src={url}
                    width={180}
                    height={180}
                    className="w-[80px] h-[80px] mx-auto"
                />
            </div>
            <div className="w-fit text-[20px] font-medium text-[#313131] mx-auto mt-[15px]">
                {title}
            </div>
            <div className="w-fit text-[16px] leading-[19px] font-normal text-[#313131] mx-auto mt-[5px]">
                {content}
            </div>
        </div>
    );
}

export default function FirstRow() { 

    return (
        <div className="bg-blue-300 w-full py-[40px] text-[#313131]">
            <div className="w-fit mx-auto font-medium text-[35px]">
                Características do nosso trabalho
            </div>
            <div className="w-fit font-normal text-[20px] mx-auto mt-[5px]">
                O nosso compromisso com a qualidade é coisa séria!
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
