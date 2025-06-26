
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-100/80 via-purple-50/30 to-pink-50/30 dark:from-slate-900/80 dark:via-purple-900/20 dark:to-pink-900/20 border-t border-slate-200/50 dark:border-slate-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in-left">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-gradient">
              InfraTech Solutions
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
              Your trusted partner for infrastructure audits, virtualization deployment, and strategic IT procurement.
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-shimmer"></div>
          </div>
          
          <div className="animate-fade-in-up animate-stagger-2">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 hover-glow">
              Services
            </h4>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              {[
                { to: '/infrastructure-audit', label: 'Infrastructure Audit' },
                { to: '/virtualization-deployment', label: 'Virtualization' },
                { to: '/strategic-procurement', label: 'Strategic Procurement' }
              ].map((link, index) => (
                <li key={link.to} className={`animate-fade-in-up animate-stagger-${index + 3}`}>
                  <Link 
                    to={link.to} 
                    className="hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 hover-scale relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-purple-600 after:to-pink-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in-right animate-stagger-3">
            <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 hover-glow">
              Contact
            </h4>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'contact@infratechsolutions.com' },
                { icon: Phone, text: '+234 (0) 123 456 7890' },
                { icon: MapPin, text: 'Lagos, Nigeria' }
              ].map((contact, index) => (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover-lift group animate-fade-in-up animate-stagger-${index + 4}`}
                >
                  <contact.icon size={16} className="text-purple-600 dark:text-purple-400 group-hover:animate-bounce-custom transition-all duration-300" />
                  <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-200/50 dark:border-slate-800/50 mt-8 pt-8 text-center text-slate-500 dark:text-slate-400 animate-fade-in-up animate-stagger-6">
          <p className="hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 cursor-default">
            &copy; 2024 InfraTech Solutions. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full gradient-bg-${index + 1} animate-float hover-scale`}
                style={{ animationDelay: `${index * 0.5}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
