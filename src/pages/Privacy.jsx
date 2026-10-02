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
    <div className="relative overflow-hidden py-12 lg:py-20">
      <SEO
        title="Privacy Policy | Triole IT Support & Repairs"
        description="Read Triole IT's comprehensive Privacy Policy. Learn about how we protect your personal information, our cookie practices, and your privacy rights under GDPR, CCPA, and Canadian PIPEDA."
        keywords="privacy policy, data protection, GDPR compliance, CCPA rights, cookie policy, Triole IT privacy"
        schemaMarkup={privacySchema}
      />

      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-5">
            <Shield size={14} className="text-purple-400" />
            <span>Legal Disclosures</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Effective Date &amp; Last Updated: <span className="text-white font-medium">October 1, 2026</span>
          </p>
        </motion.div>

        <div className="space-y-8 text-zinc-300 leading-relaxed text-base">
          {/* Section 1: Overview */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="text-purple-400" size={22} />
              <span>1. Overview &amp; Our Commitment</span>
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
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="text-purple-400" size={22} />
              <span>2. Personal Identifiable Information (PII) We Collect</span>
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
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <UserCheck className="text-purple-400" size={22} />
              <span>3. Third-Party Data Processors &amp; Service Providers</span>
            </h2>
            <p className="mb-4">
              We partner with trusted third-party providers strictly for transactional fulfillment, payment gateway processing, website hosting, and customer communications:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-lg bg-[#18181c] border border-zinc-800">
                <h3 className="font-semibold text-white mb-1">Hosting &amp; DNS</h3>
                <p className="text-sm text-zinc-400">Cloudflare Pages &amp; Vercel (Edge DNS and SSL protection).</p>
              </div>
              <div className="p-4 rounded-lg bg-[#18181c] border border-zinc-800">
                <h3 className="font-semibold text-white mb-1">Payment Gateways</h3>
                <p className="text-sm text-zinc-400">Stripe Payments (PCI-DSS Level 1 compliant processing).</p>
              </div>
              <div className="p-4 rounded-lg bg-[#18181c] border border-zinc-800">
                <h3 className="font-semibold text-white mb-1">Fonts &amp; Assets</h3>
                <p className="text-sm text-zinc-400">Self-hosted via npm (@fontsource/outfit). Zero remote Google Font calls.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#18181c] border border-zinc-800">
                <h3 className="font-semibold text-white mb-1">Email Infrastructure</h3>
                <p className="text-sm text-zinc-400">Transactional mail delivered over TLS 1.3 encrypted SMTP.</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400">
              Each processor operates under formal Data Processing Addenda (DPAs) binding them to confidentiality and strict non-disclosure obligations.
            </p>
          </section>

          {/* Section 4: Cookie Policy & Consent Controls */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Cookie className="text-purple-400" size={22} />
              <span>4. Cookies, Session Trackers &amp; User Autonomy</span>
            </h2>
            <p className="mb-4">
              Our website uses strictly necessary technical cookies to facilitate site security, routing, and user interface preferences. We adhere to an explicit opt-in model:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
              <li>
                <strong className="text-white">Prior Consent Architecture:</strong> Analytical trackers, marketing cookies, and third-party scripts remain deactivated until you provide affirmative consent.
              </li>
              <li>
                <strong className="text-white">Session Recording Protection:</strong> We do not deploy invasive screen capture or keystroke recording scripts.
              </li>
              <li>
                <strong className="text-white">Persistent Controls:</strong> You may modify your consent selections or revoke prior approvals at any moment.
              </li>
            </ul>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="btn-secondary text-sm gap-2"
            >
              <RefreshCw size={15} />
              <span>Open Cookie Preferences Modal</span>
            </button>
          </section>

          {/* Section 5: Children's Privacy */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertCircle className="text-purple-400" size={22} />
              <span>5. Children's Online Privacy Protection (COPPA &amp; GDPR-K)</span>
            </h2>
            <p className="mb-3">
              Our website and IT repair services are directed strictly toward adult consumers and business operators. We do not knowingly solicit or collect personal information from children under the age of 16 (or under 13 in the United States).
            </p>
            <p>
              If we discover that personal data of a minor has been collected without verifiable parental consent, we will promptly delete that information from our active records. If you believe a minor has submitted inquiries to us, please notify us immediately at{' '}
              <a href="mailto:privacy@triole-it.com" className="text-purple-300 underline">privacy@triole-it.com</a>.
            </p>
          </section>

          {/* Section 6: California Disclosures */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Shield className="text-purple-400" size={22} />
              <span>6. California Privacy Rights (CCPA/CPRA &amp; CalOPPA)</span>
            </h2>
            <p className="mb-3">
              Under the California Consumer Privacy Act of 2018 (as amended by CPRA), California residents possess specific statutory rights regarding their personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
              <li><strong className="text-white">Right to Know:</strong> Request disclosures of specific personal information categories collected, sold, or shared in the preceding 12 months.</li>
              <li><strong className="text-white">Right to Delete:</strong> Request erasure of personal data held by us, subject to statutory record-retention exemptions.</li>
              <li><strong className="text-white">Right to Opt-Out:</strong> Direct us not to sell or share your personal data for cross-context behavioral advertising.</li>
              <li><strong className="text-white">Right to Non-Discrimination:</strong> We do not offer differential pricing or diminished service levels if you exercise privacy rights.</li>
            </ul>
            <p className="p-4 rounded-lg bg-[#18181c] border border-purple-500/30 text-sm text-purple-300">
              <strong>Notice of Non-Sale:</strong> Triole IT has not sold and will not sell any consumer personal information for monetary value or valuable consideration.
            </p>
          </section>

          {/* Section 7: Exercising Your Rights */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <CheckCircle2 className="text-purple-400" size={22} />
              <span>7. Exercising Data Subject Rights &amp; Contact</span>
            </h2>
            <p className="mb-4">
              To exercise your access, correction, deletion, or portability rights under PIPEDA, GDPR, or CCPA, please contact our designated Privacy Officer:
            </p>
            <div className="p-4 rounded-lg bg-[#18181c] border border-zinc-800 text-sm space-y-1.5">
              <p><strong className="text-white">Triole IT Privacy Officer</strong></p>
              <p>Email: <a href="mailto:privacy@triole-it.com" className="text-purple-300 underline">privacy@triole-it.com</a></p>
              <p>General Admin: <a href="mailto:admin@triole-it.com" className="text-purple-300 underline">admin@triole-it.com</a></p>
              <p>Physical Location: Vancouver, British Columbia, Canada</p>
            </div>
            <p className="mt-4 text-xs text-zinc-400">
              We respond to all verified consumer requests within 30 days (or 45 days under CCPA rules) free of charge.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
