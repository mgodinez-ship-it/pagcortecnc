import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Letras y Anuncios Corporativos",
      category: "Letras 3D y Señalética Corporativa",
      image:
        "https://i.ibb.co/Qv42fxSW/Whats-App-Image-2026-02-16-at-13-07-04.jpg",
      description:
        "Letras 3D y Señalética Corporativa Fabricación en MDF, acrílico, PVC espumado y aluminio compuesto para marcas y negocios",
    },
    {
      title: "Corte de Precisión en Madera y MDF",
      category: "Corte CNC en MDF y Triplay",
      image:
        "https://i.ibb.co/VWGFG4Dp/Whats-App-Image-2026-02-16-at-13-09-22.jpg",
      description:
        "Corte CNC en MDF y Triplay Cortes exactos para carpintería, mobiliario y producción en serie.",
    },
    {
      title: "Grabado y Personalización",
      category: "Grabado y Detalle CNC",
      image:
        "https://i.ibb.co/rGJkqtmh/Gemini-Generated-Image-9avgrg9avgrg9avg.png",
      description:
        "Grabado y Detalle CNC Grabado en bajo relieve y alto relieve para proyectos decorativos y comerciales.",
    },
    {
      title: "Producción Industrial y Prototipos",
      category: "Maquila y Producción en Serie",
      image:
        "https://i.ibb.co/WvDbQmjk/Whats-App-Image-2026-02-16-at-15-44-53.jpg",
      description:
        "Maquila y Producción en Serie Fabricación repetitiva con precisión milimétrica para constructoras y fabricantes.",
    },
  ];

  return (
    <section
      id="proyectos"
      className="py-24 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ejemplos de nuestra excelencia en manufactura de
            precisión
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="mb-2">
                    <span className="text-cyan-400 text-sm font-semibold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <button className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-semibold">
                      Ver detalles
                    </span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}