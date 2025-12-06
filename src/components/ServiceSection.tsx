import { useEffect, useState } from 'react';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';

function ServiceSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('service-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="service-section" className="relative w-full bg-black py-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      {/* Gradient Fade-in from Top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 via-black to-transparent -mt-32 pointer-events-none"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Top Center - Title and Subtitle */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-extrabold sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Nos Services
          </h2>
          <p className="text-lg text-gray-300 sm:text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            Un accompagnement <span className="text-[#E92B26]">de votre événement sur-mesure</span>
          </p>
        </div>

        {/* Content Grid - Left Text and Right Images */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left Side - Title and Text */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl leading-tight">
                Prestataire informatique et multimédia des organisateurs d'événements
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-[#E92B26] to-[#1B1749]"></div>
            </div>
            <p className="text-base text-gray-300 leading-relaxed sm:text-lg">
              Nous intervenons pour des événements organisés par des professionnels et ce à de multiples occasions. Pour la location informatique, et l'ensemble des services associés, X-Zone Technologie est le partenaire technique privilégié de nombreuses agences, de prestataires audiovisuels, d'organismes de formations, d'espaces d'événements et d'hôtels disposant de salles de séminaires.
            </p>
            
            {/* Feature Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E92B26]/20 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-[#E92B26]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">Solutions sur-mesure adaptées à vos besoins</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1B1749]/30 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-[#1B1749]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">Équipe experte à votre service</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#E92B26]/20 flex items-center justify-center mt-0.5">
                  <svg className="w-3 h-3 text-[#E92B26]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-300 text-sm sm:text-base">Support technique professionnel</p>
              </div>
            </div>
          </div>

          {/* Right Side - Modern Image Gallery */}
          <div className={`grid grid-cols-2 gap-3 h-[500px] transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Left Image - Full Height */}
            <div className="row-span-2 group">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <img
                  src={image1}
                  alt="Service 1"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Top Right Image - Half Height */}
            <div className="h-full group">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <img
                  src={image2}
                  alt="Service 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Bottom Right Image - Half Height */}
            <div className="h-full group">
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <img
                  src={image3}
                  alt="Service 3"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
