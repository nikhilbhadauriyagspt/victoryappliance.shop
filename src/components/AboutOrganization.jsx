import { ShieldCheck, ArrowRight, BadgeDollarSign, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutOrganization = () => {
  return (
    <section className="py-24 md:py-32 bg-[#fcfcfc] overflow-hidden" id="about-hub">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* 1. Left: Strategic Content Bento (Span 7) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-indigo-50 shadow-[0_32px_64px_rgba(79,70,229,0.02)] relative overflow-hidden flex-grow flex flex-col justify-center">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-10 leading-[0.95]">
                  Pioneering <br />
                  <span className="text-indigo-600 italic">Appliance Care.</span>
                </h2>

                <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-14">
                  At Victory Appliance, we redefine domestic maintenance through honest checks and elite expert execution. We ensure every restoration is definitive, sustainable, and professional.
                </p>

                <div className="flex">
                  <Link 
                    to="/contact" 
                    className="group relative flex items-center gap-10 py-5 pl-10 pr-5 bg-gray-950 text-white rounded-full transition-all duration-500 hover:bg-indigo-600 hover:scale-105 shadow-2xl shadow-gray-950/10"
                  >
                    <span className="text-[12px] font-bold tracking-widest uppercase">Consult Our Experts</span>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-950 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:scale-90">
                      <ArrowRight size={20} />
                    </div>
                  </Link>
                </div>
              </div>

              {/* Decorative Subtle Background */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-50/50 blur-[80px] -ml-32 -mt-32 rounded-full pointer-events-none" />
            </div>

            {/* Sub-Bento Grid: Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-indigo-600 rounded-[2.5rem] p-10 group hover:-translate-y-1 transition-all duration-500 shadow-xl shadow-indigo-600/10">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10 transition-transform group-hover:rotate-6">
                  <Users size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">Elite Workforce</h4>
                <p className="text-indigo-100/70 text-[15px] font-medium leading-relaxed">Highly specialized team trained in advanced repair methods and safe restoration.</p>
              </div>

              <div className="bg-white rounded-[2.5rem] p-10 border border-indigo-50 group hover:-translate-y-1 transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.02)]">
                <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 transition-transform group-hover:-rotate-6">
                  <BadgeDollarSign size={28} />
                </div>
                <h4 className="text-xl font-bold text-gray-950 mb-4">Transparent Value</h4>
                <p className="text-gray-400 text-[15px] font-medium leading-relaxed">Upfront pricing with comprehensive repair plans before any work begins.</p>
              </div>
            </div>
          </div>

          {/* 2. Right: Immersive Visual Bento (Span 5) */}
          <div className="lg:col-span-5 relative">
            <div className="h-full relative rounded-[3rem] overflow-hidden border border-indigo-50 shadow-2xl group/img min-h-[500px]">
              <img 
                src="/ac-repair.jpg" 
                alt="Expert technicians at work" 
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover/img:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/40 via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Background Ambient Glow */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-indigo-600/10 blur-[80px] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutOrganization;
