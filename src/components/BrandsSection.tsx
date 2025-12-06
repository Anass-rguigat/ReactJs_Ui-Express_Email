import { useEffect, useRef, useState, useCallback } from 'react';
import asusLogo from '../assets/logoMarques/130-1301505_asus-white-logo-png.png';
import lenovoLogo from '../assets/logoMarques/246-2465986_learn-more-lenovo-lo.png';
import epsonLogo from '../assets/logoMarques/250-2508865_epson-hd-png-downloa.png';
import acerLogo from '../assets/logoMarques/514-5145779_acer-logo-png-transp.png';
import dellLogo from '../assets/logoMarques/file-dell-logo-white-11562934497.png';
import canonLogo from '../assets/logoMarques/canon-icon-text-logo-png-clipart.png';
import orayLogo from '../assets/logoMarques/LOGO-ORAY-entier-blanc-1.png';
import image1 from '../assets/logoMarques/images (2).png';
import image2 from '../assets/logoMarques/imagesjjj.png';
import image3 from '../assets/logoMarques/imagesllllllll.png';
import image4 from '../assets/logoMarques/61913fca6e1ef7971b3179b642fd6fa5.png';
import image5 from '../assets/logoMarques/aaxy08rz3.png';

const BrandsSection = () => {
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
  ].filter(brand => brand.logo); // Filter out any undefined logos

  // Duplicate brands for infinite scroll
  const duplicatedBrands = [...brands, ...brands, ...brands];

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !isAutoScrolling || isDragging) return;

    let scrollPosition = container.scrollLeft;
    const scrollSpeed = 0.5; // Adjust speed here

    const scroll = () => {
      if (isDragging) return;
      scrollPosition += scrollSpeed;
      container.scrollLeft = scrollPosition;

      // Reset scroll position when reaching the end of duplicated content
      if (scrollPosition >= container.scrollWidth / 3) {
        scrollPosition = 0;
      }
    };

    const interval = setInterval(scroll, 16); // ~60fps

    return () => clearInterval(interval);
  }, [isAutoScrolling, isDragging]);

  // Drag/Swipe handlers
  const handleMouseDown = (e: React.MouseEvent) => {
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
    // Resume auto-scroll after a delay
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 2000);
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
    setIsAutoScrolling(false);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Resume auto-scroll after a delay
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 2000);
  };

  return (
    <section className="relative w-full bg-black py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
          Nos Marques
        </h2>

        {/* Brands Carousel */}
        <div className="relative">
          {/* Left Gradient Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10"></div>
          
          {/* Right Gradient Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10"></div>

          {/* Scrollable Container */}
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
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 p-3 sm:p-4 bg-transparent">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    style={{ 
                      width: 'auto',
                      height: 'auto',
                      maxWidth: '100%',
                      maxHeight: '100%'
                    }}
                    loading="lazy"
                    onError={() => {
                      console.error(`Failed to load logo: ${brand.name}`, brand.logo);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;

