import { useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const [agradecido, setAgradecido] = useState(false);

  const handlePedido = () => {
    setAgradecido(true);

    setTimeout(() => {
      window.open('https://mpago.la/29kzrB9', '_blank');
      setAgradecido(false);
    }, 1000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fondo de videos */}
      <div className="absolute inset-0 grid grid-cols-3 gap-0 z-0">
        {[1, 2, 3].map((n) => (
          <video
            key={n}
            src={`/videos/${n}.mp4`}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ))}
      </div>

      {/* Capa de blur */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/30 z-0" />

      {/* Contenido centrado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center justify-center h-full space-y-8"
      >
        {/* Logo chico */}
        <motion.img
          src="/logo-nuez.png"
          alt="Nuez"
          className="w-10 h-10 object-contain drop-shadow-xl"
          initial={{ y: 0 }}
          animate={{ y: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />

        {/* Botón XXL con todo */}
        <motion.button
          onClick={handlePedido}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.07, y: -2 }}
          whileTap={{ scale: 0.96 }}
          disabled={agradecido}
          className="boton-brownie cursor-pointer relative overflow-hidden bg-gradient-to-b from-[#fff9f5] to-[#f2e9e2] text-stone-800 font-bold px-10 py-5 rounded-full text-2xl shadow-xl shadow-amber-300/30 border border-stone-300 hover:shadow-2xl transition-all duration-300"
        >
          <span className="relative z-10">
            {agradecido ? '¡Gracias!' : 'Pedir ahora 🍫'}
          </span>
          {!agradecido && <span className="brillo" />}
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Hero;
