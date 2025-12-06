import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import circuitSvg from '../assets/circuit.svg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Black Background */}
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Circuit SVG Background */}
      <div 
        className="absolute inset-0 z-[1]"
        style={{
          backgroundImage: `url(${circuitSvg})`,
          backgroundPosition: 'top center',
          backgroundRepeat: 'repeat',
          backgroundSize: 'cover',
          opacity: 0.02,
          filter: 'brightness(2) invert(1)',
        } as React.CSSProperties}
      ></div>
      
      {/* Content container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-32 sm:px-6 md:px-8 lg:px-10">
        <div className={`relative mx-auto w-full max-w-6xl text-center transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Title Container */}
          <div className="relative mb-6">
            {/* Merged Animated Gradients Behind Title */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full -z-10">
              {/* Merged gradient - Both colors blending */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] rounded-full animate-gradient-merge"
                style={{
                  background: 'radial-gradient(ellipse, rgba(233,43,38,0.4) 0%, rgba(233,43,38,0.25) 25%, rgba(27,23,73,0.6) 50%, rgba(27,23,73,0.35) 75%, transparent 100%)',
                  filter: 'blur(70px) brightness(1.2)',
                } as React.CSSProperties}
              ></div>
              {/* Left gradient - Red (for merge effect) */}
              <div 
                className="absolute top-0 left-[48%] -translate-x-1/2 w-[220px] h-[200px] rounded-full animate-gradient-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(233,43,38,0.4) 0%, rgba(233,43,38,0.2) 40%, transparent 70%)',
                  filter: 'blur(65px)',
                } as React.CSSProperties}
              ></div>
              {/* Right gradient - Dark Blue (brighter, for merge effect) */}
              <div 
                className="absolute top-0 right-[48%] translate-x-1/2 w-[220px] h-[200px] rounded-full animate-gradient-pulse-reverse"
                style={{
                  background: 'radial-gradient(circle, rgba(27,23,73,0.7) 0%, rgba(27,23,73,0.45) 40%, transparent 70%)',
                  filter: 'blur(65px) brightness(1.5)',
                } as React.CSSProperties}
              ></div>
            </div>
            {/* Title */}
            <h1 className={`relative text-4xl font-extrabold leading-[1.1] mb-4 sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-1000 delay-300 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-white">
                Créez l'événement
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="relative mb-6">
            {/* Merged Animated Gradients Behind Subtitle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full -z-10">
              {/* Merged gradient - Both colors blending */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[450px] h-[180px] rounded-full animate-gradient-merge"
                style={{
                  background: 'radial-gradient(ellipse, rgba(233,43,38,0.3) 0%, rgba(233,43,38,0.2) 30%, rgba(27,23,73,0.5) 50%, rgba(27,23,73,0.3) 70%, transparent 100%)',
                  filter: 'blur(75px) brightness(1.2)',
                  animationDelay: '0.2s',
                } as React.CSSProperties}
              ></div>
              {/* Left gradient - Red */}
              <div 
                className="absolute top-0 left-[48%] -translate-x-1/2 w-[240px] h-[150px] rounded-full animate-gradient-pulse"
                style={{
                  background: 'radial-gradient(ellipse, rgba(233,43,38,0.3) 0%, transparent 60%)',
                  filter: 'blur(70px)',
                  animationDelay: '0.3s',
                } as React.CSSProperties}
              ></div>
              {/* Right gradient - Dark Blue (brighter) */}
              <div 
                className="absolute top-0 right-[48%] translate-x-1/2 w-[240px] h-[150px] rounded-full animate-gradient-pulse-reverse"
                style={{
                  background: 'radial-gradient(ellipse, rgba(27,23,73,0.6) 0%, transparent 60%)',
                  filter: 'blur(70px) brightness(1.5)',
                  animationDelay: '0.5s',
                } as React.CSSProperties}
              ></div>
            </div>
            <p className={`relative text-lg font-semibold text-gray-200 sm:text-xl md:text-2xl max-w-4xl mx-auto transition-all duration-1000 delay-500 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Vente et Location de matériel informatique nouvelle génération pour événementiel unique
            </p>
          </div>
          
          {/* Description Container */}
          <div className="relative mb-10">
            {/* Merged Animated Gradients Behind Description */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full -z-10">
              {/* Merged gradient - Both colors blending */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[220px] rounded-full animate-gradient-merge"
                style={{
                  background: 'radial-gradient(ellipse, rgba(233,43,38,0.25) 0%, rgba(233,43,38,0.15) 30%, rgba(27,23,73,0.45) 50%, rgba(27,23,73,0.25) 70%, transparent 100%)',
                  filter: 'blur(80px) brightness(1.2)',
                  animationDelay: '0.4s',
                } as React.CSSProperties}
              ></div>
              {/* Left gradient - Red */}
              <div 
                className="absolute top-0 left-[48%] -translate-x-1/2 w-[260px] h-[180px] rounded-full animate-gradient-pulse"
                style={{
                  background: 'radial-gradient(ellipse, rgba(233,43,38,0.25) 0%, transparent 65%)',
                  filter: 'blur(75px)',
                  animationDelay: '0.6s',
                } as React.CSSProperties}
              ></div>
              {/* Right gradient - Dark Blue (brighter) */}
              <div 
                className="absolute top-0 right-[48%] translate-x-1/2 w-[260px] h-[180px] rounded-full animate-gradient-pulse-reverse"
                style={{
                  background: 'radial-gradient(ellipse, rgba(27,23,73,0.55) 0%, transparent 65%)',
                  filter: 'blur(75px) brightness(1.5)',
                  animationDelay: '0.8s',
                } as React.CSSProperties}
              ></div>
            </div>
            {/* Description */}
            <p className={`relative text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg max-w-4xl mx-auto transition-all duration-1000 delay-700 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Location matériel informatique configuré sur-mesure au service des organisateurs d'événements. Pour vos besoins de matériel informatique, X-Zone Technologie, c'est une équipe jeune, à taille humaine, composée de professionnels offrant leurs compétences techniques pour la réussite de vos événements, quelqu'en soit la durée.
            </p>
          </div>
          
          {/* Trust Indicators */}
          <div className={`flex flex-wrap items-center justify-center gap-6 mb-10 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-5 h-5 text-[#E92B26]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Garanti</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-5 h-5 text-[#1B1749]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Expert Certifié</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-5 h-5 text-[#E92B26]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span>Support 24/7</span>
            </div>
          </div>
          
          {/* Buttons Container */}
          <div className={`relative flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Vente Matériel Button */}
            <button 
              onClick={() => navigate('/materiel#vente-serveur')}
              className="group relative overflow-hidden rounded-xl border-2 border-[#E92B26] bg-[#E92B26] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-[#f0352c] hover:border-[#f0352c] sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Vente Matériel
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            {/* Location Matériel Button */}
            <button 
              onClick={() => navigate('/materiel#location-informatique')}
              className="group relative overflow-hidden rounded-xl border-2 border-[#1B1749] bg-[#1B1749] px-6 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-[#25205a] hover:border-[#25205a] sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-base"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Location Matériel
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Gradient Transition to Black */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/50 to-black z-20 pointer-events-none"
      ></div>
    </section>
  );
};

export default HeroSection;

