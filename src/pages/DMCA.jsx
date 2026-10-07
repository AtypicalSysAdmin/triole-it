import { motion } from 'framer-motion';
import { ShieldCheck, MapPin, Mail, Copy, Check, HeartHandshake } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import { COMPANY_INFO } from '../data/company';

export default function DMCA() {
  const [copied, setCopied] = useState(false);

  const copyrightNoticeTemplate = `To: Triole IT Copyright Support
Email: copyright@triole-it.com

1. Copyrighted Work:
   [Describe your original work and provide a link to it, if available]

2. Location on triole-it.com:
   [Provide the exact webpage URL(s) on our site]

3. Your Contact Details:
   Name: [Your Full Name or Business]
   Email: [Your Email Address]
   Location: [Your City, Province/State, Country]

4. Statement of Ownership:
   "I confirm that I am the copyright owner (or authorized to act on behalf of the owner), and I believe in good faith that the use of this material has not been authorized."

5. Signature:
   [Your Typed Name]
   Date: [Date]`;

  const handleCopyTemplate = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(copyrightNoticeTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const copyrightSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `Copyright & Content Policy - ${COMPANY_INFO.name}`,
    "description": "Triole IT Copyright and Content Policy under the Canadian Copyright Act Notice-and-Notice regime. How to reach our Vancouver support team for copyright inquiries.",
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
        title="Copyright & Content Policy | Triole IT"
        description="Learn about Triole IT's copyright policy under the Canadian Copyright Act. Easily submit a notice to our friendly Vancouver tech team."
        keywords="copyright policy, Canadian copyright act, notice and notice, Vancouver IT support, content policy"
        breadcrumbs={[
          { name: "Home", item: "/" },
          { name: "Copyright Policy", item: "/dmca" }
        ]}
        schemaMarkup={copyrightSchema}
      />

      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 mb-5">
            <ShieldCheck size={14} className="text-purple-400" />
            <span>Canadian Copyright &amp; Content Notice</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Copyright &amp; <span className="gradient-text">Content Policy</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-zinc-400">
            Vancouver, BC, Canada &bull; Operating in accordance with Canada's Copyright Act (Notice &amp; Notice)
          </p>
        </motion.div>

        <div className="space-y-8 text-zinc-300 leading-relaxed text-base">
          {/* Section 1: Friendly Introduction & Contact */}
          <section className="card-surface p-6 sm:p-8 border-purple-500/30">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <HeartHandshake className="text-purple-400" size={24} />
              <span>Respecting Creative Rights</span>
            </h2>
            <p className="mb-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
              At Triole IT, we deeply respect the intellectual property of creators, developers, and photographers. We operate under Canada&apos;s <em>Copyright Act</em> and its Notice-and-Notice framework. If you notice any material, graphic, or content on our website that you believe belongs to you and is used without authorization, please let us know so we can resolve it quickly.
            </p>

            <div className="p-6 rounded-lg bg-[#18181c] border border-zinc-800 space-y-3 text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                    Contact Desk
                  </span>
                  <span className="text-base font-bold text-white">Triole IT Support &amp; Copyright Desk</span>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                    Direct Email
                  </span>
                  <a href={`mailto:${COMPANY_INFO.copyrightEmail}`} className="text-base font-bold text-purple-300 hover:underline">
                    {COMPANY_INFO.copyrightEmail}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-start gap-3 text-zinc-300">
                <MapPin size={18} className="text-purple-400 shrink-0 mt-0.5" />
                <span>Location: Vancouver, British Columbia, Canada</span>
              </div>
            </div>
          </section>

          {/* Section 2: What to include */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
              How to Submit a Notice
            </h2>
            <p className="mb-4 text-zinc-300">
              To help us review and address your inquiry as quickly as possible, please email us with the following straightforward details:
            </p>
            <ol className="list-decimal pl-6 space-y-3 text-zinc-300">
              <li>
                <strong className="text-white">Your Contact Details:</strong> Your name, email address, and company or location.
              </li>
              <li>
                <strong className="text-white">The Original Work:</strong> A description of your work (and a link to where it is officially hosted, if applicable).
              </li>
              <li>
                <strong className="text-white">The Location on Our Site:</strong> The specific URL(s) on <code className="text-purple-300 bg-purple-950/40 px-1.5 py-0.5 rounded">triole-it.com</code> where the material is displayed.
              </li>
              <li>
                <strong className="text-white">Statement of Ownership:</strong> A brief statement that you are the copyright holder or authorized to represent them, and believe the use was unauthorized.
              </li>
              <li>
                <strong className="text-white">Your Signature:</strong> Simply typing your full name and the current date.
              </li>
            </ol>
          </section>

          {/* Section 3: Copyable Template with clean responsive wrapping */}
          <section className="card-surface p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Notice Template
                </h2>
                <p className="text-xs text-zinc-400 mt-1">
                  You can copy and fill out this simple template in your email client.
                </p>
              </div>
              <button
                type="button"
                onClick={handleCopyTemplate}
                className="btn-secondary text-sm gap-2 shrink-0"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copied ? 'Copied to Clipboard' : 'Copy Notice Template'}</span>
              </button>
            </div>
            
            <div className="rounded-lg bg-[#0a0a0c] border border-zinc-800 p-4 sm:p-6 overflow-hidden">
              <pre className="font-mono text-xs sm:text-sm text-zinc-300 whitespace-pre-wrap break-words leading-relaxed overflow-x-hidden">
                {copyrightNoticeTemplate}
              </pre>
            </div>
          </section>

          {/* Section 4: Friendly Resolution Process */}
          <section className="card-surface p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail size={22} className="text-purple-400" />
              <span>How We Handle Inquiries</span>
            </h2>
            <div className="space-y-4 text-zinc-300">
              <p>
                <strong>Prompt Turnaround:</strong> Our local support team in Vancouver reviews all incoming copyright messages promptly, typically within 1–2 business days.
              </p>
              <p>
                <strong>Immediate Action:</strong> If content is verified as mistakenly published or unauthorized, we will remove or replace it right away without unnecessary back-and-forth.
              </p>
              <p>
                <strong>Fair &amp; Respectful:</strong> As a local Canadian IT support provider, we believe in fair play, honest communication, and respectful collaboration with the creative and tech community.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
