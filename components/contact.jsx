import Link from "next/link";
import React, { useState } from "react";
import Router from 'next/router';
import useValidacion from '../hooks/useValidacion'
import validarContact from '../validation/ValidationCantact'
import Error from "../components/errors/Error";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {

  const STATE_INICIAL = {
    nombre: '',
    email: '',
    numero: '',
    asunto: "",
    mensaje: ""
  }

  const [error, guardarError] = useState(false);

  const { valores, errores, handleSubmit, handleChange, handleBlur, resetearFormulario } = useValidacion(STATE_INICIAL, validarContact, handleRegistroSubmit);

  const { nombre, email, numero, mensaje, asunto } = valores;

  async function handleRegistroSubmit() {
    try {
      const order = {
        nombre,
        email,
        numero,
        asunto,
        mensaje,
      };

      const orderCollection = collection(db, "datos");
      const consulta = addDoc(orderCollection, order);

      toast.success("Mensaje enviado!", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#0B3B24",
        },
        iconTheme: {
          primary: "#04640C",
          secondary: "#FFFAEE",
        },
      });
      Router.push('/');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <motion.div
      id="contact"
      className=""
      initial="hidden"
      whileInView="visible"
      viewport={ { once: true, amount: 0.5 } }
      transition={ { delay: 0.10, duration: 0.5 } }
      variants={ {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      } }
    >
      <div className="w-full lg:h-screen">
        <div className="max-w-[1200px] m-auto px-2 py-16 w-full ">
          <h2 className="py-4 font-poppins font-semibold  text-3xl sm:text-4xl md:text-5xl text-red-300 ss:leading-[100.8px] leading-[75px] mb-4">Contacto</h2>
          <div className="grid gap-8 lg:grid-cols-5">
            {/* left */ }
            <div className="hidden w-full h-full col-span-3 p-4 rounded-md shadow-md md:flex lg:col-span-2 shadow-white">
              <div className="h-full lg:p-4 ">
                <div></div>
                <div>
                  <h2 className="py-2 text-red-300">Emanuel Lopez</h2>
                  <p className="py-4 text-white">
                    I am available for freelance or full-time positions. Contact
                    me and let&apos;s talk.
                  </p>

                </div>
                <div>
                  <p className="pt-8 font-bold text-white uppercase">
                    OTROS MEDIOS de comunicacion:
                  </p>
                  <div className="flex items-center justify-between py-4 mt-6 text-white">
                    <a href="https://www.linkedin.com/in/emanuel-lopez-developer/" target="_blank" rel="noreferrer">
                      <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-600 hover:scale-110">
                        <FaLinkedinIn className="text-red-200" />
                      </div>
                    </a>
                    <a href="https://github.com/emalopezperez" target="_blank" rel="noreferrer">
                      <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-600 hover:scale-110">
                        <FaGithub className="text-red-200" />
                      </div>
                    </a>
                    <Link href='mailto:emanuel-lopez13@hotmail.com'>
                      <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-600 hover:scale-110">
                        <AiOutlineMail className="text-red-200" />
                      </div>
                    </Link>
                    <Link href="https://wa.link/zlkyij">
                      <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-600 hover:scale-110">
                        <BsFillPersonLinesFill className="text-red-200" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* right */ }
            <div className="w-full h-auto col-span-3 mx-auto text-white shadow-md shadow-white rounded-xl lg:p-4">
              <div className="p-4">
                { <Toaster position="top-right" reverseOrder={ false } /> }
                <form
                  onSubmit={ handleSubmit }
                  noValidate action=""
                  method="" encType="">
                  <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                    <div className="flex flex-col">
                      <label className="py-2 text-sm uppercase">Name</label>
                      <input
                        className={ errores.nombre ? "flex p-3 text-black border-2 border-gray-300 rounded-lg border-b-red-700 outline-none" : " outline-none flex p-3 text-black border-2 border-gray-300 rounded-lg " }
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={ nombre }
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                      />
                      { errores.nombre && <Error>  { errores.nombre }</Error> }
                    </div>

                    <div className="flex flex-col">
                      <label className="py-2 text-sm uppercase">
                        Phone Number
                      </label>
                      <input
                        className={ errores.numero ? "flex p-3 text-black border-2 border-gray-300 rounded-lg border-b-red-700 outline-none" : " outline-none flex p-3 text-black border-2 border-gray-300 rounded-lg " }
                        type="text"
                        id="numero"
                        name="numero"
                        value={ numero }
                        onChange={ handleChange }
                        onBlur={ handleBlur }
                      />
                      { errores.numero && <Error>  { errores.numero }</Error> }
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <input
                      className={ errores.asunto ? "flex p-3 text-black border-2 border-gray-300 rounded-lg border-b-red-700 outline-none" : " outline-none flex p-3 text-black border-2 border-gray-300 rounded-lg " }
                      type="text"
                      id="asunto"
                      name="asunto"
                      value={ asunto }
                      onChange={ handleChange }
                      onBlur={ handleBlur }
                    />
                    { errores.asunto && <Error>  { errores.asunto }</Error> }

                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Email</label>
                    <input
                      className={ errores.email ? "flex p-3 text-black border-2 border-gray-300 rounded-lg border-b-red-700 outline-none" : " outline-none flex p-3 text-black border-2 border-gray-300 rounded-lg " }
                      type="text"
                      id="email"
                      name="email"
                      value={ email }
                      onChange={ handleChange }
                      onBlur={ handleBlur }
                    />
                    { errores.email && <Error>  { errores.email }</Error> }
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Message</label>
                    <textarea
                      className={ errores.mensaje ? "flex p-3 text-black border-2 border-gray-300 rounded-lg border-b-red-700 outline-none" : " outline-none flex p-3 text-black border-2 border-gray-300 rounded-lg " }
                      rows="10"
                      type="text"
                      id="mensaje"
                      name="mensaje"
                      value={ mensaje }
                      onChange={ handleChange }
                      onBlur={ handleBlur }
                    ></textarea>
                    { errores.mensaje && <Error>  { errores.mensaje }</Error> }
                  </div>
                  <button
                    type="submit"
                    className="w-full p-4 mt-4 font-bold text-black bg-red-300"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={ { once: true, amount: 0.5 } }
            transition={ { delay: 0.2, duration: 0.5 } }
            variants={ {
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            } }
          >
            <div className="flex justify-center py-12">
              <Link href="/">
                <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-600 hover:scale-110">
                  <HiOutlineChevronDoubleUp className="text-red-200" size={ 30 } />
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;