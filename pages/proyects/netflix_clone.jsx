import Image from 'next/image';
import React from 'react';
import propertyImg from '../../public/assets/projects/netflix.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Netflix = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={ propertyImg }
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-white'>Clone Netflix</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
          <h2 className='py-4'>Proyecto</h2>
          <p>
            Este es un clon de Netflix que utiliza una API de TMDB para obtener todos los datos. El proyecto incluye tanto un front-end de React como un back-end de Firebase para brindar funcionalidades de inicio de sesión y almacenamiento en la nube de datos específicos del usuario.

            <h2 className='py-4'>Funcionalidades</h2>

            Este proyecto ofrece diversas funcionalidades, incluyendo el registro y autenticación de usuarios mediante Firebase Authentication, la visualización de películas y series de televisión desde la API de TMDB, la posibilidad de buscar películas y series por título, la capacidad de agregar películas y series a la lista de "Mi lista", la reproducción de trailers de películas y series, y el almacenamiento en la nube de datos específicos del usuario mediante Firebase Firestore.

            Las tecnologías utilizadas en este proyecto incluyen React, un framework de JavaScript para construir interfaces de usuario interactivas, Firebase, una plataforma de desarrollo de aplicaciones móviles y web que proporciona servicios en la nube como almacenamiento y autenticación, la API de TMDB, una API gratuita que proporciona información sobre películas y series de televisión, y Tailwind CSS, un framework de diseño CSS que permite crear interfaces de usuario personalizadas de manera rápida y sencilla.
          </p>
          <a
            href='https://github.com/emalopezperez/Clone-Netflix'
            target=''
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://clone-netflix-react-js-black.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl'>
          <div className='p-2'>
            <p className='pb-2 font-bold text-center'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Netflix;