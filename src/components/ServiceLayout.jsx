import { ShieldCheck, Clock, Award, ArrowLeft, ArrowRight, Settings, PhoneCall, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BookingModal from './BookingModal';

const ServiceLayout = ({ 
  title, 
  desc, 
  longDesc, 
  icon, 
  image, 
  extraContent,
  commonRepairs = ["Performance issues", "Noise diagnostics", "Power failures", "Seal replacement"],
  processSteps = ["Full diagnostics", "Oem parts", "Final testing"]
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-20 font-sans selection:bg-indigo-100 selection:text-indigo-600">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* 1. Header Section */}
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-indigo-600 transition-all mb-10 group">
            <div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:border-indigo-100 group-hover:bg-indigo-50 transition-all">
              <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            </div>
            Back to catalog
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50/50 rounded-full mb-8 border border-indigo-100">
                <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">
                  Professional service
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-950 mb-6 tracking-tight">
                {title} <span className="text-indigo-600 italic font-medium">solutions.</span>
              </h1>
              <p className="text-gray-500 font-medium text-base md:text-lg leading-relaxed max-w-2xl">
                {desc}
              </p>
            </div>
            
            <div className="shrink-0">
               <button 
                onClick={() => setIsModalOpen(true)}
                className="w-full lg:w-auto px-12 py-6 bg-indigo-600 text-white font-black text-[11px] uppercase tracking-[0.3em] rounded-2xl hover:bg-gray-950 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 flex items-center justify-center gap-4 group"
               >
                 Book restoration <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </div>

        {/* 2. Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Body */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[2.5rem] border border-indigo-50/50 p-8 md:p-16 shadow-[0_32px_64px_rgba(79,70,229,0.02)] relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/30 blur-[100px] -mr-32 -mt-32 group-hover:bg-indigo-100/40 transition-colors duration-700" />
               
               <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-10">
                   <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-indigo-600/20">
                     {icon}
                   </div>
                   <div className="h-[1px] flex-1 bg-gradient-to-r from-indigo-100 to-transparent" />
                 </div>

                 <h2 className="text-2xl md:text-3xl font-bold text-gray-950 mb-8 tracking-tight">
                   Service overview
                 </h2>
                 <p className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed mb-12">
                   {longDesc}
                 </p>
                 
                 <div className="extra-service-content-matrix">
                   {extraContent}
                 </div>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="p-10 bg-gray-950 rounded-[2.5rem] border border-gray-800 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/20 blur-3xl -mr-16 -mt-16" />
                  <h3 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em] mb-10 flex items-center gap-3">
                    <Sparkles size={16} /> Common issues
                  </h3>
                  <ul className="space-y-6">
                    {commonRepairs.map((item, i) => (
                      <li key={i} className="flex items-center gap-5 text-base font-bold text-white group/item">
                        <div className="w-2 h-2 rounded-full bg-indigo-600 group-hover/item:scale-125 transition-transform" />
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
               <div className="p-10 bg-white rounded-[2.5rem] border border-indigo-50 shadow-sm">
                  <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-10">Workflow process</h3>
                  <ul className="space-y-6">
                    {processSteps.map((item, i) => (
                      <li key={i} className="flex items-center gap-5 text-base font-bold text-gray-900 group/item">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm group-hover/item:bg-indigo-600 group-hover/item:text-white transition-all">
                          0{i + 1}
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="rounded-[2.5rem] overflow-hidden border border-indigo-50 shadow-2xl group aspect-[4/5] lg:aspect-auto lg:h-[400px]">
               <img src={image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={title} />
            </div>

            <div className="bg-white rounded-[2.5rem] p-10 border border-indigo-50 shadow-[0_24px_48px_rgba(79,70,229,0.04)]">
               <h4 className="text-[10px] font-black text-gray-400 tracking-[0.4em] mb-12 text-center uppercase">Quality benchmarks</h4>
               <div className="space-y-4">
                  {[
                    { icon: <Clock size={18} />, label: 'Typical arrival', val: '45 mins' },
                    { icon: <ShieldCheck size={18} />, label: 'Service warranty', val: '90 days' },
                    { icon: <Award size={18} />, label: 'Hardware used', val: 'OEM parts' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-5 rounded-[2rem] hover:bg-indigo-50/50 transition-all border border-transparent hover:border-indigo-100/50">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                          {item.icon}
                        </div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.label}</span>
                      </div>
                      <span className="text-[13px] font-black text-gray-950">{item.val}</span>
                    </div>
                  ))}
               </div>
               
            
            </div>
          </div>

        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={title} 
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .extra-service-content-matrix section {
          margin-top: 5rem;
        }
        .extra-service-content-matrix h2 {
          font-size: 1.875rem;
          font-weight: 800;
          color: #030712;
          margin-bottom: 2rem;
          letter-spacing: -0.025em;
        }
        .extra-service-content-matrix h3 {
          font-size: 1.5rem;
          font-weight: 800;
          color: #030712;
          margin-bottom: 1.5rem;
          letter-spacing: -0.025em;
        }
        .extra-service-content-matrix h4 {
          font-size: 0.75rem;
          font-weight: 900;
          color: #4f46e5;
          margin-bottom: 1.25rem;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }
        .extra-service-content-matrix p {
          margin-bottom: 2rem;
          color: #4b5563;
          line-height: 1.8;
          font-size: 1.05rem;
          font-weight: 500;
        }
        .extra-service-content-matrix ul {
          margin-bottom: 3rem;
          display: grid;
          grid-template-cols: 1fr;
          gap: 1.5rem;
          background: #f9fafb;
          padding: 2.5rem;
          border-radius: 2.5rem;
          border: 1px solid #f3f4f6;
        }
        @media (min-width: 768px) {
          .extra-service-content-matrix ul {
            grid-template-cols: 1fr 1fr;
          }
        }
        .extra-service-content-matrix li {
          color: #1f2937;
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .extra-service-content-matrix li::before {
          content: "";
          width: 8px;
          height: 8px;
          background-color: #4f46e5;
          flex-shrink: 0;
          border-radius: 2px;
          transform: rotate(45deg);
        }
        .extra-service-content-matrix .feature-card-grid {
          display: grid;
          grid-template-cols: repeat(2, 1fr);
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .extra-service-content-matrix .feature-card-grid {
            grid-template-cols: repeat(4, 1fr);
          }
        }
        .extra-service-content-matrix .feature-card {
          background: white;
          border: 1px solid #f3f4f6;
          border-radius: 2rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.5s;
        }
        .extra-service-content-matrix .feature-card:hover {
          box-shadow: 0 20px 40px rgba(79,70,229,0.06);
          border-color: #eef2ff;
          transform: translateY(-4px);
        }
        .extra-service-content-matrix .feature-card .label {
          font-size: 0.65rem;
          font-weight: 900;
          color: #4f46e5;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          margin-bottom: 0.75rem;
        }
        .extra-service-content-matrix .feature-card .value {
          font-size: 0.9rem;
          font-weight: 800;
          color: #030712;
          text-transform: uppercase;
        }
      `}} />
    </div>
  );
};

export default ServiceLayout;
