import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import heroImage from '@/assets/hero.jpeg';

const CTASection = () => {
  return (
    <section className="relative py-24">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-primary/90" />

      {/* Content */}
      <div className="relative z-10 container-custom px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Take Your Yard to the{' '}
          <span className="text-accent">NX Level?</span>
        </h2>
        <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Let's elevate your outdoor living space. Get a free consultation and discover how we can transform your property.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/contact" className="btn-hero inline-flex items-center justify-center gap-2">
            Request a Free Estimate
            <ArrowRight size={20} />
          </a>
          <a
            href="tel:+17023486380"
            className="btn-outline-hero inline-flex items-center justify-center gap-2"
          >
            <Phone size={20} />
            Call +1 (702)-348-6380
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
