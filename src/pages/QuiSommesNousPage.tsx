import { useState, useEffect, useRef, useCallback } from "react";
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { FaShieldAlt, FaUsersCog, FaLightbulb, FaAward, FaHandshake, FaRocket } from "react-icons/fa";
import equipe from '../assets/equipe.png';
import asusLogo from '../assets/clientSatisfaits/Domaines_agricoles_logo.png';
import lenovoLogo from '../assets/clientSatisfaits/image333.png';
import epsonLogo from '../assets/clientSatisfaits/images (2).png';
import acerLogo from '../assets/clientSatisfaits/images00.png';
import dellLogo from '../assets/clientSatisfaits/images444.png';
import canonLogo from '../assets/clientSatisfaits/imagessss.png';
import orayLogo from '../assets/clientSatisfaits/innovista-750-true-1.png';
import image1 from '../assets/clientSatisfaits/totalcall_trt.png';
import image2 from '../assets/logoMarques/imagesjjj.png';
import image3 from '../assets/logoMarques/imagesllllllll.png';
import image4 from '../assets/logoMarques/61913fca6e1ef7971b3179b642fd6fa5.png';
import image5 from '../assets/logoMarques/aaxy08rz3.png';

const QuiSommesNousPage = () => {
  // --- Marques Carousel ---
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const brands = [
    { id: 1, name: 'ASUS', logo: asusLogo },
    { id: 2, name: 'Lenovo', logo: lenovoLogo },
    { id: 3, name: 'Epson', logo: epsonLogo },
    { id: 4, name: 'Acer', logo: acerLogo },
    { id: 5, name: 'Dell', logo: dellLogo },
    { id: 6, name: 'Canon', logo: canonLogo },
    { id: 7, name: 'Oray', logo: orayLogo },
    { id: 8, name: 'Brand 1', logo: image1 },
    { id: 9, name: 'Brand 2', logo: image2 },
    { id: 10, name: 'Brand 3', logo: image3 },
    { id: 11, name: 'Brand 4', logo: image4 },
    { id: 12, name: 'Brand 5', logo: image5 },
  ].filter(b => b.logo);

  const duplicatedBrands = [...brands, ...brands, ...brands];

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling || isDragging) return;

    let scrollPosition = container.scrollLeft;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (isDragging) return;
      scrollPosition += scrollSpeed;
      container.scrollLeft = scrollPosition;

      if (scrollPosition >= container.scrollWidth / 3) scrollPosition = 0;
    };

    const interval = setInterval(scroll, 16);
    return () => clearInterval(interval);
  }, [isAutoScrolling, isDragging]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 2000);
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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setTimeout(() => setIsAutoScrolling(true), 2000);
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION - Modernized */}
      <section className="relative w-full pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden bg-black">
        {/* Background Gradients */}
        

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Background gradient matching navbar */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 rounded-3xl blur-3xl opacity-50"></div>
          
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 border border-white/10 text-sm sm:text-base font-semibold text-white mb-6 backdrop-blur-sm">
              Depuis 2001
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Qui Sommes-Nous
          </h1>
          
          <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            X-Zone Technologie est une Société de Service et d'Ingénierie Informatique basée à Casablanca depuis 2001.  
            Nous intervenons dans la <span className="text-white font-semibold">vente</span>, la <span className="text-white font-semibold">location</span>, l'<span className="text-white font-semibold">intégration</span>, le <span className="text-white font-semibold">réseau</span>, la <span className="text-white font-semibold">maintenance</span>,  
            la <span className="text-white font-semibold">surveillance</span> et les <span className="text-white font-semibold">solutions multimédias</span>.
          </p>
        </div>
      </section>

      {/* ABOUT SECTION - Modernized */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden ">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-block">
              <span className="text-sm sm:text-base font-semibold text-[#E92B26] uppercase tracking-wider">Notre Histoire</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Plus de 20 ans d'excellence
            </h2>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Fondée en <span className="text-white font-semibold">2001 à Casablanca</span>, la S.A.R.L X-Zone Technologie a connu une croissance continue et s'impose aujourd'hui
                comme un acteur reconnu dans plusieurs domaines liés à l'ingénierie informatique.
              </p>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                Grâce à notre expertise, nous accompagnons nos clients sur la vente, la location, l'intégration, la maintenance,
                les réseaux et la surveillance avec des solutions sur mesure adaptées à leurs besoins.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-800/50">
                <FaAward className="text-[#E92B26] text-lg" />
                <span className="text-sm text-gray-300">Expert Certifié</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900/50 border border-gray-800/50">
                <FaHandshake className="text-[#1B1749] text-lg" />
                <span className="text-sm text-gray-300">Partenaires de Confiance</span>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2 group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E92B26]/20 to-[#1B1749]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" 
                alt="team" 
                className="w-full h-[300px] sm:h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES SECTION - Modernized with Glassmorphism */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 bg-black overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 border border-white/10 text-sm font-semibold text-white mb-4 backdrop-blur-sm">
              Nos Fondations
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Nos Valeurs
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg sm:text-xl">
              Depuis plus de 20 ans, X-Zone Technologie bâtit sa réputation sur des valeurs solides et durables.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[{
              icon: <FaShieldAlt className="text-3xl" />,
              title: "Fiabilité",
              desc: "Un service constant et professionnel depuis 2001. Nous garantissons la qualité et la pérennité de nos solutions.",
              gradient: "from-[#E92B26]/20 to-[#E92B26]/5",
              iconColor: "text-[#E92B26]"
            },{
              icon: <FaUsersCog className="text-3xl" />,
              title: "Expertise Humaine",
              desc: "Une équipe expérimentée, à l'écoute et orientée solutions. Votre satisfaction est notre priorité absolue.",
              gradient: "from-[#1B1749]/20 to-[#1B1749]/5",
              iconColor: "text-[#1B1749]"
            },{
              icon: <FaLightbulb className="text-3xl" />,
              title: "Innovation",
              desc: "Des solutions modernes adaptées aux technologies actuelles. Nous restons à la pointe de l'innovation.",
              gradient: "from-[#E92B26]/20 to-[#1B1749]/5",
              iconColor: "text-[#E92B26]"
            }].map((v, i) => (
              <div 
                key={i}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative bg-[#0a0a0a] border border-gray-800/30 rounded-2xl p-5 sm:p-6 backdrop-blur-sm hover:border-[#E92B26]/30 transition-all duration-300 h-full">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${v.gradient} border border-gray-800/50 mb-4 ${v.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    {v.icon}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{v.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION - Modernized */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 bg-black overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 border border-white/10 text-sm font-semibold text-white mb-4 backdrop-blur-sm">
              Notre Force
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Notre Équipe
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed">
              Les personnes travaillant à X-Zone Technologie ont des compétences techniques de haut niveau 
              et un excellent relationnel. Expliquer, comprendre et répondre aux besoins réels du client est notre priorité.
            </p>
          </div>
          
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E92B26]/20 to-[#1B1749]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src={equipe} 
                alt="team" 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION - Modernized */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 bg-black overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 border border-white/10 text-sm font-semibold text-white mb-4 backdrop-blur-sm">
              En Chiffres
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Nos Chiffres Clés
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Quelques indicateurs de notre expérience et expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            {[
              { number: "20+", label: "Ans d'expérience", icon: <FaRocket className="text-4xl" />, gradient: "from-[#E92B26]/20 to-[#E92B26]/5" },
              { number: "2000+", label: "Clients satisfaits", icon: <FaHandshake className="text-4xl" />, gradient: "from-[#1B1749]/20 to-[#1B1749]/5" },
              { number: "10+", label: "Collaborateurs Experts", icon: <FaUsersCog className="text-4xl" />, gradient: "from-[#E92B26]/20 to-[#1B1749]/5" }
            ].map((stat, i) => (
              <div 
                key={i}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <div className="relative bg-[#0a0a0a] border border-gray-800/30 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-sm hover:border-[#E92B26]/30 transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} border border-gray-800/50 mb-4 text-[#E92B26] group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-gradient-to-r from-[#E92B26] to-[#1B1749] bg-clip-text mb-2 sm:mb-3">
                    {stat.number}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANDS SECTION - Enhanced */}
      <section className="relative w-full bg-black py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 border border-white/10 text-sm font-semibold text-white mb-4 backdrop-blur-sm">
              Nos Partenaires
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Clients Satisfaits
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Nous sommes fiers de travailler avec les meilleures marques et entreprises du marché.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>
            <div 
              ref={scrollContainerRef} 
              className={`flex gap-8 sm:gap-12 md:gap-16 overflow-x-hidden scrollbar-hide ${isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'}`}
              style={{ scrollBehavior: 'auto' }}
              onMouseDown={handleMouseDown} 
              onTouchStart={handleTouchStart} 
              onTouchMove={handleTouchMove} 
              onTouchEnd={handleTouchEnd}
            >
              {duplicatedBrands.map((brand, index) => (
                <div 
                  key={`${brand.id}-${index}`} 
                  className="shrink-0 flex items-center justify-center"
                >
                  <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 p-3 sm:p-4 bg-transparent rounded-xl hover:bg-gray-900/30 border border-transparent hover:border-gray-800/50">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="max-w-full max-h-full w-auto h-auto object-contain" 
                      loading="lazy"
                      onError={() => console.error(`Failed to load logo: ${brand.name}`, brand.logo)} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default QuiSommesNousPage;
