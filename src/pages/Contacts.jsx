import { motion } from 'framer-motion';
import { Mail, MapPin, Sparkles, Clock, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import InstagramIcon from '../components/icons/InstagramIcon';
import { SERVICE_OPTIONS, DEFAULT_CONTACT_SERVICE } from '../data/services';
import { COMPANY_INFO } from '../data/company';

const Contacts = () => {
  const [searchParams] = useSearchParams();
  const requestedService = searchParams.get('service');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: requestedService || DEFAULT_CONTACT_SERVICE,
    message: '',
    isAgeVerified: false,
    agreedToTerms: false,
  });

  const [prevRequestedService, setPrevRequestedService] = useState(requestedService);
  if (requestedService !== prevRequestedService) {
    setPrevRequestedService(requestedService);
    if (requestedService) {
      setFormData((prev) => ({ ...prev, service: requestedService }));
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(null);
  const [formError, setFormError] = useState('');

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": `Contact Us - ${COMPANY_INFO.name}`,
    "description": "Get in touch with Triole IT's support team in Vancouver for local IT support, computer repairs, and network troubleshooting.",
    "mainEntity": {
      "@type": ["LocalBusiness", "ComputerRepairService"],
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.website,
      "email": COMPANY_INFO.email,
      "sameAs": [
        COMPANY_INFO.socials.instagram
      ],
      "areaServed": "Vancouver, BC, Canada",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Support",
        "email": COMPANY_INFO.email,
        "availableLanguage": ["English"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": COMPANY_INFO.address.city,
        "addressRegion": COMPANY_INFO.address.region,
        "addressCountry": COMPANY_INFO.address.country
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');

    if (!formData.isAgeVerified) {
      setFormError('Please confirm you are at least 16 years of age (or have parental/guardian consent) to submit an inquiry.');
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

    setIsSubmitting(true);

    try {
      // Transmit securely to admin@triole-it.com via FormSubmit endpoint (using obfuscated token)
      const formEndpoint = COMPANY_INFO.formSubmitToken || COMPANY_INFO.email;
      const response = await fetch(`https://formsubmit.co/ajax/${formEndpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `Triole IT Support Inquiry: ${formData.service} - ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          service: formData.service,
          message: formData.message,
          submitted_at: new Date().toLocaleString(),
        }),
      });

      const result = await response.json().catch(() => ({}));
      if (response.ok && result.success !== 'false') {
        setLastSubmission({ ...formData });
        setFormSubmitted(true);
      } else {
        // Fallback to mailto if endpoint returns non-200
        const mailtoFallback = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(`Service Request: ${formData.service} - ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nService: ${formData.service}\n\nMessage:\n${formData.message}`)}`;
        window.location.href = mailtoFallback;
        setLastSubmission({ ...formData });
        setFormSubmitted(true);
      }
    } catch {
      // Fallback to direct client mailto if fetch is blocked by CORS/network
      const mailtoFallback = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(`Service Request: ${formData.service} - ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nService: ${formData.service}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoFallback;
      setLastSubmission({ ...formData });
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <SEO
        title="Contact Us | Local IT Support & Computer Repairs"
        description="Get in touch with Triole IT's support team in Vancouver. Reach us by email at admin@triole-it.com, book a service inquiry, or follow @triole_it on Instagram."
        keywords="contact IT support, computer repair contact, Vancouver IT company, IT support contact, tech support Vancouver, Instagram @triole_it"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Contact Us", item: "/contacts" }
        ]}
        schemaMarkup={contactSchema}
      />

      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-5">
            <Sparkles size={14} className="text-purple-400" />
            <span>We're Here to Help</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl leading-relaxed text-zinc-300">
            Have a tech issue, a slow network, or a broken computer? Reach out directly or submit a service request below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="card-surface p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white mb-6 border-b border-zinc-800 pb-4">
                Direct Channels
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-[#18181c] border border-zinc-800 hover:border-zinc-700 transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Email Support</p>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-base font-semibold text-white hover:text-purple-300 transition min-h-[44px] inline-flex items-center">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-[#18181c] border border-zinc-800 hover:border-zinc-700 transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
                    <InstagramIcon size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Instagram DM</p>
                    <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-base font-semibold text-white hover:text-pink-300 transition min-h-[44px] inline-flex items-center">
                      {COMPANY_INFO.instagramHandle}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-[#18181c] border border-zinc-800 hover:border-zinc-700 transition">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Service Region</p>
                    <p className="text-base font-semibold text-white">{COMPANY_INFO.address.display}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800 flex items-center gap-3 text-sm text-zinc-300">
                <Clock size={18} className="text-purple-400 shrink-0" />
                <span>Response time: <strong className="text-white">{COMPANY_INFO.responseTime}</strong></span>
              </div>
            </div>

            {/* Privacy Guarantee */}
            <div className="p-5 rounded-lg border border-zinc-800 bg-[#121215] text-xs text-zinc-400 flex items-start gap-3">
              <ShieldCheck size={20} className="text-purple-400 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong className="text-zinc-300 block mb-1">Your Privacy is Protected:</strong>
                We only use your contact details to reply to your inquiry and coordinate your IT service. We never sell, rent, or share your personal information.
              </div>
            </div>
          </div>

          {/* Right Column: Compliant Service Request Form */}
          <div className="lg:col-span-7">
            <div className="card-surface p-6 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Service Inquiry &amp; Support Request
              </h2>
              <p className="text-sm text-zinc-300 mb-6">
                Tell us about your issue and a technician will contact you to discuss diagnostics or scheduling.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-lg bg-purple-950/20 border border-purple-500/30 text-center space-y-4">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-purple-500/20 text-purple-400">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Dispatched!</h3>
                  <p className="text-sm text-zinc-300 leading-relaxed max-w-md mx-auto">
                    Thank you, <strong className="text-white">{lastSubmission?.name || formData.name}</strong>. Your service request has been transmitted directly to <strong className="text-white">{COMPANY_INFO.email}</strong>. Our Vancouver support team will reach out to <strong className="text-white">{lastSubmission?.email || formData.email}</strong> within {COMPANY_INFO.responseTime}.
                  </p>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(`Service Request Follow-up: ${lastSubmission?.service || formData.service} - ${lastSubmission?.name || formData.name}`)}&body=${encodeURIComponent(`Name: ${lastSubmission?.name || formData.name}\nEmail: ${lastSubmission?.email || formData.email}\nPhone: ${lastSubmission?.phone || 'N/A'}\nService: ${lastSubmission?.service || formData.service}\n\nMessage:\n${lastSubmission?.message || formData.message}`)}`}
                      className="btn-primary text-sm gap-2"
                    >
                      <Mail size={16} />
                      <span>Open in Mail App</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          service: DEFAULT_CONTACT_SERVICE,
                          message: '',
                          isAgeVerified: false,
                          agreedToTerms: false,
                        });
                      }}
                      className="btn-secondary text-sm"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {formError && (
                    <div className="p-4 rounded-lg border border-red-500/40 bg-red-950/20 text-sm text-red-300 flex items-start gap-3">
                      <AlertCircle size={18} className="shrink-0 mt-0.5 text-red-400" />
                      <div className="leading-relaxed">{formError}</div>
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
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
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

                  {/* Age Affirmation */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer min-h-[44px]">
                      <input
                        type="checkbox"
                        checked={formData.isAgeVerified}
                        onChange={(e) => setFormData({ ...formData, isAgeVerified: e.target.checked })}
                        className="mt-1 h-5 w-5 rounded border-zinc-700 bg-zinc-900 text-purple-600 focus-visible:outline-2 focus-visible:outline-purple-400 shrink-0"
                      />
                      <span className="text-xs text-zinc-300 leading-relaxed">
                        I confirm that I am at least 16 years of age (or have parental/guardian consent).
                      </span>
                    </label>
                  </div>

                  {/* Mandatory Compliance Checkbox 2: Terms of Service & Privacy Policy Agreement */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer min-h-[44px]">
                      <input
                        type="checkbox"
                        checked={formData.agreedToTerms}
                        onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                        className="mt-1 h-5 w-5 rounded border-zinc-700 bg-zinc-900 text-purple-600 focus-visible:outline-2 focus-visible:outline-purple-400 shrink-0"
                      />
                      <span className="text-xs text-zinc-300 leading-relaxed">
                        I agree to Triole IT's{' '}
                        <Link to="/terms" target="_blank" className="text-purple-300 hover:underline font-semibold">
                          Terms of Service
                        </Link>{' '}
                        and acknowledge the data handling practices described in the{' '}
                        <Link to="/privacy" target="_blank" className="text-purple-300 hover:underline font-semibold">
                          Privacy Policy
                        </Link>.
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={!formData.isAgeVerified || !formData.agreedToTerms || isSubmitting}
                      className="btn-primary w-full text-base font-bold py-3.5 gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin inline-block h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                          <span>Sending Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Submit Service Request</span>
                        </>
                      )}
                    </button>
                    {(!formData.isAgeVerified || !formData.agreedToTerms) && (
                      <p className="text-xs text-zinc-400 text-center mt-2.5">
                        * Please verify your age and accept terms above to activate submission.
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
