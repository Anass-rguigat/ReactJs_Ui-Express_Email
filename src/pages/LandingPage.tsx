import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServiceSection from '../components/ServiceSection';
import MaterialSliderSection from '../components/MaterialSliderSection';
import FeaturesSection from '../components/FeaturesSection';
import BrandsSection from '../components/BrandsSection';
import ServicesSection from '../components/ServicesSection';
import ContactezNousSection from '../components/ContactezNousSection';
import FooterSection from '../components/FooterSection';

const LandingPage = () => {
  return (
    <div className="relative">
      <Navbar />
      <HeroSection />
      <ServiceSection />
      <MaterialSliderSection />
      <FeaturesSection />
      <BrandsSection />
      <ServicesSection />
      <ContactezNousSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;

