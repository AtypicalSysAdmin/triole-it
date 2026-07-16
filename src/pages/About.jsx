import { motion } from 'framer-motion';
import { Target, Users, Zap, Award } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "12+" },
    { label: "Happy Clients", value: "500+" },
    { label: "Projects Done", value: "1.2k" },
    { label: "Global Offices", value: "3" },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us - Triole IT",
    "description": "Learn about Triole IT's mission, values, and expert team of IT consultants. Empowering organizations through reliable, scalable, and secure technology solutions.",
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
    <div className="page-padding">
      <SEO 
        title="About Us | Triole IT Solutions"
        description="Learn about Triole IT's mission, values, and expert team of IT consultants. Empowering organizations through reliable, scalable, and secure technology solutions."
        keywords="about Triole IT, IT consulting experts, technology mission, digital transformation, IT history"
        schemaMarkup={aboutSchema}
      />
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="h1-page">About <span className="gradient-text">Triole IT</span></h1>
          <p className="text-lead">
            Founded on the principles of innovation and integrity, we help businesses navigate the complex digital landscape with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-body mb-6">
              At Triole IT, our mission is to empower organizations by providing reliable, scalable, and secure technology solutions. We believe that technology should be an enabler, not a bottleneck.
            </p>
            <p className="text-body mb-8">
              We work closely with our clients to understand their unique challenges and goals, delivering custom-tailored strategies that produce measurable results.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg"><Target className="text-primary" size={24} /></div>
                <div>
                  <h4 className="font-bold">Focused</h4>
                  <p className="text-xs text-muted">Clear goals and execution.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg"><Zap className="text-secondary" size={24} /></div>
                <div>
                  <h4 className="font-bold">Fast</h4>
                  <p className="text-xs text-muted">Agile delivery and response.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square glass rounded-3xl overflow-hidden flex items-center justify-center p-12">
              <div className="grid grid-cols-2 gap-4 w-full">
                {stats.map((stat, i) => (
                  <div key={i} className="p-6 bg-white/5 rounded-2xl text-center border border-white/5 hover:border-primary/30 transition-all">
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-xs text-muted uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-glass">
              <Users className="text-primary mb-6" size={40} />
              <h3 className="h3-card">Expert Team</h3>
              <p className="text-body">Our consultants are certified experts with decades of combined experience in the IT industry.</p>
            </div>
            <div className="card-glass">
              <Award className="text-secondary mb-6" size={40} />
              <h3 className="h3-card">Proven Results</h3>
              <p className="text-body">We have a track record of delivering successful digital transformations for companies of all sizes.</p>
            </div>
            <div className="card-glass">
              <Zap className="text-primary mb-6" size={40} />
              <h3 className="h3-card">Modern Stack</h3>
              <p className="text-body">We stay at the forefront of technology, using the latest tools and methodologies to solve your problems.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
