
import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Info } from 'lucide-react';

const EngagementCalculator: React.FC = () => {
  const [followers, setFollowers] = useState<string>('');
  const [likes, setLikes] = useState<string>('');
  const [retweets, setRetweets] = useState<string>('');
  const [replies, setReplies] = useState<string>('');

  const stats = useMemo(() => {
    const f = parseInt(followers) || 0;
    const l = parseInt(likes) || 0;
    const rt = parseInt(retweets) || 0;
    const rp = parseInt(replies) || 0;
    
    if (f === 0) return { rate: 0, quality: 'N/A' };
    
    const totalEngagements = l + rt + rp;
    const rate = (totalEngagements / f) * 100;
    
    let quality = 'Low';
    if (rate > 5) quality = 'Exceptional';
    else if (rate > 3) quality = 'High';
    else if (rate > 1) quality = 'Average';
    
    return { rate: rate.toFixed(2), quality };
  }, [followers, likes, retweets, replies]);

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-300 mb-2">Total Followers</label>
            <input 
              type="number" 
              value={followers}
              onChange={(e) => setFollowers(e.target.value)}
              placeholder="e.g. 1500"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all"
            />
          </div>
          <div className="grid grid-cols-3 gap-3">
             <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Likes</label>
                <input 
                  type="number" 
                  value={likes}
                  onChange={(e) => setLikes(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 outline-none"
                />
             </div>
             <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Retweets</label>
                <input 
                  type="number" 
                  value={retweets}
                  onChange={(e) => setRetweets(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 outline-none"
                />
             </div>
             <div>
                <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Replies</label>
                <input 
                  type="number" 
                  value={replies}
                  onChange={(e) => setReplies(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-sky-500 outline-none"
                />
             </div>
          </div>
        </div>

        <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 flex flex-col justify-center items-center text-center">
          <div className="text-slate-500 text-sm font-medium mb-1">Estimated Engagement Rate</div>
          <div className="text-5xl font-black text-sky-400 mb-2">{stats.rate}%</div>
          <div className={`
            px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider
            ${stats.quality === 'Exceptional' ? 'bg-emerald-500/20 text-emerald-400' : 
              stats.quality === 'High' ? 'bg-sky-500/20 text-sky-400' : 
              stats.quality === 'Average' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-500'}
          `}>
            {stats.quality} Quality
          </div>
        </div>
      </div>

      <div className="bg-sky-500/5 border border-sky-500/20 rounded-xl p-4 flex gap-3">
        <Info className="text-sky-400 flex-shrink-0" size={20} />
        <p className="text-xs text-slate-400 leading-relaxed">
          Standard Engagement Rate is calculated by dividing total interactions (Likes + RTs + Replies) by total followers. 
          Average engagement on X typically ranges from 1-3%.
        </p>
      </div>
    </div>
  );
};

export default EngagementCalculator;
