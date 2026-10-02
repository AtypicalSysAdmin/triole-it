import { motion } from 'framer-motion';
import { ShieldAlert, Mail, MapPin, FileCheck, AlertCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

export default function DMCA() {
  const [copied, setCopied] = useState(false);

  const dmcaNoticeTemplate = `To: Designated Copyright Agent, Triole IT
Email: copyright@triole-it.com

1. Identification of the copyrighted work claimed to have been infringed:
   [Provide description and title of work, registration number if applicable]

2. Identification of the material that is claimed to be infringing:
   [Provide specific URL(s) on triole-it.com]

3. Contact information of the complaining party:
   Full Legal Name: [Your Name]
   Company/Organization: [If applicable]
   Physical Address: [Your Mailing Address]
   Phone Number: [Your Telephone Number]
   Email Address: [Your Email Address]

4. Statement of Good Faith:
   "I have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law."

5. Statement of Accuracy under Penalty of Perjury:
   "The information in this notification is accurate, and under penalty of perjury, I am the owner, or an agent authorized to act on behalf of the owner, of an exclusive right that is allegedly infringed."

6. Physical or Electronic Signature:
   /s/ [Your Full Name]
   Date: [Date]`;

  const handleCopyTemplate = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(dmcaNoticeTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const dmcaSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "DMCA & Copyright Policy - Triole IT",
    "description": "Triole IT Designated Copyright Agent contact information, DMCA safe harbor notice, and takedown procedures under 17 U.S.C. § 512.",
    "publisher": {
      "@type": "Organization",
      "name": "Triole IT",
      "url": "https://triole-it.com",
      "email": "copyright@triole-it.com"
    }
  };

  return (
    <div className="relative overflow-hidden py-16 lg:py-24">
      <SEO
        title="DMCA Copyright Policy & Safe Harbor Notice | Triole IT"
        description="Triole IT DMCA Copyright Agent information, takedown request template, counter-notification procedure, and safe harbor compliance under 17 U.S.C. § 512."
        keywords="DMCA notice, copyright agent, safe harbor, takedown notice, copyright infringement, Triole IT DMCA"
        schemaMarkup={dmcaSchema}
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
            <ShieldAlert size={16} className="text-purple-400" />
            <span>Intellectual Property Protection</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            DMCA &amp; <span className="gradient-text">Copyright</span> Policy
          </h1>
          <p className="mt-4 text-base text-zinc-400">
            Designated Agent Notice pursuant to the Digital Millennium Copyright Act (17 U.S.C. &sect; 512)
          </p>
        </motion.div>

        <div className="space-y-10 text-zinc-300 leading-relaxed text-base">
          {/* Section 1: Designated Agent Box */}
          <section className="glass-card p-8 sm:p-10 border border-purple-500/30 neon-border">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail className="text-purple-400" size={24} />
              Designated Copyright Agent Contact Info
            </h2>
            <p className="mb-6">
              Triole IT respects the intellectual property rights of creators and complies with the requirements of the Digital Millennium Copyright Act (&quot;DMCA&quot;), 17 U.S.C. &sect; 512(c). Notifications of claimed copyright infringement should be directed to our Designated Copyright Agent:
            </p>
            <div className="p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-3">
              <p className="text-lg font-bold text-white">Triole IT - DMCA Copyright Agent</p>
              <div className="flex items-center gap-3 text-zinc-300">
                <Mail size={18} className="text-purple-400 shrink-0" />
                <span>
                  Email: <a href="mailto:copyright@triole-it.com" className="text-purple-300 hover:underline font-semibold">copyright@triole-it.com</a> (cc: <a href="mailto:admin@triole-it.com" className="text-purple-300 hover:underline">admin@triole-it.com</a>)
                </span>
              </div>
              <div className="flex items-center gap-3 text-zinc-300">
                <MapPin size={18} className="text-purple-400 shrink-0" />
                <span>Physical Address: Triole IT Support, Vancouver, BC, Canada</span>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/40 text-xs text-zinc-400">
              <strong>U.S. Copyright Office Directory Advisory:</strong> In accordance with 37 C.F.R. &sect; 201.38, service providers subject to U.S. jurisdiction maintain electronic designation within the U.S. Copyright Office Online Directory of Designated Agents.
            </div>
          </section>

          {/* Section 2: Statutory Notice Requirements */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileCheck className="text-purple-400" size={24} />
              Filing a DMCA Takedown Notice
            </h2>
            <p className="mb-4">
              To be effective under 17 U.S.C. &sect; 512(c)(3), notifications of claimed infringement must be written and include all six statutory elements:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-zinc-300 mb-6">
              <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
              <li>Identification of the copyrighted work claimed to have been infringed, or a representative list of such works.</li>
              <li>Identification of the material that is claimed to be infringing and information reasonably sufficient to permit us to locate the material (such as exact URLs).</li>
              <li>Information reasonably sufficient to permit us to contact the complaining party (address, telephone number, and email address).</li>
              <li>A statement that the complaining party has a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law.</li>
              <li>A statement that the information in the notification is accurate, and under penalty of perjury, that the complaining party is authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
            </ol>

            {/* Template Card */}
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/90 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold uppercase tracking-wider text-purple-300">
                  Standard DMCA Notice Form Template
                </span>
                <button
                  type="button"
                  onClick={handleCopyTemplate}
                  className="btn-glass text-xs px-3 py-1.5 gap-1.5"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy Template'}</span>
                </button>
              </div>
              <pre className="text-xs text-zinc-300 font-mono overflow-x-auto p-4 rounded-lg bg-black/60 border border-zinc-800 whitespace-pre-wrap">
                {dmcaNoticeTemplate}
              </pre>
            </div>
          </section>

          {/* Section 3: Counter-Notification & Repeat Infringer Policy */}
          <section className="glass-card p-8 sm:p-10 border border-zinc-800/80">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertCircle className="text-purple-400" size={24} />
              Counter-Notification &amp; Repeat Infringer Policy
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Counter-Notification Procedure</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  If you believe material you posted was removed or disabled by mistake or misidentification, you may submit a written Counter-Notification to our Designated Copyright Agent pursuant to 17 U.S.C. &sect; 512(g)(3). The notice must contain your physical or electronic signature, identification of the removed material, a statement under penalty of perjury of good faith belief, and consent to federal court jurisdiction.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Repeat Infringer Policy</h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  In compliance with Section 512(i)(1)(A) of the DMCA, Triole IT enforces a policy that provides for the immediate termination of user accounts, service contracts, or access rights of repeat copyright infringers under appropriate circumstances.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
