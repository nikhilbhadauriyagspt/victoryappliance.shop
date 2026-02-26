import { ArrowRight, Calendar, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../blogData';

const LatestBlogs = () => {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden" id="insights">
      <div className="max-w-[1440px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-950 tracking-[-0.04em] leading-[0.95]">
              Appliance <br />
              <span className="text-indigo-600 italic">Intelligence.</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <Link 
              to="/blog" 
              className="group flex items-center gap-4 text-[11px] font-bold text-gray-950 uppercase tracking-widest hover:text-indigo-600 transition-colors"
            >
              Explore Full Library <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Blog Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Link 
              key={idx} 
              to={`/blog/${post.id}`} 
              className="group flex flex-col h-full bg-[#fcfcfc] rounded-[2.5rem] border border-indigo-50 overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-indigo-600/10 hover:-translate-y-1"
            >
              {/* Card Image Area */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img 
                  loading="lazy" 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent opacity-60" />
                
                {/* Category Tag */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-xl border border-white/50 shadow-xl">
                   <span className="text-[9px] font-black text-indigo-600 uppercase tracking-widest">{post.category || "Insight"}</span>
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
                
                <p className="text-gray-500 text-sm font-medium leading-relaxed mb-10 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto flex items-center justify-between">
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

        {/* Mobile View All Button */}
        <div className="mt-16 flex justify-center md:hidden">
          <Link to="/blog" className="px-10 py-5 bg-gray-950 text-white font-bold text-[11px] uppercase tracking-[0.2em] rounded-full active:scale-95 group flex items-center gap-4">
            View All Posts <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default LatestBlogs;
