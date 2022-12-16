import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [number, setNumber] = useState("");
  const [menssage, setMensagge] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, number, nombre, menssage, subject].includes("")) {
      toast.error("Todos los campos son obligatorios!", {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#f48fb1",
        },
        iconTheme: {
          primary: "#660033 ",
          secondary: "#FFFAEE",
        },
      });
    } else {
      const order = {
        nombre,
        email,
        number,
        subject,
        menssage,
      };

      try {
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

        setEmail("");
        setMensagge("");
        setNombre("");
        setSubject("");
        setNumber("");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1200px] m-auto px-2 py-20 w-full ">
        <p className="mb-5 font-poppins font-semibold  text-3xl sm:text-4xl md:text-5xl text-white ss:leading-[100.8px] leading-[75px">
          Contacto
        </p>
        <div className="grid lg:grid-cols-5 gap-8 ">
          {/* left */}
          <div className="bg-white col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-500 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div></div>
              <div>
                <h2 className="py-2 text-gradient">Carmma</h2>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
                <p className="py-4">
                  Desde ya, ¡muchas gracias! El equipo de{" "}
                  <span className="titulo-logo cursor-pointer">Carmma</span>.
                </p>
              </div>
              <div>
                <p className="uppercase font-bold pt-8">
                  OTROS MEDIOS de comunicacion:
                </p>
                <div className=" mt-6 flex items-center justify-between py-4">
                  <a href="" target="_blank" rel="noreferrer">
                    <div className="rounded-full boton shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="" target="_blank" rel="noreferrer">
                    <div className="rounded-full boton shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full boton shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/">
                    <div className="rounded-full boton shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4 bg-white">
            <div className="p-4">
              {<Toaster position="top-right" reverseOrder={false} />}

              <form onSubmit={handleSubmit} action="" method="" encType="">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      onChange={(e) => setNombre(e.target.value)}
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      onChange={(e) => setNumber(e.target.value)}
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    onChange={(e) => setSubject(e.target.value)}
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    onChange={(e) => setMensagge(e.target.value)}
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-4 boton  mt-4 text-black bg-blue-gradient rounded-[10px]"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="rounded-full shadow-lg boton shadow-gray-500 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="  text-black" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
