import { FaCog, FaTruck, FaHeadset } from 'react-icons/fa';

interface ServiceCard {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const ServicesSection = () => {
  const services: ServiceCard[] = [
    {
      id: 1,
      title: 'Aide au choix et paramétrage sur-mesure',
      icon: <FaCog />,
    },
    {
      id: 2,
      title: 'Livraison, Installation et démontage sur site',
      icon: <FaTruck />,
    },
    {
      id: 3,
      title: 'Accompagnement et Assistance ou technicien sur site',
      icon: <FaHeadset />,
    },
  ];

  return (
    <section className="relative w-full bg-black py-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Title and Text - Centered */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Service dédié à chaque domaine de la location
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Nous sommes là pour vous faciliter la vie et trouver des solutions techniques qui répondent à vos contraintes de temps, de budget, d'image…
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative h-[220px] sm:h-[240px] cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              {/* Card Container with 3D Flip */}
              <div className="relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Face - Icon Only */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#1B1749]/20 via-[#1B1749]/15 to-[#E92B26]/20 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex items-center justify-center shadow-2xl shadow-black/60 overflow-hidden border border-white/10">
                  {/* Animated Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#E92B26]/10 via-transparent to-[#1B1749]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Icon with Modern Glow */}
                  <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#E92B26]/50 via-[#E92B26]/40 to-[#1B1749]/60 backdrop-blur-sm flex items-center justify-center text-4xl sm:text-5xl text-white shadow-[0_0_35px_rgba(233,43,38,0.5)] group-hover:shadow-[0_0_50px_rgba(233,43,38,0.7)] transition-all duration-700 border border-white/20">
                    {service.icon}
                  </div>
                </div>

                {/* Back Face - Title */}
                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#E92B26]/25 via-[#1B1749]/30 to-[#E92B26]/25 backdrop-blur-xl rounded-3xl p-6 sm:p-8 flex items-center justify-center shadow-2xl shadow-[#E92B26]/30 overflow-hidden border border-white/10" style={{ transform: 'rotateY(180deg)' }}>
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1B1749]/20 via-transparent to-[#E92B26]/20 opacity-40"></div>
                  
                  {/* Title with Glow */}
                  <h3 className="relative z-10 text-lg sm:text-xl md:text-2xl font-bold text-white text-center leading-tight drop-shadow-lg">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

