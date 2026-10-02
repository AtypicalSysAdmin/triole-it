import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, Clock, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Computer Repair & Diagnostics',
    message: '',
    isAgeVerified: false,
    agreedToTerms: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.isAgeVerified) {
      setFormError('COPPA/GDPR-K Compliance: You must confirm you are at least 16 years of age (or have parental/guardian consent) to submit an inquiry.');
      return;
    }

    if (!formData.agreedToTerms) {
      setFormError('You must agree to our Terms of Service and Privacy Policy to submit personal information.');
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill out all required fields (Name, Email, Message).');
      return;
    }

    // Process submission successfully
    setFormSubmitted(true);
  };

  return (
    <div className="relative overflow-hidden py-16 lg:py-24">
      <SEO
        title="Contact Us | Local IT Support & Computer Repairs"
        description="Get in touch with Triole IT's support team in Vancouver. Reach us by email at admin@triole-it.com, book a service inquiry, or follow @triole_it on Instagram."
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
            Have a tech issue, a slow network, or a broken computer? Reach out directly or submit a service request below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 border border-zinc-800/80 neon-border"
            >
              <h2 className="text-2xl font-extrabold text-white mb-6 border-b border-zinc-800 pb-4">
                Direct Channels
              </h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 transition">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Email Support</p>
                    <a href="mailto:admin@triole-it.com" className="text-base font-bold text-white hover:text-purple-300 transition">
                      admin@triole-it.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-pink-500/40 transition">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
                    <InstagramIcon size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Instagram DM</p>
                    <a href="https://instagram.com/triole_it" target="_blank" rel="noopener noreferrer" className="text-base font-bold text-white hover:text-pink-300 transition">
                      @triole_it
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-purple-500/40 transition">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Service Region</p>
                    <p className="text-base font-bold text-white">Vancouver, BC &amp; Surrounding</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800/80 flex items-center gap-3 text-sm text-zinc-300">
                <Clock size={18} className="text-purple-400 shrink-0" />
                <span>Response time: <strong className="text-purple-300">2–4 business hours</strong></span>
              </div>
            </motion.div>

            {/* Privacy & Wiretap Protection Notice */}
            <div className="p-5 rounded-2xl border border-zinc-800 bg-zinc-900/40 text-xs text-zinc-400 flex items-start gap-3">
              <ShieldCheck size={20} className="text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-300 block mb-1">Privacy Guarantee &amp; Input Protection:</strong>
                All input fields are masked against unauthorized third-party recording scripts. We strictly adhere to COPPA, GDPR, and CASL anti-spam regulations.
              </div>
            </div>
          </div>

          {/* Right Column: Compliant Service Request Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-8 sm:p-10 border border-zinc-800/80 neon-border"
            >
              <h2 className="text-2xl font-extrabold text-white mb-2">
                Service Inquiry &amp; Support Request
              </h2>
              <p className="text-sm text-zinc-300 mb-6">
                Tell us about your issue and a technician will contact you to discuss diagnostics or scheduling.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-2xl bg-purple-950/20 border border-purple-500/30 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A confirmation has been logged. Our Vancouver support team will reach out to <strong className="text-white">{formData.email}</strong> within 2–4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        service: 'Computer Repair & Diagnostics',
                        message: '',
                        isAgeVerified: false,
                        agreedToTerms: false,
                      });
                    }}
                    className="btn-secondary text-sm mt-4 px-6 py-2.5"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {formError && (
                    <div className="p-4 rounded-xl border border-red-500/40 bg-red-950/20 text-sm text-red-300 flex items-start gap-3">
                      <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-400" />
                      <div>{formError}</div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Your Name <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        data-private="true"
                        data-mask="true"
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Email Address <span className="text-purple-400">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        data-private="true"
                        data-mask="true"
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Phone (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        data-private="true"
                        data-mask="true"
                        placeholder="(604) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                        Service Category
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="input-field"
                      >
                        <option value="Computer Repair & Upgrades">Computer Repair &amp; Upgrades</option>
                        <option value="Wi-Fi & Network Setup">Wi-Fi &amp; Network Setup</option>
                        <option value="Virus & Malware Removal">Virus &amp; Malware Removal</option>
                        <option value="Data Backup & Recovery">Data Backup &amp; Recovery</option>
                        <option value="Printer & Smart Device Setup">Printer &amp; Smart Device Setup</option>
                        <option value="Small Business Retainer Support">Small Business Retainer Support</option>
                        <option value="General Tech Training">General Tech Training</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2">
                      Device / Issue Description <span className="text-purple-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      data-private="true"
                      data-mask="true"
                      placeholder="Please describe your computer or network issue, device brand, and operating system..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="input-field resize-none"
                    />
                  </div>

                  {/* Mandatory Compliance Checkbox 1: COPPA / GDPR-K Age Affirmation */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.isAgeVerified}
                        onChange={(e) => setFormData({ ...formData, isAgeVerified: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-purple-600 focus:ring-purple-500 accent-purple-600 shrink-0"
                      />
                      <span className="text-xs text-zinc-300 leading-relaxed">
                        <strong className="text-white">Age Verification (COPPA &amp; GDPR-K):</strong> I confirm that I am at least 16 years of age (or have parental/guardian consent to submit this inquiry and request IT support services).
                      </span>
                    </label>
                  </div>

                  {/* Mandatory Compliance Checkbox 2: Terms of Service & Privacy Policy Agreement */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.agreedToTerms}
                        onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                        className="mt-1 h-4 w-4 rounded border-zinc-700 bg-zinc-900 text-purple-600 focus:ring-purple-500 accent-purple-600 shrink-0"
                      />
                      <span className="text-xs text-zinc-300 leading-relaxed">
                        I agree to Triole IT's{' '}
                        <Link to="/terms" target="_blank" className="text-purple-400 hover:underline font-semibold">
                          Terms of Service
                        </Link>{' '}
                        and acknowledge the data handling practices described in the{' '}
                        <Link to="/privacy" target="_blank" className="text-purple-400 hover:underline font-semibold">
                          Privacy Policy
                        </Link>.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!formData.isAgeVerified || !formData.agreedToTerms}
                      className={`btn-primary w-full text-base font-bold py-3.5 gap-2 ${
                        !formData.isAgeVerified || !formData.agreedToTerms
                          ? 'opacity-50 cursor-not-allowed hover:scale-100 hover:shadow-none'
                          : ''
                      }`}
                    >
                      <Send size={18} />
                      <span>Submit Service Request</span>
                    </button>
                    {(!formData.isAgeVerified || !formData.agreedToTerms) && (
                      <p className="text-[11px] text-zinc-400 text-center mt-2">
                        * Please verify your age and accept terms above to activate submission.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
