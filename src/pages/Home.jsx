import { motion } from 'framer-motion';
import { ArrowRight, Laptop, Wifi, HelpCircle, Zap, Smile, Sparkles, CheckCircle2, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const services = [
    {
      title: "Computer Repair & Upgrades",
      desc: "Fast hardware diagnostics, SSD/RAM upgrades, screen replacements, and virus cleanups for PCs and Macs.",
      icon: <Laptop className="text-purple-400" size={28} />,
      link: "/services"
    },
    {
      title: "Network & Wi-Fi Setup",
      desc: "High-speed mesh Wi-Fi configurations, router installations, range extension, and connection troubleshooting.",
      icon: <Wifi className="text-pink-400" size={28} />,
      link: "/services"
    },
    {
      title: "Patient Tech Support",
      desc: "Friendly assistance for email setup, printer connections, data backup, smart home devices, and tutoring.",
      icon: <HelpCircle className="text-purple-400" size={28} />,
      link: "/services"
    }
  ];

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Triole IT",
    "image": "https://triole-it.com/logo.png",
    "url": "https://triole-it.com",
    "email": "admin@triole-it.com",
    "description": "Triole IT provides friendly, professional, and affordable local IT support, computer repairs, network troubleshooting, and software setups for home users and small businesses.",
    "sameAs": [
      "https://www.instagram.com/triole_it/"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vancouver",
      "addressRegion": "BC",
      "addressCountry": "CA"
    }
  };

  return (
    <div className="relative overflow-hidden">
      <SEO
        title="Triole IT | Local IT Support & Computer Repair Services"
        description="Triole IT provides friendly, professional, and affordable local IT support, computer and laptop repairs, network troubleshooting, and device setup for home users and small businesses."
        keywords="local IT support, computer repairs, laptop repair, Wi-Fi troubleshooting, network setup, printer setup, virus removal, smart home setup, Vancouver tech support"
        schemaMarkup={homeSchema}
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

            {/* Hero Right Column: Showcase Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-5 relative"
            >
              <div className="card-surface p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Service Highlights
                  </span>
                  <span className="rounded-full bg-purple-500/20 px-2.5 py-1 text-xs font-semibold text-purple-300 border border-purple-500/30">
                    Available Today
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-3">
                      <Zap size={20} />
                    </div>
                    <h3 className="text-base font-bold text-white">Rapid Turnaround</h3>
                    <p className="mt-1.5 text-sm text-zinc-300 leading-relaxed">
                      Same-day diagnostics and priority repairs for critical device issues.
                    </p>
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-900/60 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-3">
                      <Smile size={20} />
                    </div>
                    <h3 className="text-base font-bold text-white">Friendly Support</h3>
                    <p className="mt-1.5 text-sm text-zinc-300 leading-relaxed">
                      Clear explanations in plain language with zero confusing jargon.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-purple-500/30 bg-purple-950/20 p-4 sm:p-5 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-purple-300">Need Hardware or Workspace Gear?</p>
                    <p className="text-xs sm:text-sm text-zinc-300">Shop curated tech at Triole Store</p>
                  </div>
                  <a
                    href="https://store.triole-it.com"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-300 hover:text-white transition shrink-0 min-h-[44px] min-w-[44px]"
                  >
                    <span>Visit Store</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="relative border-y border-zinc-800 bg-[#121215] py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">

            <div className="card-surface p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-5">
                <Laptop size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Computer &amp; Laptop Repairs</h3>
              <p className="mt-2.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                Hardware diagnostics, screen replacements, virus removals, and SSD upgrades to give slow computers new life.
              </p>
            </div>

            <div className="card-surface p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-5">
                <Wifi size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Wi-Fi &amp; Network Setup</h3>
              <p className="mt-2.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                Eliminate dead zones with high-performance mesh networks, secure routers, and office cabling solutions.
              </p>
            </div>

            <div className="card-surface p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-5">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">Affordable &amp; Upfront</h3>
              <p className="mt-2.5 text-sm sm:text-base text-zinc-300 leading-relaxed">
                Clear quotes upfront with transparent flat rates and guaranteed satisfaction on all repair services.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview Section */}
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
            {services.map((service, i) => (
              <div
                key={i}
                className="card-interactive p-6 sm:p-8 flex flex-col items-start justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 text-purple-400 mb-5">
                    {service.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {service.desc}
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
              href="https://store.triole-it.com"
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
