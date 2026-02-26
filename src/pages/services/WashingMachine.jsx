import ServiceLayout from '../../components/ServiceLayout';
import { WashingMachine } from 'lucide-react';

const WashingMachinePage = () => (
  <ServiceLayout 
    title="Washing Machine"
    desc="Precision drum and motor repairs for front-load and top-load systems."
    longDesc="Our master technicians specialize in complete restoration for both front-load and top-load systems. From complex logic board failures to mechanical drum vibrations, we ensure factory-grade performance with every fix."
    icon={<WashingMachine size={24} />}
    image="/washing.jpg"
    commonRepairs={[
      "Drainage problems",
      "Spin cycle failure",
      "Excessive vibration",
      "Motor performance issues"
    ]}
    processSteps={[
      "Drum diagnostics",
      "Motor testing",
      "Leak verification"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Expert laundry solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            A malfunctioning washing machine disrupts the essential rhythm of your home. Our diagnostic process identifies the root cause of leaks, motor failures, and drainage issues across all premium models.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our laundry services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Mechanical systems</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Drum and bearing restoration",
                  "Vibration and suspension tuning",
                  "Seal and gasket replacement",
                  "Transmission and belt repair"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Control and electronics</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Logic board (PCB) diagnostics",
                  "Pressure switch calibration",
                  "Drainage pump extraction",
                  "Thermal regulation repair"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Quality assurance</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            Every component we use is a 100% original manufacturer spare. Our technicians undergo rigorous training to maintain service superiority across all major brands like Samsung, LG, and Bosch.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Top Load", val: "Expertise" },
              { label: "Front Load", val: "Diagnostics" },
              { label: "OEM Parts", val: "Guaranteed" },
              { label: "Rapid Fix", val: "Protocol" }
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

export default WashingMachinePage;
