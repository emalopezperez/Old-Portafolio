import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Main = () => {
  return (
    <div id="home" className=" h-screen text-center ">
      <div className="max-w-[1200px] h-full mx-auto p-2 flex justify-center items-center ">
        <div>
          <div className="uppercase text-sm tracking-widest text-white py-7">
            <Typewriter
              options={{
                strings: ["CONSTRUIMOS jUNTOS..."],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <h1 className="font-poppins font-semibold  text-4xl  md:text-6xl text-white ">
            Hola somos <span className="text-gradient">Carmma</span>
          </h1>
          <h1 className=" font-poppins font-semibold  text-4xl  md:text-6xl text-white ">
            tu empresa de desarrollo web
          </h1>

          <p className=" py-8 titulo-secundary sm:max-w-[70%] m-auto  text-sm md:text-lg">
            Nos enfocamos en crear sitios y aplicaciones web con diseño
            responsivo para que se adapte a los diferentes dispoitivos,
            garantizando la experiencia del usuario.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto mt-12">
            <a href="" target="_blank" rel="noreferrer">
              <div className="rounded-full boton shadow-lg shadow-gray-500  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <div className="rounded-full boton shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full boton shadow-lg shadow-gray-500  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="rounded-full boton shadow-lg shadow-gray-500  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
