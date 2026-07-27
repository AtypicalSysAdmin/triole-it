import { motion } from 'framer-motion';
import { ArrowRight, Laptop, Wifi, HelpCircle, Zap, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const services = [
    {
      title: "Computer Repair",
      desc: "Fast hardware diagnostics, component upgrades, and repair services for PCs and Macs.",
      icon: <Laptop className="text-primary" size={32} />
    },
    {
      title: "Network & Wi-Fi",
      desc: "Setup and troubleshooting for high-speed Wi-Fi, mesh routers, and local networks.",
      icon: <Wifi className="text-secondary" size={32} />
    },
    {
      title: "Tech Support",
      desc: "Friendly assistance for software issues, email setups, printer configuration, and backups.",
      icon: <HelpCircle className="text-primary" size={32} />
    }
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Triole IT",
    "image": "https://triole-it.com/logo.png",
    "@id": "https://triole-it.com/#localbusiness",
    "url": "https://triole-it.com",
    "email": "admin@triole-it.com",
    "description": "Triole IT provides friendly, professional, and affordable local IT support, computer repairs, network troubleshooting, and software setups for home users and small businesses.",
    "sameAs": [
      "https://www.instagram.com/triole_it/"
    ],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "postalCode": "V6B",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.2827,
      "longitude": -123.1207
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <div className="home-page">
      <SEO 
        title="Triole IT | Local IT Support & Computer Repair Services"
        description="Triole IT provides friendly, professional, and affordable local IT support, computer and laptop repairs, network troubleshooting, and device setup for home users and small businesses."
        keywords="local IT support, computer repairs, laptop repair, Wi-Fi troubleshooting, network setup, printer setup, virus removal, smart home setup, Vancouver tech support"
        schemaMarkup={homeSchema}
      />
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Glows */}
        <div className="glow-primary top-1/4 -left-20"></div>
        <div className="glow-secondary bottom-1/4 -right-20"></div>

        <div className="container-custom grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="h1-hero">
              Friendly & Reliable <br />
              <span className="gradient-text">Local IT Support</span>
            </h1>
            <p className="text-lead mb-10 !mx-0">
              We help home users and small businesses solve computer repairs, Wi-Fi networks, software issues, and everyday technology challenges with ease.
            </p>
            <div className="flex gap-4">
              <Link to="/services" className="btn-base btn-primary gap-2">
                Our Services <ArrowRight size={20} />
              </Link>
              <Link to="/contacts" className="btn-base btn-glass">
                Contact Us
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 card-glass border-white/10 neon-border">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-white/5 rounded-2xl flex flex-col gap-4">
                  <Zap className="text-primary" size={40} />
                  <h3 className="font-bold">Fast Turnaround</h3>
                  <p className="text-xs text-muted">Getting your devices diagnosed and repaired as quickly as possible.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl flex flex-col gap-4">
                  <Smile className="text-secondary" size={40} />
                  <h3 className="font-bold">Jargon-Free Help</h3>
                  <p className="text-xs text-muted">Friendly, straightforward support without the confusing technical speak.</p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/30 rounded-full animate-pulse"></div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-[#09090B]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="h2-section">How We Can Help</h2>
            <p className="text-muted max-w-2xl mx-auto">
              We specialize in resolving everyday technology challenges for you, your home, or your local business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="card-interactive"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="h3-card">{service.title}</h3>
                <p className="text-body">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
