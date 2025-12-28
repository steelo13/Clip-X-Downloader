
import React, { useState, useEffect } from 'react';
import { Download, Link as LinkIcon, RefreshCw, AlertCircle, Play, FileAudio, Image as ImageIcon, Camera } from 'lucide-react';

interface Props {
  type: string;
  initialUrl?: string;
}

const MediaDownloader: React.FC<Props> = ({ type, initialUrl }) => {
  const [url, setUrl] = useState(initialUrl || '');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<boolean>(false);

  useEffect(() => {
    if (initialUrl) {
      handleProcess();
    }
  }, []);

  const handleProcess = () => {
    if (!url) return;
    if (!url.includes('x.com') && !url.includes('twitter.com')) {
      alert('Please enter a valid X (Twitter) link.');
      return;
    }
    setLoading(true);
    setResult(false);
    setTimeout(() => {
      setLoading(false);
      setResult(true);
    }, 1800);
  };

  const getIcon = () => {
    if (type === 'space-dl') return <FileAudio className="text-sky-400" size={48} />;
    if (type === 'img-dl' || type === 'header-dl') return <ImageIcon className="text-sky-400" size={48} />;
    if (type === 'screenshot-gen') return <Camera className="text-sky-400" size={48} />;
    return <Play size={48} className="text-white opacity-50 group-hover:opacity-100 transition-opacity z-10" />;
  };

  const getTitle = () => {
    if (type === 'screenshot-gen') return 'Tweet Screenshot Generator';
    return `Download ${type.split('-')[0].toUpperCase()}`;
  }

  const getButtonText = () => {
    if (loading) return type === 'screenshot-gen' ? 'Generating Frame...' : 'Fetching Media...';
    return type === 'screenshot-gen' ? 'Generate Screenshot' : `Download ${type.split('-')[0].toUpperCase()}`;
  }

  return (
    <div className="p-8 space-y-8">
      <div className="max-w-xl mx-auto space-y-4">
        <div className="relative">
          <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder={type === 'screenshot-gen' ? "Paste Tweet URL to capture..." : `Paste X URL for ${type.split('-')[0].toUpperCase()}...`}
            className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-sky-500/50 outline-none transition-all"
          />
        </div>
        <button 
          onClick={handleProcess}
          disabled={loading || !url}
          className="w-full py-4 bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white font-bold rounded-2xl transition-all shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2"
        >
          {loading ? <RefreshCw className="animate-spin" size={20} /> : (type === 'screenshot-gen' ? <Camera size={20} /> : <Download size={20} />)}
          {getButtonText()}
        </button>
      </div>

      {result && !loading && (
        <div className="animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center">
            <div className={`w-full ${type === 'screenshot-gen' ? 'max-w-lg' : 'max-w-sm aspect-video'} bg-slate-900 border border-slate-800 rounded-3xl flex items-center justify-center relative group overflow-hidden shadow-2xl`}>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse opacity-50"></div>
                {getIcon()}
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-xl z-10 border border-white/5">
                    <div className="text-white text-xs font-bold truncate mb-1">Source: {new URL(url).hostname}</div>
                    <div className="text-slate-400 text-[10px] font-medium uppercase tracking-wider">
                      {type === 'screenshot-gen' ? 'High Fidelity Frame Captured' : 'High Quality Content Found'}
                    </div>
                </div>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                <button className="px-8 py-3 bg-white text-black font-bold rounded-xl flex items-center gap-2 hover:bg-slate-200 transition-colors shadow-lg">
                    {type === 'screenshot-gen' ? <ImageIcon size={18} /> : <Download size={18} />}
                    {type === 'screenshot-gen' ? 'Save as PNG' : 'Download HD (Original)'}
                </button>
                {type !== 'img-dl' && type !== 'screenshot-gen' && (
                  <button className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl border border-slate-700 flex items-center gap-2 hover:bg-slate-700 transition-colors">
                      SD Mobile Ready
                  </button>
                )}
            </div>
            
            <p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest font-bold flex items-center gap-2">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> Secure Browser Tunnel Enabled
            </p>
        </div>
      )}

      {!result && !loading && (
        <div className="text-center py-16 opacity-50">
            <div className="text-5xl mb-4">{type === 'screenshot-gen' ? '📸' : '✨'}</div>
            <p className="text-slate-500 text-sm max-w-xs mx-auto font-medium">
                {type === 'screenshot-gen' ? 'Paste a tweet link to generate a high-quality capture of the content.' : 'Paste your link above to decrypt and download X media content instantly.'}
            </p>
        </div>
      )}
    </div>
  );
};

export default MediaDownloader;
