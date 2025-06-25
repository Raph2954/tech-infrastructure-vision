
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  summary: string;
  includes: string[];
  idealFor: string;
  className?: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({ title, summary, includes, idealFor, className = "", icon }: ServiceCardProps) => {
  return (
    <div className={`bg-white dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 rounded-xl p-6 sm:p-8 hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all duration-300 hover:border-cyan-500 dark:hover:border-cyan-500/50 hover:shadow-lg group ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-cyan-600 dark:text-cyan-400 flex-shrink-0">{icon}</div>}
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
      </div>
      
      <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">{summary}</p>
      
      <div className="mb-6">
        <h4 className="text-cyan-700 dark:text-cyan-400 font-semibold mb-3 text-sm sm:text-base">Includes:</h4>
        <ul className="space-y-2">
          {includes.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm sm:text-base">
              <CheckCircle size={16} className="text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-cyan-700 dark:text-cyan-400 font-semibold mb-2 text-sm sm:text-base">Ideal for:</h4>
        <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">{idealFor}</p>
      </div>
      
      <button className="w-full bg-slate-200 hover:bg-cyan-600 dark:bg-slate-700 dark:hover:bg-cyan-600 text-slate-900 hover:text-white dark:text-white py-3 px-4 sm:px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group-hover:bg-cyan-600 group-hover:text-white text-sm sm:text-base font-medium">
        Learn More <ArrowRight size={16} className="flex-shrink-0" />
      </button>
    </div>
  );
};

export default ServiceCard;
