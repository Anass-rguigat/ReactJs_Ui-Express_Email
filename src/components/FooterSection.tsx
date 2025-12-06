const FooterSection = () => {
  return (
    <section className="relative w-full bg-[#0f0f0f] py-8 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      {/* Shadow separator between ContactezNous and Footer */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/60 to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none"></div>
      
      {/* Background decorative elements - Same as ContactezNousSection */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-64 h-64 bg-[#E92B26]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-[#1B1749]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="flex items-center justify-center">
          <p className="text-sm sm:text-base text-gray-400 text-center">
            © copyright X-Zone Technologie - By Globalglimpse.ma
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;

