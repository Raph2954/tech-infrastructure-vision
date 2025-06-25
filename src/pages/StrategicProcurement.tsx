
import { ArrowLeft, CheckCircle, Target, DollarSign, ShoppingCart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const StrategicProcurement = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Link 
            to="/services" 
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Strategic <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Procurement & IT Advisory</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Make informed technology purchases with expert guidance. We help you buy the right hardware 
                and software for your specific needs and budget, avoiding costly mistakes.
              </p>
              <Link 
                to="/contact" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
              >
                Get Buying Guidance
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop&crop=center" 
                alt="Strategic Planning" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Strategic Procurement Matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Why Strategic Procurement Matters</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-red-600 dark:text-red-400 text-xl font-bold">×</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Common Procurement Mistakes</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Buying over-spec'd equipment that wastes money
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Under-powered systems that can't handle workloads
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Incompatible hardware that doesn't work together
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Poor vendor relationships and support
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="bg-green-100 dark:bg-green-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-green-600 dark:text-green-400 text-xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Our Strategic Approach</h3>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Right-sized solutions for your actual needs
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Future-proof investments that scale
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Vendor-neutral recommendations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">•</span>
                  Total cost of ownership analysis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Our Procurement Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-cyan-600 dark:text-cyan-400" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Workload Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                We analyze your current and future workloads to understand exactly what you need
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="text-cyan-600 dark:text-cyan-400" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Vendor Sourcing</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                We source from trusted vendors and negotiate the best prices and terms
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="text-cyan-600 dark:text-cyan-400" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">TCO Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Complete total cost of ownership analysis including support and maintenance
              </p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-cyan-600 dark:text-cyan-400" size={32} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Ongoing Support</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Continued support for renewals, upgrades, and strategic planning
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Help You Buy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">What We Help You Buy</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Server Hardware</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Right-sized servers for your workloads, from entry-level systems to enterprise-grade hardware
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Storage Solutions</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Storage arrays, backup systems, and cloud storage solutions tailored to your data needs
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Network Equipment</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Switches, routers, firewalls, and wireless systems for secure, high-performance networking
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Software Licensing</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Strategic software licensing including virtualization, security, and productivity software
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Make Smart Technology Purchases
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Get expert guidance on your next technology purchase and avoid costly mistakes.
          </p>
          <Link 
            to="/contact" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StrategicProcurement;
