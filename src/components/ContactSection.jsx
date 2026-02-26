import { Mail, Send, ArrowRight, MapPin, Globe, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
      e.target.reset();
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" id="contact-hub">
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Success Toast - Spatial Style */}
      <div className={`fixed bottom-10 right-10 z-[100] transition-all duration-700 transform ${isSuccess ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-white border border-indigo-100 p-6 rounded-[2rem] shadow-[0_40px_80px_rgba(0,0,0,0.12)] flex items-center gap-6 backdrop-blur-xl">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/20">
            <CheckCircle2 size={24} />
          </div>
          <div className="flex flex-col pr-8">
            <span className="text-sm font-black text-gray-950 uppercase tracking-tight">Message Sent</span>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">We will respond shortly.</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-950 tracking-[-0.04em] leading-[0.95]">
            Let's <br />
            <span className="text-indigo-600 italic">Connect.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Information Bento (Left 4 Columns) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-10 rounded-[2.5rem] bg-[#fcfcfc] border border-indigo-50 group hover:bg-white hover:shadow-2xl hover:shadow-indigo-600/5 transition-all duration-700">
               <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white mb-8 transition-all duration-500 group-hover:rotate-6 shadow-xl shadow-indigo-600/20">
                 <Mail size={24} />
               </div>
               <h3 className="text-xl font-bold text-gray-950 mb-2">Email Us</h3>
               <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">Response within 2 hours</p>
               <a href="mailto:info@victoryappliance.shop" className="text-lg font-bold text-indigo-600 hover:text-gray-950 transition-colors tracking-tight">info@victoryappliance.shop</a>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-[#fcfcfc] border border-indigo-50 group hover:bg-white hover:shadow-2xl hover:shadow-indigo-600/5 transition-all duration-700">
               <div className="w-14 h-14 rounded-2xl bg-white shadow-xl flex items-center justify-center text-indigo-600 mb-8 border border-indigo-50 transition-all duration-500 group-hover:-rotate-6">
                 <MapPin size={24} />
               </div>
               <h3 className="text-xl font-bold text-gray-950 mb-2">Visit Office</h3>
               <span className="text-[13px] font-bold text-gray-400 leading-relaxed uppercase tracking-widest block">
                 2066 Fairview Ave, Prattville,<br />
                 AL 36066, USA
               </span>
            </div>
          </div>

          {/* Contact Form Bento (Right 8 Columns) */}
          <div className="lg:col-span-8 bg-white border border-indigo-50 rounded-[3rem] p-8 md:p-16 shadow-[0_40px_80px_rgba(79,70,229,0.03)] relative overflow-hidden group">
             {/* Subtle Decorative Grid */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
             
             <form className="relative z-10 space-y-12" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="contact" />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] ml-2">Full Name</label>
                    <input 
                      required
                      name="fullName"
                      type="text" 
                      className="w-full bg-gray-50 border-none px-8 py-5 rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-600/5 outline-none transition-all font-bold text-gray-950 placeholder:text-gray-300 tracking-tight" 
                      placeholder="NAME" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] ml-2">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      className="w-full bg-gray-50 border-none px-8 py-5 rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-600/5 outline-none transition-all font-bold text-gray-950 placeholder:text-gray-300 tracking-tight" 
                      placeholder="EMAIL" 
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] ml-2">Phone Number</label>
                    <input 
                      required
                      name="phone"
                      type="tel" 
                      className="w-full bg-gray-50 border-none px-8 py-5 rounded-2xl focus:bg-white focus:ring-4 focus:ring-indigo-600/5 outline-none transition-all font-bold text-gray-950 placeholder:text-gray-300 tracking-tight" 
                      placeholder="PHONE" 
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] ml-2">How can we help?</label>
                  <textarea 
                    required
                    name="message"
                    rows="4" 
                    className="w-full bg-gray-50 border-none px-8 py-6 rounded-[2rem] focus:bg-white focus:ring-4 focus:ring-indigo-600/5 outline-none transition-all font-bold text-gray-950 resize-none placeholder:text-gray-300 tracking-tight" 
                    placeholder="DESCRIBE THE PROBLEM..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-end gap-10 pt-4">
                  <button 
                    disabled={isSubmitting}
                    className="w-full sm:w-auto group/btn relative flex items-center gap-10 py-5 pl-10 pr-5 bg-indigo-600 text-white rounded-full transition-all duration-500 hover:bg-gray-950 hover:scale-105 shadow-2xl shadow-indigo-600/20 active:scale-95 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-3 border-white/20 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span className="text-[12px] font-bold tracking-[0.2em] uppercase">Send Message</span>
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-950 transition-all duration-500 group-hover/btn:rotate-[-45deg] group-hover/btn:scale-90 shadow-lg">
                          <ArrowRight size={20} />
                        </div>
                      </>
                    )}
                  </button>
                </div>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
