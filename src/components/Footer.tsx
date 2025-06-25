
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">InfraTech Solutions</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Your trusted partner for infrastructure audits, virtualization deployment, and strategic IT procurement.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Services</h4>
            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Infrastructure Audit</Link></li>
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Virtualization</Link></li>
              <li><Link to="/services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Strategic Procurement</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Mail size={16} className="text-cyan-600 dark:text-cyan-400" />
                <span>contact@infratechsolutions.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <Phone size={16} className="text-cyan-600 dark:text-cyan-400" />
                <span>+234 (0) 123 456 7890</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
                <MapPin size={16} className="text-cyan-600 dark:text-cyan-400" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center text-slate-500 dark:text-slate-400">
          <p>&copy; 2024 InfraTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
