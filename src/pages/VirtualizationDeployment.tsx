
import { ArrowLeft, CheckCircle, Server, Zap, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VirtualizationDeployment = () => {
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
                Virtualization <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Deployment & Optimization</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                Design, deploy, and optimize modern virtualization environments that deliver reliability, 
                performance, and scalability. From fresh installations to complex migrations.
              </p>
              <Link 
                to="/contact" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
              >
                Start Your Project
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop&crop=center" 
                alt="Virtualization Infrastructure" 
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Technologies We Work With</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="text-cyan-600 dark:text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">VMware vSphere</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Industry-leading virtualization platform with advanced features for enterprise environments
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-cyan-600 dark:text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Proxmox VE</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Open-source virtualization management platform combining KVM and LXC technologies
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-cyan-600 dark:text-cyan-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Hybrid Solutions</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Custom hybrid environments combining multiple virtualization technologies
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Complete Deployment Services</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Custom Deployment</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Tailored deployment of VMware vSphere, Proxmox VE, or hybrid solutions based on your specific requirements
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Seamless Migration</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Migration from physical servers or legacy virtual environments with minimal downtime
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">High Availability Setup</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Advanced cluster configuration with automated failover and recovery capabilities
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Performance Optimization</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Resource optimization, load balancing, and security hardening for optimal performance
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={20} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Training & Documentation</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Complete documentation and comprehensive staff training programs
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
            Ready to Modernize Your Infrastructure?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Let's discuss your virtualization needs and create a solution that grows with your business.
          </p>
          <Link 
            to="/contact" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VirtualizationDeployment;
