import ServiceLayout from '../../components/ServiceLayout';
import { Flame } from 'lucide-react';

const OvenGasStovePage = () => (
  <ServiceLayout 
    title="Oven & Gas Stove"
    desc="Thermal calibration and safety checks for a high-performance kitchen."
    longDesc="Precision heat management for the professional home kitchen. We specialize in digital thermostat calibration, high-performance burner cleaning, and leak-proof gas line restoration for all premium cooking ranges."
    icon={<Flame size={24} />}
    image="/Ove.jpg"
    commonRepairs={[
      "Uneven flame issues",
      "Thermostat failure",
      "Ignition sensor problems",
      "Gas leak detection"
    ]}
    processSteps={[
      "Safety gas check",
      "Thermal calibration",
      "Performance run"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Controlled combustion expertise</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            Cooking appliances require absolute safety protocols. Whether it's an uneven flame or a digital oven control failure, our experts utilize electronic gas sniffers and thermal probes to ensure your kitchen remains safe.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our cooking services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Gas and burner systems</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Burner port micro-cleaning",
                  "Igniter electrode sync",
                  "Gas valve leak diagnostics",
                  "Regulator flow normalization"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Oven logic and heat</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Thermostat sensor calibration",
                  "Heating element restoration",
                  "Control board (PCB) fix",
                  "Door seal and hinge tuning"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">The safety shield</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            We exclusively use original manufacturer seals and thermal-resistant components. Every service includes a mandatory 5-point gas safety check to ensure zero leakage at all connection nodes.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Gas range", val: "Expertise" },
              { label: "Built-in oven", val: "Diagnostics" },
              { label: "OEM parts", val: "Guaranteed" },
              { label: "Safety run", val: "Protocol" }
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

export default OvenGasStovePage;
