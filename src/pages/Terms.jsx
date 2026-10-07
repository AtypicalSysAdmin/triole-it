import { motion } from 'framer-motion';
import { FileText, AlertTriangle, ShieldCheck, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../data/company';

export default function Terms() {
  const termsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Terms of Service - ${COMPANY_INFO.name}`,
    "description": "Triole IT Terms of Service, including service scopes, diagnostic warranties, flat-rate pricing, and cancellation policies.",
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.website
    }
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <SEO
        title="Terms of Service | Triole IT Support & Repairs"
        description="Review Triole IT Terms of Service. Understand our repair agreements, service warranties, upfront flat-rate quotes, and appointment cancellation policies."
        keywords="terms of service, IT service terms, computer repair warranty, service quotes, cancellation policy"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Terms of Service", item: "/terms" }
        ]}
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
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and Triole IT governing your access to and use of our website (<a href={COMPANY_INFO.website} className="text-purple-300 underline">{COMPANY_INFO.website}</a>), on-site IT support, remote assistance, and hardware repair services.
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

          {/* 3. Pricing, Quotes & Cancellation Terms */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <RefreshCcw size={22} className="text-purple-400" />
              <span>3. Upfront Pricing, Payment &amp; Cancellation</span>
            </h2>
            <p className="mb-4">
              All services provided by Triole IT are performed on an upfront flat-rate or agreed estimate basis per individual work order. We do not impose automatic recurring renewals or hidden subscription fees:
            </p>
            <div className="p-4 rounded-lg bg-[#18181c] border border-purple-500/30 text-sm space-y-2 mb-4">
              <p className="text-white font-semibold">Transparent Quotations:</p>
              <p>
                Prior to commencing hardware repairs or on-site support, our technicians provide a clear, binding estimate. You will never be billed for additional labor or components without prior explicit authorization.
              </p>
            </div>
            <p className="mb-3 font-semibold text-white">Appointment Rescheduling &amp; Cancellation:</p>
            <p className="mb-4">
              Clients may reschedule or cancel scheduled on-site appointments without penalty by notifying Triole IT at least 2 hours prior to the scheduled dispatch window. You may notify us by:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-300 mb-4">
              <li>Calling or messaging our Vancouver support desk directly.</li>
              <li>Transmitting an email with &quot;Cancel Appointment&quot; in the subject line to <a href={`mailto:${COMPANY_INFO.email}`} className="text-purple-300 underline">{COMPANY_INFO.email}</a>.</li>
            </ul>
            <p className="text-sm text-zinc-400">
              Payments are due upon completion of approved repair or diagnostic deliverables.
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
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-purple-300 underline">{COMPANY_INFO.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
