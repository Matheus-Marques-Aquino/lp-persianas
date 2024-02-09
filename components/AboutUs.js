import Image from "next/image";

export default function AboutUs() {

    return (
        <div className="w-full shadow-inner-custom-1 bg-[#CCCCCC]/[0.2] py-[40px] text-[#313131]">
            <div className="w-full max-w-[1000px] mx-auto px-[15px] text-left flex flex-wrap">
                <div className="mx-auto">  
                    <div className="w-fit ml-auto">
                        <div className="min-w-[350px] w-fit font-medium text-[22px] xs:text-[26px] sm:text-[30px] lg:text-[35px]">
                            Sobre nós
                        </div>
                        <div className="w-full min-w-[360px] max-w-[500px] mt-[5px] text-[15px] xs:text-[15px] sm:text-[15px] lg:text-[16px]">
                            <div>No Mundo das Persianas, buscamos criar ambientes funcionais e esteticamente agradáveis. Todas as nossas persianas são feitas sob medida, garantindo um ajuste perfeito para qualquer espaço. Estamos comprometidos em oferecer uma experiência excepcional, ouvindo suas necessidades e fornecendo orientação especializada.</div> 
                            <div className="mt-[5px] hidden sm:block">Além disso, sempre priorizamos a saúde e o bem-estar, utilizando materiais de alta qualidade e tratamentos anti-fungos, anti-bactérias e anti-alérgicos. Com uma variedade de modelos e cores, atendemos a diversos estilos e preferências.</div>
                        </div>
                    </div>                     
                </div>
                <div className="mx-auto px-[25px] hidden lg:block">
                    <div className="w-[320px] h-full bg-[#ADADAD] rounded-lg">
                        <Image 
                            src={"/imgs/about-us.png"}
                            width={320}
                            height={320}
                            className="rounded-md w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}