import Image from 'next/image';
import React from 'react';
import propertyImg from '../../public/assets/projects/guitar.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Ecommerce = () => {
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
          <h2 className='py-2 text-white'>E-commerce Guitar</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8 text-white'>
        <div className='col-span-4'>
          <h2 className='py-4'>Project</h2>
          <p>
            Esta es una aplicación web creada con Next.js, Tailwind CSS y Strapi para permitir a los usuarios comprar guitarras y leer noticias sobre instrumentos musicales en un blog integrado. La aplicación cuenta con un enfoque orientado al SEO, ya que utiliza Server-side Rendering para generar las páginas web y asegurar que sean fáciles de indexar por los motores de búsqueda.

            <h2 className='py-4'>Funcionalidades</h2>

            La aplicación ofrece diversas funcionalidades para brindar una experiencia completa al usuario. Algunas de estas funcionalidades incluyen la posibilidad de registrarse y autenticarse para acceder a las opciones de compra, la visualización de guitarras disponibles en la tienda y la selección de las mismas para agregarlas al carrito de compras. Además, la aplicación permite realizar el pago de las guitarras seleccionadas y recibir una confirmación del pedido, junto con la información necesaria para el envío. Por último, la aplicación cuenta con un blog de noticias sobre instrumentos musicales que brinda información valiosa y actualizada sobre el mundo de la música.
          </p>
          <a
            href='https://github.com/emalopezperez/tienda-virtual-guitarras-next.js'
            target=''
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://tienda-virtual-guitarras-next-bqecfpmmc-emalopezperez.vercel.app/'
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
                <RiRadioButtonFill className='pr-1' /> Next js
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='flex items-center py-2 text-gray-600'>
                <RiRadioButtonFill className='pr-1' /> Strapi
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

export default Ecommerce;