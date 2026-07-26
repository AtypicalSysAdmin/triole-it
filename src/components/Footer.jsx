import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageSquare, Globe, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const InstagramIcon = ({ size = 24 }) => (
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
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D10] border-t border-border pt-16 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 mb-6" aria-label="Triole IT Home">
              <img src={logo} alt="Triole IT Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold gradient-text">TRIOLE IT</span>
            </Link>
            <p className="text-muted text-sm mb-6">
              Empowering businesses with cutting-edge IT solutions, cybersecurity, and cloud infrastructure management.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/triole_it" target="_blank" rel="noopener noreferrer" className="text-muted hover:text-primary transition-colors" aria-label="Instagram"><InstagramIcon size={20} /></a>
              <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Send Message"><MessageSquare size={20} /></a>
              <a href="#" className="text-muted hover:text-primary transition-colors" aria-label="Global Presence"><Globe size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="link-list">
              <li><Link to="/" className="link-item">Home</Link></li>
              <li><Link to="/about" className="link-item">About Us</Link></li>
              <li><Link to="/services" className="link-item">Services</Link></li>
              <li><Link to="/contacts" className="link-item">Contacts</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact Us</h4>
            <ul className="link-list">
              <li className="contact-item">
                <Mail size={18} className="contact-icon" />
                <span>admin@triole-it.com</span>
              </li>
              <li className="contact-item">
                <InstagramIcon size={18} className="contact-icon" />
                <a href="https://instagram.com/triole_it" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@triole_it</a>
              </li>
              <li className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Vancouver, BC, Canada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-xs text-muted">
          <p>&copy; {currentYear} Triole IT Solutions Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
