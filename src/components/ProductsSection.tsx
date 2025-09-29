import { Paintbrush, Building, Wrench, Package } from 'lucide-react';

const ProductsSection = () => {
  const products = [
    {
      icon: Paintbrush,
      title: 'DECORATIVE PAINTS',
      description: 'Interior, Exterior, Primers, Emulsions, Enamels',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop'
    },
    {
      icon: Building,
      title: 'INDUSTRIAL COATINGS',
      description: 'NC, PU, Epoxy, Thinners, Varnishes',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop'
    },
    {
      icon: Wrench,
      title: 'PAINTING TOOLS',
      description: 'Brushes, Rollers, Putty knives, Sand papers',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop'
    },
    {
      icon: Package,
      title: 'ACCESSORIES',
      description: 'Cotton waste, masking tapes, etc.',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop'
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
              className="premium-card overflow-hidden group cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                  <product.icon size={48} className="text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-heading font-bold text-primary uppercase mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;