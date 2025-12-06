import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoAsset from '../assets/logo.png';

type NavbarProps = {
  logoSrc?: string;
};

type DropdownItem = {
  label: string;
  href?: string;
};

const Navbar = ({ logoSrc }: NavbarProps) => {
  const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [venteDropdownOpen, setVenteDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locationRef = useRef<HTMLDivElement>(null);
  const venteRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // Close dropdowns when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Don't close dropdowns if click is inside mobile menu
      const isInsideMobileMenu = mobileMenuRef.current && mobileMenuRef.current.contains(target);
      
      if (!isInsideMobileMenu) {
        if (locationRef.current && !locationRef.current.contains(target)) {
          setLocationDropdownOpen(false);
        }
        if (venteRef.current && !venteRef.current.contains(target)) {
          setVenteDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [mobileMenuOpen]);

  const locationItems: DropdownItem[] = [
    { label: 'Location Matériel Informatique', href: '/materiel#location-informatique' },
    { label: 'Location Matériel vidéoprojecteur', href: '/materiel#location-videoprojecteur' },
    { label: 'Location réseau & wifi', href: '/materiel#location-reseau-wifi' },
    { label: 'Location Matériel Bureautique', href: '/materiel#location-bureautique' },
    { label: 'Location d\'écran tactile', href: '/materiel#location-ecran-tactile' },
    { label: 'Location de matériel accessoires', href: '/materiel#location-accessoires' },
  ];

  const venteItems: DropdownItem[] = [
    { label: 'Matériel Serveur', href: '/materiel#vente-serveur' },
    { label: 'Pc Portable', href: '/materiel#vente-pc-portable' },
    { label: 'Ordinateur de bureau', href: '/materiel#vente-ordinateur-bureau' },
    { label: 'Réseaux Informatiques', href: '/materiel#vente-reseaux' },
    { label: 'Imprimantes', href: '/materiel#vente-imprimantes' },
    { label: 'Tonner', href: '/materiel#vente-tonner' },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-4 pt-4 text-white sm:px-6 sm:pt-6 md:px-10">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2 xs:gap-2.5 sm:gap-3">
        <img
          src={logoSrc || logoAsset}
          alt="X-Zone logo"
          className="h-7 w-auto drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 xs:h-8 sm:h-10 md:h-11 lg:h-12 xl:h-14"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden flex-1 justify-center lg:flex">
        <nav className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 px-3 py-2 shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:gap-2 lg:px-4 lg:py-2.5 xl:px-5">
          <Link
            to="/"
            className="flex items-center gap-1 rounded-full bg-transparent px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:scale-105 lg:gap-1.5 lg:px-4 lg:py-2 lg:text-[10px] xl:px-5 xl:py-2.5 xl:text-[11px]"
          >
            <span className="whitespace-nowrap">ACCUEIL</span>
          </Link>

          {/* Location Matériel Dropdown */}
          <div ref={locationRef} className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLocationDropdownOpen((prev) => !prev);
                setVenteDropdownOpen(false);
              }}
              className="flex items-center gap-1 rounded-full bg-transparent px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:scale-105 lg:gap-1.5 lg:px-4 lg:py-2 lg:text-[10px] xl:px-5 xl:py-2.5 xl:text-[11px]"
            >
              <span className="whitespace-nowrap">LOCATION MATÉRIEL</span>
              <svg
                className={`h-2.5 w-2.5 transition-transform duration-200 lg:h-3 lg:w-3 ${
                  locationDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {locationDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 min-w-[200px] animate-fadeIn rounded-xl bg-[#0a0a0a] p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:min-w-[240px] lg:p-2 xl:min-w-[260px]">
                {locationItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href || '#'}
                    className="block rounded-lg bg-transparent px-3 py-2 text-[9px] font-medium uppercase tracking-[0.05em] text-white transition-all duration-300 hover:scale-[1.02] lg:px-4 lg:py-2.5 lg:text-[10px] xl:px-4 xl:py-3 xl:text-[11px]"
                    onClick={() => setLocationDropdownOpen(false)}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Vente Matériel Dropdown */}
          <div ref={venteRef} className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setVenteDropdownOpen((prev) => !prev);
                setLocationDropdownOpen(false);
              }}
              className="flex items-center gap-1 rounded-full bg-transparent px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:scale-105 lg:gap-1.5 lg:px-4 lg:py-2 lg:text-[10px] xl:px-5 xl:py-2.5 xl:text-[11px]"
            >
              <span className="whitespace-nowrap">VENTE MATÉRIEL</span>
              <svg
                className={`h-2.5 w-2.5 transition-transform duration-200 lg:h-3 lg:w-3 ${
                  venteDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {venteDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 min-w-[200px] animate-fadeIn rounded-xl bg-[#0a0a0a] p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:min-w-[240px] lg:p-2 xl:min-w-[260px]">
                {venteItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href || '#'}
                    className="block rounded-lg bg-transparent px-3 py-2 text-[9px] font-medium uppercase tracking-[0.05em] text-white transition-all duration-300 hover:scale-[1.02] lg:px-4 lg:py-2.5 lg:text-[10px] xl:px-4 xl:py-3 xl:text-[11px]"
                    onClick={() => setVenteDropdownOpen(false)}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/qui-sommes-nous"
            className="flex items-center gap-1 rounded-full bg-transparent px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:scale-105 lg:gap-1.5 lg:px-4 lg:py-2 lg:text-[10px] xl:px-5 xl:py-2.5 xl:text-[11px]"
          >
            <span className="whitespace-nowrap">QUI SOMMES NOUS</span>
          </Link>
        </nav>
      </div>

      {/* Contact Button & Mobile Menu Toggle */}
      <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 lg:ml-4">
        <Link
          to="/contact"
          className="group relative overflow-hidden rounded-full bg-[#E92B26] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.08em] text-white shadow-[0_8px_24px_rgba(233,43,38,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#f0352c] hover:shadow-[0_12px_32px_rgba(233,43,38,0.6)] hover:-translate-y-0.5 xs:px-3.5 xs:py-2 xs:text-[9.5px] sm:px-4 sm:py-2 sm:text-[10px] md:px-5 md:py-2.5 md:text-[10.5px] lg:px-5 lg:py-2.5 lg:text-[11px] xl:px-6 xl:py-3"
        >
          <span className="relative z-10 flex items-center gap-1 xs:gap-1.5 sm:gap-2">
            <span className="hidden xs:inline">Contact</span>
            <span className="xs:hidden">Contact</span>
            <svg
              className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1 xs:h-3 xs:w-3 sm:h-3.5 sm:w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          ref={mobileMenuButtonRef}
          data-mobile-menu-button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex items-center justify-center rounded-full border border-white/20 bg-black/50 p-2 backdrop-blur-xl transition-all hover:bg-white/10 xs:p-2.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <svg
            className={`h-4 w-4 transition-transform duration-300 xs:h-5 xs:w-5 ${mobileMenuOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav ref={mobileMenuRef} className="absolute left-0 right-0 top-full mt-3 mx-3 rounded-xl bg-gradient-to-r from-[#E92B26]/20 via-[#1B1749]/30 to-[#E92B26]/20 p-3 shadow-[0_2px_8px_rgba(0,0,0,0.3)] backdrop-blur-xl xs:mt-4 xs:mx-4 xs:p-4 sm:p-4 lg:hidden">
          <div className="flex flex-col gap-1.5 xs:gap-2">
            <Link
              to="/"
              className="flex items-center justify-between rounded-lg bg-transparent px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white/10 xs:px-4 xs:py-3 xs:text-[10.5px] sm:text-[11px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="whitespace-nowrap">ACCUEIL</span>
            </Link>

            {/* Mobile Location Dropdown */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const newState = !locationDropdownOpen;
                  setLocationDropdownOpen(newState);
                  setVenteDropdownOpen(false);
                }}
                className="flex items-center justify-between rounded-lg bg-transparent px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white/10 xs:px-4 xs:py-3 xs:text-[10.5px] sm:text-[11px]"
              >
                <span className="whitespace-nowrap">LOCATION MATÉRIEL</span>
                <svg
                  className={`h-2.5 w-2.5 transition-transform duration-200 xs:h-3 xs:w-3 ${
                    locationDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {locationDropdownOpen && (
                <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3 xs:ml-4 xs:pl-4">
                  {locationItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href || '#'}
                      className="block rounded-lg bg-transparent px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.05em] text-white transition-all duration-300 hover:bg-white/10 xs:px-3 xs:py-2 xs:text-[9.5px] sm:text-[10px]"
                      onClick={() => {
                        setLocationDropdownOpen(false);
                      }}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Vente Dropdown */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  const newState = !venteDropdownOpen;
                  setVenteDropdownOpen(newState);
                  setLocationDropdownOpen(false);
                }}
                className="flex items-center justify-between rounded-lg bg-transparent px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white/10 xs:px-4 xs:py-3 xs:text-[10.5px] sm:text-[11px]"
              >
                <span className="whitespace-nowrap">VENTE MATÉRIEL</span>
                <svg
                  className={`h-2.5 w-2.5 transition-transform duration-200 xs:h-3 xs:w-3 ${
                    venteDropdownOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {venteDropdownOpen && (
                <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-white/10 pl-3 xs:ml-4 xs:pl-4">
                  {venteItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href || '#'}
                      className="block rounded-lg bg-transparent px-2.5 py-1.5 text-[9px] font-medium uppercase tracking-[0.05em] text-white transition-all duration-300 hover:bg-white/10 xs:px-3 xs:py-2 xs:text-[9.5px] sm:text-[10px]"
                      onClick={() => {
                        setVenteDropdownOpen(false);
                      }}
                    >
                      <span className="whitespace-nowrap">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/qui-sommes-nous"
              className="flex items-center justify-between rounded-lg bg-transparent px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-white/10 xs:px-4 xs:py-3 xs:text-[10.5px] sm:text-[11px]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="whitespace-nowrap">QUI SOMMES NOUS</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

