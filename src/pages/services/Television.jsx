import ServiceLayout from '../../components/ServiceLayout';
import { Monitor } from 'lucide-react';

const TelevisionPage = () => (
  <ServiceLayout 
    title="Television"
    desc="Advanced display and logic board repairs for high-resolution entertainment."
    longDesc="Precision solutions for your entertainment system. We specialize in LED/OLED panel restoration, backlight synchronization, and complex motherboard circuit repairs for all premium smart TV brands."
    icon={<Monitor size={24} />}
    image="/tv.jpg"
    commonRepairs={[
      "Display panel issues",
      "Backlight failure",
      "Sound distortion",
      "Motherboard faults"
    ]}
    processSteps={[
      "Panel diagnostics",
      "Circuit restoration",
      "Clarity verification"
    ]}
    extraContent={
      <div className="space-y-16">
        <section>
          <h2 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Crystal clear restoration</h2>
          <p className="text-gray-600 leading-relaxed font-medium">
            Your TV is a complex processing unit. Whether it's a distorted panel or a complete power failure, our repairs utilize specialized equipment to restore your visual experience to its original factory clarity.
          </p>
        </section>

        <section className="py-12 border-y border-indigo-50 relative overflow-hidden group">
          <h3 className="text-2xl font-bold mb-12 tracking-tight text-gray-950 relative z-10">Our display services include</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-indigo-600" />
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Optical systems</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Backlight array restoration",
                  "Panel refresh diagnostics",
                  "Color calibration optimization",
                  "Filter and diffuser alignment"
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
                <h4 className="text-indigo-600 font-black uppercase text-[10px] tracking-[0.3em]">Logic and input</h4>
              </div>
              <ul className="space-y-4 !bg-transparent !p-0 !border-0 !mb-0">
                {[
                  "Motherboard component rework",
                  "HDMI and input node repair",
                  "Software kernel restoration",
                  "Power supply unit tuning"
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
          <h3 className="text-2xl font-bold text-gray-950 mb-6 tracking-tight">Precision handling</h3>
          <p className="text-gray-600 leading-relaxed font-medium mb-12">
            Fragile display panels require absolute care and specialized vacuum tools. We ensure your television is processed in a lint-free environment to prevent internal pixel contamination.
          </p>
          <div className="feature-card-grid">
            {[
              { label: "OLED/QLED", val: "Expertise" },
              { label: "4K / 8K", val: "Diagnostics" },
              { label: "Original", val: "Components" },
              { label: "Safe Move", val: "Protocol" }
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

export default TelevisionPage;
