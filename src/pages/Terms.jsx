import { motion } from 'framer-motion';
import { FileText, AlertTriangle, ShieldCheck, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function Terms() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Triole IT",
    "description": "Triole IT Terms of Service, including service scopes, diagnostic warranties, continuous subscription terms, and cancellation policies.",
    "publisher": {
      "@type": "Organization",
      "name": "Triole IT",
      "url": "https://triole-it.com"
    }
  };

  return (
    <div className="relative overflow-hidden py-16 lg:py-24">
      <SEO
        title="Terms of Service | Triole IT Support & Repairs"
        description="Review Triole IT Terms of Service. Understand our repair agreements, service warranties, subscription renewal policies under California ARL, and cancellation rights."
        keywords="terms of service, IT service terms, computer repair warranty, subscription terms, cancellation policy"
        schemaMarkup={termsSchema}
      />

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
            <FileText size={16} className="text-purple-400" />
            <span>Service Agreement</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="mt-4 text-base text-zinc-400">
            Last Updated &amp; Effective: <span className="text-white font-medium">October 1, 2026</span>
          </p>
        </motion.div>

        <div className="space-y-10 text-zinc-300 leading-relaxed text-base">
          {/* 1. Introduction */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Triole IT governing your access to and use of our website (<a href="https://triole-it.com" className="text-purple-300 underline">https://triole-it.com</a>), on-site IT support, remote assistance, and hardware repair services.
            </p>
            <p>
              By scheduling a service, submitting a repair inquiry, or purchasing any subscription retainer, you acknowledge that you have read, understood, and agree to be bound by these Terms and our{' '}
              <Link to="/privacy" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</Link>.
            </p>
          </section>

          {/* 2. Continuous Service & Subscription Terms (California ARL / FTC Compliance) */}
          <section className="glass-card p-8 sm:p-10 border border-purple-500/30 neon-border">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <RefreshCcw className="text-purple-400" size={24} />
              2. Subscription Plans &amp; Automatic Renewal Disclosures
            </h2>
            <div className="p-4 rounded-xl border border-purple-500/30 bg-purple-950/20 mb-6">
              <p className="font-semibold text-purple-200 mb-1">
                Notice Under California Automatic Renewal Law (ARL) &amp; FTC Guidelines:
              </p>
              <p className="text-sm text-zinc-300">
                For clients enrolled in recurring maintenance plans, small business retainers, or continuous remote monitoring, your service will automatically renew at the end of each billing cycle unless cancelled prior to renewal.
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-3 text-zinc-300 mb-6">
              <li>
                <strong className="text-white">Continuous Service Terms:</strong> Recurring support subscriptions continue automatically at the agreed billing cadence (monthly or annual) and rate until you cancel.
              </li>
              <li>
                <strong className="text-white">Notice of Renewal &amp; Rate Changes:</strong> If subscription fees or service terms change, you will receive written email notification at least 30 days prior to the effective date.
              </li>
              <li>
                <strong className="text-white">Cancellation Rights:</strong> You may cancel continuous services at any time. Cancellation takes effect at the end of your current prepaid billing cycle without penalty or cancellation fees.
              </li>
              <li>
                <strong className="text-white">Simple, One-Click Cancellation Path:</strong> You can cancel your subscription at any time by:
                <br />
                (a) Emailing <a href="mailto:admin@triole-it.com?subject=Subscription%20Cancellation%20Request" className="text-purple-400 underline font-semibold">admin@triole-it.com</a> with the subject line &quot;Subscription Cancellation Request&quot;, or
                <br />
                (b) Accessing your Stripe customer billing management link provided in every billing receipt.
              </li>
              <li>
                <strong className="text-white">Refund Policy:</strong> Prepaid monthly retainer fees are refundable within 7 days of initial purchase if no remote or on-site support hours were consumed. One-off diagnostic and repair services are backed by our 30-day labor warranty.
              </li>
            </ul>
          </section>

          {/* 3. Scope of Service & Customer Responsibilities */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <ShieldCheck className="text-purple-400" size={24} />
              3. Service Scope &amp; Customer Data Responsibilities
            </h2>
            <p className="mb-4">
              We provide professional computer repair, Wi-Fi networking, software troubleshooting, and hardware installation.
            </p>
            <div className="p-4 rounded-xl border border-yellow-500/30 bg-yellow-950/20 text-sm text-yellow-200 mb-4 flex items-start gap-3">
              <AlertTriangle size={20} className="shrink-0 mt-0.5 text-yellow-400" />
              <div>
                <strong className="block font-semibold mb-1">Customer Backup Responsibility:</strong>
                While Triole IT technicians exercise utmost care during repairs and malware removals, hardware failures can happen unpredictably. Customers are strongly encouraged to maintain independent backups of all critical personal data prior to diagnostic or repair work.
              </div>
            </div>
            <p>
              Triole IT offers dedicated data backup services prior to repairs upon request.
            </p>
          </section>

          {/* 4. Warranties & Limitation of Liability */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4">4. Repair Warranty &amp; Limitation of Liability</h2>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300">
              <li>
                <strong className="text-white">30-Day Labor Warranty:</strong> All hardware repair and setup labor performed by Triole IT is backed by a 30-day workmanship warranty. If the exact same issue reoccurs within 30 days due to workmanship, we will rectify it at no extra labor charge.
              </li>
              <li>
                <strong className="text-white">Parts Manufacturer Warranties:</strong> Replacement hardware components (SSDs, RAM, power supplies) are subject to manufacturer warranties.
              </li>
              <li>
                <strong className="text-white">Limitation:</strong> To the fullest extent permitted by applicable law, Triole IT's aggregate liability for any claim arising from our services is limited to the total fees paid by you for the specific service rendered.
              </li>
            </ul>
          </section>

          {/* 5. Governing Law */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law &amp; Jurisdiction</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein. Any legal disputes shall be brought exclusively before the courts of British Columbia located in Vancouver.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
