import { motion } from 'framer-motion';
import { Shield, Cloud, Monitor, Lock, Database, Code, Settings, PieChart } from 'lucide-react';

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

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Our <span className="gradient-text">Services</span></h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            We provide a comprehensive suite of IT services designed to protect, optimize, and grow your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {allServices.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 glass rounded-3xl border border-white/5 hover:border-primary/50 transition-all flex flex-col items-start gap-6 group"
            >
              <div 
                className="p-4 rounded-2xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 glass rounded-3xl text-center border border-primary/20 neon-border">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-muted mb-10 max-w-xl mx-auto">
            Every business is unique. We can create a tailored service package that meets your specific requirements and budget.
          </p>
          <a href="/contacts" className="px-10 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Book a Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
