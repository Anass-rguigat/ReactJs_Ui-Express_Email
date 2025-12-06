import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

// Location Matériel Images
import firstLocationInformatique from '../assets/locationMateriel/materielInformatique/firstLocationInformatique.png';
import firstMaterielVidéoprojecteur from '../assets/locationMateriel/materielVidéoprojecteur/firstMaterielVidéoprojecteur.png';
import firstMaterielReseauWifi from '../assets/locationMateriel/materielReseau&wifi/firstMaterielReseau&Wifi.png';
import firstMaterielBureautique from '../assets/locationMateriel/materielBureautique/firstMaterielBureautique.png';
import firstMaterielEcranTactile from '../assets/locationMateriel/materielEcranTactile/firstMaterielEcranTactile.png';
import firstLocationAccessoire from '../assets/locationMateriel/materielAccessoire/firstLocationAccessoire.png';

// Vente Matériel Images
import firstVenteServeur from '../assets/VenteMateriel/materielServeur/firstVenteServeur.png';
import firstVentePcPortable from '../assets/VenteMateriel/materielPcPortable/firstVentePcPortable.png';
import firstVentePcBureau from '../assets/VenteMateriel/materielPcBureau/firstVentePcBureau.png';
import firstVenteReseau from '../assets/VenteMateriel/materielReseau/firstVenteReseau.png';
import firstVenteImprimante from '../assets/VenteMateriel/materielBureau/firstVenteImprimante.png';
import firstVenteTonner from '../assets/VenteMateriel/materieltonner/firstVenteTonner.png';

interface MaterialCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

