import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { COMPANY_INFO } from '../data/company';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contacts', path: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#0a0a0c]/90 backdrop-blur-md">
      <div className="container-custom flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 min-h-[44px]">
          <img
            src={logo}
            alt="Triole IT Logo"
            className="h-9 w-auto"
          />
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
            TRIOLE IT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-semibold transition min-h-[44px] inline-flex items-center hover:text-white ${
                location.pathname === link.path
                  ? 'text-white border-b-2 border-purple-500'
                  : 'text-zinc-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={COMPANY_INFO.storeUrl}
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300 transition hover:border-purple-500/60 hover:bg-purple-500/20 hover:text-white min-h-[44px]"
          >
            <ShoppingBag size={16} className="text-purple-400" />
            <span>Triole Store</span>
            <ExternalLink size={14} className="text-purple-400" />
          </a>
        </nav>

        {/* Mobile Toggle with 44x44px Touch Target */}
        <button
          className="flex h-11 w-11 items-center justify-center rounded-lg text-zinc-300 hover:bg-zinc-800 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-zinc-800 bg-[#121215] px-4 pb-6 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center min-h-[44px] text-base font-semibold transition hover:text-white ${
                location.pathname === link.path ? 'text-purple-300 font-bold' : 'text-zinc-300'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={COMPANY_INFO.storeUrl}
            rel="noopener noreferrer"
            className="flex items-center justify-between min-h-[44px] text-base font-semibold text-purple-300 hover:text-white border-t border-zinc-800 mt-2 pt-2"
            onClick={() => setMobileOpen(false)}
          >
            <span className="flex items-center gap-2">
              <ShoppingBag size={18} />
              <span>Triole Store</span>
            </span>
            <ExternalLink size={16} />
          </a>
        </nav>
      )}
    </header>
  );
}
