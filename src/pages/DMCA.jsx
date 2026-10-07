import { motion } from 'framer-motion';
import { ShieldAlert, MapPin, FileCheck, AlertCircle, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../data/company';

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
    "name": `DMCA & Copyright Policy - ${COMPANY_INFO.name}`,
    "description": "Triole IT Designated Copyright Agent contact information, DMCA safe harbor notice, and takedown procedures under 17 U.S.C. § 512.",
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_INFO.name,
      "url": COMPANY_INFO.website,
      "email": COMPANY_INFO.copyrightEmail
    }
  };

  return (
    <div className="relative overflow-hidden py-12 lg:py-20">
      <SEO
        title="DMCA Copyright Policy & Safe Harbor Notice | Triole IT"
        description="Triole IT DMCA Copyright Agent information, takedown request template, counter-notification procedure, and safe harbor compliance under 17 U.S.C. § 512."
        keywords="DMCA policy, copyright agent, takedown notice, 512 safe harbor, Triole IT copyright"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "DMCA Policy", item: "/dmca" }
        ]}
        schemaMarkup={dmcaSchema}
      />

      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-5">
            <ShieldAlert size={14} className="text-purple-400" />
            <span>Intellectual Property Protection</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            DMCA &amp; <span className="gradient-text">Copyright</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Designated Agent Directory &bull; Safe Harbor Notice under 17 U.S.C. &sect; 512(c)
          </p>
        </motion.div>

        <div className="space-y-8 text-zinc-300 leading-relaxed text-base">
          {/* Section 1: Designated Agent Box */}
          <section className="card-surface p-6 sm:p-8 border-purple-500/30">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <FileCheck className="text-purple-400" size={24} />
              <span>Designated Copyright Agent Contact Information</span>
            </h2>
            <p className="mb-6 text-sm sm:text-base">
              Pursuant to the Digital Millennium Copyright Act (17 U.S.C. &sect; 512(c)(2)) and Canadian Copyright Act Notice-and-Notice provisions, all formal notices of claimed infringement must be directed to Triole IT's Designated Agent:
            </p>

            <div className="p-6 rounded-lg bg-[#18181c] border border-zinc-800 space-y-3 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                    Designated Agent
                  </span>
                  <span className="text-base font-bold text-white">Triole IT Legal &amp; Compliance Dept</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                    Email Address (Preferred)
                  </span>
                  <a href="mailto:copyright@triole-it.com" className="text-base font-bold text-purple-300 hover:underline">
                    copyright@triole-it.com
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-start gap-3 text-zinc-300">
                <MapPin size={18} className="text-purple-400 shrink-0 mt-0.5" />
                <span>Mailing Jurisdiction: Vancouver, British Columbia, Canada</span>
              </div>
            </div>
          </section>

          {/* Section 2: Statutory Elements */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Required Statutory Elements of an Infringement Notice
            </h2>
            <p className="mb-4">
              To be legally effective under 17 U.S.C. &sect; 512(c)(3)(A), a notification of claimed copyright infringement must be in writing and contain the following essential elements:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-zinc-300">
              <li>A physical or electronic signature of a person authorized to act on behalf of the owner of the copyright.</li>
              <li>Identification of the copyrighted work claimed to have been infringed.</li>
              <li>Identification of the material on our site claimed to be infringing, with specific URLs.</li>
              <li>Information reasonably sufficient to permit Triole IT to contact you (name, address, telephone, email).</li>
              <li>A statement that you have a good faith belief that the disputed use is not authorized.</li>
              <li>A statement made under penalty of perjury that the information in your notice is accurate.</li>
            </ol>
          </section>

          {/* Section 3: Copyable Template */}
          <section className="card-surface p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                DMCA Notice Takedown Template
              </h2>
              <button
                type="button"
                onClick={handleCopyTemplate}
                className="btn-secondary text-sm gap-2 shrink-0"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Notice Template'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-lg bg-[#0a0a0c] border border-zinc-800 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed">
              {dmcaNoticeTemplate}
            </pre>
          </section>

          {/* Section 4: Repeat Infringer Policy */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <AlertCircle size={22} className="text-purple-400" />
              <span>Repeat Infringer Policy &amp; Subpoena Cooperation</span>
            </h2>
            <p className="mb-3">
              In accordance with 17 U.S.C. &sect; 512(i)(1)(A), Triole IT maintains an established policy providing for the prompt termination, in appropriate circumstances, of subscribers, account holders, or forum contributors who are repeat copyright infringers.
            </p>
            <p>
              Under 17 U.S.C. &sect; 512(h), upon receipt of a statutory administrative subpoena, Triole IT complies fully with judicial orders to identify alleged infringers.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
