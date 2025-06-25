
import { Search, Settings, Target, CheckCircle, ArrowRight } from 'lucide-react';
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
      gradient: "from-blue-500 to-cyan-500"
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
      gradient: "from-purple-500 to-blue-500"
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
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-cyan-50/30 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
            Our <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Comprehensive infrastructure solutions designed to help your business grow reliably and efficiently. 
            From assessment to implementation, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="relative bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Icon with gradient background */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white w-full h-full flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-grow">
                    {service.summary}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-cyan-700 dark:text-cyan-400 font-semibold mb-4 text-sm uppercase tracking-wide">
                      What's Included
                    </h4>
                    <ul className="space-y-3">
                      {service.includes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300 text-sm">
                          <CheckCircle size={16} className="text-cyan-600 dark:text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                      {service.includes.length > 3 && (
                        <li className="text-cyan-600 dark:text-cyan-400 text-sm font-medium">
                          +{service.includes.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-cyan-700 dark:text-cyan-400 font-semibold mb-3 text-sm uppercase tracking-wide">
                      Perfect For
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {service.idealFor}
                    </p>
                  </div>
                  
                  <Link 
                    to={service.learnMoreLink}
                    className="mt-auto w-full bg-gradient-to-r from-slate-100 to-slate-200 hover:from-cyan-600 hover:to-blue-600 dark:from-slate-700 dark:to-slate-600 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-slate-900 hover:text-white dark:text-white py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg font-medium"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-50 to-cyan-50/50 dark:from-slate-900/50 dark:to-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We bring expertise, reliability, and strategic thinking to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "10+", label: "Years of Experience", desc: "Deep expertise in enterprise infrastructure" },
              { number: "24/7", label: "Support Available", desc: "Round-the-clock support for critical issues" },
              { number: "100%", label: "Vendor Neutral", desc: "Unbiased recommendations focused on your needs" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-8 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-cyan-200 to-blue-200 dark:from-cyan-800 dark:to-blue-800"></div>
            
            {[
              { step: "1", title: "Discovery", desc: "We start with a thorough understanding of your current environment, challenges, and goals.", color: "from-blue-500 to-cyan-500" },
              { step: "2", title: "Design", desc: "We create detailed plans and recommendations tailored to your specific needs and budget.", color: "from-purple-500 to-blue-500" },
              { step: "3", title: "Delivery", desc: "We implement solutions with minimal disruption and provide training for your team.", color: "from-green-500 to-teal-500" }
            ].map((process, index) => (
              <div key={index} className="text-center relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${process.color} flex items-center justify-center mx-auto mb-6 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300`}>
                  <span className="text-white font-bold text-2xl">{process.step}</span>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/10 to-blue-600/10 dark:from-cyan-900/20 dark:to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed">
            Schedule a free consultation to discuss your infrastructure needs and learn how we can help your business thrive.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-10 py-5 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:-translate-y-1"
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
