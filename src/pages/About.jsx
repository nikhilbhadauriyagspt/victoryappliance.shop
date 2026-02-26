import { ShieldCheck, Clock, CheckCircle2, ArrowRight, Zap, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      
      {/* 1. Spatial Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
                <span className="text-[11px] font-black text-indigo-600 uppercase tracking-widest">
                  Established Excellence 2026
                </span>
              </div>
              
              <h1 className="text-4xl md:text-[72px] font-bold text-gray-900 leading-[0.95] mb-10">
                Architecting <br />
                <span className="text-indigo-600 italic">Functional Homes.</span>
              </h1>
              
              <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed max-w-xl mb-12 border-l-2 border-indigo-100 pl-10">
                Victory Appliance specializes in the high-level restoration of essential domestic systems. We bridge the gap between complex hardware failure and seamless household continuity through expert intervention.
              </p>

              <div className="flex">
                <Link 
                  to="/contact" 
                  className="group relative flex items-center gap-10 py-5 pl-10 pr-5 bg-gray-950 text-white rounded-full transition-all duration-500 hover:bg-indigo-600 hover:scale-105 shadow-2xl shadow-gray-950/10 active:scale-95"
                >
                  <span className="text-[12px] font-bold tracking-widest uppercase">Connect With Experts</span>
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-950 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:scale-90 shadow-lg">
                    <ArrowRight size={22} />
                  </div>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white shadow-2xl border border-indigo-50 group">
                <img loading="lazy" src="/about-mainn.jpg" alt="Our service expertise" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/5 transition-colors duration-700" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Values Bento Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-[0.95]">
                Operational <span className="text-indigo-600 italic">Precision.</span>
              </h2>
            </div>
            <p className="text-gray-400 max-w-[280px] text-sm font-bold uppercase tracking-widest md:text-right leading-relaxed">
              Every system we restore is a testament to our dedication to household reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<ShieldCheck size={32} />}
              title="Sourced Integrity"
              desc="We integrate strictly original manufacturer hardware, ensuring total synchronization with your appliance architecture."
            />
            <ValueCard 
              icon={<Clock size={32} />}
              title="Logistical Velocity"
              desc="Our response infrastructure is designed for rapid deployment, typically reaching your location within 45 minutes."
            />
            <ValueCard 
              icon={<Zap size={32} />}
              title="Advanced Insight"
              desc="Our workforce possesses comprehensive knowledge of next-generation smart home systems and traditional mechanics."
            />
          </div>
        </div>
      </section>

      {/* 3. Commitment Bento Section */}
      <section className="py-24 bg-[#fcfcfc]">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Left Strategic Content */}
            <div className="lg:col-span-6 bg-white rounded-[3rem] p-10 md:p-16 border border-indigo-50 shadow-[0_32px_64px_rgba(79,70,229,0.02)] flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12 leading-[0.95]">
                Definitive <span className="text-indigo-600 italic">Standards.</span>
              </h2>
              
              <div className="grid grid-cols-1 gap-8">
                {[
                  { title: 'Global Supply Chain Integration', desc: 'Direct access to verified manufacturer inventory for zero-compromise repairs.' },
                  { title: 'Fixed Transparency Framework', desc: 'Comprehensive cost diagnostics provided before any restoration initiation.' },
                  { title: 'Sustained Performance Guarantee', desc: 'A 90-day comprehensive validation period for every system we restore.' },
                  { title: 'Verified Professional Network', desc: 'Elite specialists rigorously vetted for security and high-level proficiency.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 transition-all group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-[13px] font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual Bento */}
            <div className="lg:col-span-6 relative">
              <div className="h-full relative rounded-[3rem] overflow-hidden shadow-2xl border border-indigo-50 group/img min-h-[500px]">
                <img src="/about-child2.jpg" className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover/img:scale-110" alt="Our service quality" />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-950/40 via-transparent to-transparent opacity-60" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. The Restoration Lifecycle Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900">System Lifecycle.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
            <TimelineStep 
              step="01"
              title="Deep Diagnostics"
              desc="Identification of hardware fatigue and electronic anomalies through advanced analytical methods."
            />
            <TimelineStep 
              step="02"
              title="Architecture Alignment"
              desc="Selection of specific manufacturer-original spares to restore factory-default performance."
            />
            <TimelineStep 
              step="03"
              title="Expert Restoration"
              desc="Execution of precision repair sequences by specialists trained in brand-specific care protocols."
            />
            <TimelineStep 
              step="04"
              title="Operational Audit"
              desc="Final load testing and safety validation to ensure long-term stability and optimal efficiency."
            />
          </div>
        </div>
      </section>

      {/* 5. Final CTA Bento Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="relative bg-gray-950 rounded-[3.5rem] p-12 md:p-24 text-center overflow-hidden shadow-2xl shadow-black/20 group">
            <div className="relative z-10 max-w-xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-none">
                Begin Elite <span className="text-indigo-400 italic">Restoration.</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-lg font-medium mb-12 leading-relaxed uppercase tracking-widest">
                Partner with the industry leader in high-performance appliance care.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-10 py-5 pl-10 pr-5 bg-indigo-600 text-white font-bold text-[12px] tracking-widest hover:bg-white hover:text-gray-950 transition-all duration-500 rounded-full active:scale-95 group/btn uppercase shadow-2xl shadow-indigo-600/20">
                Initiate Now <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-950 group-hover/btn:rotate-[-45deg] group-hover/btn:scale-90 shadow-lg"><ArrowRight size={22} /></div>
              </Link>
            </div>
            {/* Immersive background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] -mr-64 -mt-64 group-hover:bg-indigo-600/30 transition-all duration-[2000ms]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] -ml-32 -mb-32" />
          </div>
        </div>
      </section>

    </div>
  );
};

const ValueCard = ({ icon, title, desc }) => (
  <div className="p-12 rounded-[3rem] bg-white border border-indigo-50 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-600/10 group">
    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-indigo-50 text-indigo-600 transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6 shadow-sm">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-none">{title}</h3>
    <p className="text-gray-400 text-[15px] leading-relaxed font-medium">{desc}</p>
  </div>
);

const TimelineStep = ({ step, title, desc }) => (
  <div className="flex flex-col group">
    <span className="text-6xl font-black text-indigo-600/5 mb-6 transition-colors duration-700 group-hover:text-indigo-600/10">{step}</span>
    <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-none group-hover:text-indigo-600 transition-colors duration-500">{title}</h3>
    <p className="text-gray-400 text-[15px] md:text-base leading-relaxed font-medium">{desc}</p>
  </div>
);

export default About;
