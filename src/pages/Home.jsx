import { motion } from 'framer-motion';
import { ArrowRight, Zap, Smile, Sparkles, CheckCircle2, ShieldCheck, ShoppingBag, Clock, MapPin, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { FEATURED_HOME_SERVICES } from '../data/services';
import { COMPANY_INFO } from '../data/company';

const Home = () => {
  const corePillars = [
    {
      title: "Rapid Diagnostics & Turnaround",
      desc: "Fast hardware diagnostics, same-day triage, and priority repairs to get your computer or network back online quickly.",
      icon: <Zap size={24} />,
      colorClass: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    },
    {
      title: "No-Jargon Guarantee",
      desc: "Patient, respectful guidance in plain language. We explain issues clearly without confusing technical terminology.",
      icon: <Smile size={24} />,
      colorClass: "bg-pink-500/10 border-pink-500/20 text-pink-400"
    },
    {
      title: "Transparent Flat-Rate Pricing",
      desc: "Clear upfront quotes before any work begins, backed by guaranteed workmanship with zero hidden surcharges.",
      icon: <ShieldCheck size={24} />,
      colorClass: "bg-purple-500/10 border-purple-500/20 text-purple-400"
    }
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ComputerRepairService", "ProfessionalService"],
    "name": COMPANY_INFO.name,
    "image": COMPANY_INFO.logoUrl,
    "url": COMPANY_INFO.website,
    "email": COMPANY_INFO.email,
    "description": "Triole IT provides friendly, professional, and affordable local IT support, computer repairs, network troubleshooting, and software setups for home users and small businesses.",
    "priceRange": "$$",
    "currenciesAccepted": "CAD",
    "paymentAccepted": "Cash, Credit Card, Interac e-Transfer",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      COMPANY_INFO.socials.instagram
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": COMPANY_INFO.address.city,
      "addressRegion": COMPANY_INFO.address.region,
      "addressCountry": COMPANY_INFO.address.countryCode
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Vancouver"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Greater Vancouver"
      },
      {
        "@type": "AdministrativeArea",
        "name": "British Columbia"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Support and Computer Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Computer and Laptop Repair",
            "description": "Hardware diagnostics, laptop screen replacements, battery renewals, and SSD/RAM upgrades."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wi-Fi and Home Network Setup",
            "description": "Mesh Wi-Fi installation, dead-zone resolution, router security, and troubleshooting."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Virus and Malware Removal",
            "description": "Comprehensive scan, malicious software remediation, and antivirus installation."
          }
        }
      ]
    }
  };

  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you provide IT support and computer repairs in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Triole IT provides on-site IT support across Vancouver, Burnaby, Richmond, and the surrounding Lower Mainland area, as well as fast remote diagnostics and support across Canada."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can you diagnose and fix computer issues?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most standard diagnostics are performed with fast turnaround (typically within 24–48 hours). For urgent issues, expedited same-day diagnostic triage is available."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer upfront flat rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we believe in transparent pricing with clear upfront quotes before any work begins, backed by a 30-day workmanship guarantee and zero hidden surcharges."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support small businesses as well as residential home users?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We help individual home users with personal devices, Wi-Fi, and smart tech, and assist small businesses with office network setups, workstations, cloud backups, and ongoing maintenance."
        }
      }
    ]
  };

  return (
    <div className="relative overflow-hidden">
      <SEO
        title="Triole IT | Local IT Support & Computer Repair Services"
        description="Triole IT provides friendly, professional, and affordable local IT support, computer and laptop repairs, network troubleshooting, and device setup for home users and small businesses."
        keywords="local IT support, computer repairs, laptop repair, Wi-Fi troubleshooting, network setup, printer setup, virus removal, smart home setup, Vancouver tech support"
        schemaMarkup={[homeSchema, homeFaqSchema]}
      />

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">

            {/* Hero Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-6">
                <Sparkles size={14} className="text-purple-400" />
                <span>Local Vancouver Tech Support &amp; Repairs</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
                Friendly &amp; Reliable <br />
                <span className="gradient-text">Local IT Support</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-zinc-300 max-w-2xl">
                Expert diagnostics, fast computer repairs, Wi-Fi optimization, and patient tech assistance for home users and small businesses across Vancouver &amp; surrounding areas.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/services" className="btn-primary text-base">
                  <span>Explore Services</span>
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contacts" className="btn-secondary text-base">
                  <span>Contact Us</span>
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-300 border-t border-zinc-800 pt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-emerald-400" />
                  <span>Fast Diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-purple-400" />
                  <span>No-Jargon Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-pink-400" />
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Right Column: Live Dispatch & Service Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="card-surface p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Vancouver Dispatch Active
                    </span>
                  </div>
                  <span className="rounded-full bg-purple-500/20 px-2.5 py-1 text-xs font-semibold text-purple-300 border border-purple-500/30">
                    Same-Day Triage
                  </span>
                </div>

                <div className="space-y-3.5 mb-6">
                  <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#18181c] border border-zinc-800/80">
                    <div className="flex items-center gap-3">
                      <Clock size={18} className="text-purple-400 shrink-0" />
                      <span className="text-sm font-medium text-zinc-300">Response Window</span>
                    </div>
                    <span className="text-sm font-bold text-white">Under {COMPANY_INFO.responseTime}</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#18181c] border border-zinc-800/80">
                    <div className="flex items-center gap-3">
                      <MapPin size={18} className="text-pink-400 shrink-0" />
                      <span className="text-sm font-medium text-zinc-300">Service Coverage</span>
                    </div>
                    <span className="text-sm font-bold text-white">Vancouver &amp; Metro</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#18181c] border border-zinc-800/80">
                    <div className="flex items-center gap-3">
                      <Wrench size={18} className="text-purple-400 shrink-0" />
                      <span className="text-sm font-medium text-zinc-300">Support Mode</span>
                    </div>
                    <span className="text-sm font-bold text-white">On-Site &amp; Remote</span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-lg bg-[#18181c] border border-zinc-800/80">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={18} className="text-emerald-400 shrink-0" />
                      <span className="text-sm font-medium text-zinc-300">Labor Warranty</span>
                    </div>
                    <span className="text-sm font-bold text-white">30-Day Guarantee</span>
                  </div>
                </div>

                <Link
                  to="/contacts"
                  className="btn-primary w-full text-base font-bold py-3.5 text-center justify-center gap-2"
                >
                  <span>Book Immediate Diagnostics</span>
                  <ArrowRight size={16} />
                </Link>
                <p className="text-xs text-zinc-400 text-center mt-3">
                  Local Vancouver technicians &bull; Flat rates upfront
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Pillars Section (Pillars are now completely distinct from the Hero Dispatch card) */}
      <section className="relative border-y border-zinc-800 bg-[#121215] py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {corePillars.map((pillar, i) => (
              <div key={i} className="card-surface p-6 sm:p-8">
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg border mb-5 ${pillar.colorClass}`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">{pillar.title}</h3>
                <p className="mt-2.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section (Centralized from services.jsx data) */}
      <section className="relative py-16 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              How We Help
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Specialized <span className="gradient-text">IT Services</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
              We specialize in resolving everyday technology challenges for you, your home, or your local business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {FEATURED_HOME_SERVICES.map((service) => (
              <div
                key={service.id}
                className="card-interactive p-6 sm:p-8 flex flex-col items-start justify-between"
              >
                <div>
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-5"
                    style={{ color: service.color }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 hover:text-white transition min-h-[44px]"
                >
                  <span>Learn more</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/services" className="btn-secondary text-base">
              <span>View All 8 Services</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Banner linking to store */}
          <div className="mt-16 rounded-xl border border-purple-500/30 bg-[#121215] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="badge badge-purple mb-3">Triole Store</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">Looking for Hardware &amp; Accessories?</h3>
              <p className="text-sm sm:text-base text-zinc-300 mt-2 max-w-xl leading-relaxed">
                Browse our online catalog for curated cables, chargers, adapters, hubs, and workspace essentials.
              </p>
            </div>
            <a
              href={COMPANY_INFO.storeUrl}
              rel="noopener noreferrer"
              className="btn-primary shrink-0 text-base"
            >
              <ShoppingBag size={18} />
              <span>Shop Triole Store</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
