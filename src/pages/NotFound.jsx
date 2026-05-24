import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="page-padding px-6 min-h-[80vh] flex items-center justify-center">
      <SEO 
        title="Page Not Found | Triole IT"
        description="The page you are looking for does not exist on Triole IT website."
        robots="noindex, nofollow"
      />
      <div className="container-custom max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card-glass p-10 md:p-16 text-center relative overflow-hidden neon-border"
        >
          {/* Background decoration */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/20 rounded-full blur-3xl"></div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8 flex justify-center"
          >
            <div className="p-5 rounded-full bg-primary/10 text-primary drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <AlertCircle size={64} strokeWidth={1.5} />
            </div>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-extrabold mb-4 gradient-text neon-glow tracking-tighter">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Page Not Found
          </h2>
          
          <p className="text-lead mb-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <Link to="/" className="btn-base btn-primary gap-2">
            <Home size={20} />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
