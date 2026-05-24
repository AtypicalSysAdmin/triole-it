import { motion } from 'framer-motion';
import { Shield, Cloud, Monitor, Lock, Database, Code, Settings, PieChart } from 'lucide-react';
import SEO from '../components/SEO';

const Services = () => {
  const allServices = [
    {
      title: "Cybersecurity Solutions",
      desc: "Protecting your business from sophisticated cyber threats with multi-layered security protocols, penetration testing, and 24/7 monitoring.",
      icon: <Shield size={40} />,
      color: "var(--primary)"
    },
    {
      title: "Cloud Infrastructure",
      desc: "Migration, management, and optimization of cloud environments (AWS, Azure, Google Cloud) for maximum efficiency and cost-savings.",
      icon: <Cloud size={40} />,
      color: "var(--secondary)"
    },
    {
      title: "Managed IT Services",
      desc: "Full-scale management of your IT operations, providing proactive support and maintenance to ensure zero downtime.",
      icon: <Settings size={40} />,
      color: "var(--primary)"
    },
    {
      title: "Data Backup & Recovery",
      desc: "Robust backup strategies and disaster recovery plans to safeguard your business continuity in any situation.",
      icon: <Database size={40} />,
      color: "var(--secondary)"
    },
    {
      title: "Network Security",
      desc: "Securing your internal and external networks with advanced firewalls, VPNs, and intrusion detection systems.",
      icon: <Lock size={40} />,
      color: "var(--primary)"
    },
    {
      title: "IT Consulting",
      desc: "Strategic planning and technology roadmap development to align your IT investments with your business goals.",
      icon: <PieChart size={40} />,
      color: "var(--secondary)"
    },
    {
      title: "Application Support",
      desc: "End-to-end support for your business applications, ensuring they are always up-to-date and performing optimally.",
      icon: <Monitor size={40} />,
      color: "var(--primary)"
    },
    {
      title: "Custom Software",
      desc: "Bespoke software development services to automate workflows and solve specific business challenges.",
      icon: <Code size={40} />,
      color: "var(--secondary)"
    }
  ];

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Triole IT Services Catalog",
    "description": "Comprehensive IT services including Cybersecurity Solutions, Cloud Infrastructure, Managed IT Services, and Custom Software Development.",
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
        title="IT & Cybersecurity Services | Triole IT"
        description="Explore our professional technology offerings including cybersecurity, cloud migration, managed IT services, network security, and custom software development."
        keywords="cybersecurity solutions, cloud migration, managed IT, custom software development, IT support, network security, IT consulting"
        schemaMarkup={servicesSchema}
      />
      <div className="container-custom">
        <div className="text-center mb-20">
          <h1 className="h1-page">Our <span className="gradient-text">Services</span></h1>
          <p className="text-lead">
            We provide a comprehensive suite of IT services designed to protect, optimize, and grow your business.
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
          <h2 className="h2-section">Need a Custom Solution?</h2>
          <p className="text-lead !text-base mb-10">
            Every business is unique. We can create a tailored service package that meets your specific requirements and budget.
          </p>
          <a href="/contacts" className="btn-base btn-primary">
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
