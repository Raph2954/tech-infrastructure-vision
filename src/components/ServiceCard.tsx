
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
    <div className={`bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:border-cyan-500/50 group ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-cyan-400">{icon}</div>}
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-slate-300 mb-6 leading-relaxed">{summary}</p>
      
      <div className="mb-6">
        <h4 className="text-cyan-400 font-semibold mb-3">Includes:</h4>
        <ul className="space-y-2">
          {includes.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-slate-300">
              <CheckCircle size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h4 className="text-cyan-400 font-semibold mb-2">Ideal for:</h4>
        <p className="text-slate-300">{idealFor}</p>
      </div>
      
      <button className="w-full bg-slate-700 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 group-hover:bg-cyan-600">
        Learn More <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default ServiceCard;
