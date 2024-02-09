import Image from "next/image";


const CustomCard = ({url, title, content}) => {
    
    return(
        <div className="w-full max-w-[190px] sm:max-w-[210px] text-center">
            <div className="w-fit h-fit mx-auto">
                <Image
                    src={url}
                    width={180}
                    height={180}
                    className="w-[70px] h-[70px] mx-auto sm:w-[80px] sm:h-[80px] opacity-60"
                />
            </div>
            <div className="w-fit text-[18px] font-medium text-[#313131] mx-auto mt-[15px] md:text-[20px]">
                {title}
            </div>
            <div className="w-fit text-[14px] leading-[19px] font-normal text-[#313131] mx-auto mt-[5px] md:text-[16px]">
                {content}
            </div>
        </div>
    );
}

export default function FirstRow() { 

    return (
        <div className="bg-[#F8F8F8] shadow-inner-custom-1 w-full py-[40px] text-[#313131]">
            <div className="w-fit mx-auto font-medium text-[22px] xs:text-[26px] sm:text-[30px] md:text-[35px]">
                Características do nosso trabalho
            </div>
            <div className="w-fit font-normal mx-auto mt-[5px] text-[15px] xs:text-[16px] sm:text-[18px] md:text-[20px]">
                O nosso compromisso com a qualidade é coisa séria!
            </div>
            <div className="w-fit mx-auto gap-x-[15px] gap-y-[25px] pt-[40px] flex flex-wrap justify-center items-center">
                <div className="w-fit gap-x-[15px] flex mx-[5px] xs:mx-0">
                    <CustomCard 
                        url="/icons/VacuumCleaner-black.svg" 
                        title="Higienização" 
                        content="Todas as persianas são devidamente higienizadas"
                    />
                    <CustomCard 
                        url="/icons/MoneyBox-black.svg" 
                        title="Preço de Fábrica" 
                        content="A melhor qualidade por um preço justo"
                    />
                </div>
                <div className="w-fit gap-x-[15px] flex mx-[5px] xs:mx-0">
                    <CustomCard 
                        url="/icons/Bacteria-black.svg" 
                        title="Anti Bactéria" 
                        content="Todas as persianas são anti bactéria e fungos"
                    />
                    <CustomCard 
                        url="/icons/Design-black.svg" 
                        title="Sob Medida" 
                        content="A sua persiana do jeito que sempre sonhou"
                    />
                </div>
            </div>
        </div>
    );
}
