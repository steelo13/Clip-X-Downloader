
import React, { useState, useMemo } from 'react';
import { DollarSign, Percent, TrendingUp, Info } from 'lucide-react';

interface Props {
  type: string;
}

const AdsCalculator: React.FC<Props> = ({ type }) => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');

  const result = useMemo(() => {
    const v1 = parseFloat(val1) || 0;
    const v2 = parseFloat(val2) || 0;
    
    if (type === 'roi-calc') {
      // (Revenue - Cost) / Cost * 100
      if (v2 === 0) return 0;
      return (((v1 - v2) / v2) * 100).toFixed(2);
    }
    if (type === 'cpm-calc') {
      // Cost / (Impressions / 1000)
      if (v2 === 0) return 0;
      return (v1 / (v2 / 1000)).toFixed(2);
    }
    return 0;
  }, [val1, val2, type]);

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              {type === 'roi-calc' ? 'Total Revenue ($)' : 'Total Cost ($)'}
            </label>
            <div className="relative">
              <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
              <input 
                type="number" 
                value={val1}
                onChange={(e) => setVal1(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              {type === 'roi-calc' ? 'Total Ad Spend ($)' : 'Total Impressions'}
            </label>
            <div className="relative">
              {type === 'roi-calc' ? <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} /> : <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />}
              <input 
                type="number" 
                value={val2}
                onChange={(e) => setVal2(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-3 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all"
              />
            </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 flex flex-col items-center justify-center text-center">
            <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">Calculated {type === 'roi-calc' ? 'ROI' : 'CPM'}</h4>
            <div className="text-5xl font-black text-sky-400 mb-4">
              {type === 'roi-calc' ? `${result}%` : `$${result}`}
            </div>
            <div className="px-4 py-2 bg-sky-500/10 rounded-full text-sky-400 text-xs font-bold">
               Real-time Result
            </div>
        </div>
      </div>

      <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4 flex gap-3">
        <Info className="text-slate-500" size={20} />
        <p className="text-xs text-slate-500 italic">
          Formula: {type === 'roi-calc' ? '((Revenue - Spend) / Spend) x 100' : 'Spend / (Impressions / 1000)'}. 
          All calculations are private.
        </p>
      </div>
    </div>
  );
};

export default AdsCalculator;
