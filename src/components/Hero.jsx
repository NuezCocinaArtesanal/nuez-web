import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  const [agradecido, setAgradecido] = useState(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const videos = ['/videos/1.mp4', '/videos/2.mp4', '/videos/3.mp4'];

  useEffect(() => {
    const interval = setInterval(() => {
      setVideoIndex((prev) => (prev + 1) % videos.length);
    }, 12000); // cambia cada 12 segundos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.classList.add('fade');
      videoRef.current.src = videos[videoIndex];
      videoRef.current.load();
      videoRef.current.play();
      setTimeout(() => {
        videoRef.current.classList.remove('fade');
      }, 800); // mismo que el CSS
    }
  }, [videoIndex]);

  const handlePedido = () => {
    setAgradecido(true);
    setTimeout(() => {
      window.open('https://mpago.la/29kzrB9', '_blank');
      setAgradecido(false);
    }, 1000);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Video con cambio de fuente y fade */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-in-out"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa de oscurecimiento */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/30 z-0" />

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-8 space-y-6 sm:space-y-8"
      >
        {/* Logo más definido con sutil pulso */}
        <motion.img
          src="/logo-nuez.png"
          alt="Nuez"
          className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain drop-shadow-lg"
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.015, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />

        {/* Botón de pedido */}
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

        {/* Texto que explica el concepto de Nuez */}
        <motion.p
          className="text-white text-sm sm:text-lg font-light tracking-wide px-6 max-w-sm sm:max-w-md"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          Brownie del Día. Horneamos con calma. Sin stock infinito. Cuando se venden todos, cerramos Nuez por hoy 🍫
        </motion.p>
      </motion.div>
    </div>
  );
}

export default Hero;
