import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="relative overflow-hidden py-32">
      <SEO 
        title="Page Not Found | Triole IT"
        description="The page you are looking for does not exist on Triole IT website."
        robots="noindex, nofollow"
      />
      <div className="glow-primary top-10 -left-20" />
      <div className="mx-auto max-w-md px-4 text-center relative z-10">
        <div className="glass-card rounded-2xl p-10 sm:p-12 border border-zinc-800/80 neon-border">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
            <Compass size={40} />
          </div>
          <h1 className="text-6xl font-extrabold gradient-text tracking-tight">404</h1>
          <p className="mt-4 text-2xl font-bold text-white">Page Not Found</p>
          <p className="mt-2 text-base text-zinc-300">
            The page you are looking for doesn't exist or has moved.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex text-base">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