const MaterialSliderSection = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'location' | 'vente'>('location');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const locationMaterials: MaterialCard[] = [
    {
      id: 'location-informatique',
      title: 'Location Matériel Informatique',
      description: 'Location d\'ordinateurs, PC portables, écrans et imprimantes pour vos événements',
      image: firstLocationInformatique,
    },
    {
      id: 'location-videoprojecteur',
      title: 'Location Matériel vidéoprojecteur',
      description: 'Location de vidéoprojecteurs de 1800 à 8000 lumens pour vos événements',
      image: firstMaterielVidéoprojecteur,
    },
    {
      id: 'location-reseau-wifi',
      title: 'Location réseau & wifi',
      description: 'Solutions réseau filaire, WiFi et 4G pour vos événements',
      image: firstMaterielReseauWifi,
    },
    {
      id: 'location-bureautique',
      title: 'Location Matériel Bureautique',
      description: 'Location de matériel d\'impression pour entreprises',
      image: firstMaterielBureautique,
    },
    {
      id: 'location-ecran-tactile',
      title: 'Location d\'écran tactile',
      description: 'Écrans tactiles interactifs pour salons et événements',
      image: firstMaterielEcranTactile,
    },
    {
      id: 'location-accessoires',
      title: 'Location de matériel accessoires',
      description: 'Location d\'accessoires informatiques divers',
      image: firstLocationAccessoire,
    },
  ];

  const venteMaterials: MaterialCard[] = [
    {
      id: 'vente-serveur',
      title: 'Matériel Serveur',
      description: 'Serveurs d\'entreprise : le cœur de votre système d\'information',
      image: firstVenteServeur,
    },
    {
      id: 'vente-pc-portable',
      title: 'Pc Portable',
      description: 'PC portables professionnels adaptés à vos besoins',
      image: firstVentePcPortable,
    },
    {
      id: 'vente-ordinateur-bureau',
      title: 'Ordinateur de bureau',
      description: 'PC de bureau professionnels avec SAV performant',
      image: firstVentePcBureau,
    },
    {
      id: 'vente-reseaux',
      title: 'Réseaux Informatiques',
      description: 'Optimisation de votre infrastructure réseau',
      image: firstVenteReseau,
    },
    {
      id: 'vente-imprimantes',
      title: 'Imprimantes',
      description: 'Imprimantes professionnelles économiques et performantes',
      image: firstVenteImprimante,
    },
    {
      id: 'vente-tonner',
      title: 'Tonner',
      description: 'Cartouches et toners pour toutes marques d\'imprimantes',
      image: firstVenteTonner,
    },
  ];

  const currentMaterials = activeTab === 'location' ? locationMaterials : venteMaterials;
  const maxIndex = Math.max(0, currentMaterials.length - 3);

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      // Responsive card width calculation
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      const cardWidth = isMobile ? 280 : isTablet ? 320 : 320; // w-[280px] on mobile, w-80 on larger
      const gap = window.innerWidth < 640 ? 16 : 24; // gap-4 on mobile, gap-6 on larger
      const scrollPosition = index * (cardWidth + gap);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      scrollToIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // Responsive card width calculation
      const isMobile = window.innerWidth < 640;
      const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
      const cardWidth = isMobile ? 280 : isTablet ? 320 : 320;
      const gap = window.innerWidth < 640 ? 16 : 24;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      setCurrentIndex(Math.min(newIndex, maxIndex));
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [maxIndex]);

  // Drag/Swipe handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative w-full bg-black py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10 px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-2 text-white">
              Matériel Disponible
            </h2>
            <p className="text-base text-gray-400 sm:text-lg font-normal leading-relaxed">
              Choisissez votre catégorie et explorez nos produits
            </p>
          </div>

          {/* Category Tabs - Segmented Control */}
          <div className="relative inline-flex items-center bg-[#0a0a0a] rounded-lg sm:rounded-xl p-0.5 sm:p-1 md:p-1.5 border border-gray-800/30 shadow-[0_2px_8px_rgba(0,0,0,0.3)] w-full sm:w-auto">
            {/* Animated Background for Selected Tab */}
            <div
              className={`absolute top-0.5 sm:top-1 md:top-1.5 bottom-0.5 sm:bottom-1 md:bottom-1.5 rounded-md sm:rounded-lg transition-all duration-300 ease-out ${
                activeTab === 'location' 
                  ? 'left-0.5 sm:left-1 md:left-1.5 right-1/2' 
                  : 'left-1/2 right-0.5 sm:right-1 md:right-1.5'
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.12) 100%)',
                boxShadow: '0 0 16px rgba(255, 255, 255, 0.1), inset 0 1px 1px rgba(255, 255, 255, 0.15)',
              }}
            />
            
            <button
              onClick={() => setActiveTab('location')}
              className={`relative z-10 flex-1 sm:flex-none px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 rounded-md sm:rounded-lg font-medium text-[11px] sm:text-xs md:text-sm transition-colors duration-300 whitespace-nowrap ${
                activeTab === 'location'
                  ? 'text-white'
                  : 'text-gray-500'
              }`}
            >
              <span className="hidden sm:inline">Location Matériel</span>
              <span className="sm:hidden">Location</span>
            </button>
            <button
              onClick={() => setActiveTab('vente')}
              className={`relative z-10 flex-1 sm:flex-none px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 rounded-md sm:rounded-lg font-medium text-[11px] sm:text-xs md:text-sm transition-colors duration-300 whitespace-nowrap ${
                activeTab === 'vente'
                  ? 'text-white'
                  : 'text-gray-500'
              }`}
            >
              <span className="hidden sm:inline">Vente Matériel</span>
              <span className="sm:hidden">Vente</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slider Container - Full Width */}
      <div className="relative w-full">
        {/* Left Shadow Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-20"></div>
        
        {/* Right Shadow Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-20"></div>
        
        {/* Cards Container */}
        <div
          ref={scrollContainerRef}
          className={`flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4 pl-4 sm:pl-8 md:pl-[40vw] lg:pl-[35vw] pr-4 sm:pr-6 md:pr-8 lg:pr-10 relative z-10 ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab scroll-smooth'}`}
          style={{ scrollSnapType: 'x mandatory' }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
            {currentMaterials.map((material) => (
              <div
                key={material.id}
                className="shrink-0 w-[280px] sm:w-80 md:w-80 lg:w-80 scroll-snap-align-start"
              >
                <div className="relative h-[360px] sm:h-[400px] md:h-[420px] rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 cursor-pointer">
                  {/* Background Image - Full Card */}
                  <img
                    src={material.image}
                    alt={material.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Dark Overlay - Becomes Lighter on Hover */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                  
                  {/* Content Overlay - Bottom */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6 z-10">
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                      {material.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">
                      {material.description}
                    </p>

                    {/* Action Button */}
                    <button 
                      onClick={() => navigate(`/materiel#${material.id}`)}
                      className="flex items-center gap-2 text-white text-xs sm:text-sm font-semibold group-hover:gap-3 transition-all duration-300 hover:text-[#E92B26] w-fit"
                    >
                      Savoir plus
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-end mt-8 pl-4 sm:pl-6 md:pl-8 lg:pl-10">
            <div className="flex gap-3 pr-12 sm:pr-16 md:pr-20 lg:pr-24">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentIndex === 0
                    ? 'bg-gray-900/50 text-gray-600 cursor-not-allowed'
                    : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-110'
                }`}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= maxIndex}
                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentIndex >= maxIndex
                    ? 'bg-gray-900/50 text-gray-600 cursor-not-allowed'
                    : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-110'
                }`}
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default MaterialSliderSection;

