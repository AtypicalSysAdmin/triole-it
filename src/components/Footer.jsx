import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink } from 'lucide-react';
import logo from '../assets/logo.png';

const InstagramIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-[#0D0D10] text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src={logo} alt="Triole IT Logo" className="h-7 w-auto" />
              <span className="text-lg font-bold gradient-text">TRIOLE IT</span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Friendly, reliable local IT support, computer repairs, and network troubleshooting for home users and small businesses across Vancouver &amp; surrounding areas.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/triole_it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-purple-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="mailto:admin@triole-it.com"
                className="text-zinc-400 hover:text-purple-400 transition-colors"
                aria-label="Email Us"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/" className="transition hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-purple-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-purple-400">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="transition hover:text-purple-400">
                  Contacts
                </Link>
              </li>
              <li>
                <a
                  href="https://store.triole-it.com"
                  rel="noopener noreferrer"
                  className="transition hover:text-purple-400 inline-flex items-center gap-1 text-purple-300"
                >
                  <span>Triole Store</span>
                  <ExternalLink size={12} className="text-purple-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-200">Contact Us</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-purple-400 shrink-0" />
                <a href="mailto:admin@triole-it.com" className="hover:text-purple-400 transition-colors">
                  admin@triole-it.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon size={15} />
                <a href="https://instagram.com/triole_it" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                  @triole_it
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-purple-400 shrink-0" />
                <span>Vancouver, BC &amp; Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-zinc-800/80 pt-6 text-center text-xs text-zinc-400">
          &copy; {currentYear} Triole IT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
