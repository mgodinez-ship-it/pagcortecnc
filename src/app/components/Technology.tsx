import { motion } from 'motion/react';
import { Cpu, Layers, Workflow, Gauge } from 'lucide-react';

export function Technology() {
  const features = [
    {
      icon: Cpu,
      title: 'Control Numérico Avanzado',
      description: 'Sistemas CNC de última generación con precisión de micrómetros'
    },
    {
      icon: Layers,
      title: 'Multi-Materiales',
      description: 'Capacidad de trabajar con metales, plásticos, madera y materiales compuestos'
    },
    {
      icon: Workflow,
      title: 'Automatización Total',
      description: 'Procesos optimizados desde el diseño hasta la producción final'
    },
    {
      icon: Gauge,
      title: 'Control de Calidad',
      description: 'Inspección dimensional y certificación en cada proyecto'
    }
  ];

  return (
    <section id="tecnología" className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, cyan 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tecnología de
              </span>
              <br />
              <span className="text-white">Vanguardia</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Equipados con maquinaria CNC de última generación, garantizamos precisión absoluta en cada proyecto. Nuestra infraestructura tecnológica nos permite trabajar con las tolerancias más exigentes del mercado.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 p-0.5">
                        <div className="w-full h-full bg-gray-900 rounded-lg flex items-center justify-center">
                          <Icon className="text-cyan-400" size={20} />
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30">
              <img
                src="https://i.ibb.co/d40yJsy3/Gemini-Generated-Image-veoclgveoclgveoc.png"
                alt="CNC Technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-8 -left-8 bg-gradient-to-r from-cyan-500 to-blue-600 p-6 rounded-xl shadow-2xl"
            >
              <div className="text-4xl font-bold text-white mb-1">±0.001mm</div>
              <div className="text-white/80 text-sm">Precisión Garantizada</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
