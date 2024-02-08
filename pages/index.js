import Image from "next/image";
import Form from "../components/Form";
import HeaderMessage from "../components/HeaderMessage";
import FirstRow from "@/components/FirstRow";
import SecondRow from "@/components/SecondRow";
import AboutUs from "@/components/AboutUs";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white w-full">
      <div className="h-[60px] border-b-[1px] border-b-[#000] border-opacity-10 flex shadow-lg bg-white" >
        <div className="w-full max-w-[1600px] h-full mx-auto flex">
          <div className="h-[45px] w-[100px] mx-[15px] my-auto bg-purple-300"></div>
        </div>        
      </div>
      <div className="w-full flex py-[40px] bg-purple-100">
        <div className="w-full max-w-[1000px] mx-auto lg:flex">
            <div className="w-fit h-fit mt-auto mb-[40px] mx-auto lg:mr-auto lg:ml-0">
              <HeaderMessage/>              
            </div>   
            <div className="w-fit my-auto mx-auto lg:mx-0">
              <Form/>
            </div>     
        </div>
      </div>
      <div className="w-full">
        <FirstRow/>
        <SecondRow/>
        <AboutUs/>
        <NewsLetter/>
        <Footer/>
      </div>
    </main>
  );
}

/*
  Como são as persianas motoriadas?
  Como elas podem ser controladas?
  Você oferece somente o serviço de instalação?
  As persianas tem alguma garantia?
  Quais são as formas de pagamento?
  Parcelam em até quantas vezes?
  Parcelam em até quantas vezes sem juros?
  
*/