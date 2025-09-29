import { Brush, Palette, Home } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Brush,
      title: 'PAINTING SOLUTIONS',
      description: 'Professional painting service for homes and offices with skilled craftsmen and quality materials.',
      features: ['Interior Painting', 'Exterior Painting', 'Commercial Projects']
    },
    {
      icon: Palette,
      title: 'COLOUR CONSULTANCY',
      description: 'Expert shade selection and theme consultation to create perfect color combinations for your space.',
      features: ['Color Matching', 'Theme Design', 'Trend Advice']
    },
    {
      icon: Home,
      title: 'INTERIOR DESIGN SUPPORT',
      description: 'Complete interior design solutions with concept designs, 3D views, and professional site supervision.',
      features: ['3D Visualization', 'Design Concepts', 'Site Supervision']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white watermark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary uppercase mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="premium-card p-8 group hover:bg-gradient-secondary transition-all duration-300">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={40} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-bold text-primary uppercase mb-4 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 group-hover:text-white/90 transition-colors duration-300">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground group-hover:text-white/80 transition-colors duration-300">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn-accent text-lg">
            Request a Service
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;