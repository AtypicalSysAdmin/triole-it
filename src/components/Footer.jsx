import { Link } from 'react-router-dom';
import { Mail, MapPin, ExternalLink, Cookie, Scale } from 'lucide-react';
import logo from '../assets/logo.png';
import InstagramIcon from './icons/InstagramIcon';
import { openCookiePreferences } from '../utils/consentManager';
import { COMPANY_INFO } from '../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-[#0a0a0c] text-zinc-300">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 min-h-[44px]">
              <img src={logo} alt="Triole IT Logo" className="h-8 w-auto" />
              <span className="text-xl font-extrabold text-white">{COMPANY_INFO.name.toUpperCase()}</span>
            </Link>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Friendly, reliable local IT support, computer repairs, and network troubleshooting for home users and small businesses across Vancouver &amp; surrounding areas.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={COMPANY_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-lg text-zinc-300 hover:text-purple-300 hover:bg-zinc-800 transition"
                aria-label="Instagram profile"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex h-11 w-11 items-center justify-center rounded-lg text-zinc-300 hover:text-purple-300 hover:bg-zinc-800 transition"
                aria-label="Send us an Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="mt-4 space-y-1 text-sm">
              <li>
                <Link to="/" className="flex items-center min-h-[44px] text-zinc-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center min-h-[44px] text-zinc-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center min-h-[44px] text-zinc-300 hover:text-white transition">
                  Services Catalog
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="flex items-center min-h-[44px] text-zinc-300 hover:text-white transition">
                  Contact Support
                </Link>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.storeUrl}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-purple-300 hover:text-white font-semibold transition"
                >
                  <span>Triole Store</span>
                  <ExternalLink size={14} className="text-purple-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <Scale size={16} className="text-purple-400" />
              <span>Legal &amp; Compliance</span>
            </h4>
            <ul className="mt-4 space-y-1 text-sm">
              <li>
                <Link to="/privacy" className="flex items-center min-h-[44px] text-zinc-300 hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="flex items-center min-h-[44px] text-zinc-300 hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/dmca" className="flex items-center min-h-[44px] text-zinc-300 hover:text-white transition">
                  Copyright &amp; IP Notice
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="flex items-center gap-2 min-h-[44px] text-purple-300 hover:text-white text-left font-medium cursor-pointer transition"
                >
                  <Cookie size={16} />
                  <span>Cookie Preferences</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={openCookiePreferences}
                  className="flex items-center min-h-[44px] text-zinc-400 hover:text-zinc-200 text-left text-xs cursor-pointer transition"
                >
                  Do Not Sell / Share My Info (Opt-Out)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Designated Agent */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contact &amp; Location</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-purple-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="min-h-[44px] inline-flex items-center text-zinc-300 hover:text-white transition">
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon size={16} />
                <a href={COMPANY_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="min-h-[44px] inline-flex items-center text-zinc-300 hover:text-pink-300 transition">
                  {COMPANY_INFO.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-purple-400 shrink-0 mt-1" />
                <span>{COMPANY_INFO.address.display}</span>
              </li>
              <li className="pt-3 border-t border-zinc-800 text-xs text-zinc-400">
                <strong className="text-zinc-300 block mb-1">Copyright Inquiries:</strong>
                <a href={`mailto:${COMPANY_INFO.copyrightEmail}`} className="text-purple-300 hover:underline min-h-[36px] inline-flex items-center">
                  {COMPANY_INFO.copyrightEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; {currentYear} {COMPANY_INFO.name}. All rights reserved. &bull; Registered in British Columbia, Canada.
          </div>
          <div className="flex flex-wrap items-center gap-4 text-zinc-400">
            <span>Canadian Copyright Act (Notice &amp; Notice)</span>
            <span>&bull;</span>
            <Link to="/privacy" className="hover:text-zinc-200 underline min-h-[44px] inline-flex items-center">Privacy Policy</Link>
            <span>&bull;</span>
            <Link to="/terms" className="hover:text-zinc-200 underline min-h-[44px] inline-flex items-center">Terms</Link>
            <span>&bull;</span>
            <Link to="/dmca" className="hover:text-zinc-200 underline min-h-[44px] inline-flex items-center">Copyright Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
