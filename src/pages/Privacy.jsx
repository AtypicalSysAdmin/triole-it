import { motion } from 'framer-motion';
import { Shield, Lock, FileText, CheckCircle2, UserCheck, AlertCircle, Cookie, RefreshCw } from 'lucide-react';
import SEO from '../components/SEO';
import { openCookiePreferences } from '../utils/consentManager';
import { COMPANY_INFO } from '../data/company';

export default function Privacy() {
  const privacySchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Privacy Policy - ${COMPANY_INFO.name}`,
    "description": "Triole IT Privacy Policy explaining how we protect your personal information and respect your privacy rights.",
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.website,
      "email": COMPANY_INFO.privacyEmail
    }
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <SEO
        title="Privacy Policy | Triole IT Support & Repairs"
        description="Read Triole IT's comprehensive Privacy Policy. Learn about how we protect your personal information, our cookie practices, and your privacy rights under GDPR, CCPA, and Canadian PIPEDA."
        keywords="privacy policy, data protection, GDPR compliance, CCPA rights, cookie policy, Triole IT privacy"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Privacy Policy", item: "/privacy" }
        ]}
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
              <span>1. Overview &amp; Our Plain-English Commitment</span>
            </h2>
            <p className="mb-4">
              Triole IT (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates{' '}
              <a href="https://triole-it.com" className="text-purple-300 underline">https://triole-it.com</a>,{' '}
              providing friendly, local IT support, computer and laptop repairs, and network troubleshooting in Vancouver, British Columbia, Canada.
            </p>
            <p>
              We believe your privacy should be straightforward—no confusing legal traps or walls of text. This policy explains what little information we collect, how we use it to help you, and how your rights are protected under Canadian privacy laws (PIPEDA and BC PIPA), the European Union GDPR, and California privacy standards (CCPA/CalOPPA).
            </p>
          </section>

          {/* Section 2: Information We Collect */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="text-purple-400" size={22} />
              <span>2. What We Collect (And What We Don&apos;t)</span>
            </h2>
            <p className="mb-4">
              We only collect the information you choose to give us so we can respond to your questions and fix your devices:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
              <li>
                <strong className="text-white">Contact Details:</strong> Your name, email address, optional phone number, and service address if you request an on-site visit in Vancouver.
              </li>
              <li>
                <strong className="text-white">Device &amp; Issue Details:</strong> Device brand, operating system, and a description of the technical problem you need help with.
              </li>
              <li>
                <strong className="text-white">Basic Technical Logs:</strong> Standard, anonymous web logs (like browser type and general device type) collected by our static hosting provider to maintain site security and prevent spam.
              </li>
            </ul>
            <div className="p-4 rounded-lg bg-[#18181c] border border-purple-500/30 text-sm space-y-2">
              <p className="text-white font-semibold">What We Do NOT Collect On This Website:</p>
              <p className="text-zinc-300">
                &bull; <strong className="text-white">No Payment Card Data:</strong> This website does not process, handle, or store credit card numbers. Service fees are billed and paid upon completion of work (via Interac e-Transfer, cash, or in-person invoice).
              </p>
              <p className="text-zinc-300">
                &bull; <strong className="text-white">No User Accounts or Passwords:</strong> You do not need to create an account, password, or profile to use this site.
              </p>
              <p className="text-zinc-300">
                &bull; <strong className="text-white">No Invasive Session Tracking:</strong> We never record your screen, track your keystrokes, or monitor your private browsing.
              </p>
            </div>
          </section>

          {/* Section 3: Third-Party Processors */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <UserCheck className="text-purple-400" size={22} />
              <span>3. How We Route Inquiries &amp; Third-Party Services</span>
            </h2>
            <p className="mb-4">
              We keep our technology infrastructure minimal, private, and secure:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              <div className="p-4 rounded-lg bg-[#18181c] border border-zinc-800">
                <h3 className="font-semibold text-white mb-1">Cloud Hosting &amp; Edge Security</h3>
                <p className="text-sm text-zinc-400">Delivers fast, SSL/TLS encrypted browsing and enterprise-grade denial-of-service (DDoS) protection.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#18181c] border border-zinc-800">
                <h3 className="font-semibold text-white mb-1">Secure Form Transmission</h3>
                <p className="text-sm text-zinc-400">Transmits your inquiry securely directly to our support desk over encrypted HTTPS without storing your messages in public databases.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#18181c] border border-zinc-800">
                <h3 className="font-semibold text-white mb-1">Locally Bundled Assets</h3>
                <p className="text-sm text-zinc-400">Typography and assets are packaged directly within our site bundle. Zero third-party tracking or connections to remote font servers.</p>
              </div>
              <div className="p-4 rounded-lg bg-[#18181c] border border-zinc-800">
                <h3 className="font-semibold text-white mb-1">Direct Technical Support</h3>
                <p className="text-sm text-zinc-400">Responses are sent directly from our local Vancouver support desk to your provided email address.</p>
              </div>
            </div>
            <p className="text-sm text-zinc-400">
              We never sell, rent, or trade your personal details to any marketing company or data broker.
            </p>
          </section>

          {/* Section 4: Cookie Policy & Consent Controls */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Cookie className="text-purple-400" size={22} />
              <span>4. Cookies &amp; How We Respect Your Choices</span>
            </h2>
            <p className="mb-4">
              We only use necessary cookies required for our website to function properly and remember your preferences:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-6">
              <li>
                <strong className="text-white">Essential Only:</strong> We save a simple preference flag in your browser so we don&apos;t keep asking for your cookie preferences on every single page.
              </li>
              <li>
                <strong className="text-white">No Hidden Trackers:</strong> We do not load advertising pixels or third-party tracking cookies without your permission.
              </li>
              <li>
                <strong className="text-white">You Are in Control:</strong> You can review or change your cookie settings anytime with a single click below.
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
              <span>5. Children&apos;s Privacy</span>
            </h2>
            <p className="mb-3">
              Our IT support and repair services are intended for adults and business operators. We do not knowingly collect personal information from children under 16 without parent or guardian consent.
            </p>
            <p>
              If a minor has sent an inquiry through our site by accident, please let us know at{' '}
              <a href="mailto:privacy@triole-it.com" className="text-purple-300 underline">privacy@triole-it.com</a>{' '}
              and we will immediately delete that information from our records.
            </p>
          </section>

          {/* Section 6: California Disclosures */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Shield className="text-purple-400" size={22} />
              <span>6. California Privacy Rights (CCPA/CPRA &amp; CalOPPA)</span>
            </h2>
            <p className="mb-3">
              If you reside in California, state laws provide specific rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
              <li><strong className="text-white">Right to Know:</strong> You can ask what personal information we have received from you.</li>
              <li><strong className="text-white">Right to Delete:</strong> You can ask us to permanently delete any contact inquiries you submitted.</li>
              <li><strong className="text-white">Right to Non-Discrimination:</strong> We will always provide the same friendly service regardless of whether you exercise privacy rights.</li>
            </ul>
            <p className="p-4 rounded-lg bg-[#18181c] border border-purple-500/30 text-sm text-purple-300">
              <strong>We Do Not Sell Your Data:</strong> Triole IT has never sold, and will never sell, your personal information for money or any other commercial consideration.
            </p>
          </section>

          {/* Section 7: Exercising Your Rights */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <CheckCircle2 className="text-purple-400" size={22} />
              <span>7. How to View, Edit, or Delete Your Data</span>
            </h2>
            <p className="mb-4">
              Whether you are covered by Canadian PIPEDA, the European GDPR, California law, or just want peace of mind, you can reach out to us anytime to view, correct, or delete your contact records:
            </p>
            <div className="p-4 rounded-lg bg-[#18181c] border border-zinc-800 text-sm space-y-1.5">
              <p><strong className="text-white">Triole IT Privacy Desk</strong></p>
              <p>Privacy Email: <a href="mailto:privacy@triole-it.com" className="text-purple-300 underline">privacy@triole-it.com</a></p>
              <p>General Inquiries: <a href="mailto:admin@triole-it.com" className="text-purple-300 underline">admin@triole-it.com</a></p>
              <p>Location: Vancouver, British Columbia, Canada</p>
            </div>
            <p className="mt-4 text-xs text-zinc-400">
              We respond to all verified requests promptly within 30 days, free of charge.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
