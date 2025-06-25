import { Search, Settings, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

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
      icon: <Search size={24} />
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
      icon: <Settings size={24} />
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
      icon: <Target size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Comprehensive infrastructure solutions designed to help your business grow reliably and efficiently.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-1 gap-8">
                <ServiceCard 
                  {...service}
                  className="max-w-4xl mx-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Discovery</h3>
              <p className="text-slate-600 dark:text-slate-300">We start with a thorough understanding of your current environment, challenges, and goals.</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Design</h3>
              <p className="text-slate-600 dark:text-slate-300">We create detailed plans and recommendations tailored to your specific needs and budget.</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Delivery</h3>
              <p className="text-slate-600 dark:text-slate-300">We implement solutions with minimal disruption and provide training for your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            Schedule a free consultation to discuss your infrastructure needs and learn how we can help.
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

export default Services;
