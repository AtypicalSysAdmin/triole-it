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
    <footer className="border-t border-zinc-800 bg-[#0D0D10] text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Triole IT Logo" className="h-9 w-auto" />
              <span className="text-2xl font-extrabold gradient-text">TRIOLE IT</span>
            </Link>
            <p className="text-base text-zinc-300 leading-relaxed">
              Friendly, reliable local IT support, computer repairs, and network troubleshooting for home users and small businesses across Vancouver &amp; surrounding areas.
            </p>
            <div className="flex gap-5 mt-6">
              <a
                href="https://instagram.com/triole_it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-purple-400 transition-colors p-1"
                aria-label="Instagram"
              >
                <InstagramIcon size={24} />
              </a>
              <a
                href="mailto:admin@triole-it.com"
                className="text-zinc-300 hover:text-purple-400 transition-colors p-1"
                aria-label="Email Us"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-3 text-base">
              <li>
                <Link to="/" className="transition hover:text-purple-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="transition hover:text-purple-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="transition hover:text-purple-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="transition hover:text-purple-300">
                  Contacts
                </Link>
              </li>
              <li>
                <a
                  href="https://store.triole-it.com"
                  rel="noopener noreferrer"
                  className="transition hover:text-purple-300 inline-flex items-center gap-1.5 text-purple-300 font-semibold"
                >
                  <span>Triole Store</span>
                  <ExternalLink size={15} className="text-purple-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="mt-4 space-y-3.5 text-base">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-purple-400 shrink-0" />
                <a href="mailto:admin@triole-it.com" className="hover:text-purple-300 transition-colors">
                  admin@triole-it.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <InstagramIcon size={18} />
                <a href="https://instagram.com/triole_it" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
                  @triole_it
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-purple-400 shrink-0" />
                <span>Vancouver, BC &amp; Surrounding Areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800/80 pt-8 text-center text-sm text-zinc-400">
          &copy; {currentYear} Triole IT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
