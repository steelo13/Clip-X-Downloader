
import React, { useState, useEffect } from 'react';
import { Download, Search, AlertCircle, RefreshCw } from 'lucide-react';

interface Props {
  initialValue?: string;
}

const ProfilePicDownloader: React.FC<Props> = ({ initialValue }) => {
  const [handle, setHandle] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pfpUrl, setPfpUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialValue) {
      // Try to extract username from URL
      try {
        const path = new URL(initialValue).pathname.split('/')[1];
        if (path) {
          setHandle(path);
          handleFetch(path);
        }
      } catch {
        setHandle(initialValue);
        handleFetch(initialValue);
      }
    }
  }, [initialValue]);

  const handleFetch = (targetHandle?: string) => {
    const val = targetHandle || handle;
    if (!val) return;
    setIsLoading(true);
    setError(null);
    setPfpUrl(null);
    
    setTimeout(() => {
      const cleanHandle = val.replace('@', '').replace('https://x.com/', '').replace('https://twitter.com/', '').split('/')[0].trim();
      
      if (cleanHandle.length < 1) {
          setError('Please enter a valid username');
          setIsLoading(false);
          return;
      }

      setPfpUrl(`https://unavatar.io/twitter/${cleanHandle}`);
      setIsLoading(false);
    }, 1200);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="max-w-md mx-auto space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold">@</span>
            <input 
              type="text"
              value={handle}
              onChange={(e) => setHandle(e.target.value)}
              placeholder="elonmusk"
              className="w-full pl-8 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500/50 outline-none transition-all"
            />
          </div>
          <button 
            onClick={() => handleFetch()}
            disabled={isLoading}
            className="px-6 py-3 bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center gap-2"
          >
            {isLoading ? <RefreshCw className="animate-spin" size={20} /> : <Search size={20} />}
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </div>
        
        {error && (
            <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-lg text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle size={14} /> {error}
            </div>
        )}
      </div>

      {pfpUrl && !isLoading && (
        <div className="animate-in zoom-in-95 duration-300">
           <div className="flex flex-col items-center">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src={pfpUrl} 
                  alt="Profile" 
                  className="relative w-48 h-48 rounded-full border-4 border-slate-900 object-cover shadow-2xl"
                  onError={() => setError('Could not find user. Ensure the username is correct.')}
                />
             </div>
             
             <div className="mt-8 flex gap-4">
               <a 
                href={pfpUrl}
                download={`${handle}_pfp.jpg`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold flex items-center gap-2 transition-all border border-slate-700"
               >
                 <Download size={20} /> Download HD
               </a>
             </div>
             
             <p className="mt-4 text-xs text-slate-500 max-w-xs text-center">
               We fetch the original high-resolution avatar directly from X content servers.
             </p>
           </div>
        </div>
      )}

      {!pfpUrl && !isLoading && (
          <div className="text-center py-12 border-2 border-dashed border-slate-800 rounded-3xl">
              <div className="text-4xl mb-4">👤</div>
              <p className="text-slate-500 text-sm">Enter a username to grab their high-res profile picture</p>
          </div>
      )}
    </div>
  );
};

export default ProfilePicDownloader;
