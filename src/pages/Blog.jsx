import { ArrowRight, Clock, Calendar, ChevronRight, CheckCircle2, Sparkles, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const Blog = () => {
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

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-[72px] font-bold text-gray-950 tracking-[-0.04em] leading-[0.95] mb-10">
            Home <br />
            <span className="text-indigo-600 italic">Insights.</span>
          </h1>
          <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-xl uppercase tracking-widest text-[13px]">
            Expert guidance and essential care guides for maintaining peak household system performance.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`} className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-indigo-50 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-600/10 hover:-translate-y-1">
              {/* Card Image Area */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img loading="lazy" src={post.image} className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" alt={post.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 via-transparent to-transparent opacity-60" />
                
                {/* Category Tag */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-xl border border-white/50 shadow-xl">
                   <span className="text-[9px] font-bold text-indigo-600 uppercase tracking-widest">{post.category || "Insight"}</span>
                </div>
              </div>
              
              {/* Card Content Area */}
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-[9px] font-bold mb-6 uppercase tracking-widest">
                  <span className="flex items-center gap-2"><Calendar size={14} className="text-indigo-600" /> {post.date}</span>
                  <div className="w-1 h-1 rounded-full bg-indigo-100" />
                  <span className="flex items-center gap-2"><Clock size={14} className="text-indigo-600" /> {post.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-950 mb-6 leading-[1.2] transition-colors group-hover:text-indigo-600 tracking-tight">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-[15px] font-medium leading-relaxed mb-10 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between pt-8 border-t border-indigo-50/50">
                   <div className="flex items-center gap-2 text-indigo-600 font-bold text-[11px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                      Read Article <ArrowRight size={14} />
                   </div>
                   <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                      <Sparkles size={16} />
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Spatial Newsletter */}
        <div className="relative bg-gray-950 rounded-[3.5rem] p-12 md:p-24 overflow-hidden shadow-2xl group">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] -mr-64 -mt-64 group-hover:bg-indigo-600/30 transition-all duration-[2000ms]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-600/10 blur-[100px] -ml-32 -mb-32" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-[-0.03em] leading-[0.95]">
              Home <br /> <span className="text-indigo-400 italic">Updates.</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-lg font-medium mb-12 leading-relaxed uppercase tracking-widest">
              Register for direct information on household system stability.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 bg-white/5 p-2 rounded-[2rem] border border-white/10 backdrop-blur-md">
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="INFO@EMAIL.COM" 
                className="flex-1 bg-transparent border-none px-8 py-5 text-white text-[13px] font-bold outline-none transition-all placeholder:text-white/20"
              />
              <button 
                disabled={isSubmitting}
                className="bg-indigo-600 hover:bg-white hover:text-gray-950 text-white px-12 py-5 rounded-[1.5rem] font-bold text-[12px] uppercase tracking-[0.2em] transition-all duration-500 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-3 group/btn shadow-xl shadow-indigo-600/20"
              >
                {isSubmitting ? '...' : <>Join Now <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" /></>}
              </button>
            </form>
            
            {isSuccess && (
              <div className="mt-8 flex items-center justify-center gap-3 text-indigo-400">
                <CheckCircle2 size={20} />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Enrolled</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;
