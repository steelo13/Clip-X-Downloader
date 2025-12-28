
import React, { useState } from 'react';
import { Copy, Check, Trash2 } from 'lucide-react';

const CharacterCounter: React.FC = () => {
  const [text, setText] = useState('');
  const [copied, setCopied] = useState(false);

  const limits = {
    standard: 280,
    premium: 4000
  };

  const currentCount = text.length;
  const standardPercent = Math.min((currentCount / limits.standard) * 100, 100);
  const premiumPercent = Math.min((currentCount / limits.premium) * 100, 100);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="relative">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Compose your tweet here..."
          className="w-full h-48 bg-slate-900 border border-slate-700 rounded-2xl p-6 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all resize-none text-lg leading-relaxed text-slate-200"
        />
        <div className="absolute top-4 right-4 flex gap-2">
            <button 
              onClick={handleCopy}
              className="p-2 bg-slate-800 text-slate-400 hover:text-sky-400 rounded-lg transition-colors"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
            <button 
              onClick={() => setText('')}
              className="p-2 bg-slate-800 text-slate-400 hover:text-rose-400 rounded-lg transition-colors"
            >
              <Trash2 size={18} />
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-semibold text-slate-300">Standard Limit</span>
            <span className={`text-lg font-bold ${currentCount > limits.standard ? 'text-rose-400' : 'text-sky-400'}`}>
              {currentCount}/{limits.standard}
            </span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${currentCount > limits.standard ? 'bg-rose-500' : 'bg-sky-500'}`}
              style={{ width: `${standardPercent}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-semibold text-slate-300">X Premium Limit</span>
            <span className="text-lg font-bold text-indigo-400">
              {currentCount}/{limits.premium}
            </span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500 transition-all duration-300"
              style={{ width: `${premiumPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCounter;
