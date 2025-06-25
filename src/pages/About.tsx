
import { Shield, Users, Award, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">InfraTech Solutions</span>
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            We're infrastructure specialists who understand the unique challenges facing Nigerian businesses. 
            Our mission is simple: build IT systems that work reliably, scale affordably, and support your growth.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Our Story</h2>
          <div className="text-lg text-slate-700 dark:text-slate-300 space-y-6">
            <p>
              InfraTech Solutions was founded with a clear vision: to provide Nigerian businesses with 
              world-class infrastructure expertise without the complexity and cost typically associated 
              with enterprise IT consulting.
            </p>
            <p>
              We've seen too many organizations struggle with unreliable servers, poorly planned networks, 
              and expensive hardware purchases that don't deliver value. Our approach is different—we focus 
              on practical solutions that work in real-world conditions and grow with your business.
            </p>
            <p>
              Whether you're a small NGO running critical programs, a tech startup scaling rapidly, or 
              an established business modernizing your operations, we bring the same level of expertise 
              and attention to detail to every project.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-cyan-100 dark:bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Reliability First</h3>
              <p className="text-slate-700 dark:text-slate-300">We build systems that work when you need them most, with proper redundancy and failover planning.</p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 dark:bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Partnership</h3>
              <p className="text-slate-700 dark:text-slate-300">We're not just vendors—we're partners in your success, providing ongoing support and strategic guidance.</p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 dark:bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Excellence</h3>
              <p className="text-slate-700 dark:text-slate-300">Every project receives the same attention to detail, whether it's a small audit or large deployment.</p>
            </div>

            <div className="text-center">
              <div className="bg-cyan-100 dark:bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-cyan-600 dark:text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Efficiency</h3>
              <p className="text-slate-700 dark:text-slate-300">We deliver maximum value with minimal complexity, focusing on solutions that actually solve problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Technologies We Work With</h3>
              <ul className="text-slate-700 dark:text-slate-300 space-y-2">
                <li>• VMware vSphere & ESXi</li>
                <li>• Proxmox Virtual Environment</li>
                <li>• Linux & Windows Server environments</li>
                <li>• Network design & optimization</li>
                <li>• Storage solutions (SAN, NAS, local)</li>
                <li>• Backup & disaster recovery</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">Industries We Serve</h3>
              <ul className="text-slate-700 dark:text-slate-300 space-y-2">
                <li>• Small & Medium Enterprises</li>
                <li>• Non-Governmental Organizations</li>
                <li>• Technology Startups</li>
                <li>• Educational Institutions</li>
                <li>• Professional Services</li>
                <li>• Healthcare Organizations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
            Let's discuss how we can help strengthen your infrastructure and support your business goals.
          </p>
          <Link 
            to="/contact" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
