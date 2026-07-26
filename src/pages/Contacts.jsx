import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const InstagramIcon = ({ size = 24 }) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Contacts = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Triole IT",
    "description": "Get in touch with Triole IT's support team in Vancouver. Reach us by email at admin@triole-it.com or follow @triole_it on Instagram.",
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
    <div className="page-padding">
      <SEO 
        title="Contact Us for Free IT Consultation | Triole IT"
        description="Get in touch with Triole IT's support team in Vancouver. Reach us by email at admin@triole-it.com or follow @triole_it on Instagram."
        keywords="contact IT support, free IT consultation, Vancouver IT company, IT support contact, tech support Vancouver, Instagram @triole_it"
        schemaMarkup={contactSchema}
      />
      <div className="container-custom">
        <div className="text-center mb-20">
          <h1 className="h1-page">Get in <span className="gradient-text">Touch</span></h1>
          <p className="text-lead">
            Ready to secure your infrastructure? Contact us today for a free consultation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="card-glass p-10 md:p-16"
          >
            <h2 className="text-2xl font-bold mb-12 text-center">Contact Information</h2>
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-8">
                <div className="p-5 bg-primary/10 rounded-2xl text-primary"><Mail size={32} /></div>
                <div>
                  <p className="text-sm text-muted uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-medium">
                    <a href="mailto:admin@triole-it.com" className="hover:text-primary transition-colors">
                      admin@triole-it.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="p-5 bg-secondary/10 rounded-2xl text-secondary"><InstagramIcon size={32} /></div>
                <div>
                  <p className="text-sm text-muted uppercase tracking-widest mb-1">Instagram</p>
                  <p className="text-xl font-medium">
                    <a href="https://instagram.com/triole_it" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
                      @triole_it
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="p-5 bg-primary/10 rounded-2xl text-primary"><MapPin size={32} /></div>
                <div>
                  <p className="text-sm text-muted uppercase tracking-widest mb-1">Office</p>
                  <p className="text-xl font-medium">Vancouver, BC, Canada</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 card-glass p-8 text-center"
          >
            <p className="text-muted">
              We usually respond to all inquiries within 24 business hours.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
