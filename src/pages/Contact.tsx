
import { Mail, Phone, MapPin, Calendar, MessageSquare, Sparkles, Clock, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-purple-950/30">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-pink-50/10 to-cyan-100/20 dark:from-purple-900/10 dark:via-pink-900/5 dark:to-cyan-900/10"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-16 w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-down">
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              Get In <span className="text-gradient">Touch</span>
            </h1>
          </div>
          <div className="animate-fade-in-up animate-stagger-2">
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Ready to transform your IT infrastructure? Let's discuss how Nexora Technologies can help your business achieve its technology goals.
            </p>
          </div>
          <div className="animate-fade-in-up animate-stagger-3 mt-8">
            <Sparkles className="mx-auto text-purple-500 animate-pulse-custom" size={40} />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="group animate-fade-in-up animate-stagger-1">
              <div className="interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 h-full">
                <div className="w-20 h-20 rounded-2xl gradient-bg-1 p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 hover-glow">
                  <Calendar className="text-white w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  Schedule a Call
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Book a free 30-minute consultation to discuss your infrastructure needs and explore solutions.
                </p>
                <button className="w-full bg-gradient-to-r from-cyan-100 to-blue-100 hover:from-cyan-600 hover:to-blue-600 dark:from-slate-700 dark:to-slate-600 dark:hover:from-cyan-600 dark:hover:to-blue-600 text-slate-900 hover:text-white dark:text-white py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg font-medium hover-lift">
                  Book Free Call
                </button>
              </div>
            </div>

            <div className="group animate-fade-in-up animate-stagger-2">
              <div className="interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 h-full">
                <div className="w-20 h-20 rounded-2xl gradient-bg-2 p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 hover-glow">
                  <Mail className="text-white w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  Send an Email
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Reach out with questions, project details, or specific requirements you'd like to discuss.
                </p>
                <a href="mailto:contact@nexoratech.com" className="w-full bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-600 hover:to-pink-600 dark:from-slate-700 dark:to-slate-600 dark:hover:from-purple-600 dark:hover:to-pink-600 text-slate-900 hover:text-white dark:text-white py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg font-medium hover-lift">
                  Send Email
                </a>
              </div>
            </div>

            <div className="group animate-fade-in-up animate-stagger-3">
              <div className="interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 text-center hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-500 h-full">
                <div className="w-20 h-20 rounded-2xl gradient-bg-3 p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 hover-glow">
                  <MessageSquare className="text-white w-full h-full" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  WhatsApp
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  Quick questions or urgent support needs? Message us directly on WhatsApp.
                </p>
                <button className="w-full bg-gradient-to-r from-green-100 to-emerald-100 hover:from-green-600 hover:to-emerald-600 dark:from-slate-700 dark:to-slate-600 dark:hover:from-green-600 dark:hover:to-emerald-600 text-slate-900 hover:text-white dark:text-white py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg font-medium hover-lift">
                  Message Us
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-up animate-stagger-4">
            <div className="interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8 text-center">
                Contact <span className="text-gradient">Information</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-600/20 dark:to-pink-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-purple-600 dark:text-purple-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
                  <p className="text-slate-600 dark:text-slate-300">contact@nexoratech.com</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-600/20 dark:to-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-cyan-600 dark:text-cyan-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-300">+234 (0) 809 123 4567</p>
                </div>
                
                <div className="text-center group">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-600/20 dark:to-emerald-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Location</h3>
                  <p className="text-slate-600 dark:text-slate-300">Abuja, Nigeria<br />Remote Services Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-50/50 to-pink-50/50 dark:from-purple-900/10 dark:to-pink-900/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              What to <span className="text-gradient">Expect</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We value your time and respond promptly to all inquiries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Quick Response", desc: "We respond to all inquiries within 2-4 hours during business days", gradient: "gradient-bg-4" },
              { icon: Calendar, title: "Free Consultation", desc: "30-minute discovery call to understand your needs at no cost", gradient: "gradient-bg-5" },
              { icon: CheckCircle, title: "Detailed Proposal", desc: "Comprehensive project proposal within 48 hours of consultation", gradient: "gradient-bg-6" }
            ].map((item, index) => (
              <div key={index} className={`text-center group animate-fade-in-up animate-stagger-${index + 1}`}>
                <div className="interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <div className={`inline-block ${item.gradient} text-white p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-16 text-center">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              {
                question: "How quickly can you start a project?",
                answer: "Most infrastructure audits can begin within 1-2 weeks of initial consultation. Deployment projects typically start within 2-4 weeks, depending on complexity and equipment availability."
              },
              {
                question: "Do you work with businesses outside Abuja?",
                answer: "Yes, we provide services across Nigeria and can work remotely for many types of projects. On-site visits can be arranged as needed for implementation and critical support."
              },
              {
                question: "What if we need ongoing support after a project?",
                answer: "We offer flexible support arrangements including periodic check-ins, monitoring services, and on-call support. We'll discuss options that fit your needs and budget during consultation."
              },
              {
                question: "Can you work with our existing IT team?",
                answer: "Absolutely. We often collaborate with internal IT staff, providing specialized expertise while ensuring knowledge transfer and team empowerment throughout the project."
              }
            ].map((faq, index) => (
              <div key={index} className={`interactive-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up animate-stagger-${index + 1}`}>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
