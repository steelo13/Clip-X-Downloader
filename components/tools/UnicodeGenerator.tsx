
import React, { useState } from 'react';
import { Copy, Check, Type } from 'lucide-react';

const UnicodeGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [copyIndex, setCopyIndex] = useState<number | null>(null);

  const styles = [
    { name: 'Bold', map: (char: string) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 119743);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code + 119737);
        return char;
    }},
    { name: 'Italic', map: (char: string) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 119795);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code + 119789);
        return char;
    }},
    { name: 'Mono', map: (char: string) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 119951);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code + 119945);
        return char;
    }},
    { name: 'Script', map: (char: string) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 119847);
        if (code >= 97 && code <= 122) return String.fromCodePoint(code + 119841);
        return char;
    }},
    { name: 'Gothic', map: (char: string) => {
        const code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) return String.fromCodePoint(code + 119901); // Approx mapping
        if (code >= 97 && code <= 122) return String.fromCodePoint(code + 119901);
        return char;
    }},
  ];

  const convertText = (styleFn: (char: string) => string) => {
    return text.split('').map(styleFn).join('');
  };

  const handleCopy = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopyIndex(index);
    setTimeout(() => setCopyIndex(null), 2000);
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-2">Your Text</label>
        <div className="relative">
          <Type className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={20} />
          <input 
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something stylish..."
            className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-700 rounded-2xl focus:ring-2 focus:ring-sky-500/50 outline-none transition-all text-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {styles.map((style, idx) => {
          const transformed = text ? convertText(style.map) : style.name + ' Preview';
          return (
            <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex items-center justify-between group hover:border-slate-700 transition-colors">
              <div className="overflow-hidden mr-4">
                <span className="text-slate-500 text-[10px] font-bold uppercase mb-1 block">{style.name}</span>
                <span className="text-xl font-medium text-slate-200 truncate block">{transformed}</span>
              </div>
              <button 
                onClick={() => handleCopy(transformed, idx)}
                className={`
                  p-3 rounded-xl transition-all
                  ${copyIndex === idx ? 'bg-emerald-500 text-white' : 'bg-slate-800 text-slate-400 group-hover:bg-sky-500 group-hover:text-white'}
                `}
              >
                {copyIndex === idx ? <Check size={20} /> : <Copy size={20} />}
              </button>
            </div>
          );
        })}
      </div>
      
      <p className="text-center text-xs text-slate-500">
        These symbols work in Twitter bios, display names, and tweets.
      </p>
    </div>
  );
};

export default UnicodeGenerator;
