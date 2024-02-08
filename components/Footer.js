import MapContainer from "./subcomponents/Map";

import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

export default function Footer() {
    const address = {
        street: 'Rua João Accioli',
        number: '114',
        complement: '',
        neiborhood: 'Jardim Maringa',
        city: 'São Paulo',
        state: 'SP',
        cep: '03524-000',
        geolocation: {
            lat: -23.546221, 
            lng: -46.514290
        } 
    };

    return (
        <div className="w-full bg-purple-300 py-[40px] text-[#313131]">
            <div className="w-full max-w-[1500px] mx-auto px-[15px] text-left flex">
                <div className="">  
                    <div className="w-full h-full max-h-[220px] rounded-md flex">
                        <MapContainer 
                            markers={[{...address.geolocation}]} 
                            geolocation={address.geolocation} 
                            style={{width: "200px", height: "200px", maxHeight: "220px", overflow: 'hidden', position: 'relative'}} 
                            containerStyle={{width: "200px", height: "200px", maxHeight: "220px", overflow: 'hidden', position: 'relative'}} 
                        />
                        <div className="w-fit text-[#313131]">
                            <div className="font-semibold text-[18px] leading-[24px]">
                                Endereço:
                            </div>
                            <div className="font-normal text-[16px] leading-[20px] mt-[10px]">
                                {address.street}, {address.number}
                            </div>
                            <div className="font-normal text-[16px] leading-[20px] mt-[5px]">
                                {address.neiborhood}, {address.city} - {address.state}
                            </div>
                            <div className="font-normal text-[16px] leading-[20px] mt-[5px]">
                                CEP: {address.cep}
                            </div>
                        </div>
                        <div className="w-fit text-[#313131]">
                            <div className="font-semibold text-[18px] leading-[24px]">
                                Contato:
                            </div>
                            <div className="font-normal text-[16px] leading-[20px] mt-[10px] flex">
                                <FaPhoneAlt className="w-[18px] h-[14px] mr-[5px] my-auto"/>
                                <div>(11) 4238-0733</div>
                            </div>
                            <div className="font-normal text-[16px] leading-[20px] mt-[5px] flex">
                                <IoIosMail className="w-[18px] h-[18px] mr-[5px] my-auto"/>
                                <div>contato@gmail.com</div>
                            </div>
                        </div>
                    </div>                     
                </div>
            </div>
        </div>
    );

}