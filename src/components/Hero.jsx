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

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-6 sm:space-y-8"
      >
        {/* Logo más chico */}
        <motion.img
  src="/logo-nuez.png"
  alt="Nuez"
  className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] object-contain drop-shadow-xl rounded-full"
  initial={{ y: 0 }}
  animate={{ y: [-2, 2, -2] }}
  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />

        {/* Botón grande y hermoso */}
        <motion.button
          onClick={handlePedido}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: agradecido ? 1 : [1, 1.04, 1],
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
            ease: 'easeOut',
            repeat: agradecido ? 0 : Infinity,
            repeatType: 'loop',
            repeatDelay: 3,
          }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.95 }}
          disabled={agradecido}
          className="boton-brownie cursor-pointer relative overflow-hidden bg-gradient-to-br from-[#fff4e5] to-[#f5d7a2] text-stone-900 font-extrabold px-12 py-6 text-xl sm:text-3xl rounded-full shadow-2xl shadow-amber-500/40 border border-amber-200 hover:shadow-[0_0_25px_rgba(255,193,90,0.6)] transition-all duration-300 ease-in-out"
        >
          <span className="relative z-10 tracking-wide">
            {agradecido ? '¡Gracias!' : 'Pedir ahora 🍫'}
          </span>
          {!agradecido && <span className="brillo" />}
        </motion.button>
      </motion.div>
    </div>
  );
}

export default Hero;
