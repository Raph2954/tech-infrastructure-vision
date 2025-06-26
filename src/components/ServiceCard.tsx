
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  summary: string;
  includes: string[];
  idealFor: string;
  className?: string;
  icon?: React.ReactNode;
  learnMoreLink: string;
}

const ServiceCard = ({ title, summary, includes, idealFor, className = "", icon, learnMoreLink }: ServiceCardProps) => {
  return (
    <div className={`group interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-6 sm:p-8 hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-500 hover:border-purple-500/50 dark:hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 particle-bg ${className}`}>
      
      {/* Floating decoration */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Sparkles className="text-purple-500 animate-float" size={20} />
      </div>
      
      <div className="flex items-center gap-4 mb-6 animate-fade-in-up">
        {icon && (
          <div className="text-purple-600 dark:text-purple-400 flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 hover-glow">
            {icon}
          </div>
        )}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
      </div>
      
      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-sm sm:text-base animate-fade-in-up animate-stagger-2 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-all duration-300">
        {summary}
      </p>
      
      <div className="mb-6 animate-fade-in-up animate-stagger-3">
        <h4 className="text-purple-700 dark:text-purple-400 font-semibold mb-4 text-sm sm:text-base flex items-center gap-2 group-hover:animate-text-glow">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 animate-pulse-custom"></div>
          Includes:
        </h4>
        <ul className="space-y-3">
          {includes.map((item, index) => (
            <li 
              key={index} 
              className={`flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm sm:text-base hover:text-slate-900 dark:hover:text-white transition-all duration-300 animate-fade-in-left animate-stagger-${index + 4}`}
            >
              <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0 group-hover:animate-bounce-custom transition-all duration-300" />
              <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-8 animate-fade-in-up animate-stagger-4">
        <h4 className="text-purple-700 dark:text-purple-400 font-semibold mb-3 text-sm sm:text-base flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 animate-pulse-custom" style={{animationDelay: '0.5s'}}></div>
          Ideal for:
        </h4>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-all duration-300">
          {idealFor}
        </p>
      </div>
      
      <Link 
        to={learnMoreLink}
        className="w-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-600 hover:to-pink-600 dark:from-slate-700/50 dark:to-slate-600/50 dark:hover:from-purple-600 dark:hover:to-pink-600 text-slate-900 hover:text-white dark:text-white py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group-hover:shadow-lg font-medium hover-lift btn-ripple animate-fade-in-up animate-stagger-5 magnetic"
      >
        <span>Learn More</span>
        <ArrowRight size={16} className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
      </Link>
    </div>
  );
};

export default ServiceCard;
