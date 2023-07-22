import { useEffect, useState } from "react";
import Link from "next/link";

export default function BlogSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    try {
      const apiUrl = "https://backend-blog-c919.vercel.app";
      const endpoint = `${apiUrl}/api/articles`;
      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }

      const data = await response.json();
      const firstTenArticles = data.items.slice(0, 4);
      setArticles(firstTenArticles);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div id="blog" className="flex flex-col w-screen h-full gap-20 ">
      <header className="flex items-center justify-center w-full pt-20">
        <h2 className="text-3xl font-semibold text-white font-poppins sm:text-4xl md:text-5xl">
          Mis articulos
        </h2>
      </header>
      <article className="flex flex-wrap items-center justify-center w-full gap-8 p-2">
        {articles.map((article) => (
          <a
            href="https://blog-programacion.vercel.app"
            key={article._id}
            className="flex flex-col ">
            <div className=" flex flex-col gap-0 md:gap-5 transition duration-300 ease-in-out transform cursor-pointer hover:none  w-[270px]  bg-white p-3 rounded-sm">
              <img src={article.imagen} alt={article.titulo}  className="object-fill rounded-sm"/>
              <div className="">
                <h3 className="pt-2 pb-2">{article.titulo}</h3>
                <p className="overflow-hidden font-sans text-base font-normal leading-8 text-justify truncate h-100">
                  {article.contenido}
                </p>
              </div>
            </div>
          </a>
        ))}
      </article>
    </div>
  );
}
