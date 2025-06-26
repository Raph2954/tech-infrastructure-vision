
import { Server, Network, ShoppingCart, ArrowRight, Shield, Zap, Target, Search, Settings, FileText, Phone, Calendar, Sparkles, Star, Rocket } from 'lucide-react';
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
      icon: <Search size={24} />,
      learnMoreLink: "/infrastructure-audit"
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
      icon: <Settings size={24} />,
      learnMoreLink: "/virtualization-deployment"
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
      icon: <Target size={24} />,
      learnMoreLink: "/strategic-procurement"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 dark:from-slate-950 dark:via-purple-950/20 dark:to-pink-950/20 animate-background-shift">
      <Header />
      
      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-float blur-xl" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-20 h-20 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full animate-float blur-xl" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full animate-float blur-xl" style={{animationDelay: '1s'}}></div>
      </div>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Animated stars */}
            <div className="flex justify-center mb-6 animate-fade-in-down">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star 
                  key={index}
                  className={`text-yellow-500 w-6 h-6 mx-1 animate-pulse-custom hover-scale animate-fade-in-up animate-stagger-${index + 1}`}
                  fill="currentColor"
                  style={{animationDelay: `${index * 0.2}s`}}
                />
              ))}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight animate-fade-in-up">
              Infrastructure
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-shimmer bg-size-200 animate-text-glow"> That Actually Works</span>
              <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-fade-in-right animate-stagger-2">
                <Sparkles className="text-purple-500 animate-float" size={24} />
              </div>
            </h1>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed animate-fade-in-up animate-stagger-3 hover:text-transparent hover:bg-gradient-to-r hover:from-slate-600 hover:to-slate-800 hover:bg-clip-text transition-all duration-300">
              We provide expert infrastructure and IT solutions designed to help Nigerian businesses grow, 
              scale, and stay online—without unnecessary complexity or cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-stagger-4">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover-lift btn-ripple magnetic animate-glow relative overflow-hidden"
              >
                <Phone size={20} className="group-hover:animate-bounce-custom transition-all duration-300" />
                <span>Book Free Consultation</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              </Link>
              <Link 
                to="/learn-more" 
                className="group border-2 border-slate-300 dark:border-slate-600 hover:border-purple-500 dark:hover:border-purple-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover-lift interactive-card magnetic"
              >
                <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 dark:bg-slate-900/40 backdrop-blur-sm border-y border-slate-200/50 dark:border-slate-800/50 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10 animate-background-shift"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="flex justify-center mb-4">
              <Rocket className="text-purple-600 dark:text-purple-400 w-12 h-12 animate-float hover-scale" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-gradient">Why Infrastructure Matters</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up animate-stagger-2">
              Your infrastructure is the foundation of everything. When it's right, your business thrives. 
              When it's wrong, everything suffers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 animate-fade-in-left animate-stagger-1">
              <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-600/20 dark:to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 hover-glow">
                <Zap className="text-cyan-600 dark:text-cyan-400 group-hover:animate-bounce-custom transition-all duration-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">Performance That Scales</h3>
              <p className="text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-all duration-300">Infrastructure that grows with your business, not against it.</p>
            </div>
            
            <div className="text-center group interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/20 animate-fade-in-up animate-stagger-2">
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-600/20 dark:to-emerald-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 hover-glow">
                <Shield className="text-green-600 dark:text-green-400 group-hover:animate-bounce-custom transition-all duration-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">Rock-Solid Security</h3>
              <p className="text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-all duration-300">Protect your data and operations with proven security practices.</p>
            </div>
            
            <div className="text-center group interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 animate-fade-in-right animate-stagger-3">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-600/20 dark:to-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 hover-glow">
                <Target className="text-purple-600 dark:text-purple-400 group-hover:animate-bounce-custom transition-all duration-300" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">Smart Procurement</h3>
              <p className="text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-all duration-300">Buy the right gear for your actual needs, not vendor recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100/80 via-purple-50/20 to-pink-50/20 dark:from-slate-950/80 dark:via-purple-950/10 dark:to-pink-950/10 relative overflow-hidden">
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 8 }).map((_, index) => (
            <div 
              key={index}
              className={`absolute w-2 h-2 rounded-full gradient-bg-${(index % 5) + 1} animate-float opacity-30`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-gradient">Our Services</h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto animate-fade-in-up animate-stagger-2">
              Expert infrastructure and IT solutions designed to help Nigerian businesses grow, scale, and stay online—without unnecessary complexity or cost.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                {...service}
                className={`animate-fade-in-up animate-stagger-${index + 3} ${index === 1 ? "lg:scale-105" : ""}`}
              />
            ))}
          </div>
          
          {/* Cross-sell strategy */}
          <div className="mt-16 interactive-card bg-white/90 dark:bg-slate-800/40 backdrop-blur-sm border-2 border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 hover:bg-white dark:hover:bg-slate-800/60 transition-all duration-500 hover:border-gradient hover:shadow-2xl animate-fade-in-up animate-stagger-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center text-gradient">The Infrastructure Flywheel</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-700 dark:text-slate-300">
              <div className="text-center group animate-fade-in-left animate-stagger-7">
                <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-600/20 dark:to-blue-600/20 p-4 rounded-2xl mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 hover-glow">
                  <Search className="text-cyan-600 dark:text-cyan-400 mx-auto group-hover:animate-bounce-custom transition-all duration-300" size={24} />
                </div>
                <span className="font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">Audit</span>
                <p className="text-sm">Exposes gaps</p>
              </div>
              <ArrowRight className="text-purple-600 dark:text-purple-400 hidden md:block animate-pulse-custom hover-scale" size={20} />
              <div className="text-center group animate-fade-in-up animate-stagger-8">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-600/20 dark:to-emerald-600/20 p-4 rounded-2xl mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 hover-glow">
                  <Settings className="text-green-600 dark:text-green-400 mx-auto group-hover:animate-bounce-custom transition-all duration-300" size={24} />
                </div>
                <span className="font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-emerald-600 group-hover:bg-clip-text transition-all duration-300">Deployment</span>
                <p className="text-sm">Requires gear</p>
              </div>
              <ArrowRight className="text-purple-600 dark:text-purple-400 hidden md:block animate-pulse-custom hover-scale" size={20} />
              <div className="text-center group animate-fade-in-right animate-stagger-9">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-600/20 dark:to-pink-600/20 p-4 rounded-2xl mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 hover-glow">
                  <Target className="text-purple-600 dark:text-purple-400 mx-auto group-hover:animate-bounce-custom transition-all duration-300" size={24} />
                </div>
                <span className="font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">Procurement</span>
                <p className="text-sm">Builds trust</p>
              </div>
            </div>
            <p className="text-center mt-6 text-slate-700 dark:text-slate-300 animate-fade-in-up animate-stagger-10">
              Each service naturally leads to the next, creating ongoing value for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-100/80 via-emerald-50/60 to-cyan-100/80 dark:from-green-900/30 dark:via-emerald-900/20 dark:to-cyan-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-transparent to-cyan-400/10 animate-background-shift"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-full hover-lift animate-float">
                <Calendar className="text-green-600 dark:text-green-400 w-12 h-12 animate-pulse-custom" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in-up animate-stagger-2 text-gradient">
              Not sure where to start?
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 animate-fade-in-up animate-stagger-3">
              Book a free 30-minute call. We'll review your current environment and recommend a simple next step—no hard sell, no obligation.
            </p>
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 mx-auto w-fit hover-lift btn-ripple magnetic animate-glow animate-fade-in-up animate-stagger-4 relative overflow-hidden"
            >
              <Calendar size={20} className="group-hover:animate-bounce-custom transition-all duration-300" />
              <span>Book a Free Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-100/80 via-blue-50/60 to-purple-100/80 dark:from-cyan-900/30 dark:via-blue-900/20 dark:to-purple-900/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 animate-background-shift"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-full hover-lift animate-float">
                <Rocket className="text-cyan-600 dark:text-cyan-400 w-12 h-12 animate-pulse-custom" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in-up animate-stagger-2 text-gradient">
              Ready to Fix Your Infrastructure?
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 animate-fade-in-up animate-stagger-3">
              Stop working around broken systems. Let's build infrastructure that actually supports your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-stagger-4">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover-lift btn-ripple magnetic animate-glow relative overflow-hidden"
              >
                <span>Schedule Free Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer"></div>
              </Link>
              <Link 
                to="/learn-more" 
                className="group border-2 border-cyan-500 hover:border-purple-500 text-cyan-600 hover:text-white bg-white/80 dark:bg-slate-800/80 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 dark:hover:from-cyan-600 dark:hover:to-purple-600 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover-lift magnetic backdrop-blur-sm"
              >
                <span className="group-hover:text-white transition-all duration-300">Download Infrastructure Guide</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
