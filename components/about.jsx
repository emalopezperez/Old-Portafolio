import Link from "next/link";


const About = () => {
  return (
    <div id="about" className=" p-2 flex items-center">
      <div className="max-w-[1200px] m-auto md:grid grid-cols-1 ">
        <div className="col-span-2">
          <p className="uppercase text-2xl py-6 tracking-widest text-gray-700">
            Sobre Nosotros
          </p>
          <p className="py-2 text-black">
          Somos una empresa enfocada en la solucion y desarrollo web
          </p>
          <p className="py-2 text-gray-600">
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
        
      </div>
    </div>
  );
};

export default About;
