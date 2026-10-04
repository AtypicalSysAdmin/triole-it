import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SERVICES, MAINTENANCE_PLANS } from '../data/services';
import { COMPANY_INFO } from '../data/company';

const Services = () => {
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
        "provider": {
          "@type": "Organization",
          "name": COMPANY_INFO.name,
          "url": COMPANY_INFO.website
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

        {/* 2. California ARL / FTC Compliant Continuous Retainer Plans */}
        <div className="mt-20 border-t border-zinc-800 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge badge-purple mb-3">Ongoing Peace-of-Mind</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Continuous Maintenance &amp; Retainer Plans
            </h2>
            <p className="mt-3 text-base text-zinc-300 leading-relaxed">
              Transparent monthly plans for continuous protection, priority repairs, and proactive maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {MAINTENANCE_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`card-surface p-6 sm:p-8 flex flex-col justify-between relative ${
                  plan.popular ? 'border-purple-500/50' : ''
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 right-6 rounded-full bg-purple-600 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">{plan.price}</span>
                  </div>
                  <p className="text-xs text-purple-300 mt-1 font-medium">{plan.billingDetails}</p>

                  <ul className="mt-6 space-y-3 text-sm text-zinc-300">
                    {plan.features.map((feat, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-purple-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disclosures & Action */}
                <div className="mt-8 pt-6 border-t border-zinc-800">
                  <div className="p-3.5 rounded-lg bg-[#18181c] border border-zinc-800 text-xs text-zinc-400 leading-relaxed mb-4">
                    <p className="font-semibold text-zinc-300 mb-1">
                      Continuous Service Disclosure:
                    </p>
                    <p>
                      Your subscription will automatically renew each month at the current rate until cancelled. You may cancel at any time with 1 click by emailing <a href={`mailto:${COMPANY_INFO.email}`} className="text-purple-300 underline">{COMPANY_INFO.email}</a> or via your customer billing link. No cancellation fees.
                    </p>
                  </div>

                  <Link
                    to={`/contacts?service=${encodeURIComponent(plan.name)}`}
                    className="btn-primary w-full text-base font-bold py-3 text-center justify-center gap-2"
                  >
                    <span>Inquire About Plan</span>
                    <ArrowRight size={15} />
                  </Link>

                  <p className="text-xs text-zinc-400 text-center mt-3">
                    Backed by Triole IT 30-day satisfaction guarantee &bull; <Link to="/terms" className="underline hover:text-white">View Full Terms</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
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
