import './MenuCompra.css';

function MenuCompra() {
  return (
    <div className="w-full min-h-screen px-4 py-12 flex flex-wrap justify-center items-center gap-6 bg-[#fffaf2] text-stone-800">
      {/* Caja de 6 */}
      <div className="relative w-[45%] max-w-[300px] aspect-[3/4]">
        <img
          src="/img/caja-6.png"
          alt="Caja de 6 Brownies"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="https://mpago.la/6brownies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/boton-6.png"
              alt="Comprar caja de 6"
              className="w-[160px] hover:scale-105 transition-transform duration-300 drop-shadow-md"
            />
          </a>
        </div>
      </div>

      {/* Caja de 12 */}
      <div className="relative w-[45%] max-w-[300px] aspect-[3/4]">
        <img
          src="/img/caja-12.png"
          alt="Caja de 12 Brownies"
          className="w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
          <a
            href="https://mpago.la/12brownies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/boton-12.png"
              alt="Comprar caja de 12"
              className="w-[160px] hover:scale-105 transition-transform duration-300 drop-shadow-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuCompra;
