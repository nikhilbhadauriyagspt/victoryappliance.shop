import ServiceLayout from '../../components/ServiceLayout';
import { Snowflake } from 'lucide-react';

const AirConditionerPage = () => (
  <ServiceLayout 
    title="Air Conditioner"
    desc="Expert gas refilling and PCB circuit diagnostics for all cooling systems."
    longDesc="Experience superior thermal regulation once again. Our certified HVAC specialists specialize in precision gas refilling, advanced PCB circuit repairs, and deep chemical decontamination for all split and window systems."
    icon={<Snowflake size={24} />}
    image="/air.jpg"
    commonRepairs={[
      "Insufficent cooling",
      "Strange noise diagnostics",
      "Water leakage issues",
      "Power failure repairs"
    ]}
    processSteps={[
      "Deep system diagnostics",
      "Genuine gas charging",
      "Performance testing"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Elite cooling restoration</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            When thermal efficiency drops, immediate intervention is required. We don't just fix symptoms; we optimize your unit's entire thermodynamic cycle to ensure peak performance and reduced energy consumption.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our AC services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Thermal systems</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Precision gas charging (R32/R410)",
                  "Compressor efficiency tuning",
                  "Deep chemical jet cleaning",
                  "Evaporator coil restoration"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Electrical logic</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Logic board (PCB) diagnostics",
                  "Sensor and relay replacement",
                  "Capacitor and fan motor fix",
                  "Advanced wiring calibration"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Professional care standards</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            Handling fragile HVAC components requires specialized vacuum pumps and digital manifold gauges. We ensure your system is sealed and pressurized to exact factory specifications for long-term reliability.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Split AC", val: "Expertise" },
              { label: "Window AC", val: "Diagnostics" },
              { label: "Gas Flow", val: "Guaranteed" },
              { label: "Thermal", val: "Stability" }
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

export default AirConditionerPage;
