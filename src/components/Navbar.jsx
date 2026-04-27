import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contacts', path: '/contacts' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group">
          <Link 
            to="/" 
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background rounded-lg p-1 transition-all"
          >
            <img src={logo} alt="Triole IT Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-bold gradient-text tracking-tighter">TRIOLE IT</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.path ? 'text-primary' : 'text-foreground/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contacts" className="px-5 py-2 rounded-full glass border border-primary/50 text-sm font-semibold hover:bg-primary/10 transition-all neon-border">
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground bg-transparent" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 w-full p-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
