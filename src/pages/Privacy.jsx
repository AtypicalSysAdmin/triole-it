import { motion } from 'framer-motion';
import { Shield, Lock, FileText, CheckCircle2, UserCheck, AlertCircle, Cookie, RefreshCw } from 'lucide-react';
import SEO from '../components/SEO';
import { openCookiePreferences } from '../utils/consentManager';

export default function Privacy() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Triole IT",
    "description": "Triole IT Privacy Policy outlining data protection practices, COPPA/GDPR compliance, CCPA disclosures, and Data Subject Access Request mechanisms.",
    "publisher": {
      "@type": "Organization",
      "name": "Triole IT",
      "url": "https://triole-it.com",
      "email": "privacy@triole-it.com"
    }
  };

  return (
    <div className="relative overflow-hidden py-16 lg:py-24">
      <SEO
        title="Privacy Policy | Triole IT Support & Repairs"
        description="Read Triole IT's comprehensive Privacy Policy. Learn about how we protect your personal information, our cookie practices, and your privacy rights under GDPR, CCPA, and Canadian PIPEDA."
        keywords="privacy policy, data protection, GDPR compliance, CCPA rights, cookie policy, Triole IT privacy"
        schemaMarkup={privacySchema}
      />

      {/* Ambient glows */}
      <div className="glow-primary top-10 -left-20" />
      <div className="glow-secondary top-96 -right-20" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] mb-5">
            <Shield size={16} className="text-purple-400" />
            <span>Legal Disclosures</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="mt-4 text-base text-zinc-400">
            Effective Date &amp; Last Updated: <span className="text-white font-medium">October 1, 2026</span>
          </p>
        </motion.div>

        <div className="space-y-10 text-zinc-300 leading-relaxed text-base">
          {/* Section 1: Overview */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="text-purple-400" size={24} />
              1. Overview &amp; Our Commitment
            </h2>
            <p className="mb-4">
              Triole IT (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates{' '}
              <a href="https://triole-it.com" className="text-purple-300 underline">https://triole-it.com</a>{' '}
              providing local IT support, computer repair, and network setup services in Vancouver, British Columbia, Canada.
            </p>
            <p>
              We are committed to safeguarding your personal data and respecting your privacy rights across all jurisdictions, including the Canadian Personal Information Protection and Electronic Documents Act (PIPEDA), the British Columbia Personal Information Protection Act (PIPA), the European Union General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA as amended by CPRA), and the California Online Privacy Protection Act (CalOPPA).
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="text-purple-400" size={24} />
              2. Personal Identifiable Information (PII) We Collect
            </h2>
            <p className="mb-4">
              We only collect personal information that is reasonably necessary to fulfill your technical support inquiries, diagnostic assessments, or service repairs:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>
                <strong className="text-white">Contact &amp; Identification Data:</strong> Full name, email address, phone number, and physical service address for on-site visits.
              </li>
              <li>
                <strong className="text-white">Device &amp; Diagnostic Details:</strong> Computer hardware specifications, operating system versions, serial numbers, error logs, and issue descriptions provided during service booking.
              </li>
              <li>
                <strong className="text-white">Technical &amp; Log Data:</strong> Anonymized IP addresses, browser types, device types, and referring URLs collected automatically for server security and denial-of-service prevention.
              </li>
              <li>
                <strong className="text-white">Payment &amp; Billing Data:</strong> Transaction records, invoice history, and billing addresses. Credit card details are processed directly by our certified payment processor (Stripe) and are never stored on Triole IT servers.
              </li>
            </ul>
          </section>

          {/* Section 3: Third-Party Processors */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <UserCheck className="text-purple-400" size={24} />
              3. Third-Party Data Processors &amp; Service Providers
            </h2>
            <p className="mb-4">
              We do not sell, rent, or trade your personal data. We disclose information only to vetted third-party service providers who assist us in operating our services under strict confidentiality and data processing agreements:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/60">
                <p className="font-bold text-white">Stripe Inc.</p>
                <p className="text-sm text-zinc-400 mt-1">Payment processing &amp; PCI-DSS Level 1 compliant checkout.</p>
              </div>
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/60">
                <p className="font-bold text-white">Cloudflare, Inc.</p>
                <p className="text-sm text-zinc-400 mt-1">DNS management, DDoS defense, and edge network security.</p>
              </div>
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/60">
                <p className="font-bold text-white">Transactional Email Delivery</p>
                <p className="text-sm text-zinc-400 mt-1">Direct CAN-SPAM and CASL-compliant customer communications.</p>
              </div>
              <div className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/60">
                <p className="font-bold text-white">Hosting Infrastructure</p>
                <p className="text-sm text-zinc-400 mt-1">High-availability static web hosting with zero external font leakage.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Cookies & Tracking Management */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Cookie className="text-purple-400" size={24} />
              4. Cookies, Script Blocking &amp; Session Replay
            </h2>
            <p className="mb-4">
              In strict accordance with the Munich Court font ruling and wiretap privacy legislation (CIPA / CCPA):
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
              <li>
                <strong className="text-white">Zero Remote CDN Font Tracking:</strong> All web fonts (including Outfit) are self-hosted on our static infrastructure. No user IP addresses are leaked to third-party CDNs.
              </li>
              <li>
                <strong className="text-white">No Automatic Session Replay:</strong> We do not run invasive keystroke loggers, screen recording, or session replay scripts by default (<code className="text-purple-300">recordByDefault: false</code>).
              </li>
              <li>
                <strong className="text-white">Strict Script Blocking:</strong> Non-essential analytics and marketing scripts are strictly blocked from loading until affirmative user consent is captured.
              </li>
            </ul>
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-white">Manage Your Cookie Preferences</p>
                <p className="text-sm text-zinc-300">You can adjust or revoke your cookie permissions at any time.</p>
              </div>
              <button
                type="button"
                onClick={openCookiePreferences}
                className="btn-primary text-sm px-4 py-2 shrink-0 gap-2"
              >
                <RefreshCw size={15} />
                <span>Adjust Cookie Settings</span>
              </button>
            </div>
          </section>

          {/* Section 5: Age Verification (COPPA & GDPR-K) */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertCircle className="text-purple-400" size={24} />
              5. Minor Data &amp; Age Restrictions (COPPA &amp; GDPR-K)
            </h2>
            <p className="mb-3">
              Our website and IT repair services are directed strictly toward adults and business clients. We do not knowingly collect, solicit, or maintain personal identifiable information from minors under the age of 13 (or under the age of 16 in the European Union).
            </p>
            <p>
              All online customer inquiry forms enforce affirmative age verification confirming that the submitter is at least 16 years of age or has obtained verified parental/guardian consent. If we learn that personal data of a minor has been collected without parental consent, we will promptly delete that information from our systems.
            </p>
          </section>

          {/* Section 6: CCPA / CPRA & "Do Not Sell" */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <CheckCircle2 className="text-purple-400" size={24} />
              6. California Consumer Privacy Rights (CCPA / CPRA)
            </h2>
            <p className="mb-3">
              California residents possess specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4 text-zinc-300">
              <li><strong className="text-white">Right to Know:</strong> Request disclosure of the categories and specific pieces of personal data collected about you.</li>
              <li><strong className="text-white">Right to Delete:</strong> Request permanent erasure of your personal data.</li>
              <li><strong className="text-white">Right to Correct:</strong> Request rectification of inaccurate personal details.</li>
              <li><strong className="text-white">Do Not Sell or Share:</strong> We do not sell personal information for financial consideration. You can confirm your opt-out status anytime via our Cookie Preferences modal.</li>
              <li><strong className="text-white">Non-Discrimination:</strong> We will never deny services, charge different prices, or provide lesser service quality for exercising privacy rights.</li>
            </ul>
          </section>

          {/* Section 7: DSAR - Data Subject Access Requests */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <UserCheck className="text-purple-400" size={24} />
              7. Submitting Data Subject Access Requests (DSAR)
            </h2>
            <p className="mb-4">
              Regardless of your geographic location, you may submit a request to view, export, update, or completely delete your personal information held by Triole IT.
            </p>
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/60 space-y-3">
              <p>
                <strong>Direct Email for Privacy Requests:</strong>{' '}
                <a href="mailto:privacy@triole-it.com" className="text-purple-400 hover:text-purple-300 font-semibold underline">
                  privacy@triole-it.com
                </a>{' '}
                (or <a href="mailto:admin@triole-it.com" className="text-purple-400 hover:text-purple-300 underline">admin@triole-it.com</a>)
              </p>
              <p className="text-sm text-zinc-400">
                Please include your full name, email address, and the specific nature of your request (e.g., &quot;Request for Data Deletion&quot; or &quot;Request for Data Access&quot;). We will verify your identity and fulfill verified requests within 30 days at no cost.
              </p>
            </div>
          </section>

          {/* Section 8: Contact Information */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4">8. Privacy Contact Information</h2>
            <p className="mb-3">
              For any questions, concerns, or complaints regarding this Privacy Policy or our data processing practices, please reach out to:
            </p>
            <div className="text-zinc-300 space-y-1">
              <p className="font-semibold text-white">Triole IT - Privacy &amp; Data Governance</p>
              <p>Location: Vancouver, BC, Canada</p>
              <p>Email: <a href="mailto:privacy@triole-it.com" className="text-purple-400 hover:text-purple-300">privacy@triole-it.com</a></p>
              <p>General Support: <a href="mailto:admin@triole-it.com" className="text-purple-400 hover:text-purple-300">admin@triole-it.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
