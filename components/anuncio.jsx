const Anuncio = () => {
  return (
    <div className=" mt-[150px]">
      <div className=" flex-row flex-wrap ">
        <div className="flex-1 flex justify-center items-center flex-row m-3 md:px-5">
          <h4 className="font-poppins font-semibold  text-xl sm:text-2xl md:text-4xl text-white   px-5">
            3800+
          </h4>
          <p className="font-poppins font-normal  text-gradient uppercase ml-3">
            Ventas
          </p>
          <h4 className="font-poppins font-semibold  text-xl sm:text-2xl md:text-4xl text-white    px-5">
            3800+
          </h4>
          <p className="font-poppins font-normal  text-gradient uppercase ml-3">
            Clientes
          </p>
          <h4 className=" font-poppins font-semibold  text-xl sm:text-2xl md:text-4xl text-white    px-2">
            3800+
          </h4>

          <p className="hidden font-poppins font-normal text-gradient uppercase ml-3">
            Ganancia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Anuncio;
