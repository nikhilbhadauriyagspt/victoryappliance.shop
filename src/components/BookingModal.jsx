import { X, Send, ShieldCheck, Clock, User, Phone, MessageSquare, CheckCircle2, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const BookingModal = ({ isOpen, onClose, serviceTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
      body: encode({ "form-name": "booking", ...data, serviceTitle })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Immersive Overlay */}
      <div 
        className="absolute inset-0 bg-gray-950/60 backdrop-blur-md transition-opacity duration-700"
        onClick={onClose}
      />
      
      {/* Spatial Modal Container */}
      <div className="relative w-full max-w-4xl bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col md:flex-row animate-in zoom-in-95 duration-500 border border-white/10">
        
        {/* Left Informational Bento Panel */}
        <div className="md:w-[35%] bg-indigo-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mb-10 shadow-xl">
              <Sparkles size={28} />
            </div>
            <h2 className="text-3xl font-black leading-[1.1] mb-6 uppercase tracking-tighter">
              Expert <br /> System <br /> <span className="text-indigo-200 italic font-medium">Support.</span>
            </h2>
            <p className="text-indigo-100/70 text-[13px] font-medium leading-relaxed uppercase tracking-widest">
              Professional appliance repair and restoration for premium home systems.
            </p>
          </div>

          <div className="relative z-10 space-y-6 pt-12">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-indigo-600 transition-all">
                <Clock size={18} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">45 Min Arrival</span>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-indigo-600 transition-all">
                <ShieldCheck size={18} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">90 Day Warranty</span>
            </div>
          </div>
        </div>

        {/* Right Interaction Form Panel */}
        <div className="flex-1 p-8 md:p-14 relative bg-white">
          <button 
            onClick={onClose}
            className="absolute top-8 right-8 w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all active:scale-90 border border-transparent hover:border-indigo-100"
          >
            <X size={20} />
          </button>

          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in-90 duration-700">
              <div className="w-24 h-24 bg-indigo-50 rounded-[2rem] flex items-center justify-center text-indigo-600 mb-8 shadow-xl shadow-indigo-600/10">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="text-3xl font-black text-gray-950 uppercase tracking-tight">Booking Received</h3>
              <p className="text-gray-400 text-[11px] font-bold uppercase tracking-[0.2em] mt-4">We will contact you shortly.</p>
            </div>
          ) : (
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-2 mb-2">
                   <div className="w-1 h-4 bg-indigo-600 rounded-full" />
                   <h3 className="text-2xl font-black text-gray-950 uppercase tracking-tight">Request Service</h3>
                </div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">For: <span className="text-indigo-600">{serviceTitle}</span></p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus-within:border-indigo-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-600/5 transition-all">
                      <User size={18} className="text-gray-300" />
                      <input required name="fullName" type="text" className="flex-1 bg-transparent border-none outline-none text-[13px] font-bold text-gray-950 placeholder:text-gray-300 uppercase tracking-tight" placeholder="NAME" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Phone Number</label>
                    <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus-within:border-indigo-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-600/5 transition-all">
                      <Phone size={18} className="text-gray-300" />
                      <input required name="phone" type="tel" className="flex-1 bg-transparent border-none outline-none text-[13px] font-bold text-gray-950 placeholder:text-gray-300 uppercase tracking-tight" placeholder="PHONE" />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                  <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus-within:border-indigo-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-600/5 transition-all">
                    <Mail size={18} className="text-gray-300" />
                    <input required name="email" type="email" className="flex-1 bg-transparent border-none outline-none text-[13px] font-bold text-gray-950 placeholder:text-gray-300 uppercase tracking-tight" placeholder="EMAIL" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">Problem Details</label>
                  <div className="flex items-start gap-4 px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus-within:border-indigo-600 focus-within:bg-white focus-within:ring-4 focus-within:ring-indigo-600/5 transition-all">
                    <MessageSquare size={18} className="text-gray-300 mt-1" />
                    <textarea required name="issue" rows="3" className="flex-1 bg-transparent border-none outline-none text-[13px] font-bold text-gray-950 placeholder:text-gray-300 resize-none uppercase tracking-tight" placeholder="TELL US WHAT'S WRONG..."></textarea>
                  </div>
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full py-6 bg-indigo-600 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] hover:bg-gray-950 transition-all duration-500 active:scale-95 flex items-center justify-center gap-4 disabled:opacity-50 shadow-2xl shadow-indigo-600/20 group"
                >
                  {isSubmitting ? 'Processing...' : <>Confirm Booking <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
