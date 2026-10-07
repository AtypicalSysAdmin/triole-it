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
              These Terms of Service (&quot;Terms&quot;) are a straightforward agreement between you and Triole IT governing your access to our website (<a href={COMPANY_INFO.website} className="text-purple-300 underline">{COMPANY_INFO.website}</a>) and any on-site, remote, or shop IT repair and diagnostic services we provide.
            </p>
            <p>
              By submitting a service inquiry, booking an appointment, or approving a repair, you agree to these Terms and our{' '}
              <Link to="/privacy" className="text-purple-300 hover:text-white underline">Privacy Policy</Link>.
            </p>
          </section>

          {/* 2. Service Scope */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">2. Service Authorization, Data Backup &amp; Warranties</h2>
            <p className="mb-4">
              We take pride in delivering honest, professional technical support:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-300 mb-4">
              <li>
                <strong className="text-white">Customer Authorization:</strong> You authorize Triole IT technicians to access and work on your computer, device, or local network to diagnose and resolve the issues you reported.
              </li>
              <li>
                <strong className="text-white">Your Responsibility to Back Up Files:</strong> Hard drives and storage chips can fail suddenly and irreversibly, especially on already-malfunctioning devices. While our technicians handle all hardware with extreme care, we cannot be held liable for pre-existing drive degradation, unrecoverable disk sectors, or lost files. We strongly recommend backing up personal files before any major repair.
              </li>
              <li>
                <strong className="text-white">30-Day Labor Warranty:</strong> All hardware repairs and troubleshooting fixes include a 30-day workmanship guarantee. If the exact same issue recurs within 30 days of service due to our repair, we will re-inspect and fix it at zero additional labor cost (replacement hardware parts are subject to manufacturer warranties).
              </li>
            </ul>
          </section>

          {/* 3. Pricing, Quotes & Cancellation Terms */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <RefreshCcw size={22} className="text-purple-400" />
              <span>3. Upfront Pricing, Payment &amp; Cancellations</span>
            </h2>
            <p className="mb-4">
              All services are performed on a transparent, agreed quote basis per work order. We do not charge surprise fees or recurring subscriptions:
            </p>
            <div className="p-4 rounded-lg bg-[#18181c] border border-purple-500/30 text-sm space-y-2 mb-4">
              <p className="text-white font-semibold">Clear Estimates Before Work Begins:</p>
              <p>
                Before we open up hardware or carry out non-diagnostic repairs, we explain the cost upfront. You will never be billed for additional parts or extra labor without your explicit prior approval.
              </p>
            </div>
            <p className="mb-3 font-semibold text-white">Rescheduling &amp; Cancellations:</p>
            <p className="mb-4">
              If you need to cancel or reschedule an on-site visit, please notify us at least 2 hours before your scheduled appointment window. You can reach us by:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-zinc-300 mb-4">
              <li>Replying to your confirmation email or emailing <a href={`mailto:${COMPANY_INFO.email}`} className="text-purple-300 underline">{COMPANY_INFO.email}</a>.</li>
              <li>Messaging our Vancouver support desk directly.</li>
            </ul>
            <p className="text-sm text-zinc-400">
              Payment is due once the agreed repair work is completed and verified (via Interac e-Transfer, cash, or in-person payment).
            </p>
          </section>

          {/* 4. Limitation of Liability */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertTriangle size={22} className="text-yellow-400" />
              <span>4. Limitation of Liability</span>
            </h2>
            <p className="mb-4">
              To the maximum extent permitted by the laws of British Columbia and Canada, Triole IT and its technicians are not liable for incidental, indirect, or consequential damages resulting from pre-existing device defects, sudden storage drive death, software incompatibilities, or internet service provider outages.
            </p>
            <p>
              In all circumstances, our maximum total liability is strictly limited to the actual fee you paid for the specific service call or repair.
            </p>
          </section>

          {/* 5. Contact Info */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <ShieldCheck size={22} className="text-purple-400" />
              <span>5. Governing Law &amp; Inquiries</span>
            </h2>
            <p className="mb-4">
              These Terms are governed by and interpreted under the laws of the Province of British Columbia and the federal laws of Canada.
            </p>
            <p>
              If you have any questions about these terms or a service order, feel free to email us directly at{' '}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-purple-300 underline">{COMPANY_INFO.email}</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
