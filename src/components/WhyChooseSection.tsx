import { CheckCircle } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    'Authorized Dealer – Asian Paints & MRF Taralac',
    '1000+ Shades & Textures available',
    'One-Stop Shop: Paints + Tools + Design Support',
    'Trusted by 500+ happy clients in Rajkot & beyond'
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white uppercase mb-6">
            Why Choose Shital Paints?
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <CheckCircle size={24} className="text-accent mt-1 flex-shrink-0" />
                <p className="text-white text-lg font-medium">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
              500+
            </div>
            <p className="text-white/90 font-medium">Happy Clients</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
              1000+
            </div>
            <p className="text-white/90 font-medium">Color Options</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-heading font-bold text-accent mb-2">
              15+
            </div>
            <p className="text-white/90 font-medium">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;