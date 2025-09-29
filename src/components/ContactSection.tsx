import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary uppercase mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="premium-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary uppercase mb-2">Address</h3>
                  <p className="text-muted-foreground">
                    Shital Paints<br />
                    Rajkot, Gujarat, India
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary uppercase mb-2">Phone</h3>
                  <div className="space-y-1">
                    <a href="tel:+919824312038" className="block text-muted-foreground hover:text-primary transition-colors">
                      +91 98243 12038
                    </a>
                    <a href="tel:+919033851427" className="block text-muted-foreground hover:text-primary transition-colors">
                      +91 90338 51427
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary uppercase mb-2">Email</h3>
                  <a href="mailto:shitalpaints@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    shitalpaints@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="premium-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary uppercase mb-2">Working Hours</h3>
                  <p className="text-muted-foreground">
                    Mon–Sat: 9:00 AM – 8:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <a 
                href="https://wa.me/919824312038" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a 
                href="tel:+919824312038" 
                className="btn-premium flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
              <a 
                href="https://maps.google.com/?q=Rajkot,Gujarat,India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-premium flex items-center justify-center gap-2"
              >
                <MapPin size={20} />
                Location
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;