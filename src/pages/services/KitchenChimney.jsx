import ServiceLayout from '../../components/ServiceLayout';
import { Fan } from 'lucide-react';

const KitchenChimneyPage = () => (
  <ServiceLayout 
    title="Kitchen Chimney"
    desc="High-suction motor and deep degreasing for a smoke-free kitchen."
    longDesc="Restore the air purity of your culinary space. We provide specialized high-torque motor diagnostics, advanced centrifugal fan cleaning, and comprehensive chemical degreasing for all wall-mounted and island chimney systems."
    icon={<Fan size={24} />}
    image="/Kitchen.jpg"
    commonRepairs={[
      "Reduced suction power",
      "Excessive motor noise",
      "Touch control issues",
      "Grease accumulation"
    ]}
    processSteps={[
      "Suction diagnostics",
      "Ultrasonic cleaning",
      "Motor performance test"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Aeronautics in the kitchen</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            Accumulated grease is the primary cause of chimney failure and fire hazards. Our deep-clean protocol utilizes industrial-grade degreasers and ultrasonic cleaning for filters to restore original suction power and operational safety.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our chimney services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Suction dynamics</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Motor bearing restoration",
                  "Centrifugal fan balancing",
                  "Baffle filter ultrasonic clean",
                  "Exhaust duct obstruction fix"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Control and logic</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Touch and gesture sensor repair",
                  "LED lighting array fix",
                  "Control board (PCB) tuning",
                  "Auto-clean logic diagnostics"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Operational efficiency</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            We utilize digital anemometers to measure the exact air-flow velocity at the intake and exhaust nodes. This ensures your chimney maintains the required suction for an odor-free environment.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "High suction", val: "Performance" },
              { label: "Deep clean", val: "Sanitation" },
              { label: "OEM motor", val: "Guaranteed" },
              { label: "Odor free", val: "Protocol" }
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

export default KitchenChimneyPage;
