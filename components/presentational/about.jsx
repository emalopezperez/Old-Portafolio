import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center w-screen h-full md:h-screen ">
      <header className="flex justify-center w-full pb-0 mt-0 md:pb-10 md:mt-12 md:mb-12">
        <h2 className="py-4 text-3xl font-semibold text-white font-poppins sm:text-4xl md:text-5xl">
          Sobre mi
        </h2>
      </header>
      <article className="flex flex-wrap justify-center w-full h-full md:flex-nowrap md:mx-auto">
        <div className="max-w-[1200px] flex flex-col gap-10 md:gap-40 w-screen md:flex-row mx-4">
          <p className="w-[100%] py-4  text-[#a7a9be] text-md md:text-lg font-medium leading-32">
            Soy Emanuel López, un apasionado de la tecnología, actualmente
            explorando tanto el lado del Frontend como del Backend. Tengo
            experiencia en proyectos de JavaScript, React Js, Next Js, HTML y
            CSS. También cuento con habilidades en otras tecnologías como
            Tailwind CSS, Firebase, Strapi, MongoDB y Git. Mi enfoque es
            encontrar soluciones óptimas y trabajar en equipo, siguiendo siempre
            buenas prácticas de programación. La programación se ha convertido
            en mi verdadera pasión, ya que me brinda la oportunidad de ser
            creativo y solucionar problemas de manera eficiente, mientras
            continuamente me mantengo actualizado con los últimos lenguajes y
            tecnologías en este campo en constante evolución.
          </p>

          <motion.div
            className="w-full md:w-3/5 lg:w-2/4"
            animate={{ y: [5, -5] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}>
            <div className="bg-slate-900 bg-opacity-50 backdrop-blur-lg grid p-2 rounded-xl w-full divide-y-[1px] divide-zinc-600 gap-2 ">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  <div className="p-1.5 rounded-full bg-zinc-600 hover:bg-red-400 transition-colors"></div>
                  <div className="p-1.5 rounded-full bg-zinc-600 hover:bg-amber-400 transition-colors"></div>
                  <div className="p-1.5 rounded-full bg-zinc-600 hover:bg-green-400 transition-colors"></div>
                </div>
                <span className="text-sm text-zinc-400">/index.js</span>
              </div>
              <div className="w-full">
                <pre className="relative w-full py-2 text-sm text-zinc-400">
                  <div className="absolute shadow-[0px_0px_300px_70px_#0ea5e9]"></div>
                  <code id="code">
                    <span className="text-blue-400">const</span> welcome ={" "}
                    <span className="text-yellow-100">()</span>{" "}
                    <span className="text-blue-400">=&gt;</span>{" "}
                    <span className="text-yellow-100">&#123;</span> <br></br>
                    <br></br>
                    {"  "}
                    <span className="text-blue-400">const</span> about ={" "}
                    <span className="text-yellow-100">&#123;</span> <br></br>
                    {"  "}
                    {"  "} nombre: '
                    <span className="text-yellow-100">Emanuel</span>
                    ', <br></br>
                    {"  "}
                    {"  "} apellido: '
                    <span className="text-yellow-100">Emanuel</span>
                    ', <br></br>
                    {"  "}
                    {"  "} edad: '<span className="text-yellow-100">25</span>',
                    <br></br>
                    {"  "}
                    {"  "} country: '
                    <span className="text-yellow-100">Uruguay</span>', <br></br>
                    {"  "}
                    <span className="text-yellow-100">&#125;</span>
                    <br></br>
                    <br></br>
                    {"  "}
                    <span className="text-blue-400">return</span> about{" "}
                    <br></br>
                    {"  "}
                    <span className="text-yellow-100">
                      &#125;
                    </span> <br></br> <br></br>
                    welcome<span className="text-yellow-100">()</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </section>
  );
};

export default About;
