import { motion } from 'framer-motion';
import { ArrowRight, Laptop, Wifi, HelpCircle, Zap, Smile, Sparkles, CheckCircle2, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const services = [
    {
      title: "Computer Repair & Upgrades",
      desc: "Fast hardware diagnostics, SSD/RAM upgrades, screen replacements, and virus cleanups for PCs and Macs.",
      icon: <Laptop className="text-purple-400" size={32} />,
      link: "/services"
    },
    {
      title: "Network & Wi-Fi Setup",
      desc: "High-speed mesh Wi-Fi configurations, router installations, range extension, and connection troubleshooting.",
      icon: <Wifi className="text-pink-400" size={32} />,
      link: "/services"
    },
    {
      title: "Patient Tech Support",
      desc: "Friendly assistance for email setup, printer connections, data backup, smart home devices, and tutoring.",
      icon: <HelpCircle className="text-purple-400" size={32} />,
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

      {/* Ambient background glows */}
      <div className="glow-primary top-12 -left-24" />
      <div className="glow-secondary top-96 -right-24" />

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Hero Left Column */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] mb-6">
                <Sparkles size={14} className="text-purple-400" />
                <span>Local Vancouver Tech Support &amp; Repairs</span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-[1.1]">
                Friendly &amp; Reliable <br />
                <span className="gradient-text">Local IT Support</span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-zinc-400 max-w-xl">
                Expert diagnostics, fast computer repairs, Wi-Fi optimization, and patient tech assistance for home users and small businesses across Vancouver &amp; surrounding areas.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/services" className="btn-primary">
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link to="/contacts" className="btn-secondary">
                  Contact Us
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-400" />
                  <span>Fast Diagnostics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-purple-400" />
                  <span>No-Jargon Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-pink-400" />
                  <span>Transparent Pricing</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Right Column: Showcase Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 glass-card rounded-2xl p-6 sm:p-8 neon-border">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4 mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Service Highlights
                  </span>
                  <span className="rounded-full bg-purple-500/20 px-2.5 py-0.5 text-xs font-semibold text-purple-300 border border-purple-500/30">
                    Available Today
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition hover:border-purple-500/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-3">
                      <Zap size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-white">Rapid Turnaround</h3>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      Same-day diagnostics and priority repairs for critical device issues.
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition hover:border-pink-500/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-3">
                      <Smile size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-white">Friendly Support</h3>
                    <p className="mt-1 text-xs text-zinc-400 leading-relaxed">
                      Clear explanations in plain language with zero confusing jargon.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-purple-500/20 bg-purple-950/20 p-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-purple-300">Need Hardware or Workspace Gear?</p>
                    <p className="text-xs text-zinc-400">Shop curated tech at Triole Store</p>
                  </div>
                  <a
                    href="https://store.triole-it.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white transition"
                  >
                    Visit Store <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="relative border-y border-zinc-800/80 bg-zinc-900/30 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-16 sm:grid-cols-3 sm:px-6 lg:px-8">
          
          <div className="glass-card rounded-2xl p-6 border border-zinc-800/80 hover:border-purple-500/40 transition">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Laptop size={24} />
            </div>
            <h3 className="mt-4 text-base font-bold text-white">Computer &amp; Laptop Repairs</h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Hardware diagnostics, screen replacements, virus removals, and SSD upgrades to give slow computers new life.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-zinc-800/80 hover:border-pink-500/40 transition">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
              <Wifi size={24} />
            </div>
            <h3 className="mt-4 text-base font-bold text-white">Wi-Fi &amp; Network Setup</h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Eliminate dead zones with high-performance mesh networks, secure routers, and office cabling solutions.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-zinc-800/80 hover:border-purple-500/40 transition">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <ShieldCheck size={24} />
            </div>
            <h3 className="mt-4 text-base font-bold text-white">Affordable &amp; Upfront</h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Clear quotes upfront with transparent flat rates and guaranteed satisfaction on all repair services.
            </p>
          </div>

        </div>
      </section>

      {/* Services Overview Section */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
              How We Help
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Specialized <span className="gradient-text">IT Services</span>
            </h2>
            <p className="mt-3 text-sm text-zinc-400">
              We specialize in resolving everyday technology challenges for you, your home, or your local business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="group glass-card rounded-2xl p-8 border border-zinc-800/80 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col items-start"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-zinc-800/80 border border-zinc-700/60 group-hover:border-purple-500/50 group-hover:scale-110 transition duration-300 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {service.desc}
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 group-hover:text-purple-300"
                >
                  Learn more <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Banner linking to store */}
          <div className="mt-16 rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-950/40 via-zinc-900/60 to-pink-950/40 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 neon-border">
            <div>
              <span className="badge badge-purple mb-3">Triole Store</span>
              <h3 className="text-2xl font-bold text-white">Looking for Hardware &amp; Accessories?</h3>
              <p className="text-sm text-zinc-400 mt-1 max-w-xl">
                Browse our online catalog for curated cables, chargers, adapters, hubs, and workspace essentials.
              </p>
            </div>
            <a
              href="https://store.triole-it.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              <ShoppingBag size={16} />
              <span>Shop Triole Store</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
