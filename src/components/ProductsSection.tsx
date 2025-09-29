import { Paintbrush, Building, Wrench, Package } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      icon: Paintbrush,
      title: 'DECORATIVE PAINTS',
      description: 'Interior, Exterior, Primers, Emulsions, Enamels'
    },
    {
      icon: Building,
      title: 'INDUSTRIAL COATINGS',
      description: 'NC, PU, Epoxy, Thinners, Varnishes'
    },
    {
      icon: Wrench,
      title: 'PAINTING TOOLS',
      description: 'Brushes, Rollers, Putty knives, Sand papers'
    },
    {
      icon: Package,
      title: 'ACCESSORIES',
      description: 'Cotton waste, masking tapes, etc.'
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary uppercase mb-6">
            Our Products
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="premium-card p-8 text-center group cursor-pointer"
            >
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <product.icon size={40} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-heading font-bold text-primary uppercase mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;