
import React, { useState } from 'react';
import { Copy, Check, Trash2, Wand2 } from 'lucide-react';

interface Props {
  type: string;
}

const TextConverter: React.FC<Props> = ({ type }) => {
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);

  const processText = () => {
    switch (type) {
      case 'case-conv':
        // Rotates between Upper, Lower, Title
        if (input === input.toUpperCase()) return input.toLowerCase();
        return input.toUpperCase();
      case 'tweet-cleaner':
        return input
          .replace(/https?:\/\/\S+/g, '') // links
          .replace(/@\w+/g, '') // mentions
          .replace(/\s+/g, ' ') // multi-spaces
          .trim();
      case 'line-breaker':
        return input.replace(/\n/g, '\n\n');
      default:
        return input;
    }
  };

  const handleAction = () => {
    setInput(processText());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(input);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-8 space-y-6">
      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your content here..."
          className="w-full h-64 bg-slate-900 border border-slate-700 rounded-2xl p-6 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all resize-none text-slate-200"
        />
        <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
              onClick={handleCopy}
              className="p-2 bg-slate-800 text-slate-400 hover:text-sky-400 rounded-lg transition-colors border border-slate-700"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
            <button 
              onClick={() => setInput('')}
              className="p-2 bg-slate-800 text-slate-400 hover:text-rose-400 rounded-lg transition-colors border border-slate-700"
            >
              <Trash2 size={18} />
            </button>
        </div>
      </div>

      <button 
        onClick={handleAction}
        className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/20"
      >
        <Wand2 size={20} />
        {type === 'case-conv' ? 'Convert Case' : type === 'tweet-cleaner' ? 'Clean Tweet' : 'Add Spacing'}
      </button>

      <div className="text-center text-xs text-slate-500">
        Processing 100% locally in your browser.
      </div>
    </div>
  );
};

export default TextConverter;
