import { useState, useEffect, cloneElement } from 'react';
import { 
  ChevronDown, Menu, X, 
  WashingMachine, Refrigerator, Waves, Monitor, 
  Coffee, Snowflake, Microwave, Flame, Droplets, 
  Wind, Fan, Cpu, ArrowRight, Zap
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import BookingModal from './BookingModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const services = [
    { id: "washing-machine", title: "Washing Machine", desc: "Drum & motor repair", icon: <WashingMachine size={20} /> },
    { id: "refrigerator", title: "Refrigerator", desc: "Cooling & compressor fix", icon: <Refrigerator size={20} /> },
    { id: "air-conditioner", title: "Air Conditioner", desc: "Gas refilling & PCB fix", icon: <Snowflake size={20} /> },
    { id: "television", title: "Television", desc: "Display & audio fix", icon: <Monitor size={20} /> },
    { id: "water-purifier", title: "Water Purifier", desc: "RO filter replacement", icon: <Droplets size={20} /> },
    { id: "microwave-oven", title: "Microwave Oven", desc: "Magnetron & panel fix", icon: <Microwave size={20} /> },
    { id: "kitchen-chimney", title: "Kitchen Chimney", desc: "Deep cleaning & motor fix", icon: <Fan size={20} /> },
    { id: "dishwasher", title: "Dishwasher", desc: "Pump & leakage repair", icon: <Waves size={20} /> },
    { id: "coffee-maker", title: "Coffee Maker", desc: "Heater & pump service", icon: <Coffee size={20} /> },
    { id: "oven-stove", title: "Oven & Gas Stove", desc: "Burner & ignition repair", icon: <Flame size={20} /> },
    { id: "clothes-dryer", title: "Clothes Dryer", desc: "Heating & belt repair", icon: <Wind size={20} /> },
    { id: "other-appliances", title: "Other Appliances", desc: "Mixers, irons & more", icon: <Cpu size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-2' : 'py-6'}`}>
      <div className="w-full px-4 md:px-10">
        <div className={`relative flex items-center justify-between transition-all duration-700 rounded-[2.5rem] pl-6 md:pl-12 pr-6 md:pr-10 py-3 border ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-2xl border-white/40 shadow-[0_12px_40px_rgba(0,0,0,0.04)]' 
            : 'bg-white/10 backdrop-blur-md border-white/10'
        }`}>
          
          {/* Logo */}
          <Link to="/" className="relative z-10 shrink-0">
            <img src="/logo-rok.png" alt="Victory Appliance" className="h-10 md:h-14 w-auto object-contain hover:scale-105 transition-transform duration-500" />
          </Link>

          {/* Navigation - Centered */}
          <nav className="hidden lg:flex items-center gap-1 bg-gray-950/5 backdrop-blur-md p-1 rounded-full border border-white/20 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`px-5 py-2 text-[12px] font-black uppercase tracking-widest rounded-full transition-all duration-500 ${
                  location.pathname === link.path 
                    ? 'bg-white text-indigo-600 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-950 hover:bg-white/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="relative group" onMouseEnter={() => setActiveDropdown(true)} onMouseLeave={() => setActiveDropdown(false)}>
              <button className={`flex items-center gap-1 px-5 py-2 text-[12px] font-black uppercase tracking-widest rounded-full transition-all duration-500 cursor-pointer ${
                activeDropdown ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500 hover:text-gray-950 hover:bg-white/50'
              }`}>
                Services 
                <ChevronDown size={14} className={`transition-transform duration-500 ${activeDropdown ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-500 ${
                activeDropdown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible pointer-events-none'
              }`}>
                <div className="bg-white/95 backdrop-blur-2xl border border-indigo-50 rounded-[2rem] shadow-[0_32px_64px_rgba(79,70,229,0.12)] w-[860px] overflow-hidden flex">
                  
                  {/* Services Grid Side */}
                  <div className="flex-[3] p-6 bg-white">
                    <div className="flex items-center gap-2 mb-4 px-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-pulse" />
                      <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">Our specializations</h3>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-1">
                      {services.map((item) => (
                        <Link 
                          key={item.id} 
                          to={`/service/${item.id}`} 
                          onClick={() => setActiveDropdown(false)} 
                          className="group/item flex items-center gap-3 p-3 rounded-2xl hover:bg-indigo-50/50 transition-all duration-300"
                        >
                          <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-gray-50 text-gray-400 group-hover/item:text-indigo-600 group-hover/item:bg-white group-hover/item:shadow-md transition-all duration-300 rounded-xl">
                            {cloneElement(item.icon, { size: 16 })}
                          </div>
                          <div>
                            <div className="text-[12px] font-bold text-gray-950 tracking-tight group-hover/item:text-indigo-600 transition-colors">{item.title}</div>
                            <div className="text-[9px] text-gray-400 font-medium tracking-wide line-clamp-1 opacity-0 group-hover/item:opacity-100 transition-all">Expert care</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar Promo Area */}
                  <div className="flex-1 bg-indigo-600 p-7 flex flex-col justify-between relative overflow-hidden group/card">
                    {/* Decorative Background Circles */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 blur-2xl -mr-16 -mt-16 rounded-full" />
                    
                    <div className="relative z-10">
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-4 border border-white/10">
                         <Zap size={18} />
                      </div>
                      <h4 className="text-xl font-bold text-white leading-tight mb-2 tracking-tight">
                        Instant <br />support.
                      </h4>
                      <p className="text-indigo-100 text-[10px] font-medium leading-relaxed tracking-wide opacity-80">
                        90-day warranty on all original spare parts.
                      </p>
                    </div>

                    <button 
                      onClick={() => { setIsModalOpen(true); setActiveDropdown(false); }}
                      className="relative z-10 w-full py-4 bg-white text-indigo-600 font-black text-[9px] uppercase tracking-[0.2em] hover:bg-gray-950 hover:text-white transition-all duration-500 flex items-center justify-center gap-3 rounded-xl shadow-xl shadow-black/5 cursor-pointer group/btn"
                    >
                      Book now <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </nav>

          {/* Action Button - Extreme Right */}
          <div className="flex items-center gap-4 relative z-10">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-7 md:px-9 py-3 bg-indigo-600 text-white text-[11px] font-black uppercase tracking-[0.3em] hover:bg-gray-950 transition-all duration-500 cursor-pointer rounded-full shadow-2xl shadow-indigo-600/20 active:scale-95"
            >
              Book Now
            </button>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className={`lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl transition-all ${isMenuOpen ? 'bg-indigo-600 text-white' : 'bg-gray-100/50 text-gray-950'}`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-[-1] bg-white transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="pt-32 pb-10 px-8 h-full flex flex-col">
          <div className="space-y-6 mb-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-4xl font-black uppercase tracking-tighter text-gray-950 hover:text-indigo-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="flex-1 overflow-y-auto mb-10 no-scrollbar">
            <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.4em] mb-8">Our Specializations</h5>
            <div className="grid grid-cols-1 gap-4">
              {services.map((item) => (
                <Link key={item.id} to={`/service/${item.id}`} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-6 group p-2 border-b border-gray-50">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-50 text-indigo-600 rounded-2xl transition-all group-active:scale-95">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-black text-gray-950 uppercase tracking-tight">{item.title}</span>
                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{item.desc}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-auto">
            <button 
              onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }}
              className="w-full py-6 bg-indigo-600 text-white font-black text-[12px] uppercase tracking-[0.2em] rounded-[1.5rem]"
            >
              Start Your Booking
            </button>
          </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle="Appliance Repair" 
      />
    </header>
  );
};

export default Header;
