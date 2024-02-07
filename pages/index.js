import Image from "next/image";
import Form from "../components/Form";
import HeaderMessage from "../components/HeaderMessage";

export default function Home() {
  return (
    <main className="bg-white w-full">
      <div className="h-[70px] border-b-[1px] border-b-[#000] flex" >
        <div className="w-full max-w-[1600px] h-full mx-auto flex">
          <div className="h-[60px] w-[120px] mx-[15px] my-auto bg-purple-300"></div>
        </div>        
      </div>
      <div className="w-full flex py-[40px] bg-purple-100">
        <div className="w-full max-w-[1550px] mx-auto flex">
          <div className="w-fit h-fit mt-auto mb-[40px] mr-[150px] ml-auto">
            <HeaderMessage/>
          </div>   
          <div className="w-fit my-auto">
            <Form/>
          </div>          
        </div>

      </div>
    </main>
  );
}
