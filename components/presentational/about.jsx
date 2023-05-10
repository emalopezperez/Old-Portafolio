
const About = () => {
  return (
    <section id="about">
      <article className=" mx-auto max-w-[1240px] ">
        <header className="flex justify-center mt-0 mb-3 md:mt-8 md:mb-12">
          <h2 className="py-4 text-3xl font-semibold text-red-300 font-poppins sm:text-4xl md:text-5xl ">
            Sobre mi
          </h2>
        </header>
        <div className="flex items-center justify-center gap-10 mx-auto md:gap-20 md:flex-col">
          <p className=" text-white w-[300px] md:w-[690px] py-2 ">
            Soy Emanuel López, un apasionado de la tecnología, actualmente
            explorando tanto el lado del Frontend como del Backend. Tengo
            experiencia en proyectos de JavaScript, React Js, Next Js, HTML y
            CSS. Tambien cuento con habilidades en otras tecnologías como
            Tailwind CSS, Firebase, Strapi, MongoDB y Git. Mi enfoque es
            encontrar soluciones óptimas y trabajar en equipo, siguiendo siempre
            buenas prácticas de programación. La programación se ha convertido
            en mi verdadera pasión, ya que me brinda la oportunidad de ser
            creativo y solucionar problemas de manera eficiente, mientras
            continuamente me mantengo actualizado con los últimos lenguajes y
            tecnologías en este campo en constante evolución.
          </p>
          
        </div>
      </article>
    </section>
  );
};

export default About;
