import { Award, Shield, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: 'EXPERIENCE',
      description: 'Years of trusted service in Rajkot'
    },
    {
      icon: Shield,
      title: 'QUALITY PRODUCTS',
      description: 'Premium paints & accessories'
    },
    {
      icon: Users,
      title: 'TRUSTED SERVICE',
      description: 'Professional painting solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white watermark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary uppercase mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-lg md:text-xl text-foreground leading-relaxed">
            Shital Paints is Rajkot's trusted name in paints & coatings, serving homeowners, 
            contractors, and industries with quality paints, accessories, and professional 
            painting services. As an authorized dealer for Asian Paints, MRF Taralac, and more, 
            we bring you the widest range of colours, finishes, and tools—all under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="premium-card p-8 text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon size={32} className="text-white" />
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-primary uppercase mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;