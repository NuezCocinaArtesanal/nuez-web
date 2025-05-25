import './MenuCompra.css';

function MenuCompra() {
  return (
    <div className="w-screen h-screen flex flex-row">
      {/* Caja de 6 */}
      <div className="relative w-1/2 h-full">
        <img
          src="/img/caja-6.png"
          alt="Caja de 6 Brownies"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <a
            href="https://mpago.la/6brownies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/boton-6.png"
              alt="Comprar caja de 6"
              className="w-[280px] md:w-[320px] hover:scale-105 transition-transform duration-300 drop-shadow-md mb-4"
            />
          </a>
        </div>
      </div>

      {/* Caja de 12 */}
      <div className="relative w-1/2 h-full">
        <img
          src="/img/caja-12.png"
          alt="Caja de 12 Brownies"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />
        <div className="absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <a
            href="https://mpago.la/12brownies"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/boton-12.png"
              alt="Comprar caja de 12"
              className="w-[280px] md:w-[320px] hover:scale-105 transition-transform duration-300 drop-shadow-md mb-4"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MenuCompra;
