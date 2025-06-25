
import { Server, Network, ShoppingCart, ArrowRight, Shield, Zap, Target, Search, Settings, FileText, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

const Index = () => {
  const services = [
    {
      title: "Infrastructure Audit & Design",
      summary: "Uncover bottlenecks. Design for growth. Your infrastructure might be working—but is it ready for the demands of tomorrow? Our audit process identifies hidden risks, inefficiencies, and missed opportunities in your current setup.",
      includes: [
        "Full performance check of VM hosts, storage, and network",
        "Review of virtualization stack (VMware, Proxmox, or hybrid)",
        "High availability (HA) and failover readiness assessment",
        "Security gaps and backup verification",
        "A detailed infrastructure upgrade plan tailored to your business goals"
      ],
      idealFor: "Organizations running outdated or patched-together systems that need stability, performance, or clarity on next steps.",
      icon: <Search size={24} />
    },
    {
      title: "Virtualization Deployment & Optimization", 
      summary: "Modern, reliable virtual environments—built to last. Whether you're deploying for the first time or migrating from a legacy system, we help you design and launch a virtualization stack that works under pressure and scales with your team.",
      includes: [
        "Deployment of VMware, Proxmox, or nested lab environments",
        "Migration of existing physical or virtual workloads",
        "Cluster setup, load balancing, and storage integration", 
        "Custom HA configuration and system hardening",
        "Full documentation + training for internal staff"
      ],
      idealFor: "Small-to-medium organizations needing dependable IT infrastructure without hiring a full internal IT team.",
      icon: <Settings size={24} />
    },
    {
      title: "Strategic Procurement & IT Advisory",
      summary: "Buy the right tools—nothing more, nothing less. You don't need to waste money on underpowered laptops or overpriced servers. We help you buy exactly what your infrastructure needs—no guesswork, no stress.",
      includes: [
        "Needs analysis based on your actual workload and growth plans",
        "Hardware sizing and software licensing recommendations", 
        "Trusted vendor sourcing or supervised purchasing",
        "Licensing, renewal, and installation support"
      ],
      idealFor: "Organizations tired of buying hardware that breaks, lags, or gets replaced too soon—and want strategic input before they spend.",
      icon: <Target size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Infrastructure
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> That Actually Works</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              We provide expert infrastructure and IT solutions designed to help Nigerian businesses grow, 
              scale, and stay online—without unnecessary complexity or cost.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Book Free Consultation <ArrowRight size={20} />
              </Link>
              <Link 
                to="/learn-more" 
                className="border border-slate-300 dark:border-slate-600 hover:border-cyan-400 text-slate-900 dark:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Infrastructure Matters</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Your infrastructure is the foundation of everything. When it's right, your business thrives. 
              When it's wrong, everything suffers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Performance That Scales</h3>
              <p className="text-slate-600 dark:text-slate-300">Infrastructure that grows with your business, not against it.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Rock-Solid Security</h3>
              <p className="text-slate-600 dark:text-slate-300">Protect your data and operations with proven security practices.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Smart Procurement</h3>
              <p className="text-slate-600 dark:text-slate-300">Buy the right gear for your actual needs, not vendor recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Expert infrastructure and IT solutions designed to help Nigerian businesses grow, scale, and stay online—without unnecessary complexity or cost.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                {...service}
                className={index === 1 ? "lg:scale-105" : ""}
              />
            ))}
          </div>
          
          {/* Cross-sell strategy */}
          <div className="mt-16 bg-slate-800/30 border border-slate-700 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">The Infrastructure Flywheel</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-300">
              <div className="text-center">
                <div className="bg-cyan-600/20 p-4 rounded-lg mb-2">
                  <Search className="text-cyan-400 mx-auto" size={24} />
                </div>
                <span className="font-semibold">Audit</span>
                <p className="text-sm">Exposes gaps</p>
              </div>
              <ArrowRight className="text-cyan-400 hidden md:block" size={20} />
              <div className="text-center">
                <div className="bg-cyan-600/20 p-4 rounded-lg mb-2">
                  <Settings className="text-cyan-400 mx-auto" size={24} />
                </div>
                <span className="font-semibold">Deployment</span>
                <p className="text-sm">Requires gear</p>
              </div>
              <ArrowRight className="text-cyan-400 hidden md:block" size={20} />
              <div className="text-center">
                <div className="bg-cyan-600/20 p-4 rounded-lg mb-2">
                  <Target className="text-cyan-400 mx-auto" size={24} />
                </div>
                <span className="font-semibold">Procurement</span>
                <p className="text-sm">Builds trust</p>
              </div>
            </div>
            <p className="text-center mt-6 text-slate-300">
              Each service naturally leads to the next, creating ongoing value for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/20 to-cyan-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Book a free 30-minute call. We'll review your current environment and recommend a simple next step—no hard sell, no obligation.
          </p>
          <Link 
            to="/contact" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2 mx-auto w-fit"
          >
            <Calendar size={20} />
            Book a Free Call
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Fix Your Infrastructure?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Stop working around broken systems. Let's build infrastructure that actually supports your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link 
              to="/learn-more" 
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white dark:hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Download Infrastructure Guide
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
