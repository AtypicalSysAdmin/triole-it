import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="relative overflow-hidden py-24 sm:py-32">
      <SEO 
        title="Page Not Found | Triole IT"
        description="The page you are looking for does not exist on Triole IT website."
        robots="noindex, nofollow"
      />
      <div className="container-custom max-w-md text-center">
        <div className="card-surface p-8 sm:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-6">
            <Compass size={32} />
          </div>
          <h1 className="text-5xl font-extrabold text-white tracking-tight">404</h1>
          <p className="mt-3 text-xl font-bold text-white">Page Not Found</p>
          <p className="mt-2 text-sm sm:text-base text-zinc-300">
            The page you are looking for doesn't exist or has moved.
          </p>
          <Link to="/" className="btn-primary mt-8 inline-flex text-base">
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
