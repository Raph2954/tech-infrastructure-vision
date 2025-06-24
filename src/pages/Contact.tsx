
import { Mail, Phone, MapPin, Calendar, MessageSquare } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Ready to discuss your infrastructure needs? Let's start with a conversation about your current challenges and goals.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Schedule a Call</h3>
              <p className="text-slate-300 mb-6">
                Book a free 30-minute consultation to discuss your infrastructure needs.
              </p>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                Book Free Call
              </button>
            </div>

            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Send an Email</h3>
              <p className="text-slate-300 mb-6">
                Reach out with questions or project details.
              </p>
              <a href="mailto:contact@infratechsolutions.com" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block">
                Send Email
              </a>
            </div>

            <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8 text-center">
              <div className="bg-cyan-600/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">WhatsApp</h3>
              <p className="text-slate-300 mb-6">
                Quick questions? Message us on WhatsApp.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full">
                Message Us
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-slate-900/30 border border-slate-700 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-cyan-400" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-slate-300">contact@infratechsolutions.com</p>
              </div>
              
              <div className="text-center">
                <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="text-cyan-400" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-slate-300">+234 (0) 123 456 7890</p>
              </div>
              
              <div className="text-center">
                <div className="bg-cyan-600/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-slate-300">Lagos, Nigeria<br />Remote Services Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">How quickly can you start a project?</h3>
              <p className="text-slate-300">Most audits can begin within 1-2 weeks of initial consultation. Deployment projects typically start within 2-4 weeks, depending on complexity and equipment availability.</p>
            </div>
            
            <div className="border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Do you work with businesses outside Lagos?</h3>
              <p className="text-slate-300">Yes, we provide services across Nigeria and can work remotely for many types of projects. On-site visits can be arranged as needed.</p>
            </div>
            
            <div className="border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">What if we need ongoing support after a project?</h3>
              <p className="text-slate-300">We offer flexible support arrangements including periodic check-ins, monitoring services, and on-call support. We'll discuss options that fit your needs and budget.</p>
            </div>
            
            <div className="border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Can you work with our existing IT team?</h3>
              <p className="text-slate-300">Absolutely. We often collaborate with internal IT staff, providing specialized expertise while ensuring knowledge transfer and team empowerment.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
