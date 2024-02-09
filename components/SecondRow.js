import Image from "next/image";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

const CustomCard = ({index, title, content, items, url, buttonCallback}) => {
    const [imageHover, setImageHover] = useState(false);

    var src = url[0];
    
    if (imageHover){
        src = url[1];
    }
    
    return(    
        <div className="mx-auto h-full w-fit">
            <div className="w-full h-full text-left min-w-[280px] max-w-[280px] bg-white shadow-lg rounded-md p-[15px] mb-[20px] border-[1px] border-[#CCCCCC]/[.25] flex flex-col">
                <div 
                    className="mt-[5px] h-[200px] w-[240px] mx-auto rounded-md shadow-sm overflow-hidden"
                    onMouseEnter={() => setImageHover(true)}
                    onMouseLeave={() => setImageHover(false)}
                >
                    <Image 
                        src={src}
                        width={240}
                        height={200}
                        className="rounded-md w-full h-full"
                    />
                </div>
                <div className="w-fit font-medium text-[#313131] mt-[15px] text-[17px] lg:text-[18px] mx-auto">
                    {title}
                </div>
                <div className="w-fit text-[14px] leading-[19px] font-normal text-[#313131] mx-auto mt-[10px] lg:text-[14px]">
                    {content.map((text, index) => {
                        let marginTop = 'mt-[6px]';

                        if (index == 0){
                            marginTop = '';
                        }

                        return (
                            <div key={index} className={" " + marginTop}>
                                <div className="">
                                    {text}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="w-fit text-[14px] leading-[19px] font-normal text-[#313131] mx-auto mt-[10px] mb-[10px]">
                    {items.map((item, index) => {
                        let marginTop = 'mt-[4px]';

                        if (index == 0){
                            marginTop = '';
                        }

                        return (
                            <div key={index} className={"flex " + marginTop}>
                                <div className="w-[8px] h-[20px] flex mr-[4px]">
                                    <div className="rounded-full w-[6px] h-[6px] bg-[#000] my-auto"></div>
                                </div>
                                <div className="text-[14px]">
                                    <b>{item.bold}</b> {item.text}
                                </div>
                            </div>
                        );
                    })}
                </div>    
                <div 
                    className="w-full py-[5px] mx-auto bg-[#3EC263] rounded-md text-white text-center font-medium mt-auto cursor-pointer hover:opacity-90 shadow-md text-[14px] lg:text-[16px]"
                    onClick={ () => { buttonCallback(index) } }
                >
                    Solicitar Cotação
                </div> 
            </div>
        </div>

    );
}

export default function SecondRow({updateSelect}) {
    const swiperRef = useRef(null);
    const [hasBounced, setHasBounced] = useState(false);
  
    const handleSlideBounce = () => {
      if (!hasBounced) {
        setHasBounced(true);
        const swiper = swiperRef.current.swiper;
  
        swiper.slideNext(750);
        setTimeout(() => {
          swiper.slidePrev(750);
        }, 750);
      }
    };

    const CardArray = [
        {
            url: ["/imgs/persianas/rolo-screen-1.png", "/imgs/persianas/rolo-screen-4.png"],
            title: "Persiana Rolô Screen",
            content: [
                "Ideal para equilibrar a luminosidade e manter a privacidade, sem sacrificar a vista exterior. Com opções de 1% a 5%, ajuste o nível de sombreamento ao seu gosto.",
                "1% para privacidade e redução de luz.", 
                "3% para equilibrar luz e privacidade.", 
                "5% para maximizar a entrada de luz."
            ],
            items: []
        },
        {
            url: ["/imgs/persianas/rolo-blackout-1.png", "/imgs/persianas/rolo-blackout-2.png"],
            title: "Persiana Rolô Blackout",
            content: [
                "Solução sofisticada para privacidade absoluta e bloqueio completo da luz, criando o ambiente perfeito para relaxamento e proteção visual.",
                "Ideal para quartos, salas de mídia e espaços que demandam escuridão total."
            ],
            items: []
        },
        {
            url: ["/imgs/persianas/double-vision-2.png", "/imgs/persianas/double-vision-1.png"],
            title: "Persiana Rolô Double Vision",
            content: [
                "Design inovador e funcional que permite ajuste dinâmico da luz e visibilidade, com faixas alternadas translúcidas e opacas deslizando para criar efeitos de abertura personalizados.",
                "Perfeita para ambientes residenciais e comerciais, oferece um equilíbrio estético entre funcionalidade e design."
            ],
            items: []
        },
        {
            url: ["/imgs/persianas/horizontal-1.png", "/imgs/persianas/horizontal-2.png"],
            title: "Persiana Horizontal",
            content: [
                "Combinação de funcionalidade e estilo, com lâminas ajustáveis para controle de luz e privacidade, adaptando-se a qualquer ambiente.",
                "Ideal para quem busca praticidade, durabilidade e uma estética refinada na decoração de interiores."
            ],
            items: []
        },
        {
            url: ["/imgs/persianas/vertical-1.png", "/imgs/persianas/vertical-2.png"],
            title: "Persiana Vertical",
            content: [
                "Alternativa versátil para controle ajustável de luz e privacidade, com lâminas verticais que se movem suavemente.",
                "Ideal para escritórios, salas de estar e espaços amplos, proporcionando uma combinação de praticidade, funcionalidade e sofisticação."
            ],
            items: []
        },
        {
            url: ["/imgs/persianas/romana-1.png", "/imgs/persianas/romana-2.png"],
            title: "Persiana Romana",
            content: [
                "Combina beleza e praticidade em um design que traz tecidos que se dobram de forma elegante, criando um visual charmoso e aconchegante.",
                "Seja em casa ou no trabalho, oferece um controle de luz e privacidade com estilo mais despojado."
            ],
            items: []
        }
    ];                      

    return (
        <div 
            className="w-full mx-auto py-[40px] text-[#313131] shadow-inner-custom-2"
            
        >
            <div className="w-fit mx-auto font-medium text-[21px] xs:text-[26px] sm:text-[30px] lg:text-[35px]">
                Confira alguns dos nossos modelos
            </div>
            <div         
                className="w-full max-w-[1600px] pb-[20px] mx-auto gap-x-[15px] flex pt-[40px] px-[5px] overflow-hidden relative cursor-grab relative"
                onMouseEnter={handleSlideBounce}
                onTouchStart={handleSlideBounce}
            >
                <Swiper
                    className=""
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={1}
                    effect="slide"
                    speed={1000}
                    loop={true}
                    centeredSlides={true}
                    pagination={true}
                    autoplay={{
                        delay: 11000,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Navigation, Autoplay]}
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                        },
                        600: {
                            slidesPerView: 2,
                        },
                        900: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        1500: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {CardArray.map((card, index) => {
                        return(<SwiperSlide key={index}>
                            <CustomCard 
                                index={index}
                                url={card.url}
                                title={card.title}
                                content={card.content}
                                items={[...card.items]}
                                buttonCallback={(index) => { updateSelect('persiana-' + (index + 1) ) } }
                            />
                        </SwiperSlide>)
                    })}
                </Swiper>
                <div 
                    className="w-[30px] h-[30px] bg-[#000000] rounded-full rounded-full flex opacity-60 absolute left-[5px] top-0 bottom-0 my-auto z-[200] cursor-pointer"
                    onClick={() => {swiperRef.current.swiper.slidePrev()}}
                >
                    <FaAngleLeft className="m-auto text-white w-[16px] h-[16px] pr-[2px] opacity-100 cursor-pointer"/>
                </div>
                <div 
                    className="w-[30px] h-[30px] bg-[#000000] rounded-full rounded-full flex opacity-60 absolute right-[5px] top-0 bottom-0 my-auto z-[200] cursor-pointer"
                    onClick={() => {swiperRef.current.swiper.slideNext()}}
                >
                    <FaAngleRight className="m-auto text-white w-[16px] h-[16px] pl-[2px] opacity-100 cursor-pointer"/>
                </div>
            </div>
        </div>
    );
}
