
import { Search, Settings, Target, CheckCircle, ArrowRight, Sparkles, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Services = () => {
  const services = [
    {
      title: "Infrastructure Audit & Design",
      summary: "Get a comprehensive assessment of your current infrastructure and a roadmap for improvement. Our audit process identifies performance bottlenecks, security gaps, and opportunities for optimization.",
      includes: [
        "Complete performance analysis of VM hosts, storage systems, and network infrastructure",
        "Detailed review of virtualization stack (VMware, Proxmox, or hybrid environments)",
        "High availability (HA) and disaster recovery readiness assessment",
        "Security vulnerability identification and backup system verification",
        "Comprehensive infrastructure upgrade plan with prioritized recommendations",
        "ROI analysis for proposed improvements"
      ],
      idealFor: "Organizations with aging infrastructure, performance issues, or unclear upgrade paths. Perfect for businesses experiencing downtime, slow systems, or planning for growth.",
      icon: <Search size={32} />,
      learnMoreLink: "/infrastructure-audit",
      gradient: "gradient-bg-1",
      hoverColor: "hover:shadow-purple-500/25"
    },
    {
      title: "Virtualization Deployment & Optimization",
      summary: "Design, deploy, and optimize modern virtualization environments that deliver reliability, performance, and scalability. From fresh installations to complex migrations.",
      includes: [
        "Custom deployment of VMware vSphere, Proxmox VE, or hybrid solutions",
        "Seamless migration from physical servers or legacy virtual environments",
        "Advanced cluster configuration with load balancing and resource optimization",
        "High availability setup with automated failover and recovery",
        "Performance tuning and security hardening",
        "Complete documentation and staff training programs"
      ],
      idealFor: "Organizations expanding their IT capabilities, consolidating servers, or modernizing legacy systems. Ideal for businesses needing reliable virtual infrastructure without full-time IT staff.",
      icon: <Settings size={32} />,
      learnMoreLink: "/virtualization-deployment",
      gradient: "gradient-bg-2",
      hoverColor: "hover:shadow-pink-500/25"
    },
    {
      title: "Strategic Procurement & IT Advisory",
      summary: "Make informed technology purchases with expert guidance. We help you buy the right hardware and software for your specific needs and budget, avoiding costly mistakes.",
      includes: [
        "Detailed workload analysis and capacity planning",
        "Right-sized hardware recommendations for servers, storage, and networking",
        "Software licensing strategy and vendor negotiations",
        "Trusted vendor sourcing and purchasing oversight",
        "Total cost of ownership (TCO) analysis",
        "Ongoing support for renewals and upgrades"
      ],
      idealFor: "Organizations planning major technology purchases, frustrated with unreliable equipment, or seeking strategic IT guidance without bias toward specific vendors.",
      icon: <Target size={32} />,
      learnMoreLink: "/strategic-procurement",
      gradient: "gradient-bg-3",
      hoverColor: "hover:shadow-cyan-500/25"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-pink-50/10 to-cyan-100/20 dark:from-purple-900/10 dark:via-pink-900/5 dark:to-cyan-900/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-16 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Our <span className="text-gradient">Services</span>
            </h1>
          </div>
          <div className="animate-fade-in-up animate-stagger-2">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Comprehensive infrastructure solutions designed to help your business grow reliably and efficiently. 
              From assessment to implementation, we've got you covered.
            </p>
          </div>
          <div className="animate-fade-in-up animate-stagger-3 mt-8">
            <Sparkles className="mx-auto text-purple-500 animate-pulse-custom" size={40} />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className={`group animate-fade-in-up animate-stagger-${index + 1}`}>
                <div className={`relative interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 hover:shadow-2xl ${service.hoverColor} transition-all duration-500 h-full flex flex-col`}>
                  {/* Gradient Icon */}
                  <div className={`w-20 h-20 rounded-2xl ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300 hover-glow`}>
                    <div className="text-white w-full h-full flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                    {service.summary}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-purple-700 dark:text-purple-400 font-semibold mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                      <Zap size={14} />
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {service.includes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                          <CheckCircle size={16} className="text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0 animate-pulse-custom" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {service.includes.length > 3 && (
                        <li className="text-purple-600 dark:text-purple-400 text-sm font-medium hover-scale cursor-pointer">
                          +{service.includes.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-purple-700 dark:text-purple-400 font-semibold mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                      <Users size={14} />
                      Perfect For
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {service.idealFor}
                    </p>
                  </div>
                  
                  <Link 
                    to={service.learnMoreLink}
                    className="mt-auto w-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-600 hover:to-pink-600 dark:from-slate-700 dark:to-slate-600 dark:hover:from-purple-600 dark:hover:to-pink-600 text-slate-900 hover:text-white dark:text-white py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg font-medium hover-lift"
                  >
                    Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Our <span className="text-gradient">Services</span>?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We bring expertise, reliability, and strategic thinking to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10+", label: "Years of Experience", desc: "Deep expertise in enterprise infrastructure", gradient: "gradient-bg-4" },
              { number: "24/7", label: "Support Available", desc: "Round-the-clock support for critical issues", gradient: "gradient-bg-5" },
              { number: "100%", label: "Vendor Neutral", desc: "Unbiased recommendations focused on your needs", gradient: "gradient-bg-6" }
            ].map((stat, index) => (
              <div key={index} className={`text-center group animate-fade-in-up animate-stagger-${index + 1}`}>
                <div className="interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                  <div className={`inline-block ${stat.gradient} text-white text-5xl font-bold mb-4 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {stat.label}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">
              Our <span className="text-gradient">Process</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Animated Connection Lines */}
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-1 bg-gradient-to-r from-purple-200 via-pink-300 to-cyan-200 dark:from-purple-800 dark:via-pink-700 dark:to-cyan-800 rounded-full animate-shimmer"></div>
            
            {[
              { step: "1", title: "Discovery", desc: "We start with a thorough understanding of your current environment, challenges, and goals.", gradient: "gradient-bg-1", icon: <Search size={24} /> },
              { step: "2", title: "Design", desc: "We create detailed plans and recommendations tailored to your specific needs and budget.", gradient: "gradient-bg-2", icon: <Settings size={24} /> },
              { step: "3", title: "Delivery", desc: "We implement solutions with minimal disruption and provide training for your team.", gradient: "gradient-bg-3", icon: <Target size={24} /> }
            ].map((process, index) => (
              <div key={index} className={`text-center relative animate-fade-in-up animate-stagger-${index + 1}`}>
                <div className={`w-20 h-20 rounded-3xl ${process.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl hover-scale transition-all duration-300 hover-glow relative overflow-hidden`}>
                  <div className="text-white font-bold text-2xl absolute top-2 left-2">{process.step}</div>
                  <div className="text-white">{process.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  {process.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {process.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-cyan-900/20">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Get <span className="text-gradient">Started</span>?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Schedule a free consultation to discuss your infrastructure needs and learn how we can help your business thrive.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover-lift animate-pulse-custom"
          >
            Schedule Free Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
