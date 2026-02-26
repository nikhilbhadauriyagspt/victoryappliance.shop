import { Search, CalendarCheck, Wrench, ShieldCheck, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import BookingModal from './BookingModal';

const RepairProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    {
      id: "01",
      title: "Identify Needs",
      desc: "Specify the appliance requiring professional attention.",
      icon: <Search size={24} />
    },
    {
      id: "02",
      title: "Schedule Visit",
      desc: "Coordinate a timeframe that suits your lifestyle.",
      icon: <CalendarCheck size={24} />
    },
    {
      id: "03",
      title: "Elite Restoration",
      desc: "Comprehensive repair using certified original spares.",
      icon: <Wrench size={24} />
    },
    {
      id: "04",
      title: "Active Warranty",
      desc: "Sustainable peace of mind for a 90-day period.",
      icon: <ShieldCheck size={24} />
    }
  ];

  return (
    <section id="repair-process" className="py-24 md:py-32 bg-[#fcfcfc] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-950 tracking-[-0.04em] leading-[0.95]">
            The Restoration <br />
            <span className="text-indigo-600 italic">Framework.</span>
          </h2>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-indigo-100 hidden lg:block -z-0" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 group bg-white rounded-[2.5rem] p-10 border border-indigo-50 shadow-[0_20px_40px_rgba(79,70,229,0.02)] hover:shadow-2xl hover:shadow-indigo-600/10 transition-all duration-700 hover:-translate-y-1">
              
              {/* Step Marker */}
              <div className="w-20 h-20 rounded-[1.5rem] bg-indigo-50 flex items-center justify-center mb-10 transition-all duration-500 group-hover:bg-indigo-600 group-hover:text-white group-hover:rotate-6">
                <div className="text-indigo-600 group-hover:text-white transition-colors duration-500">
                  {step.icon}
                </div>
              </div>

              {/* Step Info */}
              <div>
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-4">Phase {step.id}</div>
                <h3 className="text-2xl font-bold text-gray-950 tracking-tight mb-4">{step.title}</h3>
                <p className="text-gray-400 text-[15px] font-medium leading-relaxed">{step.desc}</p>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                    <ArrowRight size={14} />
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-20 flex justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group relative flex items-center gap-10 py-5 pl-10 pr-5 bg-gray-950 text-white rounded-full transition-all duration-500 hover:bg-indigo-600 hover:scale-105 shadow-2xl shadow-gray-950/10 active:scale-95"
          >
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase">Initialize Booking</span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-950 transition-all duration-500 group-hover:rotate-[-45deg] group-hover:scale-90">
              <ArrowRight size={20} />
            </div>
          </button>
        </div>

      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Appliance restoration" 
      />
    </section>
  );
};

export default RepairProcess;
