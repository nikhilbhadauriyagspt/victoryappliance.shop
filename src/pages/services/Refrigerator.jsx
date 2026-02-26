import ServiceLayout from '../../components/ServiceLayout';
import { Refrigerator } from 'lucide-react';

const RefrigeratorPage = () => (
  <ServiceLayout 
    title="Refrigerator"
    desc="Master cooling and compressor diagnostics for all major refrigerator brands."
    longDesc="Expert thermal solutions for your kitchen. We specialize in compressor restoration, precision gas charging, thermostat calibration, and high-efficiency seal replacements using 100% genuine components."
    icon={<Refrigerator size={24} />}
    image="/refrigerator.png"
    commonRepairs={[
      "Inadequate cooling",
      "Compressor failure",
      "Strange motor noise",
      "Gas leak detection"
    ]}
    processSteps={[
      "Thermal diagnostics",
      "Gas pressure check",
      "Cooling cycle test"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Preserving your freshness</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            Your refrigerator is the critical center of your kitchen. When cooling fails or strange noises occur, immediate professional attention is vital. Our repairs specialize in single-door, double-door, and premium side-by-side systems.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our refrigerator services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Cooling architecture</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Compressor torque restoration",
                  "Evaporator coil de-icing",
                  "Gas pressure normalization",
                  "Condenser fan tuning"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Precision control</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Thermostat sensor calibration",
                  "Defrost cycle optimization",
                  "Logic board (PCB) repair",
                  "Internal lighting systems"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Diagnostic expertise</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            We utilize advanced thermal imaging and pressure gauges to detect micro-leaks and electrical faults that conventional inspections miss. This ensures a permanent fix rather than a temporary patch.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Side-by-Side", val: "Expertise" },
              { label: "Double Door", val: "Diagnostics" },
              { label: "Gas Flow", val: "Guaranteed" },
              { label: "90-Day", val: "Warranty" }
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

export default RefrigeratorPage;
