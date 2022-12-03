
import React from 'react'

const Target = () => {
  return (
    <div id="target" className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
      <p className='text-xl m-4 tracking-widest uppercase text-red-300'>
        Planes
      </p>
      <h2 className='py-4'>Elige tu plan</h2>
        <div className=' mt-10 grid  xl:grid-cols-3 grid-cols-1 gap-6 '>
        <div className=' h-auto w-full shadow-xl shadow-gray-400 rounded-xl group py-4 cursor-pointer p-4'>
          <span className='text-gray-600'>Paquete básico</span>
          <h2>Básico</h2>
          <div className='flex flex-col p-4'>
            <span>-Diseño OnePage</span>
            <span>-Dominio personalizado</span>
            <span>-2 cuentas de email</span>
            <span>-Soporte Básico</span>
          </div>
          <div className='flex justify-center mt-4'>
              <button className='bg-red-300 p-1'>Elegir</button>
            </div>
        </div>
          <div className=' h-auto w-full shadow-xl shadow-gray-400 rounded-xl group p-4  cursor-pointer'>
            <span className='text-gray-600'>Autoadministrable</span>
            <h2>Estandar</h2>
            <div className='flex flex-col p-4'>
              <span>-Diseño OnePage</span>
              <span>-Dominio personalizado</span>
              <span>-2 cuentas de email</span>
              <span>-Soporte Básico</span>
            </div>
            <div className='flex justify-center mt-4'>
              <button className='bg-red-300 p-1'>Elegir</button>
            </div>
          </div>
          <div className=' h-auto w-full shadow-xl  shadow-gray-400 rounded-xl group p-4 cursor-pointer'>
            <span className="text-gray-600">Empresarial</span>
            <h2>Personalizado</h2>
            <div className='flex flex-col p-4'>
              <span>-Diseño OnePage</span>
              <span>-Dominio personalizado</span>
              <span>-2 cuentas de email</span>
              <span>-Soporte Básico</span>
            </div>
            
            <div className='flex justify-center mt-4'>
              <button className='bg-red-300 p-1'>Elegir</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Target