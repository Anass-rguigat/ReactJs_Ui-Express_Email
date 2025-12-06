import { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactezNousSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    adresse: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({ type: 'success', message: data.message });
        // Reset form
        setFormData({
          nom: '',
          prenom: '',
          adresse: '',
          email: '',
          message: '',
        });
      } else {
        setSubmitStatus({ type: 'error', message: data.message || 'Erreur lors de l\'envoi du message' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Erreur de connexion. Veuillez vérifier que le serveur est démarré.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full bg-black py-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-Nous
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Nous sommes à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Side - Contact Form (More than half) */}
          <div className="order-2 lg:order-1 flex-1 lg:flex-[1.5]">
            <div className="bg-[#0a0a0a] backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-800/30 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nom et Prénom - Same Line */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nom" className="block text-sm font-semibold text-gray-200 mb-2.5">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="nom"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-black/40 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E92B26]/60 focus:ring-2 focus:ring-[#E92B26]/30 transition-all duration-300 backdrop-blur-sm hover:border-gray-600/50"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="prenom" className="block text-sm font-semibold text-gray-200 mb-2.5">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="prenom"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-black/40 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E92B26]/60 focus:ring-2 focus:ring-[#E92B26]/30 transition-all duration-300 backdrop-blur-sm hover:border-gray-600/50"
                      placeholder="Votre prénom"
                    />
                  </div>
                </div>

                {/* Adresse et Email - Same Line */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="adresse" className="block text-sm font-semibold text-gray-200 mb-2.5">
                      Adresse
                    </label>
                    <input
                      type="text"
                      id="adresse"
                      name="adresse"
                      value={formData.adresse}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-black/40 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E92B26]/60 focus:ring-2 focus:ring-[#E92B26]/30 transition-all duration-300 backdrop-blur-sm hover:border-gray-600/50"
                      placeholder="Votre adresse"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-200 mb-2.5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3.5 bg-black/40 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E92B26]/60 focus:ring-2 focus:ring-[#E92B26]/30 transition-all duration-300 backdrop-blur-sm hover:border-gray-600/50"
                      placeholder="exemple@email.com"
                    />
                  </div>
                </div>

                {/* Message - Full Width */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-200 mb-2.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-3.5 bg-black/40 border border-gray-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#E92B26]/60 focus:ring-2 focus:ring-[#E92B26]/30 transition-all duration-300 resize-none backdrop-blur-sm hover:border-gray-600/50"
                    placeholder="Décrivez votre demande ou votre projet..."
                  />
                </div>

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl ${
                      submitStatus.type === 'success'
                        ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                        : 'bg-red-500/20 border border-red-500/50 text-red-400'
                    }`}
                  >
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#E92B26] via-[#E92B26]/95 to-[#E92B26] text-white font-bold text-base rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-[#E92B26]/40 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer Message</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Right Side - Company Information (Centered Vertically) */}
          <div className="order-1 lg:order-2 flex-1 lg:flex-[0.8] flex items-center">
            <div className="w-full flex flex-col gap-3 sm:gap-4">
              {/* Bureau */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer bg-transparent">
                <div className="shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 bg-gray-800/30 text-gray-400">
                    <FaMapMarkerAlt />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 transition-colors text-gray-400">
                    Bureau
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base leading-relaxed transition-colors text-gray-500">
                    bd Taza, 11-13 rue 71<br />
                    hay Mly Abdellah,<br />
                    Q. Aïn Chok CASABLANCA
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer bg-transparent">
                <div className="shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 bg-gray-800/30 text-gray-400">
                    <FaPhoneAlt />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 transition-colors text-gray-400">
                    Téléphone
                  </h3>
                  <a href="tel:0522523234" className="text-xs sm:text-sm md:text-base leading-relaxed transition-colors text-gray-500 hover:text-[#E92B26] inline-block">
                    05 22 52 32 34
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer bg-transparent">
                <div className="shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl transition-all duration-300 bg-gray-800/30 text-gray-400">
                    <FaEnvelope />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 transition-colors text-gray-400">
                    Email
                  </h3>
                  <a href="mailto:support@x-zone.ma" className="text-xs sm:text-sm md:text-base leading-relaxed transition-colors text-gray-500 hover:text-[#E92B26] inline-block break-all">
                    support@x-zone.ma
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactezNousSection;

