
import React, { useState } from 'react';
import { Trophy, Users, RefreshCw, Trash2 } from 'lucide-react';

const GiveawayWinner: React.FC = () => {
  const [input, setInput] = useState('');
  const [winner, setWinner] = useState<string | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const handlePick = () => {
    const names = input.split('\n').map(n => n.trim()).filter(n => n.length > 0);
    if (names.length < 2) return;

    setIsSpinning(true);
    setWinner(null);

    // Dramatic delay
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * names.length);
      setWinner(names[randomIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-slate-300">
            Paste Participant List (one per line)
          </label>
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="@user1\n@user2\n@user3..."
              className="w-full h-64 bg-slate-900 border border-slate-700 rounded-2xl p-4 focus:ring-2 focus:ring-sky-500/50 outline-none transition-all resize-none text-slate-300"
            />
            <div className="absolute bottom-4 right-4 text-xs text-slate-500 font-mono">
              {input.split('\n').filter(n => n.trim()).length} participants
            </div>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={handlePick}
              disabled={isSpinning || input.split('\n').filter(n => n.trim()).length < 2}
              className="flex-1 py-3 bg-sky-500 hover:bg-sky-600 disabled:opacity-50 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/20"
            >
              {isSpinning ? <RefreshCw className="animate-spin" size={20} /> : <Trophy size={20} />}
              {isSpinning ? 'Picking Winner...' : 'Draw Winner'}
            </button>
            <button 
              onClick={() => { setInput(''); setWinner(null); }}
              className="px-4 py-3 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-xl transition-all"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center bg-slate-900 rounded-3xl border border-slate-800 p-8 relative overflow-hidden">
          {isSpinning && (
              <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm z-10 flex items-center justify-center">
                   <div className="text-4xl animate-bounce">🎰</div>
              </div>
          )}

          {winner ? (
              <div className="text-center animate-in zoom-in-50 duration-500">
                <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center text-4xl shadow-xl shadow-amber-500/20 mx-auto mb-6">
                    🏆
                </div>
                <h3 className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">And the winner is...</h3>
                <div className="text-4xl font-black text-white bg-slate-800 px-8 py-4 rounded-2xl border border-slate-700">
                    {winner}
                </div>
                <p className="mt-6 text-slate-500 text-xs italic">
                  Screenshot this result for proof!
                </p>
              </div>
          ) : (
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center text-3xl mx-auto opacity-50">
                    🎁
                </div>
                <p className="text-slate-500 max-w-[200px] text-sm font-medium">
                  Add at least 2 participants to start the giveaway draw.
                </p>
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiveawayWinner;
