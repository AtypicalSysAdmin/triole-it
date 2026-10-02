import { motion } from 'framer-motion';
import { Laptop, Wifi, ShieldAlert, Database, Printer, Settings, Briefcase, BookOpen, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {

  const allServices = [
    {
      title: "Computer Repair & Upgrades",
      desc: "Fast hardware diagnostics, laptop screen replacements, keyboard repairs, and SSD/RAM upgrades to speed up sluggish devices.",
      icon: <Laptop size={32} />,
      color: "#C084FC"
    },
    {
      title: "Wi-Fi & Network Setup",
      desc: "Setting up routers, Wi-Fi mesh systems, range extenders, and troubleshooting connectivity issues or internet dropouts.",
      icon: <Wifi size={32} />,
      color: "#F472B6"
    },
    {
      title: "Virus & Malware Removal",
      desc: "Comprehensive system scans to safely remove spyware, adware, viruses, and ransomware, and installing reliable antivirus protection.",
      icon: <ShieldAlert size={32} />,
      color: "#C084FC"
    },
    {
      title: "Data Backup & Recovery",
      desc: "Recovering lost files from failing or crashed drives, and setting up automatic cloud or physical backup systems for peace of mind.",
      icon: <Database size={32} />,
      color: "#F472B6"
    },
    {
      title: "Printer & Device Setup",
      desc: "Configuring home and office printers, scanner setups, smart TVs, security cameras, and other smart home accessories.",
      icon: <Printer size={32} />,
      color: "#C084FC"
    },
    {
      title: "OS & Software Troubleshooting",
      desc: "Resolving Windows/Mac operating system errors, email client configurations, software installation errors, and app updates.",
      icon: <Settings size={32} />,
      color: "#F472B6"
    },
    {
      title: "Small Business IT Support",
      desc: "Setting up office computers, shared network storage (NAS), email domains, user accounts, and local network security solutions.",
      icon: <Briefcase size={32} />,
      color: "#C084FC"
    },
    {
      title: "Tech Training & Guidance",
      desc: "Patient, jargon-free tutoring to help you or your team learn how to use new devices, operating systems, or specific apps at your own pace.",
      icon: <BookOpen size={32} />,
      color: "#F472B6"
    }
  ];

  const maintenancePlans = [
    {
      name: "Residential Tech Guardian",
      cadence: "Monthly Retainer",
      price: "$49 / month",
      billingDetails: "Billed monthly on the 1st. Continuous service auto-renews until cancelled.",
      features: [
        "Quarterly remote speed tune-up & virus audit",
        "Priority queue for emergency computer repairs",
        "15% discount on all on-site labor & diagnostic visits",
        "Unlimited remote quick-question guidance"
      ]
    },
    {
      name: "Small Business Pro Retainer",
      cadence: "Monthly Retainer",
      price: "$199 / month",
      billingDetails: "Billed monthly. Continuous service auto-renews until cancelled.",
      popular: true,
      features: [
        "Up to 5 business workstations & network router monitored",
        "Automated encrypted cloud backup verification",
        "Guaranteed 2-hour priority emergency response",
        "Monthly security patch management & Wi-Fi audit"
      ]
    }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Triole IT Services Catalog",
    "description": "Friendly and professional local IT support services including computer repairs, Wi-Fi and network setup, virus removal, device installations, and tech training.",
    "itemListElement": allServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.desc,
        "provider": {
          "@type": "Organization",
          "name": "Triole IT",
          "url": "https://triole-it.com"
        }
      }
    }))
  };

  return (
    <div className="relative overflow-hidden py-16 lg:py-24">
      <SEO
        title="Local IT Support & Computer Repair Services | Triole IT"
        description="Explore our friendly tech support offerings, including computer and laptop repairs, Wi-Fi troubleshooting, virus removal, device setups, and small business IT."
        keywords="computer repairs, laptop repairs, Wi-Fi setup, tech support, virus removal, printer setup, small business IT support, Vancouver tech support"
        schemaMarkup={servicesSchema}
      />

      {/* Ambient background glows */}
      <div className="glow-primary top-10 -left-20" />
      <div className="glow-secondary top-96 -right-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] mb-5">
            <Sparkles size={16} className="text-purple-400" />
            <span>Comprehensive Support Catalog</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-zinc-300">
            We provide a complete range of friendly tech support and repair services to keep your devices running smoothly and securely.
          </p>
        </motion.div>

        {/* 1. On-Demand Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group glass-card rounded-2xl p-7 border border-zinc-800/80 transition-all duration-300 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 flex flex-col justify-between"
            >
              <div>
                <div
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-zinc-800/80 border border-zinc-700/60 group-hover:scale-110 transition duration-300 mb-6"
                  style={{ color: service.color, borderColor: `${service.color}40` }}
                >
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-300 transition mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <Link
                to="/contacts"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-purple-400 group-hover:text-purple-300 transition"
              >
                Inquire now <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 2. California ARL / FTC Compliant Continuous Retainer Plans */}
        <div className="mt-24 border-t border-zinc-800/80 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="badge badge-purple mb-3">Ongoing Peace-of-Mind</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Continuous Maintenance &amp; Retainer Plans
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-300 leading-relaxed">
              Transparent monthly plans for continuous protection, priority repairs, and proactive maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {maintenancePlans.map((plan, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-8 border ${
                  plan.popular ? 'border-purple-500/60 neon-border' : 'border-zinc-800'
                } flex flex-col justify-between relative`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 right-6 rounded-full bg-purple-600 px-3.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg">
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

                {/* Statutory Continuous Service & Cancellation Disclosures (Adjacent to button) */}
                <div className="mt-8 pt-6 border-t border-zinc-800">
                  <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-400 leading-relaxed mb-4">
                    <p className="font-semibold text-zinc-300 mb-1">
                      Continuous Service Disclosure (California ARL / FTC):
                    </p>
                    <p>
                      Your subscription will automatically renew each month at the current rate until cancelled. You may cancel at any time with 1 click by emailing <a href="mailto:admin@triole-it.com" className="text-purple-400 underline">admin@triole-it.com</a> or via your customer billing link. No cancellation fees.
                    </p>
                  </div>

                  <Link
                    to="/contacts"
                    className="btn-primary w-full text-sm font-bold py-3 text-center justify-center gap-2"
                  >
                    <span>Inquire About Plan</span>
                    <ArrowRight size={15} />
                  </Link>

                  <p className="text-[11px] text-zinc-400 text-center mt-2.5">
                    Backed by Triole IT 30-day satisfaction guarantee &bull; <Link to="/terms" className="underline hover:text-white">View Full Terms</Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. CTA Card */}
        <div className="mt-20 glass-card rounded-2xl p-8 sm:p-14 text-center border border-purple-500/30 neon-border max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">Need Tech Help Right Away?</h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a quick home repair, a network audit for your office, or ongoing device maintenance, our friendly experts are ready to assist.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contacts" className="btn-primary text-base">
              Contact Our Team <ArrowRight size={18} />
            </Link>
            <a
              href="https://store.triole-it.com"
              rel="noopener noreferrer"
              className="btn-secondary text-base"
            >
              Browse Hardware Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
