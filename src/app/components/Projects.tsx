import { motion } from "motion/react";
import { ExternalLink, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

export function Projects() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Letras y Anuncios Corporativos",
      category: "Letras 3D y Señalética Corporativa",
      image:
        "https://i.ibb.co/Qv42fxSW/Whats-App-Image-2026-02-16-at-13-07-04.jpg",
      description:
        "Letras 3D y Señalética Corporativa Fabricación en MDF, acrílico, PVC espumado y aluminio compuesto para marcas y negocios",
      gallery: [
        "https://i.ibb.co/Qv42fxSW/Whats-App-Image-2026-02-16-at-13-07-04.jpg",
        "https://i.ibb.co/fGnVS8RX/Whats-App-Image-2026-02-17-at-18-02-04.jpg",
        "https://i.ibb.co/V0dq1WzJ/Whats-App-Image-2026-02-17-at-18-02-04-1.jpg",
        "https://i.ibb.co/KpKnMYhN/Whats-App-Image-2026-02-17-at-18-02-04-2.jpg",
        "https://i.ibb.co/chnwzmXF/Whats-App-Image-2026-02-17-at-18-02-03.jpg",
        "https://i.ibb.co/pvq5QfXg/Whats-App-Image-2026-02-17-at-18-02-04-3.jpg",
      ]
    },
    {
      title: "Corte de Precisión en Madera y MDF",
      category: "Corte CNC en MDF y Triplay",
      image:
        "https://i.ibb.co/VWGFG4Dp/Whats-App-Image-2026-02-16-at-13-09-22.jpg",
      description:
        "Corte CNC en MDF y Triplay Cortes exactos para carpintería, mobiliario y producción en serie.",
      gallery: [
        "https://i.ibb.co/VWGFG4Dp/Whats-App-Image-2026-02-16-at-13-09-22.jpg",
        "https://i.ibb.co/0yCd4h61/Whats-App-Image-2026-02-17-at-10-29-05-PM.jpg",
        "https://i.ibb.co/1Ggt8JRh/Whats-App-Image-2026-02-17-at-10-30-34-PM.jpg",
        "https://i.ibb.co/jPZZG0zq/Whats-App-Image-2026-02-17-at-10-33-01-PM.jpg",
        "https://i.ibb.co/KxW404Dz/Whats-App-Image-2026-02-17-at-10-36-41-PM.jpg",
      ]
    },
    {
      title: "Grabado y Personalización",
      category: "Grabado y Detalle CNC",
      image:
        "https://i.ibb.co/rGJkqtmh/Gemini-Generated-Image-9avgrg9avgrg9avg.png",
      description:
        "Grabado y Detalle CNC Grabado en bajo relieve y alto relieve para proyectos decorativos y comerciales.",
      gallery: [
        "https://i.ibb.co/RGVN2btj/Whats-App-Image-2026-02-17-at-10-44-37-PM.jpg",
        "https://i.ibb.co/1JLDyNTZ/Whats-App-Image-2026-02-17-at-10-46-03-PM.jpg",
        "https://i.ibb.co/KC612RM/Whats-App-Image-2026-02-17-at-10-47-03-PM.jpg",
      ]
    },
    {
      title: "Producción Industrial y Prototipos",
      category: "Maquila y Producción en Serie",
      image:
        "https://i.ibb.co/WvDbQmjk/Whats-App-Image-2026-02-16-at-15-44-53.jpg",
      description:
        "Maquila y Producción en Serie Fabricación repetitiva con precisión milimétrica para constructoras y fabricantes.",
      gallery: [
        "https://i.ibb.co/7t39Jt4h/Whats-App-Image-2026-02-17-at-22-55-08.jpg",
        "https://i.ibb.co/qM6FzpXd/Whats-App-Image-2026-02-17-at-22-54-55.jpg",
        "https://i.ibb.co/GQhMF6Z3/Whats-App-Image-2026-02-17-at-22-54-12.jpg",
      ]
    },
  ];

  const goToPrevious = () => {
    if (selectedProject !== null) {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? projects[selectedProject].gallery.length - 1 : prevIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedProject !== null) {
      setCurrentIndex((prevIndex) =>
        prevIndex === projects[selectedProject].gallery.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const getCardStyles = (index: number, totalCards: number) => {
    const position = (index - currentIndex + totalCards) % totalCards;
    const normalizedPosition = position > Math.floor(totalCards / 2) ? position - totalCards : position;
    
    return {
      rotation: normalizedPosition * 5,
      zIndex: normalizedPosition === 0 ? 10 : 5 - Math.abs(normalizedPosition),
      xPosition: normalizedPosition * 15, // en vw
      scale: index === currentIndex ? 1 : 0.85,
    };
  };

  const openCarousel = (projectIndex: number) => {
    setSelectedProject(projectIndex);
    setCurrentIndex(0);
    setShowCarousel(true);
  };

  const closeCarousel = () => {
    setShowCarousel(false);
    setSelectedProject(null);
    setCurrentIndex(0);
  };

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

                  <button
                    onClick={() => openCarousel(index)}
                    className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
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

        {/* Carousel Modal */}
        {showCarousel && selectedProject !== null && (
          <div 
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4"
            onClick={() => closeCarousel()}
          >
            <div 
              className="relative w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => closeCarousel()}
                className="absolute top-8 right-8 w-12 h-12 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 backdrop-blur-sm border border-cyan-400/50 flex items-center justify-center transition-all duration-300 group z-50"
              >
                <X className="text-cyan-400 group-hover:text-cyan-300" size={24} />
              </button>

              {/* Project Info */}
              <div className="absolute top-8 left-8 text-white z-50">
                <h3 className="text-2xl md:text-3xl font-bold mb-1">
                  {projects[selectedProject].title}
                </h3>
                <p className="text-cyan-400 text-sm md:text-base">{projects[selectedProject].category}</p>
              </div>

              {/* 3D Card Carousel */}
              <div className="flex flex-col items-center justify-center w-full max-w-7xl px-4 md:px-8">
                {/* Carousel Container */}
                <div 
                  className="relative w-full flex items-center justify-center mb-8"
                  style={{ minHeight: '280px', minWidth: '280px' }}
                  role="region"
                  aria-label="Image carousel"
                >
                  {projects[selectedProject].gallery.map((img, idx) => {
                    const { rotation, zIndex, xPosition, scale } = getCardStyles(idx, projects[selectedProject].gallery.length);
                    
                    return (
                      <motion.div
                        key={idx}
                        initial={false}
                        animate={{
                          x: `${xPosition}vw`,
                          rotate: rotation,
                          zIndex: zIndex,
                          scale: scale,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="absolute w-64 h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border-2 md:border-4 border-cyan-400/50"
                        style={{
                          backgroundImage: `url(${img})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }}
                        role="group"
                        aria-label={`Slide ${idx + 1} of ${projects[selectedProject].gallery.length}`}
                        aria-hidden={idx !== currentIndex}
                      />
                    );
                  })}
                </div>

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={goToPrevious}
                    aria-label="Previous slide"
                    className="rounded-full h-12 w-12 flex items-center justify-center bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm"
                  >
                    <ChevronLeft className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                  </button>
                  <button
                    onClick={goToNext}
                    aria-label="Next slide"
                    className="rounded-full h-12 w-12 flex items-center justify-center bg-cyan-500/20 hover:bg-cyan-500/40 border border-cyan-400/50 transition-all duration-300 group backdrop-blur-sm"
                  >
                    <ChevronRight className="text-cyan-400 group-hover:text-cyan-300" size={24} />
                  </button>
                </div>

                {/* Image Counter */}
                <div className="mt-6 text-cyan-400 text-sm">
                  {currentIndex + 1} / {projects[selectedProject].gallery.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}