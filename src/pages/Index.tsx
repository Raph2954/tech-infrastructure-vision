
import { Server, Network, ShoppingCart, ArrowRight, Shield, Zap, Target } from 'lucide-react';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';

const Index = () => {
  const services = [
    {
      title: "Infrastructure Audit & Design",
      summary: "Get a clear view of your current infrastructure performance, risks, and scaling readiness.",
      includes: [
        "VM host and storage performance audit",
        "Network topology review", 
        "HA, backup, and security gap checks",
        "Tailored recommendations for upgrades or optimization"
      ],
      idealFor: "SMEs, tech hubs, and NGOs using aging servers or inconsistent VMs",
      icon: <Shield size={24} />
    },
    {
      title: "Virtualization Deployment & Optimization", 
      summary: "Set up or improve your virtual infrastructure with zero guesswork—Proxmox, VMware, or hybrid.",
      includes: [
        "Fresh installations or migration",
        "Storage/cluster configuration",
        "Resource balancing and HA setup", 
        "Staff handoff & technical documentation"
      ],
      idealFor: "Businesses expanding or consolidating their IT infrastructure",
      icon: <Server size={24} />
    },
    {
      title: "Strategic Procurement & IT Advisory",
      summary: "Buy smarter, not just cheaper. I help you get the right servers, software, and networking gear—sized for your real needs.",
      includes: [
        "Requirements analysis (workload matching)",
        "Vendor sourcing or recommendations", 
        "Supervised buying and price negotiation",
        "Optional: software licensing and renewals"
      ],
      idealFor: "Orgs tired of overpaying or under-buying IT gear",
      icon: <Target size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Infrastructure
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> That Actually Works</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Stop guessing about your infrastructure. Get expert audits, deployment, and procurement 
              services that scale with your business—not against it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2">
                Start Your Audit <ArrowRight size={20} />
              </button>
              <button className="border border-slate-600 hover:border-cyan-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Infrastructure Matters</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Your infrastructure is the foundation of everything. When it's right, your business thrives. 
              When it's wrong, everything suffers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Performance That Scales</h3>
              <p className="text-slate-300">Infrastructure that grows with your business, not against it.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rock-Solid Security</h3>
              <p className="text-slate-300">Protect your data and operations with proven security practices.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Smart Procurement</h3>
              <p className="text-slate-300">Buy the right gear for your actual needs, not vendor recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Three Services, One Goal</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Each service connects to create a complete infrastructure strategy. Start anywhere, 
              but don't stop until your infrastructure works for you.
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
                  <Shield className="text-cyan-400 mx-auto" size={24} />
                </div>
                <span className="font-semibold">Audit</span>
                <p className="text-sm">Exposes gaps</p>
              </div>
              <ArrowRight className="text-cyan-400 hidden md:block" size={20} />
              <div className="text-center">
                <div className="bg-cyan-600/20 p-4 rounded-lg mb-2">
                  <Server className="text-cyan-400 mx-auto" size={24} />
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Fix Your Infrastructure?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Stop working around broken systems. Let's build infrastructure that actually supports your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Schedule Free Consultation
            </button>
            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Download Infrastructure Guide
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
