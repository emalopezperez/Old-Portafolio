import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";

const Skils = () => {
  return (
    <div id="skills" className="w-full  p-2">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-4 font-poppins font-semibold  text-3xl sm:text-4xl md:text-5xl text-white ss:leading-[100.8px] leading-[75px] mb-4">Tecnologias</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="10px" height="24px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="titulo-secundary">HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="titulo-secundary">CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="titulo-secundary">JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="titulo-secundary">React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="titulo-secundary">Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="titulo-secundary">Firebase</h3>
              </div>
            </div>
          </div>
          
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image className="" src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="titulo-secundary">Next</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
