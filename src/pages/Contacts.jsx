import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, MessageSquare, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const InstagramIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Contacts = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Triole IT",
    "description": "Get in touch with Triole IT's support team in Vancouver for local IT support, computer repairs, and network troubleshooting.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Triole IT",
      "url": "https://triole-it.com",
      "email": "admin@triole-it.com",
      "sameAs": [
        "https://www.instagram.com/triole_it/"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vancouver",
        "addressRegion": "BC",
        "addressCountry": "Canada"
      }
    }
  };

  return (
    <div className="relative overflow-hidden py-16 lg:py-24">
      <SEO
        title="Contact Us | Local IT Support & Computer Repairs"
        description="Get in touch with Triole IT's support team in Vancouver. Reach us by email at admin@triole-it.com or follow @triole_it on Instagram for local tech help."
        keywords="contact IT support, computer repair contact, Vancouver IT company, IT support contact, tech support Vancouver, Instagram @triole_it"
        schemaMarkup={contactSchema}
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
            <span>We're Here to Help</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="mt-5 text-xl leading-relaxed text-zinc-300">
            Have a tech issue, a slow network, or a broken computer? Reach out directly and we'll get you sorted quickly.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-12 border border-zinc-800/80 neon-border"
          >
            <h2 className="text-2xl font-extrabold text-white mb-8 border-b border-zinc-800 pb-4">
              Direct Contact Channels
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 transition">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <p className="text-sm text-zinc-300 uppercase tracking-wider font-semibold mb-1">Email Support</p>
                  <a href="mailto:admin@triole-it.com" className="text-lg sm:text-xl font-bold text-white hover:text-purple-300 transition">
                    admin@triole-it.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-pink-500/40 transition">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
                  <InstagramIcon size={28} />
                </div>
                <div>
                  <p className="text-sm text-zinc-300 uppercase tracking-wider font-semibold mb-1">Direct Message / Updates</p>
                  <a href="https://instagram.com/triole_it" target="_blank" rel="noopener noreferrer" className="text-lg sm:text-xl font-bold text-white hover:text-pink-300 transition">
                    @triole_it
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 transition">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-sm text-zinc-300 uppercase tracking-wider font-semibold mb-1">Primary Service Region</p>
                  <p className="text-lg sm:text-xl font-bold text-white">Vancouver, BC &amp; Surrounding Areas</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 glass-card p-6 sm:p-7 text-center border border-zinc-800/80 flex items-center justify-center gap-3.5"
          >
            <Clock size={22} className="text-purple-400 shrink-0" />
            <p className="text-base text-zinc-300">
              We typically respond to inquiries within <span className="text-purple-300 font-bold">2–4 business hours</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
