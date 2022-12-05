import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typed from "react-typed"

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center pt-12'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600 mt-2'>
            CONSTRUYAMOS jUNTOS
          </p>
          <h1 className='py-2 text-gray-700'>
            Hola somos <span className='text-red-300'>Carmma</span>
          </h1>
          <h1 className=' text-gray-700'>una empresa de desarrolo web, creamos tus
            {""}
          <p className='text-gray-800 py-3'>
              <Typed strings={["Paginas web", "Aplicaciones", "Tiendas onlinea", "Blogs "]}
              typeSpeed={90} backSpeed={100} loop
              />
          </p>
          
          </h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            Nos enfocamos en crear sitios y aplicaciones web con diseño responsivo para que se adapte a los diferentes dispoitivos, garantizando la experiencia del usuario.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-9'>
            <a
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href=''
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='/resume'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
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
