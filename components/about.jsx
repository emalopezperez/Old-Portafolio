import React from "react";
import Image from "next/image";
import robot from "../public/assets/logos/robot.png";
import { motion } from "framer-motion";

const About = () => {
  return (
      <div className="flex items-center w-full p-2 py-16 mx-4 md:mx-auto">
        <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="py-4 font-poppins font-semibold  text-3xl sm:text-4xl md:text-5xl text-red-300 ss:leading-[100.8px] leading-[75px]">Sobre mi</h2>
            <p className="py-2 text-white w-[290px] md:w-[690px] ">
              Soy Emanuel López, un apasionado de la tecnología, actualmente explorando tanto el lado del Frontend como del Backend. Tengo experiencia en proyectos de JavaScript, React Js, Next Js, HTML y CSS. Tambien cuento con habilidades en otras tecnologías como Tailwind CSS, Firebase, Strapi, MongoDB y Git. Mi enfoque es encontrar soluciones óptimas y trabajar en equipo, siguiendo siempre buenas prácticas de programación. La programación se ha convertido en mi verdadera pasión, ya que me brinda la oportunidad de ser creativo y solucionar problemas de manera eficiente, mientras continuamente me mantengo actualizado con los últimos lenguajes y tecnologías en este campo en constante evolución.
            </p>

          </div>
          <div className={ `flex-1 flex md:my-0 my-10 relative ` }>
            <Image
              src={ robot }
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5] mt-12"
            />
          </div>
        </div>
      </div>
  );
};

export default About;