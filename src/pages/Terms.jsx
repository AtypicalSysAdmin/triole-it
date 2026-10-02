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
    <div className="relative overflow-hidden py-12 lg:py-20">
      <SEO
        title="Terms of Service | Triole IT Support & Repairs"
        description="Review Triole IT Terms of Service. Understand our repair agreements, service warranties, subscription renewal policies under California ARL, and cancellation rights."
        keywords="terms of service, IT service terms, computer repair warranty, subscription terms, cancellation policy"
        schemaMarkup={termsSchema}
      />

      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-5">
            <FileText size={14} className="text-purple-400" />
            <span>Service Agreement</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Last Updated &amp; Effective: <span className="text-white font-medium">October 1, 2026</span>
          </p>
        </motion.div>

        <div className="space-y-8 text-zinc-300 leading-relaxed text-base">
          {/* 1. Introduction */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
            <p className="mb-4">
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Triole IT governing your access to and use of our website (<a href="https://triole-it.com" className="text-purple-300 underline">https://triole-it.com</a>), on-site IT support, remote assistance, and hardware repair services.
            </p>
            <p>
              By scheduling a service, submitting a repair inquiry, or purchasing any subscription retainer, you acknowledge that you have read, understood, and agree to be bound by these Terms and our{' '}
              <Link to="/privacy" className="text-purple-300 hover:text-white underline">Privacy Policy</Link>.
            </p>
          </section>

          {/* 2. Service Scope */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Service Scopes, Authorization &amp; Warranties</h2>
            <p className="mb-4">
              When delivering computer, laptop, network, or smart device services, Triole IT adheres to professional industry standards:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
              <li>
                <strong className="text-white">Customer Authorization:</strong> You authorize Triole IT to access your equipment, operating systems, and network peripherals for diagnostic, repair, or maintenance purposes.
              </li>
              <li>
                <strong className="text-white">Customer Data Backup Responsibility:</strong> While Triole IT takes utmost care with client hardware, data loss can occur unexpectedly on degraded storage drives. You are strongly advised to back up critical files prior to service. Triole IT is not liable for pre-existing drive failures or unrecoverable sectors.
              </li>
              <li>
                <strong className="text-white">30-Day Labor Warranty:</strong> All hardware repairs and diagnostic fixes are covered by a 30-day workmanship warranty. If the identical hardware defect recurs within 30 days of service, we will inspect and resolve it at zero supplementary labor cost.
              </li>
            </ul>
          </section>

          {/* 3. Automatic Renewal Terms */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <RefreshCcw size={22} className="text-purple-400" />
              <span>3. Continuous Service &amp; Retainer Subscriptions (ARL Disclosures)</span>
            </h2>
            <p className="mb-4">
              Pursuant to the California Automatic Renewal Law (Cal. Bus. &amp; Prof. Code &sect; 17600 et seq.), the FTC Negative Option Rule, and Canadian consumer protection acts, the following statutory terms govern recurring retainer plans:
            </p>
            <div className="p-4 rounded-lg bg-[#18181c] border border-purple-500/30 text-sm space-y-2 mb-4">
              <p className="text-white font-semibold">Continuous Service Affirmation:</p>
              <p>
                By enrolling in the Residential Tech Guardian ($49/month) or Small Business Pro Retainer ($199/month), you agree that your service will continue indefinitely and your payment method will automatically be charged on a recurring monthly schedule until you cancel.
              </p>
            </div>
            <p className="mb-3 font-semibold text-white">Cancellation Rights &amp; 1-Click Procedure:</p>
            <p className="mb-4">
              You possess the absolute statutory right to cancel your subscription at any time without penalty or cancellation fees. You may cancel:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-300 mb-4">
              <li>Directly online via the customer billing management link included in every monthly invoice.</li>
              <li>By transmitting an email with &quot;Cancel Subscription&quot; in the subject line to <a href="mailto:admin@triole-it.com" className="text-purple-300 underline">admin@triole-it.com</a>.</li>
            </ul>
            <p className="text-sm text-zinc-400">
              Upon cancellation, recurring charges cease immediately. Services remain active through the end of the current pre-paid monthly billing cycle.
            </p>
          </section>

          {/* 4. Limitation of Liability */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle size={22} className="text-yellow-400" />
              <span>4. Limitation of Liability</span>
            </h2>
            <p className="mb-4">
              To the maximum extent permitted by applicable law in British Columbia and Canada, Triole IT, its technicians, contractors, and agents shall not be liable for indirect, incidental, punitive, or consequential damages resulting from device hardware failure, data loss, or network downtime.
            </p>
            <p>
              In no event shall Triole IT's total cumulative liability exceed the total fee paid by you for the specific service call or repair giving rise to the claim.
            </p>
          </section>

          {/* 5. Contact Info */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <ShieldCheck size={22} className="text-purple-400" />
              <span>5. Governing Law &amp; Inquiries</span>
            </h2>
            <p className="mb-4">
              These Terms are governed by and construed in accordance with the laws of the Province of British Columbia and the federal laws of Canada applicable therein.
            </p>
            <p>
              For legal inquiries regarding these terms, contact us at{' '}
              <a href="mailto:admin@triole-it.com" className="text-purple-300 underline">admin@triole-it.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
