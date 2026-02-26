import { 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const solutions = [
  { id: "washing-machine", title: "Washing machine", desc: "Motor & Drum Systems", icon: <WashingMachine size={24} />, image: "/washing.jpg" },
  { id: "refrigerator", title: "Refrigerator", desc: "Thermal Restoration", icon: <Refrigerator size={24} />, image: "/refrigerator.png" },
  { id: "dishwasher", title: "Dishwasher", desc: "Hydraulic Integrity", icon: <Waves size={24} />, image: "/dish.png" },
  { id: "television", title: "Television", desc: "Visual Calibration", icon: <Monitor size={24} />, image: "/tv.jpg" },
  { id: "coffee-maker", title: "Coffee maker", desc: "Precision Heating", icon: <Coffee size={24} />, image: "/coffee.jpg" },
  { id: "air-conditioner", title: "Air conditioner", desc: "Climate Optimization", icon: <Snowflake size={24} />, image: "/air.jpg" },
  { id: "microwave-oven", title: "Microwave oven", desc: "Digital Wave Control", icon: <Microwave size={24} />, image: "/micro.jpg" },
  { id: "oven-stove", title: "Oven & gas stove", desc: "Ignition Dynamics", icon: <Flame size={24} />, image: "/Ove.jpg" },
  { id: "water-purifier", title: "Water purifier", desc: "Filtration Science", icon: <Droplets size={24} />, image: "/water.jpg" },
  { id: "clothes-dryer", title: "Clothes dryer", desc: "Airflow Calibration", icon: <Wind size={24} />, image: "/clothes.jpg" },
  { id: "kitchen-chimney", title: "Kitchen chimney", desc: "Exhaust Efficiency", icon: <Fan size={24} />, image: "/Kitchen.jpg" },
  { id: "other-appliances", title: "Other appliances", desc: "Multi-Unit Support", icon: <Cpu size={24} />, image: "/others.jpg" }
];

const RepairSolutions = () => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" id="repair-solutions">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-950 tracking-[-0.04em] leading-[0.95]">
              Elite Appliance <br />
              <span className="text-indigo-600 italic">Restorations.</span>
            </h2>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, idx) => (
            <Link 
              key={idx} 
              to={`/service/${item.id}`}
              className="group relative h-[450px] bg-white rounded-[2.5rem] overflow-hidden border border-indigo-50 transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-600/10 hover:-translate-y-1"
            >
              {/* Background Image Area - Full Color Only */}
              <div className="absolute inset-0 z-0">
                <img 
                  loading="lazy" 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent group-hover:from-indigo-950/80 group-hover:via-indigo-900/40 group-hover:to-transparent transition-all duration-700" />
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                <div className="flex items-start">
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-indigo-600 shadow-xl shadow-black/5 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 border border-white/50">
                    {item.icon}
                  </div>
                </div>

                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-bold text-gray-950 group-hover:text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] font-bold text-gray-500 group-hover:text-indigo-200 uppercase tracking-[0.2em]">
                      {item.desc}
                    </p>
                    <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 shadow-lg border border-white/20">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepairSolutions;
