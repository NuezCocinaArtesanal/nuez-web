import { useState, useEffect } from 'react';
import './Hero.css';

function Hero() {
  // Estado para manejar el stock
  const [stock, setStock] = useState(() => {
    const savedStock = localStorage.getItem('stock');
    return savedStock ? parseInt(savedStock) : 80; // Comienza con 80 unidades si no hay datos guardados
  });

  // Función para reducir el stock a la mitad
  const handlePurchase = () => {
    if (stock > 0) {
      const newStock = Math.floor(stock / 2); // Reducimos el stock a la mitad, redondeado hacia abajo
      setStock(newStock);
      localStorage.setItem('stock', newStock); // Guardamos el stock actualizado en localStorage
    }
  };

  useEffect(() => {
    // Si quieres hacer algo cuando el stock cambie, puedes usar useEffect aquí
  }, [stock]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Video de fondo */}
      <video
        src="/videos/1.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Filtro visual */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md z-0" />

      {/* Imagen de brownies al borde inferior y achicada */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src="/img/stock.png"
          alt="Brownie Horneado"
          className="w-3/4 h-auto object-cover rounded-lg shadow-md"  // Se achica a 75% del ancho
        />
      </div>

      {/* Botón de compra */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <a
          href="https://mpago.la/1brownie"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handlePurchase}
        >
          <img
            src="/img/boton-pedir.png"
            alt="Pedir el Brownie del Día"
            className="w-[270px] h-auto max-w-none hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
}

export default Hero;
