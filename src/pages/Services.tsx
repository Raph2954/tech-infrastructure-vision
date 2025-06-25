
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
      icon: <Search size={24} />,
      learnMoreLink: "/infrastructure-audit"
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
      icon: <Settings size={24} />,
      learnMoreLink: "/virtualization-deployment"
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
      icon: <Target size={24} />,
      learnMoreLink: "/strategic-procurement"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-950"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 dark:opacity-5">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop&crop=center" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
            Comprehensive infrastructure solutions designed to help your business grow reliably and efficiently. 
            From assessment to implementation, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ServiceCard 
                    {...service}
                    className="h-full"
                  />
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1518770660439-4636190af475' : 
                      index === 1 ? '1605810230434-7631ac76ec81' : 
                      '1581090464777-f3220bbe1b8b'
                    }?w=600&h=400&fit=crop&crop=center`} 
                    alt={service.title}
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              We bring expertise, reliability, and strategic thinking to every project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">10+</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Years of Experience</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Deep expertise in enterprise infrastructure and virtualization technologies
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">24/7</span>      
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Support Available</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Round-the-clock support for critical infrastructure issues and emergencies
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 p-8 rounded-xl border border-slate-200 dark:border-slate-700 text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">100%</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Vendor Neutral</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Unbiased recommendations focused on your needs, not vendor relationships
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-cyan-400 font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Discovery</h3>
              <p className="text-slate-600 dark:text-slate-300">We start with a thorough understanding of your current environment, challenges, and goals.</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-cyan-400 font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Design</h3>
              <p className="text-slate-600 dark:text-slate-300">We create detailed plans and recommendations tailored to your specific needs and budget.</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-cyan-400 font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Delivery</h3>
              <p className="text-slate-600 dark:text-slate-300">We implement solutions with minimal disruption and provide training for your team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-10">
            Schedule a free consultation to discuss your infrastructure needs and learn how we can help.
          </p>
          <Link 
            to="/contact" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-5 rounded-lg text-lg font-semibold transition-colors inline-block"
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
