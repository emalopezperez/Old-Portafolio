import Image from "next/image";
import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import { motion } from "framer-motion";

const Skils = () => {
  return (

    <div id="skills" className="w-full ">
      <div className="max-w-[1200px] mx-4 md:mx-auto flex flex-col justify-center h-full shadow-base shadow-white group hover:bg-gradient-to-r ">
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={ { once: true, amount: 0.5 } }
          transition={ { delay: 0.10, duration: 0.5 } }
          variants={ {
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          } }
        >
          <h2 className="py-4 font-poppins font-semibold  text-3xl sm:text-4xl md:text-5xl text-red-300 ss:leading-[100.8px] leading-[75px] mb-4">Tecnologias</h2>
          <div className="grid grid-cols-2 gap-8 text-white cursor-pointer lg:grid-cols-4">
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <Image src={ Html } width="10px" height="24px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary">HTML</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <Image src={ Css } width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary">CSS</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <Image src={ Javascript } width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary">JavaScript</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <Image src={ ReactImg } width="24px" height="24px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary">React</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <Image src={ Tailwind } width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary">Tailwind</h3>
                </div>
              </div>
            </div>
            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <Image src={ Firebase } width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary">Firebase</h3>
                </div>
              </div>
            </div>

            <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
              <div className="grid items-center justify-center grid-cols-2 gap-4">
                <div className="m-auto">
                  <Image className="bg-white" src={ NextJS } width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3 className="titulo-secundary">Next</h3>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skils;
