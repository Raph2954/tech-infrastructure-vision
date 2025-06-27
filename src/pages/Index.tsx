
import { Server, Network, ShoppingCart, ArrowRight, Shield, Zap, Target, Search, Settings, FileText, Phone, Calendar, Sparkles, Star, Rocket, Users, CheckCircle, TrendingUp, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ServiceCard from '../components/ServiceCard';
import Footer from '../components/Footer';
import { useState } from 'react';

const Index = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

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

  const stats = [
    { number: "50+", label: "Projects Completed", desc: "Successfully delivered infrastructure solutions" },
    { number: "24/7", label: "Support Available", desc: "Round-the-clock support for critical issues" },
    { number: "10+", label: "Years Experience", desc: "Deep expertise in enterprise infrastructure" },
    { number: "100%", label: "Client Satisfaction", desc: "Proven track record of successful implementations" }
  ];

  const testimonials = [
    {
      name: "David Okafor",
      role: "IT Director",
      company: "Lagos Financial Services",
      content: "Nexora Technologies transformed our infrastructure completely. Their audit revealed critical vulnerabilities we didn't know existed, and their deployment was flawless.",
      rating: 5
    },
    {
      name: "Amina Hassan",
      role: "Operations Manager", 
      company: "Abuja Healthcare Group",
      content: "The team's expertise in virtualization helped us consolidate our servers and reduce costs by 40%. Professional service from start to finish.",
      rating: 5
    },
    {
      name: "Chidi Nwosu",
      role: "CEO",
      company: "Port Harcourt Tech Hub",
      content: "Their strategic procurement advice saved us from making expensive mistakes. They really understand Nigerian business needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 dark:from-slate-950 dark:via-purple-950/20 dark:to-pink-950/20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-16 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-25 animate-float" style={{animationDelay: '2s'}}></div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight animate-fade-in-up">
              Infrastructure
              <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-text-glow"> That Actually Works</span>
            </h1>
            
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 leading-relaxed animate-fade-in-up animate-stagger-2">
              Nexora Technologies provides expert infrastructure and IT solutions designed to help Nigerian businesses grow, 
              scale, and stay online—without unnecessary complexity or cost.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-stagger-3">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover-lift btn-ripple animate-glow hover:scale-105"
              >
                <Phone size={20} className="group-hover:animate-bounce-custom" />
                <span>Book Free Consultation</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
              </Link>
              <Link 
                to="/learn-more" 
                className="group border-2 border-slate-300 dark:border-slate-600 hover:border-purple-500 dark:hover:border-purple-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-900 dark:text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover-lift interactive-card hover:scale-105 hover:shadow-xl"
              >
                <span className="group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">Learn More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border-y border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center group animate-fade-in-up animate-stagger-${index + 1}`}>
                <div className="interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:scale-105">
                  <div className={`text-4xl md:text-5xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
            {[
              {
                icon: Zap,
                title: "Performance That Scales",
                description: "Infrastructure that grows with your business, not against it.",
                gradient: "from-cyan-600 to-blue-600"
              },
              {
                icon: Shield,
                title: "Rock-Solid Security",
                description: "Protect your data and operations with proven security practices.",
                gradient: "from-green-600 to-emerald-600"
              },
              {
                icon: Target,
                title: "Smart Procurement",
                description: "Buy the right gear for your actual needs, not vendor recommendations.",
                gradient: "from-purple-600 to-pink-600"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`text-center group interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl animate-fade-in-up animate-stagger-${index + 1} cursor-pointer hover:scale-105`}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className={`bg-gradient-to-r ${feature.gradient} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 hover-glow ${hoveredFeature === index ? 'animate-pulse' : ''}`}>
                  <feature.icon className="text-white group-hover:animate-bounce-custom" size={24} />
                </div>
                <h3 className={`text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r ${feature.gradient} group-hover:bg-clip-text transition-all duration-300`}>
                  {feature.title}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-all duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100/80 via-purple-50/20 to-pink-50/20 dark:from-slate-950/80 dark:via-purple-950/10 dark:to-pink-950/10">
        <div className="max-w-7xl mx-auto">
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
                className={`animate-fade-in-up animate-stagger-${index + 3} ${index === 1 ? "lg:scale-105 animate-float" : ""} hover-lift hover:scale-105`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what business leaders across Nigeria say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`group animate-fade-in-up animate-stagger-${index + 1}`}>
                <div className="interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 h-full hover:scale-105">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{testimonial.role}</p>
                      <p className="text-sm text-slate-500 dark:text-slate-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-100/80 via-emerald-50/60 to-cyan-100/80 dark:from-green-900/30 dark:via-emerald-900/20 dark:to-cyan-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-full hover-lift animate-float">
                <Calendar className="text-green-600 dark:text-green-400 w-12 h-12 animate-pulse-custom" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in-up animate-stagger-2 text-gradient animate-text-glow">
              Not sure where to start?
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 animate-fade-in-up animate-stagger-3">
              Book a free 30-minute call. We'll review your current environment and recommend a simple next step—no hard sell, no obligation.
            </p>
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 mx-auto w-fit hover-lift btn-ripple animate-glow animate-fade-in-up animate-stagger-4 hover:scale-105"
            >
              <Calendar size={20} className="group-hover:animate-bounce-custom" />
              <span>Book a Free Call</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-100/80 via-blue-50/60 to-purple-100/80 dark:from-cyan-900/30 dark:via-blue-900/20 dark:to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="flex justify-center mb-6">
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-4 rounded-full hover-lift animate-float">
                <Rocket className="text-cyan-600 dark:text-cyan-400 w-12 h-12 animate-pulse-custom" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 animate-fade-in-up animate-stagger-2 text-gradient animate-text-glow">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8 animate-fade-in-up animate-stagger-3">
              Stop working around broken systems. Let's build infrastructure that actually supports your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-stagger-4">
              <Link 
                to="/contact" 
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover-lift btn-ripple animate-glow hover:scale-105"
              >
                <span>Schedule Free Consultation</span>
              </Link>
              <Link 
                to="/learn-more" 
                className="group border-2 border-cyan-500 hover:border-purple-500 text-cyan-600 hover:text-white bg-white/80 dark:bg-slate-800/80 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-purple-600 dark:hover:from-cyan-600 dark:hover:to-purple-600 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover-lift backdrop-blur-sm hover:scale-105"
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
