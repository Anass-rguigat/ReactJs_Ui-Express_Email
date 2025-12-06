import { useState, useRef } from 'react';
import { FaLaptop, FaVideo, FaWifi, FaPrint } from 'react-icons/fa';

interface FeatureCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0); // First card hovered by default
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const features: FeatureCard[] = [
    {
      id: 1,
      title: 'Ordinateur',
      description: 'PC de bureau et portables haute performance',
      icon: <FaLaptop />,
    },
    {
      id: 2,
      title: 'Video Projecteur',
      description: 'Projecteurs HD pour vos présentations',
      icon: <FaVideo />,
    },
    {
      id: 3,
      title: 'Reseau & Wifi',
      description: 'Solutions réseau et connectivité complète',
      icon: <FaWifi />,
    },
    {
      id: 4,
      title: 'Materiel Bureautique',
      description: 'Équipements bureautiques professionnels',
      icon: <FaPrint />,
    },
  ];

  return (
    <section className="relative w-full bg-black py-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - All Cards */}
          <div className="order-2 lg:order-1">
            <div className="flex flex-col gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className="w-full"
                  onMouseEnter={() => {
                    // Clear any existing timeout
                    if (timeoutRef.current) {
                      clearTimeout(timeoutRef.current);
                    }
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    // Set timeout to return to first card after 0.2 seconds
                    timeoutRef.current = setTimeout(() => {
                      setHoveredIndex(0);
                    }, 200);
                  }}
                >
                  <div
                    className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                      hoveredIndex === index
                        ? 'bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 shadow-lg shadow-[#E92B26]/10'
                        : 'bg-transparent'
                    }`}
                  >
                    {/* Icon Circle */}
                    <div className="shrink-0">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-2xl sm:text-3xl transition-all duration-300 ${
                          hoveredIndex === index
                            ? 'bg-gradient-to-br from-[#E92B26]/30 to-[#1B1749]/40 text-white'
                            : 'bg-gray-800/30 text-gray-400'
                        }`}
                      >
                        {feature.icon}
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                      {/* Title */}
                      <h3
                        className={`text-lg sm:text-xl font-bold mb-1 transition-colors ${
                          hoveredIndex === index ? 'text-white' : 'text-gray-400'
                        }`}
                      >
                        {feature.title}
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm sm:text-base leading-relaxed transition-colors ${
                          hoveredIndex === index ? 'text-gray-300' : 'text-gray-500'
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Title and Text */}
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 uppercase">
              LOCATION DE PC, PLASMA, LCD, PORTABLE
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Depuis 2001, X-Zone Technologie vous accompagne dans la réalisation de vos évènements. Nous mettons à votre disposition un large choix de matériel informatique, vidéo, bureautique et de sonorisation à la location sur le Maroc entier. A l'occasion d'un salon, d'un lancement de produit, d'une formation, d'une conférence,… de nombreuses sociétés font appel à nos services. Nous somme notamment fournisseur officiel en informatique.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
