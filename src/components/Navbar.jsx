import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const services = [
  { name: 'Landscape Design', href: '/services/landscape-design' },
  { name: 'Hardscape & Pavers', href: '/services/hardscape-pavers' },
  { name: 'Turf Installation', href: '/services/turf-installation' },
  { name: 'Landscape Lighting', href: '/services/landscape-lighting' },
  { name: 'Patio Covers & Shade', href: '/services/patio-covers' },
  { name: 'Outdoor Kitchens & Fire', href: '/services/outdoor-kitchens' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false); // NEW
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed w-full z-50">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 hidden md:block">
        <div className="container-custom flex justify-between items-center text-sm">
          <span className="font-medium">Taking Your Outdoor Space to the NX Level</span>
          <div className="flex items-center gap-6">
            <a href="tel:+17023486380" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
             +1 (702)-348-6380
            </a>
            <a href="mailto:quotes@nxlevellandscaping.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail size={14} />
              quotes@nxlevellandscaping.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-background/95 backdrop-blur-md shadow-md">
        <div className="container-custom flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">NX</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-foreground leading-tight">NX Level</span>
              <span className="text-xs text-muted-foreground uppercase tracking-widest">Landscaping</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className={`nav-link flex items-center gap-1 ${isActive('/services') ? 'nav-link-active' : ''}`}>
                Services
                <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in">
                  <div className="bg-card rounded-xl shadow-xl border border-border p-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-foreground/80 hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-border mt-2 pt-2">
                      <Link
                        to="/services"
                        className="block px-4 py-3 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Dropdown (UPDATED) */}
            <div
              className="relative"
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
            >
              <button className={`nav-link flex items-center gap-1 ${isActive('/service-gallery') ? 'nav-link-active' : ''}`}>
                Gallery
                <ChevronDown size={16} className={`transition-transform ${galleryOpen ? 'rotate-180' : ''}`} />
              </button>

              {galleryOpen && (
                <div className="absolute top-full left-0 pt-2 w-56 animate-fade-in">
                  <div className="bg-card rounded-xl shadow-xl border border-border p-2">
                    <Link
                      to="/service-gallery"
                      className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-foreground/80 hover:text-primary"
                    >
                      Service Gallery
                    </Link>
                    <Link
                      to="/past-work"
                      className="block px-4 py-3 rounded-lg hover:bg-secondary transition-colors text-foreground/80 hover:text-primary"
                    >
                      Past Work
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}>
              About
            </Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}>
              Contact
            </Link>
          </div>

          <Link to="/contact" className="hidden md:block btn-hero">
            Free Quote
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="container-custom py-4 px-4 flex flex-col gap-2">

              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="nav-link py-3 border-b border-border"
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="border-b border-border">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex justify-between items-center nav-link py-3"
                >
                  Services
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="pl-4 pb-2 flex flex-col">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        onClick={() => {
                          setIsOpen(false);
                          setServicesOpen(false);
                        }}
                        className="py-2 text-sm text-foreground/80 hover:text-primary"
                      >
                        {service.name}
                      </Link>
                    ))}

                    <Link
                      to="/services"
                      onClick={() => {
                        setIsOpen(false);
                        setServicesOpen(false);
                      }}
                      className="py-2 text-sm font-medium text-primary"
                    >
                      View All Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Gallery Dropdown */}
              <div className="border-b border-border">
                <button
                  onClick={() => setGalleryOpen(!galleryOpen)}
                  className="w-full flex justify-between items-center nav-link py-3"
                >
                  Gallery
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${galleryOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {galleryOpen && (
                  <div className="pl-4 pb-2 flex flex-col">
                    <Link
                      to="/service-gallery"
                      onClick={() => {
                        setIsOpen(false);
                        setGalleryOpen(false);
                      }}
                      className="py-2 text-sm text-foreground/80 hover:text-primary"
                    >
                      Service Gallery
                    </Link>

                    <Link
                      to="/past-work"
                      onClick={() => {
                        setIsOpen(false);
                        setGalleryOpen(false);
                      }}
                      className="py-2 text-sm text-foreground/80 hover:text-primary"
                    >
                      Past Work
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="nav-link py-3 border-b border-border"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="nav-link py-3 border-b border-border"
              >
                Contact
              </Link>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-hero text-center mt-4"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;