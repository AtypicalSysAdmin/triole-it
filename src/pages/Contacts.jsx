import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contacts = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Get in <span className="gradient-text">Touch</span></h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Ready to secure your infrastructure? Contact us today for a free consultation.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass p-10 md:p-16 rounded-3xl border border-white/5"
          >
            <h3 className="text-2xl font-bold mb-12 text-center">Contact Information</h3>
            <div className="flex flex-col gap-10">
              <div className="flex items-center gap-8">
                <div className="p-5 bg-primary/10 rounded-2xl text-primary"><Mail size={32} /></div>
                <div>
                  <p className="text-sm text-muted uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl font-medium">admin@triole-it.com</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="p-5 bg-secondary/10 rounded-2xl text-secondary"><Phone size={32} /></div>
                <div>
                  <p className="text-sm text-muted uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-xl font-medium">+1 (604) 555-0199</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="p-5 bg-primary/10 rounded-2xl text-primary"><MapPin size={32} /></div>
                <div>
                  <p className="text-sm text-muted uppercase tracking-widest mb-1">Office</p>
                  <p className="text-xl font-medium">Vancouver, BC, Canada</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-8 glass rounded-3xl border border-white/5 text-center"
          >
            <p className="text-muted">
              We usually respond to all inquiries within 24 business hours.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
