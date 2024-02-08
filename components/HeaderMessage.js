export default function HeaderMessage() { 

    return (
        <div className="max-w-[420px] h-fit text-[#313131] text-left mx-[5px] lg:max-w-[490px] xs:mx-0">
            <div className="max-w-[450px] text-[25px] font-semibold leading-[28px] tracking-[0.025rem] lg:text-[35px] lg:leading-[35px]" >
                São diversas opções de persianas sob medida
            </div>
            <div className="text-[16px] font-normal leading-[20px] mt-[15px]">
                <div className="hidden lg:block">
                    Oferecemos uma ampla gama de modelos e cores para combinar perfeitamente com o seu espaço, nossas persianas são mais do que apenas esteticamente agradáveis - são também funcionais.
                </div>
                <div className="mt-[5px]">
                    Entre em contato e descubra como podemos tornar seu espaço único.
                </div>          
            </div>
            <div className="group w-[190px] h-[40px] py-[8px] bg-[#3EC263]/[1] rounded mt-[20px] font-medium text-white text-[16px] cursor-pointer hover:bg-[#3EC263]/[.8] flex transition ease-in-out duration-300 relative hidden lg:block" >
                <div className="w-fit mr-auto transition ease-in-out duration-300 transform translate-x-[20px] absolute group-hover:translate-x-[50%]">
                    Ver modelos
                </div>
            </div>
        </div>
    );
}
