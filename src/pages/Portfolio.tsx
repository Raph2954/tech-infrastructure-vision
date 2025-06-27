
import { ExternalLink, Calendar, Users, CheckCircle, TrendingUp, Server, Network, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Portfolio = () => {
  const caseStudies = [
    {
      title: "Lagos Financial Services Infrastructure Overhaul",
      client: "Major Financial Institution",
      location: "Lagos, Nigeria",
      duration: "3 months",
      teamSize: "6 people",
      challenge: "Legacy infrastructure causing frequent downtime and security vulnerabilities, affecting customer trust and business operations.",
      solution: "Complete infrastructure audit, virtualization migration, and security hardening with 99.9% uptime SLA.",
      results: [
        "Reduced downtime by 95%",
        "Improved system performance by 300%",
        "Enhanced security compliance",
        "Reduced operational costs by 40%"
      ],
      technologies: ["VMware vSphere", "Cisco Networking", "Dell PowerEdge", "Veeam Backup"],
      category: "Infrastructure Audit & Virtualization"
    },
    {
      title: "Healthcare Network Modernization",
      client: "Abuja Healthcare Group",
      location: "Abuja, Nigeria",
      duration: "2 months",
      teamSize: "4 people",
      challenge: "Outdated network infrastructure unable to support modern healthcare applications and patient data security requirements.",
      solution: "Network redesign with redundant connections, HIPAA-compliant security measures, and centralized management.",
      results: [
        "100% network uptime achieved",
        "Compliance with healthcare regulations",
        "50% faster data access",
        "Scalable architecture for future growth"
      ],
      technologies: ["Cisco Meraki", "FortiGate Security", "Proxmox VE", "Zabbix Monitoring"],
      category: "Network Infrastructure"
    },
    {
      title: "Tech Startup Virtualization Deployment",
      client: "Port Harcourt Tech Hub",
      location: "Port Harcourt, Nigeria",
      duration: "6 weeks",
      teamSize: "3 people",
      challenge: "Rapidly growing startup needed scalable infrastructure to support 10x growth without breaking the budget.",
      solution: "Designed and deployed cost-effective virtualization platform with automated scaling and disaster recovery.",
      results: [
        "Supported 10x user growth",
        "Reduced infrastructure costs by 60%",
        "Automated backup and recovery",
        "24/7 monitoring and alerting"
      ],
      technologies: ["Proxmox VE", "Ceph Storage", "Ansible Automation", "Grafana Monitoring"],
      category: "Virtualization & Automation"
    }
  ];

  const services = [
    {
      icon: Shield,
      title: "Security Assessments",
      description: "Comprehensive security audits and vulnerability assessments",
      projectCount: "15+"
    },
    {
      icon: Server,
      title: "Server Consolidation",
      description: "Virtualization and server infrastructure optimization",
      projectCount: "25+"
    },
    {
      icon: Network,
      title: "Network Design",
      description: "Enterprise network architecture and implementation",
      projectCount: "20+"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-pink-50/10 to-cyan-100/20 dark:from-purple-900/10 dark:via-pink-900/5 dark:to-cyan-900/10"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
          </div>
          <div className="animate-fade-in-up animate-stagger-2">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Real projects, real results. See how we've helped Nigerian businesses transform their IT infrastructure and achieve their technology goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/60 dark:bg-slate-800/40 backdrop-blur-sm border-y border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our <span className="text-gradient">Expertise</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`group animate-fade-in-up animate-stagger-${index + 1}`}>
                <div className="interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-600/20 dark:to-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-gradient">
                    {service.projectCount}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Projects Completed
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Featured <span className="text-gradient">Case Studies</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Detailed examples of how we've solved complex infrastructure challenges for businesses across Nigeria
            </p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`animate-fade-in-up animate-stagger-${index + 1}`}>
                <div className="interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 lg:p-12 hover:shadow-2xl transition-all duration-500">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                          {study.category}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                        {study.title}
                      </h3>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-purple-600" />
                          <span className="text-slate-600 dark:text-slate-300">{study.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-purple-600" />
                          <span className="text-slate-600 dark:text-slate-300">{study.teamSize}</span>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Challenge:</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Solution:</h4>
                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-8">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                          <TrendingUp size={20} className="text-green-600" />
                          Key Results:
                        </h4>
                        <ul className="space-y-3">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-slate-600 dark:text-slate-300">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-8">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech, idx) => (
                            <span key={idx} className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-600/20 dark:to-blue-600/20 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-2xl">
                        <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Project Details:</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-1">
                          <strong>Client:</strong> {study.client}
                        </p>
                        <p className="text-sm text-slate-600 dark:text-slate-300">
                          <strong>Location:</strong> {study.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-cyan-600/10 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-cyan-900/20">
        <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Be Our Next <span className="text-gradient">Success Story</span>?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Let's discuss how we can transform your infrastructure and help your business achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover-lift"
            >
              Schedule Consultation
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center gap-3 border-2 border-purple-500 hover:bg-purple-500 text-purple-600 hover:text-white px-12 py-6 rounded-2xl text-lg font-semibold transition-all duration-300 hover-lift"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
