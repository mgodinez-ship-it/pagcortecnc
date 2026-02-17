import { motion } from 'motion/react';
import { Box, Drill, Zap, Cog, Ruler, Clock } from 'lucide-react';
import { useState } from 'react';

export function Services() {
  const [showVideo, setShowVideo] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState('');

  const services = [
    {
      icon: Drill,
      title: 'Corte CNC',
      description: 'Corte de precisión en diversos materiales con tecnología de última generación',
      color: 'from-cyan-500 to-blue-600',
      videoUrl: 'https://youtube.com/shorts/8BRHgTuAczE?feature=share'
    },
    {
      icon: Box,
      title: 'Manufactura 3D',
      description: 'Prototipado rápido y producción de piezas complejas en 3 dimensiones',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'Corte Láser',
      description: 'Corte láser de alta precisión para metales, acrílicos y más',
      color: 'from-purple-500 to-pink-600',
      videoUrl: 'https://youtube.com/shorts/SZtbvvKPyho?feature=share'
    },
    {
      icon: Cog,
      title: 'Mecanizado',
      description: 'Mecanizado CNC de alta precisión para piezas industriales',
      color: 'from-pink-500 to-red-600'
    },
    {
      icon: Ruler,
      title: 'Diseño CAD/CAM',
      description: 'Asesoría y desarrollo de diseños técnicos personalizados',
      color: 'from-cyan-500 to-teal-600'
    },
    {
      icon: Clock,
      title: 'Producción Rápida',
      description: 'Tiempos de entrega optimizados sin comprometer la calidad',
      color: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <section id="servicios" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/BwT03SxKAzE?autoplay=1&mute=1&loop=1&playlist=BwT03SxKAzE&controls=0&showinfo=0&rel=0&modestbranding=1"
          className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          allow="autoplay; encrypted-media"
          style={{ border: 'none' }}
        />
        {/* Overlay opaco */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones integrales de manufactura con la más alta precisión y eficiencia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div 
                  onClick={() => {
                    if (service.videoUrl) {
                      setShowVideo(true);
                      setCurrentVideoUrl(service.videoUrl);
                    }
                  }}
                  className={`relative p-8 bg-gradient-to-b from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm h-full ${service.videoUrl ? 'cursor-pointer' : ''}`}
                >
                  {/* Gradient Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                  
                  <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.color} p-0.5`}>
                    <div className="w-full h-full bg-gray-900 rounded-xl flex items-center justify-center">
                      <Icon className="text-cyan-400" size={32} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  
                  {service.videoUrl && (
                    <p className="text-cyan-400 text-sm mt-4 group-hover:text-cyan-300">
                      Ver video →
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setShowVideo(false)}
        >
          <div 
            className="relative w-full max-w-6xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-cyan-400 text-lg font-bold transition-colors"
            >
              ✕ Cerrar
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${currentVideoUrl.split('/').pop()}?autoplay=1`}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}