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

        <div className="grid lg:grid-cols-2 gap-12">
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
            <div className="flex gap-4">
              <a 
                href="https://wa.me/919824312038" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-accent flex items-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
              <a 
                href="tel:+919824312038" 
                className="btn-premium flex items-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="premium-card p-6">
            <h3 className="font-heading font-bold text-primary uppercase mb-6">Find Us</h3>
            <div className="aspect-video w-full bg-secondary/20 rounded-lg flex items-center justify-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234747.1614074842!2d70.5431076!3d22.2587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf4de2408c74a0b6!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1647859194352!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;