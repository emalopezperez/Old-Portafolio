import single from "../public/assets/logos/single.png";
import Image from "next/image";
import Anuncio from "./anuncio";

const Target = () => {
  return (
    <div id="target" className=" w-full py-[10rem] px-4 fondo ">
      <h2 className="ml-[140px] py-4 font-poppins font-semibold  text-3xl sm:text-4xl md:text-5xl text-white ss:leading-[100.8px] leading-[75px">
        Servicios
      </h2>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full bg-gray-100 shadow-xl shadow-gray-500  flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <span className="text-gray-600">Paquete básico</span>
          <h2 className=" font-bold text-center py-8">Básico</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="p-3 boton w-[200px] mt-4 text-black mx-auto  bg-blue-gradient rounded-[10px]">
            Elegir
          </button>
        </div>
        <div className="w-full  shadow-xl shadow-gray-500  bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <Image
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={single}
            alt="/"
          />
          <span className="text-gray-600 mt-3">Autoadministrable</span>
          <h2 className=" font-bold text-center py-8">Estandar</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="p-3 boton w-[200px] mt-4 text-black mx-auto  bg-blue-gradient rounded-[10px]">
            Elegir
          </button>
        </div>
        <div className="w-full shadow-xl shadow-gray-500  flex flex-col bg-gray-100 p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <span className="text-gray-600">Empresarial</span>
          <h2 className=" font-bold text-center py-8">Personalizado</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className=" p-3 boton w-[200px] mt-4 text-black mx-auto  bg-blue-gradient rounded-[10px]">
            Elegir
          </button>
        </div>
      </div>
      <Anuncio/>
    </div>
  );
};

export default Target;
