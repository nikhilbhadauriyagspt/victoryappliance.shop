import { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, Settings, Star, Clock } from 'lucide-react';
import BookingModal from './BookingModal';

const slides = [
  {
    id: "01",
    tag: "Modern Home Maintenance",
    title: "Perfecting",
    highlight: "Laundry Care.",
    desc: "Experience smooth laundry with our expert motor repair and drum restoration services. We utilize professional-grade precision to ensure your machine operates quietly and at peak performance.",
    image: "/hero-washing.jpg"
  },
  {
    id: "02",
    tag: "Fresh Food Storage",
    title: "Improving",
    highlight: "Refrigeration.",
    desc: "Maintain absolute freshness with our expert cooling inspection and safe gas refilling. From compressor care to seal optimization, we protect your food and energy efficiency.",
    image: "/hero-refri.jpg"
  },
  {
    id: "03",
    tag: "Premium Kitchens",
    title: "Restoring",
    highlight: "Cooking Units.",
    desc: "Restore your cooking potential with careful heating element checks and control button synchronization. Our experts ensure every meal is prepared precisely and safely in your kitchen.",
    image: "/hero-cook.jpg"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-[#fcfcfc] pt-[110px] pb-20 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-2%] w-[30%] h-[30%] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full px-10 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[660px]">
          
          {/* Main Content Bento (Left 7 Columns) */}
          <div className="lg:col-span-7 relative group">
            <div className="h-full bg-white rounded-[2.5rem] p-8 md:p-20 border border-indigo-50 shadow-[0_32px_64px_rgba(79,70,229,0.03)] flex flex-col justify-center relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50/50 rounded-full mb-8 border border-indigo-100">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
                  <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                    {slides[current].tag}
                  </span>
                </div>
                
                <div className="relative min-h-[280px]">
                  {slides.map((slide, idx) => (
                    <div 
                      key={idx}
                      className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                        idx === current ? 'opacity-100 translate-y-0 relative' : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                      }`}
                    >
                      <h1 className="text-4xl md:text-[80px] font-bold text-gray-900 leading-[0.95] mb-8">
                        {slide.title} <br />
                        <span className="text-indigo-600 italic block mt-2">{slide.highlight}</span>
                      </h1>
                      <p className="text-gray-500 text-sm md:text-lg font-medium leading-relaxed max-w-lg mb-10">
                        {slide.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-14 flex items-center">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto px-12 py-6 bg-indigo-600 text-white font-bold text-[11px] uppercase tracking-widest hover:bg-indigo-700 hover:scale-105 transition-all duration-500 cursor-pointer flex items-center justify-center gap-4 rounded-[1.5rem] shadow-xl shadow-indigo-600/20 active:scale-95 group/btn"
                  >
                    Quick Repair <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Decorative Subtle Background */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-50/20 blur-[80px] -mr-40 -mt-40 rounded-full pointer-events-none" />
            </div>
          </div>

          {/* Visual Bento (Right 5 Columns) */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-8">
            
            {/* Top: Main Image Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden border border-indigo-50 shadow-xl group/img">
              {slides.map((slide, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    idx === current ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-110 rotate-2'
                  }`}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/10 via-transparent to-transparent" />
                </div>
              ))}
              
              {/* Floating Status Tag */}
              <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-10">
                <div className="px-5 py-3 bg-white/80 backdrop-blur-2xl border border-white/50 rounded-2xl flex items-center gap-3 shadow-lg">
                  <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/10">
                    <ShieldCheck size={16} />
                  </div>
                  <span className="text-[10px] font-black text-indigo-950 uppercase tracking-widest">Original Parts</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl border border-indigo-50">
                   <Star size={18} className="text-indigo-600 fill-indigo-600" />
                </div>
              </div>
            </div>

            {/* Bottom: Feature Grid Bento */}
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-indigo-50/40 backdrop-blur-md rounded-[2.5rem] p-10 flex flex-col justify-between group/card hover:bg-white hover:shadow-2xl hover:shadow-indigo-600/10 transition-all duration-700 border border-indigo-100/30">
                <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-indigo-600/20">
                  <Clock size={26} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-3">Response</div>
                  <div className="text-2xl font-bold text-indigo-950 leading-none mb-4 whitespace-nowrap">Quick Arrival.</div>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                    Our team reaches your home in 45 minutes to fix your appliance problems.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 border border-indigo-50 flex flex-col justify-between group/card hover:shadow-[0_32px_64px_rgba(79,70,229,0.08)] transition-all duration-700">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8">
                  <Zap size={26} />
                </div>
                <div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3">Service</div>
                  <div className="text-2xl font-bold text-gray-900 leading-none mb-4 whitespace-nowrap">Original Spares.</div>
                  <p className="text-[13px] text-gray-500 font-medium leading-relaxed">
                    We use only 100% real and genuine parts for all your household machines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Bright Ticker */}
        <div className="mt-8 bg-white/70 backdrop-blur-2xl border border-indigo-100 rounded-[2rem] p-2 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
           <div className="flex items-center gap-8 px-8 py-3 overflow-x-auto no-scrollbar whitespace-nowrap">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                <span className="text-[10px] font-black text-indigo-950 uppercase tracking-widest">90-Day Warranty</span>
              </div>
              <div className="w-[1px] h-4 bg-indigo-100" />
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                <span className="text-[10px] font-black text-indigo-950 uppercase tracking-widest">Verified Experts</span>
              </div>
              <div className="w-[1px] h-4 bg-indigo-100" />
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                <span className="text-[10px] font-black text-indigo-950 uppercase tracking-widest">Genuine Spares</span>
              </div>
           </div>
           <button 
            onClick={() => document.getElementById('repair-solutions')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white border border-indigo-100 hover:border-indigo-600 text-indigo-600 rounded-[1.5rem] text-[10px] font-black uppercase tracking-widest transition-all duration-500 flex items-center gap-3 group"
           >
             View More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Elite Appliance Restoration" 
      />
    </section>
  );
};

export default Hero;
