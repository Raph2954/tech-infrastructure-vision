
import { Menu, X, Home } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200/50 dark:border-slate-800/50 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-4 animate-fade-in-left">
            <Link to="/" className="text-xl font-bold text-slate-900 dark:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 hover-scale">
              InfraTech Solutions
            </Link>
            {location.pathname !== '/' && (
              <Link 
                to="/" 
                className="flex items-center gap-1 text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 hover-bounce"
                title="Home"
              >
                <Home size={20} className="animate-pulse-custom" />
                <span className="hidden sm:inline">Home</span>
              </Link>
            )}
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 animate-fade-in-down">
            {[
              { to: '/services', label: 'Services' },
              { to: '/about', label: 'About' },
              { to: '/learn-more', label: 'Learn More' },
              { to: '/contact', label: 'Contact' }
            ].map((link, index) => (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`text-slate-600 dark:text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 hover-lift animate-fade-in-down animate-stagger-${index + 1} relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-purple-600 after:to-pink-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 animate-fade-in-right">
            <ThemeToggle />
            <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover-lift btn-ripple magnetic animate-glow">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2 animate-fade-in-right">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover-scale"
            >
              {isMenuOpen ? <X size={24} className="animate-scale-in" /> : <Menu size={24} className="animate-scale-in" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50 dark:border-slate-800/50 animate-fade-in-down">
            <nav className="flex flex-col space-y-4">
              {[
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About' },
                { to: '/learn-more', label: 'Learn More' },
                { to: '/contact', label: 'Contact' }
              ].map((link, index) => (
                <Link 
                  key={link.to}
                  to={link.to} 
                  className={`text-slate-600 dark:text-slate-300 hover:text-transparent hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:bg-clip-text transition-all duration-300 hover-bounce animate-fade-in-up animate-stagger-${index + 1}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg transition-all duration-300 w-fit hover-lift btn-ripple animate-fade-in-up animate-stagger-5"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
