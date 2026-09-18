import { motion } from 'framer-motion';
import { Laptop, Wifi, ShieldAlert, Database, Printer, Settings, Briefcase, BookOpen, Sparkles, ArrowRight } from 'lucide-react';
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

        <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>
          Our IT Service Catalog
        </h2>

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

        {/* CTA Card matching Store banner */}
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
