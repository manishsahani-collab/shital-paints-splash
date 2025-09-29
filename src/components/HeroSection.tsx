import { Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-6xl mx-auto">
        {/* Logo Area */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-heading font-bold mb-4 text-white">
            SHITAL PAINTS
          </h1>
          <div className="w-32 h-1 bg-accent mx-auto mb-6"></div>
        </div>

        {/* Tagline */}
        <h2 className="text-2xl md:text-4xl font-heading font-semibold mb-12 text-white">
          "Adding Colours to Life"
        </h2>

        {/* CTAs */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center mb-12">
          <button className="btn-accent text-lg">
            Get a Quote
          </button>
          <button className="btn-premium text-lg">
            Call Now
          </button>
        </div>

        {/* Contact Numbers */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <a 
            href="tel:+919824312038" 
            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 hover:bg-white/20 transition-all duration-300 text-white"
          >
            <Phone size={20} />
            <span className="font-semibold">+91 98243 12038</span>
          </a>
          <a 
            href="tel:+919033851427" 
            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 hover:bg-white/20 transition-all duration-300 text-white"
          >
            <Phone size={20} />
            <span className="font-semibold">+91 90338 51427</span>
          </a>
        </div>
      </div>

      {/* Floating Paint Drops Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-accent rounded-full opacity-20 animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;