import ServiceLayout from '../../components/ServiceLayout';
import { Cpu } from 'lucide-react';

const OtherAppliancesPage = () => (
  <ServiceLayout 
    title="Other Appliances"
    desc="Specialized multi-device care support for all your household machines."
    longDesc="Expert solutions for your entire appliance ecosystem. From precision mixer motor restoration to sophisticated digital iron circuitry, we provide certified repair solutions for all essential household machines."
    icon={<Cpu size={24} />}
    image="/others.jpg"
    commonRepairs={[
      "Motor performance issues",
      "Wiring and circuit faults",
      "Heating element failure",
      "Mechanical wear and tear"
    ]}
    processSteps={[
      "Device diagnostics",
      "Component restoration",
      "Safety verification"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Universal appliance support</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            Every device in your home deserves professional attention. Our laboratory is equipped to handle specialized repairs for smaller but critical household units, ensuring they return to original operational standards.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our other appliance services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Small motor systems</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Mixer/grinder motor rewinding",
                  "Vacuum suction optimization",
                  "Air purifier filter restoration",
                  "Fan bearing high-speed tuning"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Heating and control</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Steam iron thermal logic",
                  "Electric kettle auto-off fix",
                  "Toaster element synchronization",
                  "Induction cooktop PCB repair"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Certified multi-brand lab</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            We maintain an extensive inventory of specialized micro-components and original spare parts. Our goal is to extend the lifecycle of your entire portfolio through sustainable maintenance.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Multi-fix", val: "Expertise" },
              { label: "Micro-logic", val: "Diagnostics" },
              { label: "OEM Spares", val: "Guaranteed" },
              { label: "Eco-repair", val: "Protocol" }
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

export default OtherAppliancesPage;
