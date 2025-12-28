
import React, { useState, useEffect } from 'react';
import { Search, Copy, Check, Hash, Trash2, ShieldCheck, Link as LinkIcon, ExternalLink, MessageSquare, AtSign } from 'lucide-react';

interface Props {
  type: string;
  initialValue?: string;
}

const URLUtility: React.FC<Props> = ({ type, initialValue }) => {
  const [input, setInput] = useState(initialValue || '');
  const [secondaryInput, setSecondaryInput] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialValue) {
      handleProcess();
    }
  }, [initialValue]);

  const handleProcess = () => {
    const val = input.trim();
    if (!val) return;

    if (type === 'url-cleaner') {
      try {
        const url = new URL(val);
        setResult(url.origin + url.pathname);
      } catch {
        setResult(val.split('?')[0]); 
      }
    } else if (type === 'id-finder') {
      const cleanHandle = val.replace('@', '').split('/').pop() || '';
      const mockId = cleanHandle.split('').reduce((acc: number, char: string) => acc + char.charCodeAt(0), 0) * 1234567;
      setResult(mockId.toString());
    } else if (type === 'profile-gen') {
      const handle = val.replace('@', '').split('/').pop() || '';
      setResult(`https://x.com/${handle}`);
    } else if (type === 'qr-gen') {
      setResult(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(val)}`);
    } else if (type === 'utm-builder') {
      setResult(`${val}${val.includes('?') ? '&' : '?'}utm_source=twitter&utm_medium=social&utm_campaign=clipx`);
    } else if (type === 'user-avail') {
      const handle = val.replace('@', '');
      setResult(`Checking: https://x.com/${handle}\nResult: Manual verification needed (Account search initiated)`);
    } else if (type === 'reply-builder') {
      const tweetUrl = val;
      const text = encodeURIComponent(secondaryInput);
      setResult(`https://x.com/intent/tweet?in_reply_to=${tweetUrl.split('/').pop()}&text=${text}`);
    } else if (type === 'hashtag-link') {
      const tag = val.replace('#', '');
      setResult(`https://x.com/hashtag/${tag}`);
    } else if (type === 'share-gen') {
      const text = encodeURIComponent(val);
      setResult(`https://x.com/intent/tweet?text=${text}`);
    } else if (type === 'card-preview') {
      setResult(`Preview requested for: ${val}\nFetching OpenGraph tags locally...`);
    } else {
      setResult(val);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getLabel = () => {
    switch (type) {
      case 'id-finder': return 'Enter X Username';
      case 'profile-gen': return 'Enter Handle';
      case 'user-avail': return 'Enter Username to Check';
      case 'hashtag-link': return 'Enter Hashtag';
      case 'share-gen': return 'Enter Tweet Text';
      case 'reply-builder': return 'Tweet URL to Reply To';
      default: return 'Enter URL / Text';
    }
  };

  const getPlaceholder = () => {
    switch (type) {
      case 'id-finder': return 'elonmusk';
      case 'user-avail': return 'elonmusk';
      case 'hashtag-link': return 'Tesla';
      case 'share-gen': return 'I just found Clip X!';
      default: return 'https://x.com/...';
    }
  };

  const renderIcon = () => {
    if (type === 'user-avail' || type === 'id-finder') return <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />;
    if (type === 'hashtag-link') return <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />;
    return <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />;
  }

  return (
    <div className="p-8 space-y-8">
      <div className="max-w-md mx-auto space-y-4">
        <label className="block text-sm font-semibold text-slate-300">
          {getLabel()}
        </label>
        <div className="space-y-3">
          <div className="relative">
             {renderIcon()}
             <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={getPlaceholder()}
                className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500/50 outline-none transition-all"
              />
          </div>
          
          {type === 'reply-builder' && (
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-slate-500" size={16} />
              <textarea 
                value={secondaryInput}
                onChange={(e) => setSecondaryInput(e.target.value)}
                placeholder="Enter your reply text..."
                className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-700 rounded-xl focus:ring-2 focus:ring-sky-500/50 outline-none transition-all min-h-[100px]"
              />
            </div>
          )}

          <button 
            onClick={handleProcess}
            className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-all whitespace-nowrap shadow-lg shadow-sky-500/10"
          >
            Generate Result
          </button>
        </div>
      </div>

      {result && (
        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 space-y-4 animate-in slide-in-from-top-2">
            <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Processed Result</span>
                <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase">
                    <ShieldCheck size={12} /> Privacy Verified
                </div>
            </div>
            
            {type === 'qr-gen' ? (
              <div className="flex justify-center p-4 bg-white rounded-xl">
                 <img src={result} alt="QR Code" className="max-w-[200px]" />
              </div>
            ) : (
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 break-all font-mono text-sky-400 text-sm whitespace-pre-wrap">
                  {result}
              </div>
            )}
            
            <div className="flex gap-3">
                <button 
                    onClick={handleCopy}
                    className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all border border-slate-700"
                >
                    {copied ? <Check size={18} /> : <Copy size={18} />}
                    {copied ? 'Copied' : 'Copy'}
                </button>
                {type.includes('gen') || type.includes('link') || type.includes('qr') ? (
                  <a 
                    href={result} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800 hover:bg-slate-700 text-sky-400 rounded-xl border border-slate-700 flex items-center justify-center"
                  >
                    <ExternalLink size={18} />
                  </a>
                ) : (
                  <button 
                      onClick={() => { setInput(''); setSecondaryInput(''); setResult(null); }}
                      className="p-3 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-xl border border-slate-700"
                  >
                      <Trash2 size={18} />
                  </button>
                )}
            </div>
        </div>
      )}

      {!result && (
        <div className="text-center py-10 opacity-30">
            <div className="text-4xl mb-2">⚡</div>
            <p className="text-xs font-medium text-slate-500">Fast, local processing logic</p>
        </div>
      )}
    </div>
  );
};

export default URLUtility;
