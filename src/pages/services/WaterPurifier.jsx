import ServiceLayout from '../../components/ServiceLayout';
import { Droplets } from 'lucide-react';

const WaterPurifierPage = () => (
  <ServiceLayout 
    title="Water Purifier"
    desc="RO filtration and membrane restoration for absolute water purity."
    longDesc="Ensure absolute molecular purity for your drinking water. We provide specialized RO membrane restoration, multi-stage filter replacement, and precision booster pump repairs for all leading purification brands."
    icon={<Droplets size={24} />}
    image="/water.jpg"
    commonRepairs={[
      "Low water flow",
      "Strange taste/odor",
      "Filter replacement",
      "Booster pump failure"
    ]}
    processSteps={[
      "TDS diagnostics",
      "Filtration check",
      "Purity verification"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Molecular level restoration</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            Your purifier is the primary defense against water-borne contaminants. Our repairs utilize digital TDS meters and pressure sensors to ensure your system meets high safety standards.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our water purifier services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Filtration cycle</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "RO membrane pore cleaning",
                  "Sediment filter replacement",
                  "Activated carbon restoration",
                  "Mineral cartridge balancing"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Hydraulic power</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Booster pump torque test",
                  "Solenoid valve diagnostics",
                  "Automatic cut-off calibration",
                  "Flow restrictor normalization"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">TDS precision control</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            Total Dissolved Solids (TDS) management is a critical task. We calibrate your membranes based on your local water source profile, ensuring the perfect biological balance for safe consumption.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "TDS check", val: "Precision" },
              { label: "UV Logic", val: "Diagnostics" },
              { label: "OEM Filter", val: "Guaranteed" },
              { label: "Pure H2O", val: "Protocol" }
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

export default WaterPurifierPage;
