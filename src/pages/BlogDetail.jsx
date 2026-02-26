import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../blogData';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, ChevronLeft, Sparkles, User } from 'lucide-react';
import { useEffect, useState } from 'react';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id));
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  if (!post) {
    return (
      <div className="min-h-screen pt-44 flex flex-col items-center justify-center bg-[#fcfcfc]">
        <h2 className="text-3xl font-black text-gray-950 uppercase tracking-tighter mb-6">Insight Not Found</h2>
        <Link to="/blog" className="text-indigo-600 font-black text-[11px] hover:underline flex items-center gap-3 uppercase tracking-[0.2em]">
          <ArrowLeft size={16} /> Return to Library
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Success Toast - Spatial Style */}
      <div className={`fixed bottom-10 right-10 z-[100] transition-all duration-700 transform ${copied ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-white border border-indigo-100 p-5 rounded-[1.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.12)] flex items-center gap-4 backdrop-blur-xl">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
            <CheckCircle2 size={20} />
          </div>
          <div className="flex flex-col pr-6">
            <span className="text-[11px] font-black text-gray-950 uppercase tracking-tight">Link Synchronized</span>
            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-0.5">Ready for transmission</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 1. Article Navigation & Meta */}
        <div className="max-w-4xl mx-auto mb-16">
          <Link to="/blog" className="inline-flex items-center gap-3 text-[10px] font-black text-gray-400 hover:text-indigo-600 transition-all uppercase tracking-[0.3em] mb-12 group">
            <ChevronLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Return to Library
          </Link>
          
          <div className="flex items-center gap-4 mb-10">
            <div className="px-4 py-1.5 bg-indigo-50 rounded-full border border-indigo-100/50">
               <span className="text-indigo-600 text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                 <Clock size={12} /> {post.readTime} Duration
               </span>
            </div>
            <div className="px-4 py-1.5 bg-gray-50 rounded-full border border-gray-100">
               <span className="text-gray-400 text-[9px] font-black uppercase tracking-widest">
                 Category: {post.category || "Insight"}
               </span>
            </div>
          </div>

          <h1 className="text-4xl md:text-[64px] font-black text-gray-950 tracking-[-0.04em] leading-[0.95] mb-12 uppercase">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-8 py-10 border-y border-indigo-50/50">
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 overflow-hidden border border-indigo-100 p-1">
                <img loading="lazy" src={`https://i.pravatar.cc/150?u=${post.author.split(' ')[0]}`} alt={post.author} className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <div>
                <p className="text-[14px] font-black text-gray-950 uppercase tracking-tight mb-1">{post.author}</p>
                <p className="text-[10px] font-bold text-gray-400 flex items-center gap-2 uppercase tracking-widest">
                  <Calendar size={12} className="text-indigo-600" /> {post.date}
                </p>
              </div>
            </div>
            <button 
              onClick={handleShare}
              className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer border border-indigo-50 hover:border-indigo-100 shadow-sm"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* 2. Immersive Visual Area */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="rounded-[3.5rem] overflow-hidden bg-white shadow-2xl border border-indigo-50 group">
            <img loading="lazy" src={post.image} alt={post.title} className="w-full h-auto aspect-video object-cover transition-transform duration-[3000ms] group-hover:scale-105" />
          </div>
        </div>

        {/* 3. Core Content Infrastructure */}
        <div className="max-w-3xl mx-auto mb-24">
          <div 
            className="prose prose-lg max-w-none text-gray-600 leading-relaxed font-medium blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Post Footer Callout */}
          <div className="mt-32">
            <div className="bg-indigo-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl shadow-indigo-600/20">
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] -mr-32 -mt-32 group-hover:bg-white/20 transition-all duration-700" />
              
              <div className="relative z-10 text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white mx-auto mb-10 transition-transform group-hover:rotate-6">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-8 tracking-[-0.03em] uppercase leading-tight">Insight Validated?</h3>
                <p className="text-indigo-100/70 mb-12 max-w-md mx-auto text-sm md:text-lg font-medium leading-relaxed uppercase tracking-widest">
                  Explore further expert guidance and protocols for home restoration excellence.
                </p>
                <Link to="/blog" className="inline-flex items-center gap-10 py-5 pl-10 pr-5 bg-white text-indigo-600 rounded-full font-black text-[12px] tracking-[0.2em] hover:bg-gray-950 hover:text-white transition-all duration-500 shadow-2xl active:scale-95 group/btn uppercase">
                  Return to Archive <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 transition-all duration-500 group-hover/btn:rotate-[-45deg] group-hover/btn:bg-indigo-600 group-hover/btn:text-white shadow-sm"><ArrowLeft size={20} className="rotate-180" /></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Global Style Engine for Article Content */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h3 {
          font-size: 1.75rem;
          font-weight: 900;
          color: #111827;
          margin-top: 5rem;
          margin-bottom: 2rem;
          letter-spacing: -0.04em;
          text-transform: uppercase;
          line-height: 1.1;
        }
        .blog-content h4 {
          font-size: 1.25rem;
          font-weight: 900;
          color: #111827;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: -0.02em;
        }
        .blog-content p {
          margin-bottom: 2rem;
          line-height: 1.9;
          font-size: 1.125rem;
          letter-spacing: -0.01em;
        }
        .blog-content ul {
          margin-bottom: 3rem;
          list-style-type: none;
          background: #f8fafc;
          padding: 2.5rem;
          border-radius: 2rem;
          border: 1px solid #eef2ff;
        }
        .blog-content li {
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
          font-size: 1.1rem;
          font-weight: 600;
          color: #374151;
        }
        .blog-content li::before {
          content: "";
          width: 8px;
          height: 8px;
          background-color: #4f46e5;
          border-radius: 2px;
          position: absolute;
          left: 0;
          top: 0.85rem;
          transform: rotate(45deg);
        }
        .blog-content strong {
          color: #111827;
          font-weight: 800;
        }
      `}} />
    </div>
  );
};

export default BlogDetail;
