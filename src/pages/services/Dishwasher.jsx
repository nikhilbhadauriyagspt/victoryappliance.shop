import ServiceLayout from '../../components/ServiceLayout';
import { Waves } from 'lucide-react';

const DishwasherPage = () => (
  <ServiceLayout 
    title="Dishwasher"
    desc="Precision pump and drainage restoration for high-performance cleaning."
    longDesc="Restore hygiene for your culinary environment. We specialize in high-pressure pump diagnostics, spray arm calibration, and comprehensive thermal sanitation system repairs for all high-end dishwasher units."
    icon={<Waves size={24} />}
    image="/dish.png"
    commonRepairs={[
      "Poor cleaning results",
      "Drainage failure",
      "Strange motor noise",
      "Water leakage issues"
    ]}
    processSteps={[
      "Flow diagnostics",
      "Thermal sensor check",
      "Sanitation cycle test"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Automated hygiene solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            A malfunctioning dishwasher is a breakdown in your kitchen's sanitary protocol. Our repairs address complex water circulation issues and thermal failures to ensure your system restores items to pristine cleanliness.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our dishwasher services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Hydraulic power</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Circulation pump diagnostics",
                  "Spray arm node clearing",
                  "Inlet valve synchronization",
                  "Drainage logic restoration"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-600 group/item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Thermal logic</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Heating element calibration",
                  "Thermal sensor diagnostics",
                  "Control board (PCB) repair",
                  "Dispenser unit tuning"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-600 group/item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Precision performance</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            Dishwashers utilize complex water-softening units and high-temperature cycles. We utilize digital flow-meters to verify that your unit is consuming optimal resources while delivering maximum performance.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "High temp", val: "Sanitation" },
              { label: "Auto cycle", val: "Diagnostics" },
              { label: "OEM pump", val: "Guaranteed" },
              { label: "Hygiene", val: "Protocol" }
            ].map((item, idx) => (
              <div key={idx} className="feature-card">
                <div className="label">{item.label}</div>
                <div className="value">{item.val}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    }
  />
);

export default DishwasherPage;
