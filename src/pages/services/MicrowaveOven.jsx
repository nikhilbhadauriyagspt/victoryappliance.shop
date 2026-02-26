import ServiceLayout from '../../components/ServiceLayout';
import { Microwave } from 'lucide-react';

const MicrowaveOvenPage = () => (
  <ServiceLayout 
    title="Microwave Oven"
    desc="Magnetron and high-voltage circuitry repairs for all microwave models."
    longDesc="Precision microwave solutions for the modern kitchen. We specialize in high-voltage transformer restoration, magnetron diagnostics, and sophisticated touch-panel circuit repairs for all countertop and built-in convection models."
    icon={<Microwave size={24} />}
    image="/micro.jpg"
    commonRepairs={[
      "Not heating issues",
      "Turntable rotation failure",
      "Sparking inside chamber",
      "Control panel failure"
    ]}
    processSteps={[
      "Safety discharge",
      "Magnetron testing",
      "Radiation leak check"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Radiation safe restoration</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            A malfunctioning microwave requires extreme caution. Our repairs utilize electromagnetic leak detectors and high-voltage discharge protocols to ensure your unit is sound and perfectly safe for culinary use.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our microwave services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Wave systems</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Magnetron output restoration",
                  "High-voltage diode analysis",
                  "Capacitor safety discharge",
                  "Waveguide cover replacement"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Mechanical and logic</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Touch panel kernel repair",
                  "Turntable motor alignment",
                  "Door safety switch sync",
                  "Convection fan restoration"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Safety-first protocol</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            Microwaves contain high-voltage components that can be lethal even when unplugged. Our experts follow strict safety standards, ensuring every unit passes a rigorous radiation leak test before being cleared.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Convection", val: "Expertise" },
              { label: "Solo Micro", val: "Diagnostics" },
              { label: "OEM Parts", val: "Guaranteed" },
              { label: "Leak Test", val: "Protocol" }
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

export default MicrowaveOvenPage;
