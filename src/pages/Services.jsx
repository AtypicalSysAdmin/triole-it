import { motion } from 'framer-motion';
import { Laptop, Wifi, ShieldAlert, Database, Printer, Settings, Briefcase, BookOpen } from 'lucide-react';
import SEO from '../components/SEO';

const Services = () => {
  const allServices = [
    {
      title: "Computer Repair & Upgrades",
      desc: "Fast hardware diagnostics, laptop screen replacements, keyboard repairs, and SSD/RAM upgrades to speed up sluggish devices.",
      icon: <Laptop size={40} />,
      color: "var(--primary)"
    },
    {
      title: "Wi-Fi & Network Setup",
      desc: "Setting up routers, Wi-Fi mesh systems, range extenders, and troubleshooting connectivity issues or internet dropouts.",
      icon: <Wifi size={40} />,
      color: "var(--secondary)"
    },
    {
      title: "Virus & Malware Removal",
      desc: "Comprehensive system scans to safely remove spyware, adware, viruses, and ransomware, and installing reliable antivirus protection.",
      icon: <ShieldAlert size={40} />,
      color: "var(--primary)"
    },
    {
      title: "Data Backup & Recovery",
      desc: "Recovering lost files from failing or crashed drives, and setting up automatic cloud or physical backup systems for peace of mind.",
      icon: <Database size={40} />,
      color: "var(--secondary)"
    },
    {
      title: "Printer & Device Setup",
      desc: "Configuring home and office printers, scanner setups, smart TVs, security cameras, and other smart home accessories.",
      icon: <Printer size={40} />,
      color: "var(--primary)"
    },
    {
      title: "OS & Software Troubleshooting",
      desc: "Resolving Windows/Mac operating system errors, email client configurations, software installation errors, and app updates.",
      icon: <Settings size={40} />,
      color: "var(--secondary)"
    },
    {
      title: "Small Business IT Support",
      desc: "Setting up office computers, shared network storage (NAS), email domains, user accounts, and local network security solutions.",
      icon: <Briefcase size={40} />,
      color: "var(--primary)"
    },
    {
      title: "Tech Training & Guidance",
      desc: "Patient, jargon-free tutoring to help you or your team learn how to use new devices, operating systems, or specific apps at your own pace.",
      icon: <BookOpen size={40} />,
      color: "var(--secondary)"
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
    <div className="page-padding">
      <SEO 
        title="Local IT Support & Computer Repair Services | Triole IT"
        description="Explore our friendly tech support offerings, including computer and laptop repairs, Wi-Fi troubleshooting, virus removal, device setups, and small business IT."
        keywords="computer repairs, laptop repairs, Wi-Fi setup, tech support, virus removal, printer setup, small business IT support, Vancouver tech support"
        schemaMarkup={servicesSchema}
      />
      <div className="container-custom">
        <div className="text-center mb-20">
          <h1 className="h1-page">Our <span className="gradient-text">Services</span></h1>
          <p className="text-lead">
            We provide a complete range of friendly tech support and repair services to keep your devices running smoothly.
          </p>
        </div>

        <h2 style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', borderWidth: '0' }}>
          Our IT Service Catalog
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-interactive flex flex-col items-start gap-6 group"
            >
              <div 
                className="p-4 rounded-2xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <div>
                <h3 className="h3-card">{service.title}</h3>
                <p className="text-body leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 card-glass text-center border-primary/20 neon-border">
          <h2 className="h2-section">Need Tech Help Right Away?</h2>
          <p className="text-lead !text-base mb-10">
            Whether you need a quick home repair, a network audit for your office, or ongoing device maintenance, we're here to help.
          </p>
          <a href="/contacts" className="btn-base btn-primary">
            Contact Our Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
