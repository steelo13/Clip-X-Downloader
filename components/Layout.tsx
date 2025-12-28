
import React, { useState } from 'react';
import { Menu, X, Search, ChevronRight, Twitter, ExternalLink, Github } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onHomeClick: () => void;
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeCategory, 
  setActiveCategory, 
  searchQuery, 
  setSearchQuery,
  onHomeClick,
  onTermsClick,
  onPrivacyClick
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories = [
    'All Tools',
    'Media Tools',
    'Text & Bio Tools',
    'Growth & Analytics',
    'Design & Visual',
    'URL & Profile',
    'Creator Tools'
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-950">
      {/* Mobile Header */}
      <header className="md:hidden flex items-center justify-between p-4 bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={onHomeClick}
        >
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center font-bold text-white">X</div>
          <span className="font-bold text-lg">Clip X</span>
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-400">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Sidebar */}
      <aside className={`
        fixed inset-0 z-40 md:relative md:flex md:flex-col w-full md:w-64 bg-slate-900 border-r border-slate-800 transform transition-transform duration-200 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 hidden md:block cursor-pointer" onClick={onHomeClick}>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-sky-500/20">X</div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight">Clip X</span>
              <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">Downloader</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          <p className="px-3 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Categories</p>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setIsSidebarOpen(false);
              }}
              className={`
                w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all
                ${activeCategory === cat 
                  ? 'bg-sky-500/10 text-sky-400 shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'}
              `}
            >
              <span>{cat}</span>
              {activeCategory === cat && <ChevronRight size={14} />}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
            <h4 className="text-sm font-semibold mb-1">Go Viral</h4>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">Boost your X presence with our free utilities.</p>
            <button className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2">
              <Twitter size={14} /> Follow Updates
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
          <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input
                type="text"
                placeholder="Search tools... (e.g. video, engagement)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all text-slate-200"
              />
            </div>
          </div>

          {children}

          <footer className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 pb-12">
            <p className="text-sm mb-4">© 2025 Clip X Downloader. Not affiliated with X Corp.</p>
            <div className="flex items-center justify-center gap-6">
              <button onClick={onTermsClick} className="hover:text-slate-300 transition-colors text-xs font-medium uppercase tracking-widest">Terms</button>
              <button onClick={onPrivacyClick} className="hover:text-slate-300 transition-colors text-xs font-medium uppercase tracking-widest">Privacy</button>
              <a href="#" className="hover:text-slate-300 transition-colors text-xs font-medium uppercase tracking-widest">Contact</a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default Layout;
