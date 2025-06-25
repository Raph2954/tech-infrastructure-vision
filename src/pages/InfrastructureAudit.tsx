
import { ArrowLeft, CheckCircle, Shield, Search, BarChart, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const InfrastructureAudit = () => {
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
                Infrastructure <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Audit & Design</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Get a comprehensive assessment of your current infrastructure and a roadmap for improvement. 
                Our audit process identifies performance bottlenecks, security gaps, and opportunities for optimization.
              </p>
              <Link 
                to="/contact" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
              >
                Schedule Assessment
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop&crop=center" 
                alt="Infrastructure Assessment" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">What's Included</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Performance Analysis</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Complete performance analysis of VM hosts, storage systems, and network infrastructure
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Settings className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Virtualization Review</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Detailed review of virtualization stack (VMware, Proxmox, or hybrid environments)
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Security Assessment</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Security vulnerability identification and backup system verification
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Our Assessment Process</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-600 font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Initial Discovery</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  We start with a comprehensive review of your current infrastructure, understanding your business 
                  requirements, and identifying critical systems and workflows.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-600 font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Technical Assessment</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Our team conducts thorough performance testing, security scanning, and capacity analysis 
                  to identify bottlenecks and vulnerabilities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-cyan-600 font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Detailed Report</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  You receive a comprehensive report with prioritized recommendations, ROI analysis, 
                  and a clear roadmap for improvements.
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
            Ready for Your Infrastructure Assessment?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Get a clear understanding of your current infrastructure and a roadmap for improvement.
          </p>
          <Link 
            to="/contact" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfrastructureAudit;
