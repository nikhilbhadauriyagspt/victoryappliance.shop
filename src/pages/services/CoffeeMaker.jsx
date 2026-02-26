import ServiceLayout from '../../components/ServiceLayout';
import { Coffee } from 'lucide-react';

const CoffeeMakerPage = () => (
  <ServiceLayout 
    title="Coffee Maker"
    desc="Precision heating and brewing solutions for your morning ritual."
    longDesc="Restore your morning routine with our expert brewing system care. We specialize in heater calibration, pump restoration, and deep descaling for all premium espresso and drip coffee architectures."
    icon={<Coffee size={24} />}
    image="/coffee.jpg"
    commonRepairs={[
      "Heater failure",
      "Pump pressure issues",
      "Brew group blockage",
      "Descaling requirements"
    ]}
    processSteps={[
      "Pressure diagnostics",
      "Thermal calibration",
      "Brew cycle testing"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Professional brewing solutions</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            A malfunctioning coffee maker can disrupt your entire morning flow. Our diagnostic process identifies issues with temperature stability, pressure regulation, and internal blockages across all high-end models and automatic systems.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our coffee maker services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Heating and extraction</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Heater element restoration",
                  "Thermostat and sensor calibration",
                  "Pump pressure optimization",
                  "Extraction group cleaning"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Electronic control</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Control board diagnostics",
                  "Display and button restoration",
                  "Flow meter normalization",
                  "Power supply stabilization"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Reliability assurance</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            We use only original manufacturer components to ensure your machine returns to its factory-spec brewing performance. Our experts are trained in the specific mechanics of premium brands.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "Espresso", val: "Extraction" },
              { label: "Drip System", val: "Diagnostics" },
              { label: "OEM Parts", val: "Guaranteed" },
              { label: "Brew Logic", val: "Stability" }
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

export default CoffeeMakerPage;
