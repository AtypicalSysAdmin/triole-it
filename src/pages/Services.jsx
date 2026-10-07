import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/company';

const Services = () => {
  //seo
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${COMPANY_INFO.name} Services Catalog`,
    "description": "Friendly and professional local IT support services including computer repairs, Wi-Fi and network setup, virus removal, device installations, and tech training.",
    "itemListElement": SERVICES.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "serviceType": service.title,
        "areaServed": "Vancouver, BC, Canada",
        "provider": {
          "@type": "LocalBusiness",
          "name": COMPANY_INFO.name,
          "url": COMPANY_INFO.website,
          "email": COMPANY_INFO.email
        }
      }
    }))
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <SEO
        title="Local IT Support & Computer Repair Services | Triole IT"
        description="Explore our friendly tech support offerings, including computer and laptop repairs, Wi-Fi troubleshooting, virus removal, device setups, and small business IT."
        keywords="computer repairs, laptop repairs, Wi-Fi setup, tech support, virus removal, printer setup, small business IT support, Vancouver tech support"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Services", item: "/services" }
        ]}
        schemaMarkup={servicesSchema}
      />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-5">
            <Sparkles size={14} className="text-purple-400" />
            <span>Comprehensive Support Catalog</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-zinc-300">
            We provide a complete range of friendly tech support and repair services to keep your devices running smoothly and securely.
          </p>
        </motion.div>

        {/* 1. On-Demand Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="card-interactive p-6 flex flex-col justify-between"
            >
              <div>
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-5"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <Link
                to={`/contacts?service=${encodeURIComponent(service.title)}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition min-h-[44px]"
              >
                <span>Inquire now</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          ))}
        </div>


        {/* 3. CTA Card */}
        <div className="mt-16 card-surface p-6 sm:p-12 text-center max-w-4xl mx-auto border-purple-500/30">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Need Tech Help Right Away?</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a quick home repair, a network audit for your office, or ongoing device maintenance, our friendly experts are ready to assist.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contacts" className="btn-primary text-base">
              <span>Contact Our Team</span>
              <ArrowRight size={18} />
            </Link>
            <a
              href={COMPANY_INFO.storeUrl}
              rel="noopener noreferrer"
              className="btn-secondary text-base"
            >
              <span>Browse Hardware Store</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
