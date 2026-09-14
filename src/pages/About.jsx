import { motion } from 'framer-motion';
import { Target, Users, Zap, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Devices Repaired", value: "1.5k+" },
    { label: "Areas Served", value: "Vancouver" },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us - Triole IT",
    "description": "Learn about Triole IT's mission, values, and our team of friendly tech support experts. Providing reliable, local computer repairs and IT support.",
    "publisher": {
      "@type": "Organization",
      "name": "Triole IT",
      "logo": {
        "@type": "ImageObject",
        "url": "https://triole-it.com/logo.png"
      }
    }
  };

  return (
    <div className="relative overflow-hidden py-16 lg:py-24">
      <SEO 
        title="About Us | Triole IT Support & Repairs"
        description="Learn about Triole IT's mission, values, and our team of friendly tech support experts. Providing reliable, local computer repairs and IT support."
        keywords="about Triole IT, local IT support, computer repair experts, technology mission, local PC repairs, Vancouver tech help"
        schemaMarkup={aboutSchema}
      />

      {/* Ambient background glows */}
      <div className="glow-primary top-10 -left-20" />
      <div className="glow-secondary top-96 -right-20" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.2)] mb-4">
            <Sparkles size={14} className="text-purple-400" />
            <span>Our Story &amp; Values</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About <span className="gradient-text">Triole IT</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-zinc-400">
            Founded on the principles of friendly service and reliable support, we help local home users and small businesses solve their technology issues with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-7">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-6">
              Our Mission
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-4">
              At Triole IT, our mission is to provide friendly, straightforward, and affordable IT support. We believe that getting your computer fixed or setting up your Wi-Fi network shouldn't be stressful or break the bank.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
              We work closely with local families and small business owners to understand their technical problems, providing clear solutions in plain language—no confusing jargon.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Root Cause Focused</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">Permanent fixes rather than temporary band-aids.</p>
                </div>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-400 shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Fast Response</h4>
                  <p className="mt-1 text-xs text-zinc-400 leading-relaxed">Quick diagnostics and responsive support when you need it.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-zinc-800/80 neon-border">
              <div className="grid grid-cols-2 gap-4 w-full">
                {stats.map((stat, i) => (
                  <div key={i} className="p-5 rounded-xl bg-zinc-900/80 text-center border border-zinc-800 hover:border-purple-500/40 transition">
                    <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                    <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-white">Why Choose Us?</h2>
            <p className="mt-2 text-sm text-zinc-400">
              Here is what sets Triole IT apart as Vancouver's preferred local IT support partner.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-6 border border-zinc-800/80 hover:border-purple-500/40 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Friendly Experts</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Our technicians are certified professionals experienced in diagnosing and repairing all kinds of hardware and software issues.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-zinc-800/80 hover:border-pink-500/40 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Proven Track Record</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">We have helped hundreds of local families and small businesses keep their computers, networks, and tech devices running smoothly.</p>
            </div>
            <div className="glass-card rounded-2xl p-6 border border-zinc-800/80 hover:border-purple-500/40 transition">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Transparent Pricing</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">We explain the issue and the cost upfront, offering affordable flat-rate repairs with no surprise fees or hidden costs.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
