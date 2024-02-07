"use client"

import React, { useState } from "react";

export default function Form() {
    const [hover, setHover] = useState(false); 

    return (
        <div className="max-w-[490px] h-fit text-[#313131] text-left">
            <div className="max-w-[450px] text-[35px] font-semibold leading-[35px] tracking-[0.025rem]" >
                São diversas opções de persianas sob medida
            </div>
            <div className="text-[16px] font-normal leading-[20px] mt-[15px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div 
                className="group w-[190px] h-[40px] py-[8px] bg-[#3EC263]/[1] rounded mt-[20px] font-medium text-white text-[16px] cursor-pointer hover:bg-[#3EC263]/[.8] flex transition ease-in-out duration-300 relative"
                onMouseEnter={() => {return; setHover(true)}}
                onMouseLeave={() => {return; setHover(false)}}
            >
                <div className="w-fit mr-auto transition ease-in-out duration-300 transform translate-x-[20px] absolute group-hover:translate-x-[50%]">
                    Ver modelos
                </div>
            </div>
        </div>
    );
}
