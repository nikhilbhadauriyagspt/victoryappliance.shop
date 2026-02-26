import ServiceLayout from '../../components/ServiceLayout';
import { Wind } from 'lucide-react';

const ClothesDryerPage = () => (
  <ServiceLayout 
    title="Clothes Dryer"
    desc="Expert thermal regulation and drum belt restoration for all dryer models."
    longDesc="Restore your drying performance for all weather conditions. Our specialists specialize in high-temperature sensor calibration, drive belt restoration, and multi-stage heating element repairs for vented and heat-pump dryer systems."
    icon={<Wind size={24} />}
    image="/clothes.jpg"
    commonRepairs={[
      "Inadequate heating",
      "Drum rotation failure",
      "Excessive noise",
      "Thermal fuse issues"
    ]}
    processSteps={[
      "Airflow diagnostics",
      "Heating element check",
      "Safety cycle test"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Precision thermal cycle</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            A dryer is a high-energy appliance that requires absolute precision to prevent fabric damage or fire risks. We utilize digital thermal probes to ensure your unit reaches and maintains optimal drying temperatures.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our dryer services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Heating systems</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Heating element restoration",
                  "Thermal fuse replacement",
                  "High-limit thermostat check",
                  "Airflow duct de-linting"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Drive and logic</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Drum belt and roller tuning",
                  "Idler pulley realignment",
                  "Moisture sensor calibration",
                  "Control board (PCB) repair"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Safety certification</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            Dryers are responsible for a significant number of home fire incidents due to lint buildup and thermal failures. Every repair includes a comprehensive safety check of the internal chassis and exhaust ventilation system.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Vent care", val: "Expertise" },
              { label: "Heat pump", val: "Diagnostics" },
              { label: "OEM belt", val: "Guaranteed" },
              { label: "Safe run", val: "Protocol" }
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

export default ClothesDryerPage;
