import Navbar from '../components/Navbar';
import ContactezNousSection from '../components/ContactezNousSection';
import FooterSection from '../components/FooterSection';

const ContactPage = () => {
  return (
    <div className="relative min-h-screen bg-black">
      <Navbar />
      <div className="pt-24">
        <ContactezNousSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default ContactPage;

