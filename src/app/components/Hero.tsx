import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0">
        <iframe
          src="https://www.youtube.com/embed/IqrZJY1OgSc?autoplay=1&mute=1&loop=1&playlist=IqrZJY1OgSc&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="w-full h-full object-cover opacity-40 pointer-events-none"
          allow="autoplay; encrypted-media"
          style={{ 
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '100vw',
            height: '177.77vw', // 16:9 aspect ratio
            minHeight: '100vh',
            minWidth: '56.25vh',
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, cyan 1px, transparent 1px),
            linear-gradient(to bottom, cyan 1px, transparent 1px)
          `,
          backgroundSize: ''
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Precisión Absoluta
            </span>
            <br />
            <span className="text-white">en Corte CNC</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Transformamos tus ideas en realidad con tecnología de manufactura avanzada
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/50"
            >
              Explorar Servicios
            </button>
            <button
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20"
            >
              Contactar
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}