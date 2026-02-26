import { useState } from 'react';
import { Plus, Minus, MessageSquare, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqs = [
  {
    question: "How quickly can you fix my machine?",
    answer: "Most repairs take about 60 to 90 minutes once our professional arrives. We carry most common parts with us to make sure we can finish the job on the same day."
  },
  {
    question: "Are the spare parts original?",
    answer: "Yes, we only use 100% original parts from the brands you trust. This helps your appliance work perfectly for a long time."
  },
  {
    question: "Do I get a guarantee on the repair?",
    answer: "Yes, we give you a full 90-day guarantee on the parts we change and the work we do. This gives you complete peace of mind."
  },
  {
    question: "Can I book a repair for today?",
    answer: "Yes, if you book before noon, we can usually send an expert to your home by the same evening. We prioritize fast help for all our customers."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" id="faq">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-950 tracking-[-0.04em] leading-[0.95]">
            Inquiry <br />
            <span className="text-indigo-600 italic">Clarification.</span>
          </h2>
        </div>

        {/* Spatial FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group rounded-[2rem] transition-all duration-500 border ${
                openIndex === idx 
                  ? 'bg-indigo-600 border-indigo-600 shadow-2xl shadow-indigo-600/20' 
                  : 'bg-[#fcfcfc] border-indigo-50 hover:bg-white hover:shadow-xl hover:shadow-black/5'
              }`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="w-full p-8 flex items-center justify-between text-left cursor-pointer"
              >
                <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${
                  openIndex === idx ? 'text-white' : 'text-gray-900 group-hover:text-indigo-600'
                }`}>
                  {faq.question}
                </span>
                
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border ${
                  openIndex === idx 
                    ? 'bg-white text-indigo-600 border-white rotate-180' 
                    : 'bg-indigo-50 text-indigo-400 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600'
                }`}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <div 
                className={`grid transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-8 pt-0">
                    <div className={`w-full h-[1px] mb-8 transition-colors duration-500 ${openIndex === idx ? 'bg-white/20' : 'bg-transparent'}`} />
                    <p className={`text-[15px] font-medium leading-relaxed max-w-2xl transition-colors duration-500 ${
                      openIndex === idx ? 'text-indigo-100' : 'text-gray-500'
                    }`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Bento */}
        <div className="max-w-4xl mx-auto mt-16 p-3 bg-gray-50 rounded-[2.5rem] border border-indigo-50">
           <div className="bg-white rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-sm border border-indigo-50/50 relative overflow-hidden group">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-600/5 blur-[80px] -mr-24 -mt-24 group-hover:bg-indigo-600/10 transition-all duration-700" />
              
              <div className="flex items-center gap-8 relative z-10">
                <div className="w-16 h-16 rounded-[1.25rem] bg-indigo-600 flex items-center justify-center text-white shadow-xl shadow-indigo-600/20 group-hover:rotate-6 transition-transform duration-500">
                  <MessageSquare size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-950 mb-2">Still Unresolved?</h3>
                  <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Connect with our support infrastructure now.</p>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="relative z-10 group/btn flex items-center gap-8 py-4 pl-8 pr-4 bg-gray-950 text-white rounded-full transition-all duration-500 hover:bg-indigo-600 shadow-2xl shadow-gray-950/10 active:scale-95"
              >
                 <span className="text-[11px] font-black uppercase tracking-[0.2em]">Contact Experts</span>
                 <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-950 transition-transform duration-500 group-hover/btn:rotate-[-45deg] group-hover/btn:scale-90 shadow-sm"><ArrowRight size={20} /></div>
              </Link>
           </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
