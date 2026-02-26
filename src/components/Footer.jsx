import { Zap, Mail, MapPin, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    const encode = (data) => Object.keys(data).map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])).join("&");

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "newsletter", email })
    })
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setTimeout(() => setIsSuccess(false), 5000);
    })
    .catch(error => {
      console.error(error);
      setIsSubmitting(false);
    });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Latest Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Washing Machine', path: '/service/washing-machine' },
      { name: 'Refrigerator', path: '/service/refrigerator' },
      { name: 'Air Conditioner', path: '/service/air-conditioner' },
      { name: 'Television', path: '/service/television' },
      { name: 'Water Purifier', path: '/service/water-purifier' },
      { name: 'Microwave Oven', path: '/service/microwave-oven' },
      { name: 'Kitchen Chimney', path: '/service/kitchen-chimney' },
      { name: 'Dishwasher', path: '/service/dishwasher' },
      { name: 'Coffee Maker', path: '/service/coffee-maker' },
      { name: 'Oven & Gas Stove', path: '/service/oven-stove' },
      { name: 'Clothes Dryer', path: '/service/clothes-dryer' },
      { name: 'Other Appliances', path: '/service/other-appliances' },
    ],
    support: [
      { name: 'Privacy Policy', path: '/privacy-policy' },
      { name: 'Terms of Service', path: '/terms-of-service' },
      { name: 'Refund Policy', path: '/refund-policy' },
      { name: 'Cookie Policy', path: '/cookie-policy' },
      { name: 'Disclaimer', path: '/disclaimer' },
    ]
  };

  return (
    <footer className="relative bg-white pt-24 pb-12 border-t border-indigo-50 w-full overflow-hidden">
      <div className="w-full px-12 md:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">
          
          {/* Brand & Contact Bento */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <Link to="/" className="inline-block mb-10 group">
                <img src="/logo-rok.png" alt="Victory Appliance" className="h-12 md:h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
              </Link>
              <p className="text-gray-400 text-sm md:text-base font-medium leading-relaxed max-w-sm mb-12">
                Excellence in appliance restoration. Precision-engineered support for your home systems since 2026.
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <a href="mailto:info@victoryappliance.shop" className="group flex items-center gap-6 p-4 rounded-3xl bg-[#fcfcfc] border border-indigo-50 hover:bg-white hover:shadow-xl hover:shadow-indigo-600/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 group-hover:rotate-6 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Digital Inquiry</div>
                  <div className="text-sm font-bold text-gray-950 tracking-tight">info@victoryappliance.shop</div>
                </div>
              </a>

              <div className="group flex items-center gap-6 p-4 rounded-3xl bg-[#fcfcfc] border border-indigo-50 hover:bg-white hover:shadow-xl hover:shadow-indigo-600/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-xl border border-indigo-50 group-hover:-rotate-6 transition-transform">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-0.5">Physical Hub</div>
                  <div className="text-[11px] font-bold text-gray-950 leading-tight">
                    2066 Fairview Ave, Prattville,<br />AL 36066, USA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid Bento */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-10 bg-[#fcfcfc] rounded-[3rem] p-10 border border-indigo-50">
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.4em]">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-gray-950 font-bold text-[13px] transition-colors flex items-center gap-2 group">
                      {link.name} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.4em]">Services</h4>
              <ul className="space-y-4 h-[300px] overflow-y-auto no-scrollbar">
                {footerLinks.services.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-gray-950 font-bold text-[13px] transition-colors block leading-relaxed">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <h4 className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.4em]">Privacy</h4>
              <ul className="space-y-4">
                {footerLinks.support.map(link => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-gray-950 font-bold text-[13px] transition-colors block leading-relaxed">{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Bento */}
          <div className="lg:col-span-3">
            <div className="bg-indigo-600 rounded-[3rem] p-10 shadow-2xl shadow-indigo-600/20 relative overflow-hidden group">
               {/* Decorative Element */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-[50px] -mr-16 -mt-16 group-hover:bg-white/20 transition-all duration-700" />
               
               <div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
                 <div>
                    <div className="flex items-center gap-3 mb-8">
                      <Sparkles size={20} className="text-white" />
                      <h3 className="text-white text-[12px] font-bold uppercase tracking-[0.3em]">Newsletter</h3>
                    </div>
                    <p className="text-indigo-100/70 text-[13px] font-medium leading-relaxed mb-10">
                      Get early access to repair insights and appliance care protocols.
                    </p>
                 </div>
                 
                 <form onSubmit={handleSubscribe} className="space-y-4">
                   <input 
                     required
                     type="email" 
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder="protocol@email.com" 
                     className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white text-[11px] font-bold outline-none focus:bg-white/20 transition-all placeholder:text-white/30"
                   />
                   <button 
                     disabled={isSubmitting}
                     className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-bold text-[11px] uppercase tracking-[0.3em] hover:bg-gray-950 hover:text-white transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-3 group/btn"
                   >
                     {isSubmitting ? '...' : <>Initialize <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" /></>}
                   </button>
                 </form>
                 {isSuccess && (
                   <div className="mt-4 flex items-center gap-3 text-white">
                      <CheckCircle2 size={16} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Enrolled</span>
                   </div>
                 )}
               </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-indigo-50 gap-10">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 group">
               <ShieldCheck size={20} className="text-indigo-600 transition-transform group-hover:scale-110" />
               <span className="text-[10px] font-bold text-gray-950 uppercase tracking-[0.3em]">SSL Encryption Active</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.4em]">
              &copy; {currentYear} Victory Appliance. Defined by Precision.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
