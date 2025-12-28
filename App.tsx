
import React, { useState, useMemo } from 'react';
import Layout from './components/Layout';
import { TOOLS } from './constants';
import { ToolCategory, ToolDefinition } from './types';
import ToolCard from './components/ToolCard';
import ToolDetails from './components/ToolDetails';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';
import { ArrowRight, Download, Zap } from 'lucide-react';

type AppView = 'home' | 'terms' | 'privacy';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('home');
  const [activeCategory, setActiveCategory] = useState('All Tools');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedToolId, setSelectedToolId] = useState<string | null>(null);
  const [quickUrl, setQuickUrl] = useState('');

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchesCategory = activeCategory === 'All Tools' || tool.category === activeCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const selectedTool = useMemo(() => 
    TOOLS.find(t => t.id === selectedToolId), [selectedToolId]
  );

  const handleToolClick = (id: string, initialUrl?: string) => {
    setView('home');
    setSelectedToolId(id);
    if (initialUrl) setQuickUrl(initialUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuickDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickUrl) return;
    
    // Auto-detect tool based on URL
    if (quickUrl.includes('/status/')) {
      handleToolClick('video-dl', quickUrl);
    } else if (quickUrl.includes('x.com/') || quickUrl.includes('twitter.com/')) {
      handleToolClick('pfp-dl', quickUrl);
    } else {
      handleToolClick('video-dl', quickUrl);
    }
  };

  const handleHomeClick = () => {
    setView('home');
    setSelectedToolId(null);
    setActiveCategory('All Tools');
    setSearchQuery('');
    setQuickUrl('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTermsClick = () => {
    setView('terms');
    setSelectedToolId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrivacyClick = () => {
    setView('privacy');
    setSelectedToolId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout 
      activeCategory={activeCategory} 
      setActiveCategory={(cat) => {
        setView('home');
        setActiveCategory(cat);
        setSelectedToolId(null);
      }}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onHomeClick={handleHomeClick}
      onTermsClick={handleTermsClick}
      onPrivacyClick={handlePrivacyClick}
    >
      {view === 'terms' && <TermsPage onBack={handleHomeClick} />}
      {view === 'privacy' && <PrivacyPage onBack={handleHomeClick} />}
      
      {view === 'home' && (
        selectedTool ? (
          <ToolDetails 
            tool={selectedTool} 
            onBack={() => {
              setSelectedToolId(null);
              setQuickUrl('');
            }} 
            initialUrl={quickUrl}
          />
        ) : (
          <>
            {/* Hero Section with URL Input */}
            <div className="mb-16 relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 p-8 md:p-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 blur-[100px] -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -ml-32 -mb-32"></div>
              
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6">
                  <Zap size={14} fill="currentColor" /> Fastest X Downloader
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight">
                  Download <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">Anything</span> from X
                </h1>
                <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                  Paste a link to a video, GIF, image, or profile to get started instantly. No account, no API.
                </p>

                <form onSubmit={handleQuickDownload} className="relative max-w-2xl mx-auto group">
                  <div className="absolute inset-0 bg-sky-500/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex p-2 bg-slate-950 border border-slate-800 rounded-2xl focus-within:border-sky-500/50 transition-all shadow-2xl">
                    <input 
                      type="text" 
                      value={quickUrl}
                      onChange={(e) => setQuickUrl(e.target.value)}
                      placeholder="Paste X/Twitter URL here..."
                      className="flex-1 bg-transparent border-none px-4 py-3 text-lg md:text-xl outline-none text-slate-200 placeholder:text-slate-700 font-medium"
                    />
                    <button 
                      type="submit"
                      className="bg-sky-500 hover:bg-sky-600 text-white font-bold px-6 md:px-8 py-3 rounded-xl flex items-center gap-2 transition-all shadow-lg shadow-sky-500/20 whitespace-nowrap"
                    >
                      <Download size={20} /> <span className="hidden sm:inline">Download</span>
                    </button>
                  </div>
                </form>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-slate-500 text-sm font-medium">
                  <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> High Speed</span>
                  <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> 100% Secure</span>
                  <span className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> HD Quality</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-200">
                {activeCategory === 'All Tools' ? 'All Professional Tools' : activeCategory}
              </h2>
              <div className="text-slate-500 text-sm font-medium">
                {filteredTools.length} results
              </div>
            </div>

            {filteredTools.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredTools.map((tool) => (
                  <ToolCard 
                    key={tool.id} 
                    tool={tool} 
                    onClick={() => handleToolClick(tool.id)} 
                  />
                ))}
              </div>
            ) : (
              <div className="py-20 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-2">No tools found</h3>
                <p className="text-slate-500">Try adjusting your search or category filters.</p>
                <button 
                  onClick={handleHomeClick}
                  className="mt-6 text-sky-400 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )
      )}
    </Layout>
  );
};

export default App;
