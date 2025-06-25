
import { Shield, Zap, Target, Server, Network, HardDrive, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Why Infrastructure <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Matters</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Understanding the critical role of IT infrastructure in your business success
          </p>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">The Foundation of Your Business</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Server className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Server Infrastructure</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Your servers are the backbone of your operations. Proper virtualization and redundancy ensure 
                your business stays online even when hardware fails.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Network className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Network Design</h3>
              <p className="text-slate-600 dark:text-slate-300">
                A well-designed network ensures fast, secure communication between your systems and users. 
                Poor network design leads to bottlenecks and security vulnerabilities.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/30 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <HardDrive className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Storage Solutions</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Your data is your business. Proper storage architecture with backup and disaster recovery 
                protects against data loss and ensures business continuity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">The Cost of Poor Infrastructure</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                <span className="text-red-600 dark:text-red-400 text-lg font-bold">×</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Downtime Costs Money</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Every minute your systems are down, you're losing revenue, productivity, and customer trust. 
                  The average cost of downtime for small businesses is $8,000 per hour.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                <span className="text-red-600 dark:text-red-400 text-lg font-bold">×</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Security Breaches</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Poor infrastructure often means poor security. Data breaches can cost Nigerian businesses 
                  millions of naira in fines, legal fees, and lost customer trust.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                <span className="text-red-600 dark:text-red-400 text-lg font-bold">×</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Scaling Limitations</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Without proper infrastructure planning, your systems become bottlenecks to growth. 
                  You'll hit walls that require expensive overhauls instead of smooth scaling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">The Right Infrastructure Approach</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg">
                <span className="text-green-600 dark:text-green-400 text-lg font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Start with Assessment</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Before making any changes, understand what you have and where the gaps are. 
                  A proper infrastructure audit reveals hidden problems and opportunities.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg">
                <span className="text-green-600 dark:text-green-400 text-lg font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Design for Growth</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Build systems that can scale with your business. Virtualization and cloud-ready 
                  architectures let you add capacity without starting from scratch.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-green-100 dark:bg-green-900/20 p-2 rounded-lg">
                <span className="text-green-600 dark:text-green-400 text-lg font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Buy Smart</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Don't waste money on over-spec'd equipment or under-powered systems. 
                  Strategic procurement means buying exactly what you need for your workload.
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
            Ready to Build Better Infrastructure?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Let's assess your current setup and create a plan that supports your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link 
              to="/services" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white dark:hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearnMore;
