import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';

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
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#09090B]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Triole IT Logo"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]"
          />
          <span className="text-2xl font-extrabold tracking-tight gradient-text">
            TRIOLE IT
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-base font-semibold transition hover:text-white hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.5)] ${location.pathname === link.path
                  ? 'text-white drop-shadow-[0_0_6px_rgba(168,85,247,0.5)]'
                  : 'text-zinc-300'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://store.triole-it.com"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-semibold text-purple-300 transition-all duration-200 hover:border-purple-500/60 hover:bg-purple-500/20 hover:text-purple-100 hover:shadow-[0_0_12px_rgba(168,85,247,0.3)] hover:scale-[1.02]"
          >
            <ShoppingBag size={16} className="text-purple-400" />
            <span>Triole Store</span>
            <ExternalLink size={14} className="text-purple-400" />
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="rounded-xl p-2.5 text-zinc-300 hover:bg-zinc-800/80 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="border-t border-zinc-800 bg-[#09090B]/95 px-5 pb-6 pt-3 md:hidden space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-3 text-base font-semibold transition hover:text-white ${location.pathname === link.path ? 'text-purple-400' : 'text-zinc-300'
                }`}
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://store.triole-it.com"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-3 text-base font-semibold text-purple-400 hover:text-purple-300 border-t border-zinc-800/60 mt-2 pt-3"
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
