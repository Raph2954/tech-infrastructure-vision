
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">InfraTech Solutions</h3>
            <p className="text-slate-300 mb-4">
              Your trusted partner for infrastructure audits, virtualization deployment, and strategic IT procurement.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#audit" className="hover:text-cyan-400 transition-colors">Infrastructure Audit</a></li>
              <li><a href="#virtualization" className="hover:text-cyan-400 transition-colors">Virtualization</a></li>
              <li><a href="#procurement" className="hover:text-cyan-400 transition-colors">Strategic Procurement</a></li>
            </ul>
          </div>
          
          <div id="contact">
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-300">
                <Mail size={16} className="text-cyan-400" />
                <span>contact@infratechsolutions.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Phone size={16} className="text-cyan-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin size={16} className="text-cyan-400" />
                <span>Available Globally</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 InfraTech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
