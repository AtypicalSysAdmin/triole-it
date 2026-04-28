import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageSquare, Globe, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D0D10] border-t border-border pt-16 pb-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Triole IT" className="h-8 w-auto" />
              <span className="text-xl font-bold gradient-text">TRIOLE IT</span>
            </Link>
            <p className="text-muted text-sm mb-6">
              Empowering businesses with cutting-edge IT solutions, cybersecurity, and cloud infrastructure management.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted hover:text-primary transition-colors"><MessageSquare size={20} /></a>
              <a href="#" className="text-muted hover:text-primary transition-colors"><Globe size={20} /></a>
              <a href="#" className="text-muted hover:text-primary transition-colors"><ArrowRight size={20} /></a>
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
                <Phone size={18} className="contact-icon" />
                <span>+1 (604) 967-2295</span>
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
