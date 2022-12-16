import React from "react";
import Image from "next/image";
import Link from "next/link";
import robot from "../public/assets/logos/robot.png";

const About = () => {
  return (
    <div id="about" className="w-full  p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-4 font-poppins font-semibold  text-3xl sm:text-4xl md:text-5xl text-white ss:leading-[100.8px] leading-[75px]">Sobre Nosotros</h2>
          <p className="py-2 titulo-secundary">
          Proporcionamos el mejoramiento de las empresas y la facilidad para los usuarios, mediante el desarrollo de aplicaciones Web que se ajustan perfectamente a la mayoría de las necesidades de comunicaciones e imagen de cada compañía en la búsqueda de aprovechar las oportunidades de Internet.

          Para lograrlo se hace necesario que generemos una relación entre la visión de su empresa, lo que busca y la imagen proyectada, lo que permite especializar todos los servicios que el cliente pueda necesitar para materializar de la mejor manera sus proyectos Web; teniendo en cuenta que cada cliente es único contemplamos características especiales para lograr destacar los rasgos singulares de cada empresa en el mercado globalizado.
          
          En esta nueva era del Internet, todo individuo y toda compañía tiene la oportunidad de tener su propio sitio Web en el cual pueden:
          
          Aumentar la visibilidad de sus servicios / productos en el mundo entero.
          
          Sobresalir como líder en el sector por encima de la competencia, la disponibilidad comprende por ejemplo el acceso desde cualquier lugar geográfico y la garantía de operación continua.
          
          Mejorar el servicio al cliente, hacer seguimiento a la efectividad de su mercadeo.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className={`flex-1 flex  md:my-0 my-10 relative`}>
          <Image
            src={robot}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        </div>
      </div>
    </div>
  );
};

export default About;
