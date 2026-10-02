import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink, Cookie, Scale } from 'lucide-react';
import logo from '../assets/logo.png';
import { openCookiePreferences } from '../utils/consentManager';

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
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Triole IT Logo" className="h-9 w-auto" />
              <span className="text-2xl font-extrabold gradient-text">TRIOLE IT</span>
            </Link>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Friendly, reliable local IT support, computer repairs, and network troubleshooting for home users and small businesses across Vancouver &amp; surrounding areas.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/triole_it"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-purple-400 transition-colors p-1"
                aria-label="Instagram"
              >
                <InstagramIcon size={22} />
              </a>
              <a
                href="mailto:admin@triole-it.com"
                className="text-zinc-300 hover:text-purple-400 transition-colors p-1"
                aria-label="Email Us"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
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
                  Services Catalog
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="transition hover:text-purple-300">
                  Contact Support
                </Link>
              </li>
              <li>
                <a
                  href="https://store.triole-it.com"
                  rel="noopener noreferrer"
                  className="transition hover:text-purple-300 inline-flex items-center gap-1.5 text-purple-300 font-semibold"
                >
                  <span>Triole Store</span>
                  <ExternalLink size={14} className="text-purple-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance (Categories 5, 6, 7) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Scale size={16} className="text-purple-400" />
              <span>Legal &amp; Compliance</span>
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link to="/privacy" className="transition hover:text-purple-300 text-zinc-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="transition hover:text-purple-300 text-zinc-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/dmca" className="transition hover:text-purple-300 text-zinc-300">
                  DMCA &amp; Copyright Policy
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="transition hover:text-purple-300 text-purple-400 text-left flex items-center gap-1.5 font-medium cursor-pointer"
                >
                  <Cookie size={14} />
                  <span>Cookie Preferences</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="transition hover:text-purple-300 text-zinc-400 text-left text-xs cursor-pointer"
                >
                  Do Not Sell or Share My Info
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Designated Agent */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Contact &amp; Location</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-purple-400 shrink-0" />
                <a href="mailto:admin@triole-it.com" className="hover:text-purple-300 transition-colors">
                  admin@triole-it.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon size={16} />
                <a href="https://instagram.com/triole_it" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors">
                  @triole_it
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-purple-400 shrink-0 mt-1" />
                <span>Vancouver, BC, Canada &amp; Surrounding Areas</span>
              </li>
              <li className="pt-2 border-t border-zinc-800/60 text-xs text-zinc-400">
                <strong className="text-zinc-300 block mb-0.5">DMCA Copyright Agent:</strong>
                <a href="mailto:copyright@triole-it.com" className="text-purple-300 hover:underline">
                  copyright@triole-it.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: DMCA Safe Harbor Notice & Copyright */}
        <div className="mt-12 border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; {currentYear} Triole IT. All rights reserved. &bull; Registered in British Columbia, Canada.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-zinc-400">
            <span>DMCA Safe Harbor &sect; 512(c)</span>
            <span>&bull;</span>
            <Link to="/privacy" className="hover:text-purple-300 underline">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/terms" className="hover:text-purple-300 underline">Terms</Link>
            <span>&bull;</span>
            <Link to="/dmca" className="hover:text-purple-300 underline">DMCA Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
